import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { lstat, readFile, realpath } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { animals, habitats, groups, depthZones } from "../data/animals.js";
import { filterAnimals, publicGallery, primaryImage } from "../app.js";

export const root = fileURLToPath(new URL("../", import.meta.url));
const rootPath = await realpath(root);
const text = (value) => typeof value === "string" && value.trim().length > 0;
const https = (value) => { try { return new URL(value).protocol === "https:"; } catch { return false; } };
const calendarDate = (value) => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
assert(calendarDate("2026-10-04") && !calendarDate("2026-02-31") && !calendarDate("unknown"), "Visual review date validation failed");

export async function localFile(path) {
  assert(text(path) && !path.includes("\\") && !path.split("/").some((part) => !part || part === "." || part === ".."), `Invalid local path: ${path}`);
  const absolute = resolve(root, path);
  assert(absolute.startsWith(resolve(root) + sep), `Path outside project: ${path}`);
  let current = absolute;
  while (current !== resolve(root)) {
    assert(!(await lstat(current)).isSymbolicLink(), `Linked public path: ${path}`);
    current = dirname(current);
  }
  assert((await lstat(absolute)).isFile(), `Not a regular file: ${path}`);
  assert((await realpath(absolute)).startsWith(rootPath + sep), `Resolved path outside project: ${path}`);
  return absolute;
}

assert(Array.isArray(animals) && animals.length, "Animals must be a nonempty array");
assert(Array.isArray(groups) && groups.every(text) && new Set(groups).size === groups.length, "Invalid groups");
for (const [label, values] of [["habitats", habitats], ["depth zones", depthZones]]) {
  assert(Array.isArray(values) && values.length && values.every((item) => /^[a-z0-9-]+$/.test(item.id) && text(item.name)), `Invalid ${label}`);
  assert.equal(new Set(values.map((item) => item.id)).size, values.length, `Duplicate ${label}`);
}
assert.equal(new Set(animals.map((animal) => animal.id)).size, animals.length, "Duplicate animal ID");
assert.equal(new Set(animals.map((animal) => animal.scientificName)).size, animals.length, "Duplicate scientific name");
for (const scientificName of ["Limulus polyphemus", "Architeuthis dux", "Physeter macrocephalus"]) {
  assert(animals.some((animal) => animal.scientificName === scientificName), `Missing featured species: ${scientificName}`);
}

