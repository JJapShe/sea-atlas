import { animals, habitats, groups, depthZones } from "./data/animals.js?v=20261005-tail";

const normalized = (value) => String(value).normalize("NFKC").toLocaleLowerCase().replace(/\s+/g, "");
export function filterAnimals(records, { query = "", group = "", habitat = "", depth = "", bookmarksOnly = false, bookmarkIds = [] } = {}) {
  const term = normalized(query);
  return records.filter((animal) => (!group || animal.group === group)
    && (!habitat || animal.habitatIds.includes(habitat))
    && (!depth || animal.depthZoneIds.includes(depth))
    && (!bookmarksOnly || bookmarkIds.includes(animal.id))
    && (!term || normalized([animal.name, animal.scientificName, ...animal.aliases, animal.group, animal.summary, ...animal.identity, animal.diet, animal.range, ...animal.habitatIds.map((id) => habitats.find((h) => h.id === id)?.name || id)].join(" ")).includes(term)));
}

export const publicGallery = (animal) => animal.gallery.filter((image) => image.role === "illustration" ? image.reviewStatus === "visual-checked" : ["photo", "reference"].includes(image.role) && image.reviewStatus === "source-checked");
export const primaryImage = (animal) => publicGallery(animal).find((image) => image.role === "illustration") || publicGallery(animal).find((image) => image.role === "photo") || publicGallery(animal)[0];
const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const bookmarkIcon = '<svg viewBox="0 0 18 22" aria-hidden="true"><path d="M3 2h12v18l-6-4-6 4z"/></svg>';
const imageKind = (image) => image?.role === "illustration" ? "자체 제작 삽화" : image?.kindLabel || (image?.role === "reference" ? "참고 이미지" : "실물 사진");
const imageCredit = (image) => image.role === "illustration" ? `${escape(image.credit)} · <a href="${escape(image.provenanceUrl)}" target="_blank" rel="noopener noreferrer">제작 서비스 이용 조건 ↗</a><br>실제 사진이 아닌 자체 제작 삽화입니다. 핵심 형태를 눈으로 대조했으며 전문가 감수 전입니다.${image.identityCheck ? `<br>형태 확인: ${escape(image.identityCheck)}` : ""}${image.behaviorCheck ? `<br>그림 속 이야기: ${escape(image.behaviorCheck)}<br>${image.behaviorSources.map((source) => `<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗</a>`).join(" · ")}` : ""}` : `${escape(image.credit)} · <a href="${escape(image.licenseUrl)}" target="_blank" rel="noopener noreferrer">${escape(image.license)}</a> · <a href="${escape(image.sourcePage)}" target="_blank" rel="noopener noreferrer">원본과 이용 조건 ↗</a><br>원본의 축소본을 사용하며, 화면 비율에 맞춘 표시 외에 이미지 수정은 하지 않았습니다.`;

if (typeof document !== "undefined") init();

