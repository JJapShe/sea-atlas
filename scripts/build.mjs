import assert from "node:assert/strict";
import { copyFile, lstat, mkdir, readFile, readdir, realpath, rm } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { root, localFile } from "./verify.mjs";
import { animals } from "../data/animals.js";

const site = resolve(root, "_site");
const files = ["index.html", "styles.css", "app.js", "data/animals.js", "favicon.svg", "app.webmanifest", "assets/icons/sea-atlas-192.png", "assets/icons/sea-atlas-512.png", "assets/icons/sea-atlas.ico", ...new Set(animals.flatMap((animal) => animal.gallery.map((image) => image.src)))];
const manifest = await lstat(resolve(root, "assets/manifest.json")).catch((error) => { if (error.code !== "ENOENT") throw error; });
if (manifest) files.push("assets/manifest.json");
const privatePath = /\b[A-Za-z]:[\\/]|file:\/\/|\.codex|(?:^|["'\s])(?:\.\.\/|work\/|sources\/)|assets\/[^\s"']*\/review\//;
const sourceFiles = new Map();
for (const file of files) {
  const path = await localFile(file);
  sourceFiles.set(file, path);
  if (/\.(?:html|css|js|svg|json|webmanifest)$/.test(file)) assert(!privatePath.test(await readFile(path, "utf8")), `Private path in public file: ${file}`);
}
const existing = await lstat(site).catch((error) => { if (error.code !== "ENOENT") throw error; });
assert.equal(dirname(site), resolve(root));
if (existing) {
  assert(existing.isDirectory() && !existing.isSymbolicLink(), "Refusing to clean a linked/non-directory _site");
  assert.equal(await realpath(site), resolve(await realpath(root), "_site"));
  await rm(site, { recursive: true });
}
for (const [file, source] of sourceFiles) {
  const destination = resolve(site, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
  assert((await readFile(source)).equals(await readFile(destination)), `Public copy differs: ${file}`);
}
const published = [];
for (const entry of await readdir(site, { recursive: true, withFileTypes: true })) {
  assert(!entry.isSymbolicLink(), "Public output contains a symbolic link");
  if (entry.isFile()) published.push(relative(site, resolve(entry.parentPath, entry.name)).replaceAll("\\", "/"));
}
assert.deepEqual(published.sort(), [...files].sort(), "Public output differs from allowlist");
console.log(`PASS: public build includes ${files.length} registered files in _site/`);