for (const animal of animals) {
  assert(/^[a-z0-9-]+$/.test(animal.id), `Invalid ID: ${animal.id}`);
  for (const key of ["name", "scientificName", "summary", "ecology", "diet", "range", "size", "depth"]) assert(text(animal[key]), `Missing ${key}: ${animal.id}`);
  assert(groups.includes(animal.group), `Unknown group: ${animal.id}`);
  for (const [key, values] of [["habitatIds", habitats], ["depthZoneIds", depthZones]]) {
    assert(Array.isArray(animal[key]) && animal[key].length && animal[key].every((id) => values.some((item) => item.id === id)), `Invalid ${key}: ${animal.id}`);
  }
  assert(Array.isArray(animal.aliases) && animal.aliases.every(text), `Invalid aliases: ${animal.id}`);
  assert(Array.isArray(animal.identity) && animal.identity.length && animal.identity.every(text), `Missing identity cues: ${animal.id}`);
  assert(typeof animal.featured === "boolean", `Invalid featured flag: ${animal.id}`);
  assert(Array.isArray(animal.sources) && animal.sources.length && animal.sources.every((source) => text(source.title) && https(source.url)), `Invalid sources: ${animal.id}`);
  assert(Array.isArray(animal.gallery), `Invalid gallery: ${animal.id}`);
  assert(publicGallery(animal).length >= 3, `Fewer than three reviewed images: ${animal.id}`);
  for (const scene of ["feeding", "ecology"]) assert(publicGallery(animal).some((image) => image.sceneType === scene), `Missing ${scene} scene: ${animal.id}`);
  for (const image of animal.gallery) {
    if (image.sceneType === "interaction") {
      assert(Array.isArray(image.interactionIds) && image.interactionIds.length >= 2 && new Set(image.interactionIds).size === image.interactionIds.length, `Invalid interaction species: ${image.src}`);
      assert(image.interactionIds.includes(animal.id) && image.interactionIds.every((id) => animals.some((item) => item.id === id)), `Unrelated interaction image: ${animal.id}`);
      assert(new RegExp(`^assets/images/${image.interactionIds.join("-")}-chatgpt-interaction-v[0-9]+\\.png$`).test(image.src), `Invalid interaction image path: ${image.src}`);
      for (const id of image.interactionIds) assert(animals.find((item) => item.id === id).gallery.some((item) => item.src === image.src), `Missing related gallery: ${id}`);
    } else assert(new RegExp(`^assets/images/${animal.id}-[a-z0-9-]+\\.(?:jpg|png)$`).test(image.src), `Invalid image path: ${image.src}`);
    for (const key of ["caption", "credit"]) assert(text(image[key]), `Missing image ${key}: ${image.src}`);
    if (image.role === "illustration") {
      assert.equal(image.reviewStatus, "visual-checked", `Unreviewed illustration: ${image.src}`);
      assert.equal(image.generator, "ChatGPT image_gen", `Invalid generator: ${image.src}`);
      assert.equal(image.credit, "Sea Atlas · ChatGPT로 제작", `Invalid illustration credit: ${image.src}`);
      assert.equal(image.provenanceUrl, "https://openai.com/policies/terms-of-use/", `Invalid provenance: ${image.src}`);
      assert.equal(image.modelDisclosure, "서비스가 세부 모델명을 제공하지 않음", `Invalid model disclosure: ${image.src}`);
      assert.equal(image.expertReviewed, false, `Unsupported expert review claim: ${image.src}`);
      assert(text(image.identityCheck), `Missing visual review summary: ${image.src}`);
      if (image.sceneType) {
        assert(["feeding", "ecology", "interaction"].includes(image.sceneType), `Unknown scene: ${image.src}`);
        assert(text(image.behaviorCheck), `Missing behavior review: ${image.src}`);
        assert(Array.isArray(image.behaviorSources) && image.behaviorSources.length && image.behaviorSources.every((source) => text(source.title) && https(source.url)), `Invalid behavior sources: ${image.src}`);
      }
      assert(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(image.generatedAt) && Number.isFinite(Date.parse(image.generatedAt)), `Invalid generation date: ${image.src}`);
      assert(calendarDate(image.checkedAt), `Invalid visual check date: ${image.src}`);
      assert(Array.isArray(image.generationPrompts) && image.generationPrompts.length && image.generationPrompts.every(text), `Missing original/edit prompts: ${image.src}`);
      assert(image.src.endsWith(".png"), `Illustration must be PNG: ${image.src}`);
    } else {
      assert(["photo", "reference"].includes(image.role) && image.reviewStatus === "source-checked", `Unverified public image: ${image.src}`);
      assert(text(image.license), `Missing image license: ${image.src}`);
      for (const key of ["licenseUrl", "sourcePage", "downloadUrl"]) assert(https(image[key]), `Invalid image ${key}: ${image.src}`);
    }
    assert(Number.isInteger(image.width) && image.width > 0 && Number.isInteger(image.height) && image.height > 0, `Invalid image dimensions: ${image.src}`);
    assert(/^[a-f0-9]{64}$/.test(image.sha256), `Invalid image hash: ${image.src}`);
    const bytes = await readFile(await localFile(image.src));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), image.sha256, `Image changed: ${image.src}`);
    assert(image.src.endsWith(".png") ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255, `Invalid image format: ${image.src}`);
    if (image.src.endsWith(".png")) {
      assert(bytes.length >= 24 && bytes.toString("ascii", 12, 16) === "IHDR", `Missing PNG dimensions: ${image.src}`);
      assert.equal(bytes.readUInt32BE(16), image.width, `PNG width differs: ${image.src}`);
      assert.equal(bytes.readUInt32BE(20), image.height, `PNG height differs: ${image.src}`);
    }
  }
  for (const query of [animal.name, animal.scientificName, ...animal.aliases]) assert(filterAnimals(animals, { query }).some((item) => item.id === animal.id), `Search failed: ${query}`);
}