function init() {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const state = { query: "", group: "", habitat: "", depth: "", bookmarksOnly: false, bookmarkIds: [], selected: null, galleryRole: "all", lightboxItems: [], lightboxIndex: 0 };
  const storageKey = "sea-atlas-bookmarks-v1";
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(saved)) state.bookmarkIds = [...new Set(saved.filter((id) => typeof id === "string" && animals.some((animal) => animal.id === id)))];
  } catch { /* Damaged or unavailable storage must not prevent exploration. */ }

  const groupsIcons = { "어류": "◁", "포유류": "⌒", "연체동물": "◉", "절지동물": "⋈", "자포동물": "♧", "극피동물": "✳", "파충류": "◇", "빗해파리류": "✧", "조류": "⌃", "환형동물": "≋" };
  $("#speciesCount").textContent = animals.length;
  $("#groupCount").textContent = groups.length;
  const coverAnimal = animals.find((animal) => animal.id === "sperm-whale");
  const cover = primaryImage(coverAnimal);
  if (cover?.role === "illustration") $("#heroPhoto").style.backgroundImage = `url("${cover.src}")`;
  $("#heroSource").addEventListener("click", () => { openAnimal(coverAnimal.id); $("#detailSources").scrollIntoView({ block: "start" }); });

  function habitatButtons() {
    const list = [{ id: "", name: "모든 바다", symbol: "≈" }, ...habitats];
    $("#habitatTabs").innerHTML = list.map((habitat) => `<button type="button" class="habitat-button ${state.habitat === habitat.id ? "active" : ""}" data-habitat="${habitat.id}" aria-pressed="${state.habitat === habitat.id}"><span class="habitat-symbol" aria-hidden="true">${escape(habitat.symbol || "◦")}</span>${escape(habitat.name)}</button>`).join("");
  }
  function groupButtons() {
    const list = ["", ...groups];
    $("#groupFilters").innerHTML = list.map((group) => `<button type="button" class="group-button ${state.group === group ? "active" : ""}" data-group="${escape(group)}" aria-pressed="${state.group === group}"><span><span class="group-icon" aria-hidden="true">${escape(groupsIcons[group] || "⊞")}</span>${escape(group || "전체 동물")}</span><span>${group ? animals.filter((animal) => animal.group === group).length : animals.length}</span></button>`).join("");
  }
  function depthButtons() {
    $("#depthFilters").innerHTML = [{ id: "", name: "모든 수심", range: "수면부터 깊은 바다까지" }, ...depthZones].map((zone) => `<button type="button" class="depth-button ${state.depth === zone.id ? "active" : ""}" data-depth="${zone.id}" aria-pressed="${state.depth === zone.id}"><span class="depth-dot" aria-hidden="true"></span><span>${escape(zone.name)}<small>${escape(zone.range)}</small></span></button>`).join("");
  }
  function renderFeatured() {
    $("#featuredList").innerHTML = animals.filter((animal) => animal.featured).map((animal, index) => {
      const image = primaryImage(animal);
      return `<button type="button" class="featured-item" data-animal="${animal.id}" aria-label="${escape(animal.name)} 상세 보기">${image ? `<img class="featured-image ${["reference", "illustration"].includes(image.role) ? "contain" : ""}" src="${image.src}" alt="" width="82" height="82">` : ""}<span><span class="order">0${index + 1} / ${escape(animal.group)}</span><strong>${escape(animal.name)}</strong><small>${escape(animal.featuredText || animal.summary)}</small></span><span class="arrow" aria-hidden="true">↗</span></button>`;
    }).join("");
  }
  function card(animal) {
    const image = primaryImage(animal);
    const saved = state.bookmarkIds.includes(animal.id);
    return `<article class="animal-card"><button type="button" class="bookmark-button" data-bookmark="${animal.id}" aria-label="${escape(animal.name)} 책갈피" aria-pressed="${saved}">${bookmarkIcon}</button><button type="button" class="card-open" data-animal="${animal.id}" aria-label="${escape(animal.name)} 상세 보기"><div class="card-image ${["reference", "illustration"].includes(image?.role) ? "contain" : ""}">${image ? `<img src="${image.src}" alt="${escape(animal.name)} · ${escape(imageKind(image))}" loading="lazy" width="${image.width || 1280}" height="${image.height || 850}"><span class="image-kind">${escape(imageKind(image))}</span>` : '<span class="photo-placeholder">생물 그림을 준비하고 있어요</span>'}${animal.featured ? '<span class="featured-badge">첫 만남</span>' : ""}</div><div class="card-body"><p class="card-topline">${escape(animal.group)}</p><h3>${escape(animal.name)}</h3><p class="scientific-name" lang="la">${escape(animal.scientificName)}</p><p class="card-summary">${escape(animal.summary)}</p><div class="card-bottom">${animal.habitatIds.slice(0, 2).map((id) => `<span>${escape(habitats.find((h) => h.id === id).name)}</span>`).join("")}<span class="card-arrow" aria-hidden="true">↗</span></div></div></button></article>`;
  }
  function renderCatalog() {
    const visible = filterAnimals(animals, state);
    if ($("#sortOrder").value === "name") visible.sort((a, b) => a.name.localeCompare(b.name, "ko"));
    $("#animalGrid").innerHTML = visible.length ? visible.map(card).join("") : '<div class="empty-state"><h3>아직 만날 생물이 없어요.</h3><p>검색어나 선택한 조건을 바꾸어보세요.</p><button class="primary-button" type="button" data-reset>모든 생물 보기 →</button></div>';
    $("#resultCount").innerHTML = `<strong>${visible.length}종</strong>의 해양동물${state.bookmarksOnly ? " · 나의 책갈피" : ""}`;
    const labels = [state.group, habitats.find((h) => h.id === state.habitat)?.name, depthZones.find((z) => z.id === state.depth)?.name].filter(Boolean);
    $("#activeFilters").textContent = labels.join(" · ");
    $("#savedCount").textContent = state.bookmarkIds.length;
    $("#savedNav").classList.toggle("active", state.bookmarksOnly);
    $("#savedNav").setAttribute("aria-pressed", String(state.bookmarksOnly));
    $("#allNav").classList.toggle("active", !state.bookmarksOnly);
    $("#bookmarksOnly").checked = state.bookmarksOnly;
  }
  function reset() {
    Object.assign(state, { query: "", group: "", habitat: "", depth: "", bookmarksOnly: false });
    $("#searchInput").value = "";
    $("#sortOrder").value = "featured";
    habitatButtons(); groupButtons(); depthButtons(); renderCatalog();
  }
  function setFilter(kind, value) {
    state[kind] = state[kind] === value ? "" : value;
    const container = { group: "#groupFilters", habitat: "#habitatTabs", depth: "#depthFilters" }[kind];
    $$(container + " button").forEach((button) => {
      const active = button.dataset[kind] === state[kind];
      button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active));
    });
    renderCatalog();
    if (kind !== "habitat" && window.matchMedia("(max-width: 760px)").matches) closeFilters(true);
  }
  function closeFilters(focus = false) {
    $("#filters").classList.remove("open");
    $("#mobileFilter").setAttribute("aria-expanded", "false");
    if (focus) $("#mobileFilter").focus();
  }
  function toggleBookmark(id) {
    state.bookmarkIds = state.bookmarkIds.includes(id) ? state.bookmarkIds.filter((key) => key !== id) : [...state.bookmarkIds, id];
    try { localStorage.setItem(storageKey, JSON.stringify(state.bookmarkIds)); }
    catch { $(".local-note").textContent = "저장이 제한되어 이번 방문에만 유지돼요."; }
    renderCatalog();
    if (state.selected) updateDetailBookmark();
  }
  function updateDetailBookmark() {
    const button = $("#detailBookmark");
    if (!button) return;
    const saved = state.bookmarkIds.includes(state.selected.id);
    button.setAttribute("aria-pressed", String(saved));
    button.textContent = saved ? "책갈피에 담았어요 ✓" : "책갈피에 담기 +";
  }
  function openAnimal(id, updateUrl = true) {
    const animal = animals.find((item) => item.id === id);
    if (!animal) return;
    if ($("#imageDialog").open) $("#imageDialog").close();
    state.lightboxItems = [];
    state.selected = animal; state.galleryRole = "all";
    const image = primaryImage(animal);
    const facts = [["크기와 측정 기준", animal.size], ["활동 수심", animal.depth], ["분포", animal.range], ["먹이", animal.diet]];
    $("#detailContent").innerHTML = `${image ? `<div class="detail-cover ${["reference", "illustration"].includes(image.role) ? "contain" : ""}"><img src="${image.src}" alt="${escape(animal.name)} · ${escape(imageKind(image))}"><span class="image-kind">${escape(imageKind(image))}</span><button type="button" class="cover-enlarge" id="coverEnlarge">이미지 크게 보기 ↗</button></div>` : ""}<div class="detail-body"><div class="detail-heading"><div><p class="eyebrow">${escape(animal.group)} · ${animal.habitatIds.map((key) => escape(habitats.find((h) => h.id === key).name)).join(" / ")}</p><h2 id="detailTitle">${escape(animal.name)}</h2><p class="scientific-name" lang="la">${escape(animal.scientificName)}</p></div><button type="button" class="detail-bookmark" id="detailBookmark" data-bookmark="${animal.id}" aria-pressed="false"></button></div><p class="detail-summary">${escape(animal.summary)}</p><dl class="facts-grid">${facts.map(([title, value]) => `<div class="fact"><dt>${title}</dt><dd>${escape(value)}</dd></div>`).join("")}</dl><section class="detail-text"><h3>모습을 알아보는 단서</h3><ul>${animal.identity.map((cue) => `<li>${escape(cue)}</li>`).join("")}</ul><h3>이 바다에서 살아가는 방식</h3><p>${escape(animal.ecology)}</p></section><section class="gallery-section" aria-labelledby="galleryTitle"><h3 id="galleryTitle">조금 더 가까이 보기</h3><div class="gallery-tabs" id="galleryTabs"><button type="button" class="gallery-tab active" data-role="all" aria-pressed="true">전체</button><button type="button" class="gallery-tab" data-role="illustration" aria-pressed="false">자체 제작 삽화</button><button type="button" class="gallery-tab" data-role="photo" aria-pressed="false">실물 사진</button><button type="button" class="gallery-tab" data-role="reference" aria-pressed="false">표본 · 참고</button></div><div class="gallery-grid" id="galleryGrid"></div></section><section class="source-section" id="detailSources"><h3>이야기의 근거와 이미지 안내</h3>${animal.sources.map((source) => `<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗</a>`).join("")}<p>자료 확인: ${escape(animal.checkedAt || "2026-10-03")} · 출처 대조 완료, 전문가 감수 전<br>한국어 이름이 통일되지 않은 종은 원명과 학명을 기준으로 확인해 주세요.</p>${image ? `<div class="image-credit">${escape(image.caption)}<br>${imageCredit(image)}</div>` : ""}</section></div>`;
    updateDetailBookmark(); renderGallery();
    if (!$("#detailDialog").open) $("#detailDialog").showModal();
    $("#detailDialog").scrollTop = 0;
    if (updateUrl && location.hash !== `#species=${id}`) history.pushState(null, "", `#species=${id}`);
    $("#coverEnlarge")?.addEventListener("click", () => openImage([image], 0));
  }
  function currentGallery() {
    return publicGallery(state.selected).filter((image) => state.galleryRole === "all" || image.role === state.galleryRole);
  }
  function renderGallery() {
    const available = publicGallery(state.selected);
    $$("#galleryTabs button").forEach((tab) => { tab.hidden = tab.dataset.role !== "all" && !available.some((image) => image.role === tab.dataset.role); });
    const gallery = currentGallery();
    $("#galleryGrid").innerHTML = gallery.length ? gallery.map((image, index) => `<button type="button" class="gallery-thumbnail" data-image="${index}" aria-label="${escape(image.caption)} 확대 보기"><img src="${image.src}" alt="${escape(imageKind(image))}" loading="lazy"><p>${escape(image.caption)}</p></button>`).join("") : '<p class="gallery-empty">이 분류의 이미지는 아직 준비 중이에요.</p>';
  }
  function openImage(items, index) {
    state.lightboxItems = items; state.lightboxIndex = index;
    renderImage(); $("#imageDialog").showModal();
  }
  function renderImage() {
    const image = state.lightboxItems[state.lightboxIndex];
    $("#imageTitle").textContent = `${state.selected.name} · ${imageKind(image)}`;
    $("#largeImage").hidden = false;
    $("#largeImage").parentElement.querySelector(".photo-placeholder")?.remove();
    $("#largeImage").src = image.src; $("#largeImage").alt = image.caption;
    $("#imageCaption").innerHTML = `${escape(image.caption)}<br>${imageCredit(image)}<span class="image-number">${state.lightboxIndex + 1} / ${state.lightboxItems.length} · 현재 선택한 갤러리 분류 안에서 탐색</span>`;
    $("#prevImage").disabled = $("#nextImage").disabled = state.lightboxItems.length < 2;
  }
  function moveImage(direction) {
    state.lightboxIndex = (state.lightboxIndex + direction + state.lightboxItems.length) % state.lightboxItems.length; renderImage();
  }
  function syncHash() {
    const id = new URLSearchParams(location.hash.slice(1)).get("species");
    if (id && animals.some((animal) => animal.id === id)) {
      if (!$("#detailDialog").open || state.selected?.id !== id) openAnimal(id, false);
    } else {
      if ($("#imageDialog").open) $("#imageDialog").close();
      if ($("#detailDialog").open) $("#detailDialog").close();
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.animal) openAnimal(button.dataset.animal);
    if (button.dataset.bookmark) {
      const id = button.dataset.bookmark, inDetail = button.id === "detailBookmark";
      toggleBookmark(id);
      if (!inDetail) document.querySelector(`[data-bookmark="${id}"]`)?.focus();
    }
    if (button.dataset.group !== undefined) setFilter("group", button.dataset.group);
    if (button.dataset.habitat !== undefined) setFilter("habitat", button.dataset.habitat);
    if (button.dataset.depth !== undefined) setFilter("depth", button.dataset.depth);
    if (button.dataset.role) {
      state.galleryRole = button.dataset.role;
      $$("#galleryTabs button").forEach((tab) => { const active = tab.dataset.role === state.galleryRole; tab.classList.toggle("active", active); tab.setAttribute("aria-pressed", String(active)); });
      renderGallery();
    }
    if (button.dataset.image !== undefined) openImage(currentGallery(), Number(button.dataset.image));
    if (button.dataset.close) $("#" + button.dataset.close).close();
    if (button.hasAttribute("data-reset")) reset();
  });
  $("#searchInput").addEventListener("input", (event) => { state.query = event.target.value; renderCatalog(); });
  $("#sortOrder").addEventListener("change", renderCatalog);
  $("#resetFilters").addEventListener("click", reset);
  $("#bookmarksOnly").addEventListener("change", (event) => { state.bookmarksOnly = event.target.checked; renderCatalog(); });
  $("#savedNav").addEventListener("click", () => { reset(); state.bookmarksOnly = true; renderCatalog(); $("#catalog").scrollIntoView(); });
  $("#allNav").addEventListener("click", reset);
  $("#mobileFilter").addEventListener("click", () => {
    const opened = $("#filters").classList.toggle("open");
    $("#mobileFilter").setAttribute("aria-expanded", String(opened));
    if (opened) { $("#filters").scrollIntoView({ block: "start" }); $("#resetFilters").focus({ preventScroll: true }); }
  });
  for (const selector of ["#aboutButton", "#readingAbout"]) $(selector).addEventListener("click", () => $("#aboutDialog").showModal());
  $("#prevImage").addEventListener("click", () => moveImage(-1));
  $("#nextImage").addEventListener("click", () => moveImage(1));
  $("#imageDialog").addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); moveImage(event.key === "ArrowLeft" ? -1 : 1); }
  });
  $("#detailDialog").addEventListener("close", () => {
    if ($("#detailDialog").open) return;
    if (location.hash.startsWith("#species=")) history.replaceState(null, "", "#catalog");
    state.selected = null;
  });
  $$("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }));
  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) {
      event.target.hidden = true;
      if (!event.target.parentElement.querySelector(".photo-placeholder")) {
        const replacement = document.createElement("span"); replacement.className = "photo-placeholder"; replacement.textContent = "이미지를 불러오지 못했어요."; event.target.after(replacement);
      }
    }
  }, true);
  window.addEventListener("hashchange", syncHash);
  window.addEventListener("popstate", syncHash);
  habitatButtons(); groupButtons(); depthButtons(); renderFeatured(); renderCatalog(); syncHash();
}