const manifest = JSON.parse(await readFile(await localFile("assets/manifest.json"), "utf8"));
const registeredImages = animals.flatMap((animal) => animal.gallery);
const uniqueImages = new Map();
for (const image of registeredImages) {
  if (uniqueImages.has(image.src)) {
    assert.equal(image.sceneType, "interaction", `Unexpected shared image: ${image.src}`);
    assert.deepEqual(image, uniqueImages.get(image.src), `Shared interaction metadata differs: ${image.src}`);
  } else uniqueImages.set(image.src, image);
}
assert(Array.isArray(manifest.images), "Manifest images must be an array");
assert.equal(new Set(manifest.images.map((image) => image.src)).size, manifest.images.length, "Duplicate manifest image path");
const bySource = (a, b) => a.src.localeCompare(b.src);
assert.deepEqual([...manifest.images].sort(bySource), [...uniqueImages.values()].sort(bySource), "Manifest images differ from animal galleries");

const appManifest = JSON.parse(await readFile(await localFile("app.webmanifest"), "utf8"));
assert.equal(appManifest.id, "./");
assert.equal(appManifest.start_url, "./");
assert.equal(appManifest.scope, "./");
assert.equal(appManifest.display, "standalone");
assert(text(appManifest.name) && text(appManifest.short_name));
assert(!appManifest.prefer_related_applications);
for (const size of [192, 512]) {
  const icon = appManifest.icons.find((item) => item.sizes === `${size}x${size}`);
  const iconPath = icon?.src.split("?")[0];
  assert.equal(iconPath, `assets/icons/sea-atlas-${size}.png`);
  assert.equal(icon.type, "image/png");
  const bytes = await readFile(await localFile(iconPath));
  assert(bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])));
  assert.equal(bytes.readUInt32BE(16), size);
  assert.equal(bytes.readUInt32BE(20), size);
}
const desktopIcon = await readFile(await localFile("assets/icons/sea-atlas.ico"));
assert.equal(desktopIcon.readUInt16LE(0), 0);
assert.equal(desktopIcon.readUInt16LE(2), 1);
assert.equal(desktopIcon.readUInt16LE(4), 3);
const entryHtml = await readFile(await localFile("index.html"), "utf8");
assert(entryHtml.includes('rel="manifest" href="./app.webmanifest"'));
assert(!entryHtml.includes('sperm-whale-chatgpt-v3.png'), "Retired representative remains in entry HTML");

const photo = { role: "photo", reviewStatus: "source-checked" };
const reference = { role: "reference", reviewStatus: "source-checked" };
const illustration = { role: "illustration", reviewStatus: "visual-checked" };
const mixed = { gallery: [photo, reference, { role: "illustration", reviewStatus: "source-checked" }, { role: "photo", reviewStatus: "visual-checked" }, { role: "reference", reviewStatus: "candidate" }, { role: "unknown", reviewStatus: "source-checked" }, illustration] };
assert.deepEqual(publicGallery(mixed), [photo, reference, illustration], "Unverified/mismatched-role gallery candidate was published");
assert.equal(primaryImage(mixed), illustration, "Checked illustration must be representative");
assert.equal(primaryImage({ gallery: [reference, photo] }), photo, "Legacy photo priority failed");
assert.equal(primaryImage({ gallery: [reference] }), reference, "Legacy reference fallback failed");
assert.equal(primaryImage({ gallery: [] }), undefined, "Empty gallery fallback failed");

assert.equal(filterAnimals(animals, {}).length, animals.length, "Default search loses animals");
assert.equal(filterAnimals(animals, { query: "zz-no-marine-species-zz" }).length, 0, "No-match search failed");
const first = animals[0];
const combined = { group: first.group, habitat: first.habitatIds[0], depth: first.depthZoneIds[0] };
assert.deepEqual(filterAnimals(animals, combined).map((animal) => animal.id), animals.filter((animal) => animal.group === combined.group && animal.habitatIds.includes(combined.habitat) && animal.depthZoneIds.includes(combined.depth)).map((animal) => animal.id), "Combined filters failed");
assert.deepEqual(filterAnimals(animals, { bookmarksOnly: true, bookmarkIds: [first.id] }).map((animal) => animal.id), [first.id], "Bookmarks failed");
assert.equal(filterAnimals(animals, { bookmarksOnly: true, bookmarkIds: [] }).length, 0, "Empty bookmarks failed");
console.log(`PASS: ${animals.length} species, ${uniqueImages.size} image files, ${registeredImages.length} gallery entries, interaction links, provenance, hashes, PNG dimensions, manifest, gallery roles, representative priority, search, combined filters and bookmarks`);
