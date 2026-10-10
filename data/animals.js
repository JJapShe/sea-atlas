// 종별 자료 확인일과 이미지별 육안 대조일은 checkedAt에 기록합니다. 전문가 감수 전입니다.
export const groups = [
  "어류",
  "포유류",
  "연체동물",
  "절지동물",
  "자포동물",
  "극피동물",
  "파충류",
  "빗해파리류",
  "조류",
  "환형동물"
];

export const habitats = [
  {
    "id": "coast",
    "name": "연안 · 모래밭",
    "symbol": "⌁"
  },
  {
    "id": "reef",
    "name": "산호초",
    "symbol": "♧"
  },
  {
    "id": "pelagic",
    "name": "외해",
    "symbol": "≈"
  },
  {
    "id": "deep",
    "name": "심해",
    "symbol": "◒"
  },
  {
    "id": "polar",
    "name": "한랭 해역",
    "symbol": "✳"
  }
];

export const depthZones = [
  {
    "id": "sunlight",
    "name": "햇빛이 닿는 바다",
    "range": "0–200 m"
  },
  {
    "id": "twilight",
    "name": "어스름한 바다",
    "range": "200–1,000 m"
  },
  {
    "id": "midnight",
    "name": "빛이 닿지 않는 바다",
    "range": "1,000 m 아래"
  }
];

export const animals = [
  {
    "id": "horseshoe-crab",
    "name": "미국투구게",
    "scientificName": "Limulus polyphemus",
    "group": "절지동물",
    "habitatIds": [
      "coast"
    ],
    "summary": "말굽 모양 갑각과 긴 꼬리를 지닌 해안의 절지동물. 게보다 거미와 전갈에 가까운 계통이다.",
    "identity": [
      "앞몸의 넓은 말굽형 갑각, 가시가 달린 뒤몸, 긴 꼬리마디를 확인한다. 미국투구게(Atlantic horseshoe crab)이며 동아시아 투구게 Tachypleus tridentatus와 별개의 종이다."
    ],
    "ecology": "성체는 늦봄과 초여름 모래 해안에 올라와 산란한다. 꼬리마디는 뒤집힌 몸을 바로 세울 때 도움을 준다.",
    "diet": "갯지렁이, 작은 연체동물 등 바닥의 먹이; 어린 개체는 유기물도 먹는다.",
    "range": "북미 대서양 연안, 미국 메인에서 멕시코 유카탄반도까지.",
    "size": "지역과 성별에 따라 차이. 큰 암컷은 앞갑각 폭 약 30 cm, 꼬리를 포함한 길이 약 60 cm까지.",
    "depth": "산란 해변과 조간대에서 해안의 더 깊은 바닥까지. 나이에 따라 이용하는 수심이 달라진다.",
    "sources": [
      {
        "title": "U.S. Fish & Wildlife Service — Atlantic horseshoe crab",
        "url": "https://www.fws.gov/species/atlantic-horseshoe-crab-limulus-polyphemus"
      },
      {
        "title": "WoRMS — Limulus polyphemus",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=150514"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "투구게",
      "미국 투구게",
      "Atlantic horseshoe crab"
    ],
    "featured": true,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "horseshoe-crab",
        "src": "assets/images/horseshoe-crab-chatgpt-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "미국투구게 · 모래 바닥에서 본 등 쪽 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 앞 갑각·작은 뒤 갑각·곧은 꼬리 1개, 뒤 갑각 양쪽의 독립 가시 6개씩을 육안 대조. 다리는 등 쪽 구도에서 가려짐.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult Atlantic horseshoe crab, Limulus polyphemus. Dorsal top view on light sand under shallow clear blue water, head upper left, straight tail lower right. Wide smooth domed olive-brown horseshoe-shaped front shield, a separate much smaller trapezoidal rear shield, TWO small lateral compound eyes high on opposite sides of the front shield. On each SIDE of the rear shield show exactly SIX small movable pointed lateral spines, six paired side spines in total (12), plus the normal rear corners. ONE long, thin, straight tapering pointed telson comes from the center of the rear shield, tail length about the body length; tail tip fully inside the picture. Simple natural rounded shell ridges, not sculpted metal armor. Walking legs hidden beneath carapace in this dorsal view, no obvious pincers and no antennae. Anatomically plausible Atlantic horseshoe crab; not lobster, true crab, scorpion, trilobite or ray. Clearly separate the two shields and thin telson. Keep all shell spines modest in size and avoid exaggerated armor.",
          "Use case: precise-object-edit. Make ONE small anatomical correction to this original Atlantic horseshoe crab (Limulus polyphemus) illustration. The rear shield has six movable lateral spines on the far/upper-right edge but ONLY FIVE on the near/lower-left edge. Add ONE modest matching movable pointed spine to the near/lower-left edge of the SMALL REAR SHIELD, in the empty gap after its current fifth spine and before the large fixed rear corner near the tail base. The result must have SIX small independently recognizable movable spines on EACH lateral edge of the rear shield, excluding the large fixed corners of either shield. Keep all existing five near-side spines and six far-side spines; do not remove or fuse them. Preserve both shields, natural brown shell, two eyes, the one straight slender tail, full-body framing, lighting and sand-water background exactly. Do not add spines to the large front shield, telson or midline. No antennae, legs or extra animals. Same clean scientific natural-history illustration, no text or marks."
        ],
        "generatedAt": "2026-10-02T18:05:09.182Z",
        "checkedAt": "2026-10-03",
        "sha256": "306783cbc167136587127963f03f996dc745a9f3f788dc09730bda694669ca07",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "horseshoe-crab",
        "src": "assets/images/horseshoe-crab-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "미국투구게 · 모래밭에서 먹이 찾기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 앞방패·작은 뒤방패·꼬리 1개·근측 눈·방패 아래 다리 확인. 전체 다리와 양측 가시 전수는 가림으로 확인 불가.",
        "behaviorCheck": "모래 바닥의 작은 벌레와 조개를 먹어요. 입은 큰 등껍질 아래에 있어서 이 그림에서는 보이지 않아요.",
        "behaviorSources": [
          {
            "title": "USFWS — Atlantic horseshoe crab, Food and Habitat",
            "url": "https://www.fws.gov/species/atlantic-horseshoe-crab-limulus-polyphemus"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. Create a single original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Match the established refined realistic painterly illustration style: believable adult anatomy, natural colors and eyes, restrained surface texture, no anthropomorphism. Landscape 3:2; one whole focal animal with complete important appendages and generous margins. Depict a meaningful behavior in its real habitat with a different camera angle from a static identification portrait. Keep background uncluttered and prey tiny if required. No words, labels, arrows, diagram borders, logos, signatures, watermarks, people, boats, toys, fantasy, horror, blood or injuries. This is a scientific explanatory reconstruction, not documentary photography. Subject: ONE adult Atlantic horseshoe crab, Limulus polyphemus, searching for buried small benthic worms and clams in a shallow Atlantic sandy tidal flat. Camera low oblique view from the front-left at seabed height, animal facing left, complete straight tail pointing diagonally right. Show it gently pushing aside a little sand with jointed walking legs underneath the front shield; a tiny partly buried worm is near the underneath mouth region, no exposed dorsal mouth and no giant pincers. Large rounded horseshoe front shield, distinct smaller rear shield with SIX modest movable spines on each lateral edge excluding fixed corners, ONE straight thin telson, natural olive brown matte shell, two small lateral eyes on shell. All legs attach underneath and may be naturally partly concealed by the shell; no antennae, no crab pincers, no lobster anatomy. Front shield is not cut open, mouth beneath it not on top. Soft shallow-water light, a few low seagrass blades far in background, tiny sediment puff conveys foraging, entire outline and tail fit with margins."
        ],
        "generatedAt": "2026-10-02T18:30:36.016Z",
        "checkedAt": "2026-10-03",
        "sha256": "45be1b5c8be42c4f4c1ecb668b4efad080288f127764c629bcde781cb32dc8b5",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "horseshoe-crab",
        "src": "assets/images/horseshoe-crab-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "미국투구게 · 산란 해변의 모래에 파고들기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "모래에 일부 묻힌 앞방패·작은 뒤방패·온전한 꼬리 1개·근측 가동 가시 6개 확인. 반대편 가시·전체 다리는 확인 불가.",
        "behaviorCheck": "알을 낳는 때에는 모래 해변으로 올라와요. 몸을 일부 묻은 모습을 그렸으며 알을 낳는 순간을 보여주지는 않아요.",
        "behaviorSources": [
          {
            "title": "USFWS — Atlantic horseshoe crab, Reproduction",
            "url": "https://www.fws.gov/species/atlantic-horseshoe-crab-limulus-polyphemus"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. Create a single original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Match the established refined realistic painterly illustration style: believable adult anatomy, natural colors and eyes, restrained surface texture, no anthropomorphism. Landscape 3:2; one whole focal animal with complete important appendages and generous margins. Depict a meaningful behavior in its real habitat with a different camera angle from a static identification portrait. Keep background uncluttered and prey tiny if required. No words, labels, arrows, diagram borders, logos, signatures, watermarks, people, boats, toys, fantasy, horror, blood or injuries. This is a scientific explanatory reconstruction, not documentary photography. Subject: ONE adult female Atlantic horseshoe crab (Limulus polyphemus) partly burrowing into damp sand at the edge of a sheltered Delaware Bay spawning beach at high tide in late spring. Viewed from above and behind at a gentle three-quarter angle, front shield pointing toward upper-left dry shore, long straight thin tail pointing toward lower-right shallow water, FULL shell and tail visible. A small scoop of loosened wet sand along the front shell edge suggests a buried spawning nest; do not show exposed eggs on her back or piles of giant eggs, no cutaway. Anatomy: broad olive-brown horseshoe shaped front shield, separate smaller rear shield, SIX modest independent movable spines on EACH lateral edge of the rear shield excluding large fixed corners; small shell eyes, no antennae or big claws, exactly ONE straight pointed telson. Walking legs naturally concealed under the front shell and sand. Warm dusk illumination and quiet small wavelets, sparse muted beach grasses far behind. No other animals. An ecological scene of nesting habitat, not a static studio portrait."
        ],
        "generatedAt": "2026-10-02T18:31:40.860Z",
        "checkedAt": "2026-10-03",
        "sha256": "e99e1fa7898ea90116f4abf114f2bea76c9f7f4837c3bf5bd393fe4cd48631c6",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "horseshoe-crab",
        "src": "assets/images/horseshoe-crab-chatgpt-shore-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투구게 · 밤의 산란 해변에 오르기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "말굽형 앞등갑, 뒤쪽의 작은 가시 있는 체절, 근측 측면눈과 한 개의 긴 telson을 끝까지 확인. 배면 다리와 책아가미는 등갑에 가려져 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Atlantic horseshoe crab Limulus polyphemus on wet sandy spawning beach at NIGHT beside gentle high-tide waterline under a small full moon. Whole top-side oblique view: large broad horseshoe-shaped olive brown prosoma with natural small lateral eyes, smaller spined opisthosoma behind it, ONE long straight tapered telson fully visible with margin. Walking legs remain mostly naturally covered by shell. Crab faces toward the dry sand and tail trails toward water. NO male attached, NO second crab, NO visible eggs, no translucent sand cutaway, no claimed egg-laying or sex. Moonlight with gentle illustrative fill light, no day sky."
        ],
        "generatedAt": "2026-10-03T12:29:23.341Z",
        "checkedAt": "2026-10-03",
        "sha256": "59b8d769a23470b026d822b7d5975082163504644ef01244798cc12347174112",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "보름 고조위 산란 해변 맥락의 단독개체 재구성. 알·짝/성별이 보이지 않아 산란완료/암컷으로 단정하지 않음. 밤 달빛과 보조조명은 삽화 연출.",
        "behaviorSources": [
          {
            "title": "US Fish and Wildlife Service — Atlantic horseshoe crab",
            "url": "https://www.fws.gov/species/atlantic-horseshoe-crab-limulus-polyphemus"
          }
        ]
      }
    ],
    "featuredText": "말굽 갑각을 두른 해안의 절지동물"
  },
  {
    "id": "giant-squid",
    "name": "대왕오징어",
    "scientificName": "Architeuthis dux",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "여덟 팔과 유난히 긴 두 촉완으로 먹이를 잡는 심해 두족류. 살아 있는 모습의 관찰은 드물다.",
    "identity": [
      "길쭉한 외투막, 큰 눈, 팔 8개와 먹이를 잡는 긴 촉완 2개를 구분한다. 남극하트지느러미오징어 Mesonychoteuthis hamiltoni와는 별개의 종이다."
    ],
    "ecology": "표본과 드문 영상으로 생활을 추론한다. 대륙·섬 주변 비탈의 깊은 바다를 이용하며 향유고래의 위에서 부리와 조직이 발견된다.",
    "diet": "물고기와 다른 오징어류.",
    "range": "여러 대양에서 보고되지만 열대와 극지의 기록은 드물다.",
    "size": "Smithsonian이 제시한 기록은 촉완을 포함한 전체 길이 약 13 m, 외투막 길이 약 2.25 m까지. 촉완의 늘어남과 손상 때문에 측정 기준을 함께 봐야 한다.",
    "depth": "깊은 바다의 중층과 대륙사면. Smithsonian 표본 기록에는 수심 475 m에서 채집한 예가 있다. 이는 채집 수심이며 종 전체의 확정 서식 범위를 뜻하지 않는다.",
    "sources": [
      {
        "title": "Smithsonian Ocean — Giant Squid",
        "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
      },
      {
        "title": "WoRMS — Architeuthis dux",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=342218"
      },
      {
        "title": "Smithsonian collection — Architeuthis dux specimen, collection depth 475 m",
        "url": "https://www.si.edu/object/architeuthis-dux%3Anmnhinvertebratezoology_953184"
      }
    ],
    "depthZoneIds": [
      "twilight"
    ],
    "aliases": [
      "대왕 오징어",
      "Giant squid",
      "대왕오징어"
    ],
    "featured": true,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "giant-squid",
        "src": "assets/images/giant-squid-chatgpt-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕오징어 · 팔과 긴 촉완을 펼친 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "짧은 팔 위 4개·아래 4개와 더 긴 끝이 넓은 촉완 2개, 몸 뒤 작은 지느러미 한 쌍을 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE giant squid, Architeuthis dux. Slightly oblique lateral view with elongated reddish-brown mantle on LEFT, head in center, appendages extending RIGHT. Exactly TWO SMALL posterior fins at far-left end of mantle, one large lateral eye visible. Exactly EIGHT shorter muscular sucker-lined arms: fan FOUR distinct arms upward and FOUR distinct arms downward from around mouth, with each of the eight tips individually traceable and separated, avoiding tangles. Separately, exactly TWO very long slender feeding tentacles extend between the upper and lower arm fans to far right. They extend at least twice as far as the short arms, each ends in one widened sucker-bearing club; clubs and all eight arm tips must be fully visible with margins. All eight arms and two tentacles attach to the same head, not to mantle or fins. Closed beak mostly concealed at center of arm crown. Long slender tapering mantle occupies roughly the left third of the picture; thin long feeding tentacles fill right half. Blue open-water gradient only. No hooks, no extra arms, no missing arm, no third feeding tentacle, no octopus body, no colossal squid, no exposed teeth. Natural scientifically plausible educational pose."
        ],
        "generatedAt": "2026-10-02T17:48:00.594Z",
        "checkedAt": "2026-10-03",
        "sha256": "23ab40cb165ec4d4a848567f0b0b41c1951d47ca77a20781250314411972b1ab",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "giant-squid",
        "src": "assets/images/giant-squid-chatgpt-feeding-curled-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "대왕오징어 · 팔을 굽히고 긴 촉완을 먹이 쪽으로 뻗기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "가늘어지는 긴 외투와 후방의 연결된 두 지느러미, 큰 양쪽 눈, 머리에서 이어지는 두 긴 촉완과 각각 하나의 곤봉 끝, 안쪽으로 말린 짧은 팔을 확인. 분리된 팔이나 명백한 추가 가지는 보이지 않음.",
        "behaviorCheck": "위 내용물과 형태 자료에 근거한 먹이 접근의 교육 재구성. 직접 관찰한 섭식 성공을 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean — Giant Squid: Anatomy and Prey",
            "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE giant squid, Architeuthis dux. Slightly oblique lateral view with elongated reddish-brown mantle on LEFT, head in center, appendages extending RIGHT. Exactly TWO SMALL posterior fins at far-left end of mantle, one large lateral eye visible. Exactly EIGHT shorter muscular sucker-lined arms: fan FOUR distinct arms upward and FOUR distinct arms downward from around mouth, with each of the eight tips individually traceable and separated, avoiding tangles. Separately, exactly TWO very long slender feeding tentacles extend between the upper and lower arm fans to far right. They extend at least twice as far as the short arms, each ends in one widened sucker-bearing club; clubs and all eight arm tips must be fully visible with margins. All eight arms and two tentacles attach to the same head, not to mantle or fins. Closed beak mostly concealed at center of arm crown. Long slender tapering mantle occupies roughly the left third of the picture; thin long feeding tentacles fill right half. Blue open-water gradient only. No hooks, no extra arms, no missing arm, no third feeding tentacle, no octopus body, no colossal squid, no exposed teeth. Natural scientifically plausible educational pose.",
          "Edit this own Sea Atlas illustration into an educational feeding scene for ages 5–12. Preserve the exact giant squid anatomy and every separate appendage from the reference: FOUR short arms in the upper fan and FOUR short arms in the lower fan, eight short arms total, plus TWO separate very long thin feeding tentacles ending in sucker clubs. Keep all EIGHT short arm tips visibly separated, exactly as in the reference; do not erase or merge any arm. Preserve the two small posterior mantle fins, huge natural eye and reddish elongated mantle. Add one small intact silver deep-sea fish in the open space BETWEEN the two long tentacle clubs near the right edge, with a visible gap to both clubs: the squid is approaching prey before capture. Slightly angle the mantle upward while keeping all eight arms readable. Dark blue deep midwater with a few restrained floating particles, no seabed plants or shallow sun rays. Same refined realistic natural-history painting style. Landscape 3:2, whole squid and fish with margins, no cropped appendages, no text, labels, logos, people, blood or injury. This is an inferred explanatory reconstruction of its fish diet, not a claim of an observed hunt.",
          "Use case: scientific-educational. Asset: Sea Atlas feeding illustration, horizontal 3:2. Image 1 is a reference for Architeuthis dux identity, reddish mottled skin and realistic painted style ONLY. Draw a NEW three-dimensional pose and camera view, never reuse, rotate or flip the flat side-on spread-arm silhouette. See the giant squid from above and slightly in front, with its tapered long mantle receding diagonally to upper left and the head closer at lower centre-right. The eight shorter arms are loosely curling inward and downward around the oral area in individually traceable unequal arcs, not arranged like a flat radial fan. Exactly TWO separate much longer slender feeding tentacles extend forward on two different curved paths toward one small uninjured fish at the lower right; both have expanded sucker-bearing clubs at their ends and are visibly connected at the head, no contact or successful catch claimed. Keep all eight shorter arm tips plus both tentacle clubs within frame, separate enough to count; no split arms, floating limbs or extra clubs. Two small fins only at the posterior end of the mantle, large lateral eyes, realistic elongated squid proportions, gentle natural mantle bend, no octopus umbrella web. Whole animal and fish with generous margins. Dark midwater blue, subtle particles, no fake sun shafts, no other creatures, no text, arrows, panels or watermark. The different dorsal camera angle, foreshortened body and curled short-arm configuration must make the main animal visibly different from the reference even if both backgrounds are hidden."
        ],
        "generatedAt": "2026-10-08T16:25:26.514Z",
        "checkedAt": "2026-10-11",
        "sha256": "c5a6eee4c77f48d0c939a22b3e227695808460c82e7a225072f78686d21054e5",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "위앞 사선에서 본 몸통과 머리",
        "pose": "짧은 팔은 안쪽으로 굽히고 긴 두 촉완은 서로 다른 곡선으로 뻗은 자세",
        "poseVariationCheck": "대표/기존 feeding의 완전 측면 수평 부채꼴과 달리 외투가 왼위로 후퇴하는 위앞 원근, 안쪽으로 모인 짧은 팔, 서로 다른 전후 곡선의 두 촉완으로 실제 몸/부속지 두 축이 달라짐.",
        "visualLimitations": "약 일곱 짧은팔 끝이 명료하며 원측 하나는 겹쳐 여덟 전체 계수하지 못함. 짧은 팔 끝 약 일곱 개만 명료하고 원측 한 팔은 겹침 때문에 기부에서 끝까지 전수 대응 불가. 여덟 팔 전부 검증했다고 주장하지 않음. 두 촉완과 먹이 물고기는 접촉/섭식 성공 장면이 아님."
      },
      {
        "id": "giant-squid",
        "src": "assets/images/giant-squid-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "대왕오징어 · 깊은 바닷속에서 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "길쭉한 외투막·후방 지느러미 2개·큰 눈·긴 촉수와 club 각 2개 확인. 짧은 팔 6끝만 읽히고 원측은 자연가림으로 8팔 전수 확인 불가.",
        "behaviorCheck": "깊은 바닷속을 헤엄치는 모습을 다른 방향에서 그렸어요. 머리 뒤에 가려진 팔도 있어요.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean — Giant Squid, Distribution and Anatomy",
            "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
          }
        ],
        "generationPrompts": [
          "undefinedSubject: ONE giant squid Architeuthis dux drifting through deep blue midwater near a distant continental slope, a full-body view from above and slightly behind. Long slender rusty-red mantle lies diagonally from upper-right to center; head and appendages trail toward lower-left. Exactly two small fins at posterior upper-right end, not enormous fins along the mantle. Show both lateral eyes only as consistent with this elevated angle, realistic not huge cartoon eyes. Eight short muscular arms emerging from the head spread into an open loose fan with individually separate tips, four on each side of the fan. Two separate much longer very thin feeding tentacles curve gently beyond the fan toward lower-left and terminate in distinct small expanded sucker clubs, not more short arms. All ten appendages connect to the head; no branching or hooks. Preserve full animal silhouette and all tentacle ends inside margins. This is a quiet habitat and locomotion reconstruction, no prey and no attack. Dim diffuse blue lighting outlines the animal with a few tiny suspended particles, dark rock slope far in the background leaving clear open water around the appendages. No sunlight beams from a visible surface."
        ],
        "generatedAt": "2026-10-03T00:43:21.202Z",
        "checkedAt": "2026-10-03",
        "sha256": "d22a7dc741b6c565d4b064b1a668a25e0614706d5f747c01236fa6c911f2b67a",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sperm-whale-giant-squid",
        "src": "assets/images/sperm-whale-giant-squid-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "향유고래와 대왕오징어 · 깊은 바다의 힘겨루기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "향유고래의 큰 둔한 머리, 가느다란 아래턱, 작은 옆눈, 가슴지느러미 2개, 낮은 등 융기와 꼬리 2엽을 확인했다. 대왕오징어는 긴 외투막, 후방 한 쌍의 지느러미, 큰 옆눈, 빨판 있는 여러 짧은 팔과 곤봉 끝을 가진 긴 촉완 2개가 읽힌다. 팔 일부가 머리와 고래에 겹쳐 8팔의 기부와 끝을 모두 대응시키는 전수 확인은 하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original natural-history illustration for a marine animal atlas for children ages 5–12. Subject: ONE sperm whale, Physeter macrocephalus. Realistic painterly scientific illustration, anatomically accurate, friendly but not anthropomorphic. Entire animal in unobstructed left-facing side view, centered, pale blue underwater background with subtle depth gradient, no other animals. Enormous rectangular blunt head occupying about one third of body length, very narrow underslung lower jaw, small eye near corner of mouth, wrinkled dark gray skin, two short paddle-shaped pectoral flippers (far one may be occluded), low rounded dorsal hump followed by small knuckles, broad horizontal tail flukes. Long tapered body, no sharp dolphin-like dorsal fin. Keep the outline easy to read at thumbnail size, generous margin around every extremity. Landscape 3:2 composition. No text, labels, logos, watermark, border, human, boat, blood, giant round eyes, smiling face, fantasy features, or extra fins.",
          "Edit this sperm whale natural-history illustration with ONE targeted anatomical correction: replace the tail flukes on the right with a clearly horizontal cetacean tail, rather than a vertical fish-like tail. Keep the head, body, dorsal hump, skin, pectoral flippers, scale, lighting, entire blue background, and composition unchanged. Show the corrected tail in a slight three-quarter view so we can see that its two symmetrical flukes extend to either side of the body in the horizontal plane, with a single central notch and thin trailing edges. There must not be an upward-and-downward pair of lobes or a caudal fish fin. No new fins, animals, text or labels. Preserve the natural-history illustration style. Keep every tail tip inside the image.",
          "Use case: precise-object-edit. Edit this self-generated sperm whale illustration for our children's marine atlas. Preserve the same whale identity, rectangular large head, narrow underslung jaw, small eyes, wrinkled charcoal skin, small paddle pectoral flippers and low dorsal hump/knuckles. Improve the tail and framing: show a anatomically plausible narrow caudal peduncle smoothly connecting to one broad horizontal pair of whale flukes, seen slightly from above with a clear central notch. The tail must spread left-right in the horizontal plane, never up-down as a fish tail. Make the whole whale about 85% of current displayed size so BOTH head and tail tip have at least 8% image-width clear blue-water margin. Keep entire animal visible, no cut-off tips. Same natural-history painterly realism and blue underwater gradient, landscape 3:2. No other animal, no text, labels, logo or watermark. Do not change any other anatomy.",
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE giant squid, Architeuthis dux. Slightly oblique lateral view with elongated reddish-brown mantle on LEFT, head in center, appendages extending RIGHT. Exactly TWO SMALL posterior fins at far-left end of mantle, one large lateral eye visible. Exactly EIGHT shorter muscular sucker-lined arms: fan FOUR distinct arms upward and FOUR distinct arms downward from around mouth, with each of the eight tips individually traceable and separated, avoiding tangles. Separately, exactly TWO very long slender feeding tentacles extend between the upper and lower arm fans to far right. They extend at least twice as far as the short arms, each ends in one widened sucker-bearing club; clubs and all eight arm tips must be fully visible with margins. All eight arms and two tentacles attach to the same head, not to mantle or fins. Closed beak mostly concealed at center of arm crown. Long slender tapering mantle occupies roughly the left third of the picture; thin long feeding tentacles fill right half. Blue open-water gradient only. No hooks, no extra arms, no missing arm, no third feeding tentacle, no octopus body, no colossal squid, no exposed teeth. Natural scientifically plausible educational pose.",
          "Use case: scientific-educational natural-history illustration for Sea Atlas ages 5–12. The first own reference image is ANATOMY reference for Physeter macrocephalus sperm whale; the second is ANATOMY reference for Architeuthis dux giant squid, not a layout to copy. Create ONE original landscape 3:2 illustration of their tense predator-prey encounter in dark deep blue midwater. Whole adult sperm whale swimming diagonally from LOWER LEFT toward UPPER RIGHT; whole giant squid on upper-right facing the whale, its eight short arms flexing in a defensive fan around the whale's nose, and its two distinct very long thin feeding tentacles loosely contacting the front of the whale's head. Suggest a struggle with taut natural arm curves and a modest swirl of water, without violence or injury. Whale about 14m long, squid mantle about 2m, squid total length including thin tentacles about 8m; squid mantle clearly smaller than whale's rectangular head, never a colossal octopus-sized body or kraken. Accurate whale: huge blunt rectangular head about 1/3 body, narrow underslung jaw, small natural eye, two small pectoral flippers, low dorsal hump and knuckles, HORIZONTAL two-lobed tail fully visible at lower left. Accurate giant squid: elongated reddish mantle and TWO small posterior fins, large eye, exactly EIGHT short nonbranching muscular sucker arms plus TWO separate much longer slender tentacles with visibly expanded terminal sucker clubs. Keep all ten appendages anatomically connected; some bases may naturally occlude at contact but do not merge limbs or give whale tentacles. Leave squid mantle and both fins clear above-right. No biting into flesh, no blood, cuts, bruises, missing limbs, scars, exposed tissue, death, monstrous mouth, huge teeth, glowing eyes, humans, boats, text, labels, borders or logos. Both whole animals including flukes, fins and tentacle club ends fit within generous margins. Refined realistic painterly illustration, natural colors, soft restrained scientific illumination, no cartoon expression. This is a hypothetical educational reconstruction based on known predation and sucker-mark evidence, not documentary footage or a witnessed historical fight.",
          "Edit this Sea Atlas educational illustration. Preserve the entire sperm whale and giant squid, their exact anatomy, sizes, contact pose, all fins, flukes, arms and two long club-ended tentacles, colors, and framing. Change ONLY the environment and environmental lighting to deep dark midwater: no visible ocean surface, no sunbeams, no surface caustic patterns on the animals, no bubble wake or large bubble clouds. Rich very dark navy water fading into black distance, with a subtle soft neutral illustrative fill light so every anatomical feature remains readable for children aged 5–12. Sparse suspended particles only. Keep naturalistic painterly illustration. No blood, wounds, text, border, or logos. This is a hypothetical reconstruction of a predator-prey encounter, not a documented photograph."
        ],
        "generatedAt": "2026-10-03T01:36:28.576Z",
        "checkedAt": "2026-10-03",
        "sha256": "8154f681072919cafc3ee04f8f9268c489f08f8af6c81cbe06720d488a9271e3",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "향유고래가 대왕오징어를 먹는 관계와 빨판 흔적을 바탕으로 상상해 그린 장면이에요. 실제 싸움을 찍은 사진이나 관측한 순간은 아니에요.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean · Giant squid predators",
            "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
          }
        ],
        "interactionIds": [
          "sperm-whale",
          "giant-squid"
        ]
      }
    ],
    "featuredText": "긴 촉완을 가진 심해의 두족류"
  },
  {
    "id": "sperm-whale",
    "name": "향유고래",
    "scientificName": "Physeter macrocephalus",
    "group": "포유류",
    "habitatIds": [
      "pelagic",
      "deep"
    ],
    "summary": "몸의 약 3분의 1을 차지하는 거대한 머리와 깊은 잠수로 알려진 이빨고래.",
    "identity": [
      "큰 네모형 머리, 좁은 아래턱, 낮고 둥근 등지느러미, 머리 왼쪽으로 치우친 하나의 분수공을 확인한다."
    ],
    "ecology": "깊이 잠수해 먹이를 찾고 수면으로 돌아와 호흡한다. 성별과 나이에 따라 집단의 분포와 이동이 달라진다.",
    "diet": "심해의 오징어, 물고기, 상어와 홍어류 등.",
    "range": "전 세계 대양. 암컷과 어린 개체는 주로 따뜻한 바다에 머물고 성체 수컷은 더 넓게 이동한다.",
    "size": "NOAA의 대표값은 암컷 약 12 m, 수컷 약 16 m. 성별과 개체에 따라 차이가 큰 값이며 종의 절대 최대치를 뜻하지 않는다.",
    "depth": "NOAA는 먹이 잠수에서 약 610 m에 일상적으로 도달한다고 설명한다. 더 깊은 잠수와 구분해야 하며 610 m가 한계는 아니다.",
    "sources": [
      {
        "title": "NOAA Fisheries — Sperm Whale",
        "url": "https://www.fisheries.noaa.gov/species/sperm-whale"
      },
      {
        "title": "WoRMS — Physeter macrocephalus",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=137119"
      }
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "aliases": [
      "향고래",
      "향유 고래",
      "Sperm whale"
    ],
    "featured": true,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "sperm-whale",
        "src": "assets/images/sperm-whale-chatgpt-v4.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "향유고래 · 물속에서 헤엄치는 온몸 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 네모 머리와 좁은 아래턱, 작은 앞지느러미 두 개와 낮은 등 돌기를 확인했어요. 가늘어지는 꼬리자루가 넓은 꼬리뿌리로 이어지고, 그곳에서 두 꼬리엽이 갈라져요. 꼬리 양끝은 그림 안에 있어요. 이 각도에서는 분수공을 확인하기 어려워요.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original natural-history illustration for a marine animal atlas for children ages 5–12. Subject: ONE sperm whale, Physeter macrocephalus. Realistic painterly scientific illustration, anatomically accurate, friendly but not anthropomorphic. Entire animal in unobstructed left-facing side view, centered, pale blue underwater background with subtle depth gradient, no other animals. Enormous rectangular blunt head occupying about one third of body length, very narrow underslung lower jaw, small eye near corner of mouth, wrinkled dark gray skin, two short paddle-shaped pectoral flippers (far one may be occluded), low rounded dorsal hump followed by small knuckles, broad horizontal tail flukes. Long tapered body, no sharp dolphin-like dorsal fin. Keep the outline easy to read at thumbnail size, generous margin around every extremity. Landscape 3:2 composition. No text, labels, logos, watermark, border, human, boat, blood, giant round eyes, smiling face, fantasy features, or extra fins.",
          "Edit this sperm whale natural-history illustration with ONE targeted anatomical correction: replace the tail flukes on the right with a clearly horizontal cetacean tail, rather than a vertical fish-like tail. Keep the head, body, dorsal hump, skin, pectoral flippers, scale, lighting, entire blue background, and composition unchanged. Show the corrected tail in a slight three-quarter view so we can see that its two symmetrical flukes extend to either side of the body in the horizontal plane, with a single central notch and thin trailing edges. There must not be an upward-and-downward pair of lobes or a caudal fish fin. No new fins, animals, text or labels. Preserve the natural-history illustration style. Keep every tail tip inside the image.",
          "Use case: precise-object-edit. Edit this self-generated sperm whale illustration for our children's marine atlas. Preserve the same whale identity, rectangular large head, narrow underslung jaw, small eyes, wrinkled charcoal skin, small paddle pectoral flippers and low dorsal hump/knuckles. Improve the tail and framing: show a anatomically plausible narrow caudal peduncle smoothly connecting to one broad horizontal pair of whale flukes, seen slightly from above with a clear central notch. The tail must spread left-right in the horizontal plane, never up-down as a fish tail. Make the whole whale about 85% of current displayed size so BOTH head and tail tip have at least 8% image-width clear blue-water margin. Keep entire animal visible, no cut-off tips. Same natural-history painterly realism and blue underwater gradient, landscape 3:2. No other animal, no text, labels, logo or watermark. Do not change any other anatomy.",
          "Use case: precise-object-edit. Asset: sperm whale representative illustration for the Sea Atlas children's marine animal guide. Image 1 is the edit target. Correct ONLY the posterior caudal peduncle and tail flukes in the rightmost quarter of this existing illustration. The present two flukes look like separate pieces touching at a bead and floating away from the whale: remove that anatomical discontinuity. Show ONE continuous flesh-and-skin structure: the tapering muscular caudal peduncle flows smoothly into the broad central root and leading edge of ONE horizontal cetacean tail fin, which widens into two triangular flukes. BOTH flukes must share a substantial continuous central base visibly joined to the peduncle; do not leave a water gap, narrow bead, seam, dark cut line, separate tail island, or pointed body tip behind the tail. Put the central V-notch only on the posterior trailing edge of the single broad fin, never at its attachment to the body. Use a modest elevated three-quarter presentation of the tail so its horizontal left-right spread and continuous connection are clearly legible; keep the original whale body orientation. Continue the whale's charcoal gray skin texture and natural shading uninterrupted over peduncle and tail root. Preserve the large rectangular blunt head, tiny eye, narrow underslung jaw, two small paddle flippers, low dorsal hump and knuckles, entire rest of torso, painterly realism, blue background, lighting, whale size, and landscape 3:2 framing. Leave both tail tips inside clear blue margin. No other animals, no text, arrows, labels, logo, watermark, human, boat, blood, injuries, extra fins, or vertical fish tail. This is a targeted anatomical correction, not a new species or scene."
        ],
        "generatedAt": "2026-10-04T17:37:28.195Z",
        "checkedAt": "2026-10-05",
        "sha256": "3377d69e9b8e3605b30bc3192560a230324ae69ae857eb2468b628371e5a2060",
        "width": 1536,
        "height": 1024,
        "changes": "사용자가 지적한 대표 v3의 꼬리 연결을 ChatGPT로 교정. 꼬리자루와 두 엽의 연속 조직을 부모·독립 에이전트가 원본 육안 점검. 도구 원본 PNG 그대로 복사."
      },
      {
        "id": "sperm-whale",
        "src": "assets/images/sperm-whale-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "향유고래 · 깊은 바다에서 오징어에 다가가기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 각진 머리·가느다란 아래턱·근측 작은 눈·가슴지느러미 2개·낮은 융기와 돌기·수평 2엽 꼬리 확인. 반대 눈·분수공은 가림.",
        "behaviorCheck": "먹이를 찾으려고 깊이 잠수해요. 작은 오징어에 다가가는 장면을 그렸으며 실제 사냥을 찍은 사진은 아니에요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Sperm Whale, Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/sperm-whale"
          }
        ],
        "generationPrompts": [
          "undefinedSubject: ONE sperm whale (Physeter macrocephalus) descending diagonally head-first through dim deep blue water toward ONE much smaller generic squid, depicting a hypothetical moment of deep foraging without contact or injury. High front-side three-quarter view, huge blunt rectangular head at lower-left occupies about one third of the body, tail extends toward upper-right with BOTH horizontal left-right flukes clearly visible and a central notch. Whole whale and complete tail inside ample margins. Very narrow underslung lower jaw slightly lowered but short of a huge gape, small eye at mouth corner, charcoal wrinkled skin, exactly two small paddle pectoral flippers seen as angle allows, low rounded dorsal hump followed by knuckles, no pointed dolphin dorsal fin. The lower jaw remains slender and never becomes a giant shark jaw. Small uninjured squid below left is distant and modest in scale, without emphasizing complex appendage detail. Dim diffuse water lighting appropriate to depth, no sunlit surface, no giant squid battle or dramatic teeth. Flippers and horizontal tail must not turn into vertical fish tail fins."
        ],
        "generatedAt": "2026-10-03T00:44:42.038Z",
        "checkedAt": "2026-10-03",
        "sha256": "7719e6e41dc8381f20bbba6277ba5c4b4b9908bb412c721a468b936c3c203dbe",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sperm-whale",
        "src": "assets/images/sperm-whale-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "향유고래 · 잠수 뒤 수면에서 숨 쉬기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "각진 머리·좁은 아래턱·가슴지느러미 2개·낮은 융기·단일 분수공 확인. 꼬리는 동일 수평 평면의 비스듬한 투영으로 읽히나 위아래 엽처럼 보일 수 있음.",
        "behaviorCheck": "향유고래는 공기를 마시러 수면에 올라와요. 물 위와 아래를 한 번에 보도록 구성한 그림이에요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Sperm Whale, Appearance and Behavior",
            "url": "https://www.fisheries.noaa.gov/species/sperm-whale"
          }
        ],
        "generationPrompts": [
          "undefinedSubject: ONE sperm whale Physeter macrocephalus resting just below the ocean surface after a deep feeding dive. Split-level natural camera view, a narrow band of calm sky above the waterline across the upper fifth of the frame and clear blue water below. Whale lies horizontally facing RIGHT, seen from a slightly elevated three-quarter side angle, complete giant blunt rectangular head, whole long tapering torso and both horizontal tail flukes at LEFT in frame with ample margins. Head about one third of body length, narrow underslung lower jaw, small eye near mouth corner, wrinkled charcoal gray skin, two small paddlelike pectoral flippers naturally visible underwater, low rounded hump and a few knuckles on back instead of a tall dorsal fin. Only the top of head and low back rise to the waterline. A small soft inclined mist exhalation comes from the single blowhole on the upper-left part of the head, not from the mouth or spine. Keep blow modest and natural, not a huge fountain. Broad horizontal left-right tail with central notch viewed obliquely from above, never a vertical fish tail. Subtle surface ripples, no other animal, no boats, no impossible airborne whale. Education about surfacing to breathe, not a dramatic breach."
        ],
        "generatedAt": "2026-10-03T00:45:50.975Z",
        "checkedAt": "2026-10-03",
        "sha256": "92b4c5c959c97fd0cff711c44961aafc797011f58d7e2166fa621ba86f04a358",
        "width": 1774,
        "height": 887,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sperm-whale-giant-squid",
        "src": "assets/images/sperm-whale-giant-squid-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "향유고래와 대왕오징어 · 깊은 바다의 힘겨루기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "향유고래의 큰 둔한 머리, 가느다란 아래턱, 작은 옆눈, 가슴지느러미 2개, 낮은 등 융기와 꼬리 2엽을 확인했다. 대왕오징어는 긴 외투막, 후방 한 쌍의 지느러미, 큰 옆눈, 빨판 있는 여러 짧은 팔과 곤봉 끝을 가진 긴 촉완 2개가 읽힌다. 팔 일부가 머리와 고래에 겹쳐 8팔의 기부와 끝을 모두 대응시키는 전수 확인은 하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original natural-history illustration for a marine animal atlas for children ages 5–12. Subject: ONE sperm whale, Physeter macrocephalus. Realistic painterly scientific illustration, anatomically accurate, friendly but not anthropomorphic. Entire animal in unobstructed left-facing side view, centered, pale blue underwater background with subtle depth gradient, no other animals. Enormous rectangular blunt head occupying about one third of body length, very narrow underslung lower jaw, small eye near corner of mouth, wrinkled dark gray skin, two short paddle-shaped pectoral flippers (far one may be occluded), low rounded dorsal hump followed by small knuckles, broad horizontal tail flukes. Long tapered body, no sharp dolphin-like dorsal fin. Keep the outline easy to read at thumbnail size, generous margin around every extremity. Landscape 3:2 composition. No text, labels, logos, watermark, border, human, boat, blood, giant round eyes, smiling face, fantasy features, or extra fins.",
          "Edit this sperm whale natural-history illustration with ONE targeted anatomical correction: replace the tail flukes on the right with a clearly horizontal cetacean tail, rather than a vertical fish-like tail. Keep the head, body, dorsal hump, skin, pectoral flippers, scale, lighting, entire blue background, and composition unchanged. Show the corrected tail in a slight three-quarter view so we can see that its two symmetrical flukes extend to either side of the body in the horizontal plane, with a single central notch and thin trailing edges. There must not be an upward-and-downward pair of lobes or a caudal fish fin. No new fins, animals, text or labels. Preserve the natural-history illustration style. Keep every tail tip inside the image.",
          "Use case: precise-object-edit. Edit this self-generated sperm whale illustration for our children's marine atlas. Preserve the same whale identity, rectangular large head, narrow underslung jaw, small eyes, wrinkled charcoal skin, small paddle pectoral flippers and low dorsal hump/knuckles. Improve the tail and framing: show a anatomically plausible narrow caudal peduncle smoothly connecting to one broad horizontal pair of whale flukes, seen slightly from above with a clear central notch. The tail must spread left-right in the horizontal plane, never up-down as a fish tail. Make the whole whale about 85% of current displayed size so BOTH head and tail tip have at least 8% image-width clear blue-water margin. Keep entire animal visible, no cut-off tips. Same natural-history painterly realism and blue underwater gradient, landscape 3:2. No other animal, no text, labels, logo or watermark. Do not change any other anatomy.",
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE giant squid, Architeuthis dux. Slightly oblique lateral view with elongated reddish-brown mantle on LEFT, head in center, appendages extending RIGHT. Exactly TWO SMALL posterior fins at far-left end of mantle, one large lateral eye visible. Exactly EIGHT shorter muscular sucker-lined arms: fan FOUR distinct arms upward and FOUR distinct arms downward from around mouth, with each of the eight tips individually traceable and separated, avoiding tangles. Separately, exactly TWO very long slender feeding tentacles extend between the upper and lower arm fans to far right. They extend at least twice as far as the short arms, each ends in one widened sucker-bearing club; clubs and all eight arm tips must be fully visible with margins. All eight arms and two tentacles attach to the same head, not to mantle or fins. Closed beak mostly concealed at center of arm crown. Long slender tapering mantle occupies roughly the left third of the picture; thin long feeding tentacles fill right half. Blue open-water gradient only. No hooks, no extra arms, no missing arm, no third feeding tentacle, no octopus body, no colossal squid, no exposed teeth. Natural scientifically plausible educational pose.",
          "Use case: scientific-educational natural-history illustration for Sea Atlas ages 5–12. The first own reference image is ANATOMY reference for Physeter macrocephalus sperm whale; the second is ANATOMY reference for Architeuthis dux giant squid, not a layout to copy. Create ONE original landscape 3:2 illustration of their tense predator-prey encounter in dark deep blue midwater. Whole adult sperm whale swimming diagonally from LOWER LEFT toward UPPER RIGHT; whole giant squid on upper-right facing the whale, its eight short arms flexing in a defensive fan around the whale's nose, and its two distinct very long thin feeding tentacles loosely contacting the front of the whale's head. Suggest a struggle with taut natural arm curves and a modest swirl of water, without violence or injury. Whale about 14m long, squid mantle about 2m, squid total length including thin tentacles about 8m; squid mantle clearly smaller than whale's rectangular head, never a colossal octopus-sized body or kraken. Accurate whale: huge blunt rectangular head about 1/3 body, narrow underslung jaw, small natural eye, two small pectoral flippers, low dorsal hump and knuckles, HORIZONTAL two-lobed tail fully visible at lower left. Accurate giant squid: elongated reddish mantle and TWO small posterior fins, large eye, exactly EIGHT short nonbranching muscular sucker arms plus TWO separate much longer slender tentacles with visibly expanded terminal sucker clubs. Keep all ten appendages anatomically connected; some bases may naturally occlude at contact but do not merge limbs or give whale tentacles. Leave squid mantle and both fins clear above-right. No biting into flesh, no blood, cuts, bruises, missing limbs, scars, exposed tissue, death, monstrous mouth, huge teeth, glowing eyes, humans, boats, text, labels, borders or logos. Both whole animals including flukes, fins and tentacle club ends fit within generous margins. Refined realistic painterly illustration, natural colors, soft restrained scientific illumination, no cartoon expression. This is a hypothetical educational reconstruction based on known predation and sucker-mark evidence, not documentary footage or a witnessed historical fight.",
          "Edit this Sea Atlas educational illustration. Preserve the entire sperm whale and giant squid, their exact anatomy, sizes, contact pose, all fins, flukes, arms and two long club-ended tentacles, colors, and framing. Change ONLY the environment and environmental lighting to deep dark midwater: no visible ocean surface, no sunbeams, no surface caustic patterns on the animals, no bubble wake or large bubble clouds. Rich very dark navy water fading into black distance, with a subtle soft neutral illustrative fill light so every anatomical feature remains readable for children aged 5–12. Sparse suspended particles only. Keep naturalistic painterly illustration. No blood, wounds, text, border, or logos. This is a hypothetical reconstruction of a predator-prey encounter, not a documented photograph."
        ],
        "generatedAt": "2026-10-03T01:36:28.576Z",
        "checkedAt": "2026-10-03",
        "sha256": "8154f681072919cafc3ee04f8f9268c489f08f8af6c81cbe06720d488a9271e3",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "향유고래가 대왕오징어를 먹는 관계와 빨판 흔적을 바탕으로 상상해 그린 장면이에요. 실제 싸움을 찍은 사진이나 관측한 순간은 아니에요.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean · Giant squid predators",
            "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
          }
        ],
        "interactionIds": [
          "sperm-whale",
          "giant-squid"
        ]
      }
    ],
    "featuredText": "깊은 바다로 잠수하는 이빨고래"
  },
  {
    "id": "orca",
    "name": "범고래",
    "scientificName": "Orcinus orca",
    "group": "포유류",
    "habitatIds": [
      "coast",
      "pelagic",
      "polar"
    ],
    "summary": "흑백 무늬와 눈 뒤의 흰 반점이 눈에 띄는 사회적인 이빨고래.",
    "identity": [
      "검은 등, 흰 배와 눈 뒤의 흰 반점, 등지느러미 뒤의 안장무늬. 성체 수컷의 등지느러미는 특히 크게 발달한다."
    ],
    "ecology": "집단마다 먹이와 사냥 문화가 다르며 소리로 의사소통한다. 같은 종이라도 지역 집단의 생활을 동일하게 단정하면 안 된다.",
    "diet": "집단에 따라 물고기, 오징어 또는 해양포유류; 북동태평양 정주형 집단은 주로 물고기를 먹는다.",
    "range": "전 세계 바다. 남극과 북태평양·북대서양의 차가운 해역에 특히 많다.",
    "size": "NOAA 제시 최대 길이 약 9.8 m. 성별과 집단에 따라 차이가 있다.",
    "depth": "수면에서 먹이를 쫓는 잠수까지. 집단별 기록 차이가 커 단일 고정 수심을 사용하지 않는다.",
    "sources": [
      {
        "title": "NOAA Fisheries — Killer Whale",
        "url": "https://www.fisheries.noaa.gov/species/killer-whale"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "범 고래",
      "Killer whale",
      "Orca"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "orca",
        "src": "assets/images/orca-chatgpt-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "범고래 · 검고 흰 무늬와 수평 꼬리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "검고 흰 몸·눈 뒤 흰 무늬·높은 등지느러미·가슴지느러미 한 쌍·좌우 수평 꼬리를 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult male killer whale, Orcinus orca, calm full-body left-facing lateral underwater view, no prey. Robust streamlined black body, rounded blunt snout with no dolphin beak, white lower jaw and ventral belly, one distinct oval white eye patch BEHIND the small dark eye on visible side, gray saddle patch just behind dorsal fin. Single tall upright triangular dorsal fin centered on back, two broad rounded paddle-shaped pectoral flippers, a narrow tailstock and broad horizontally spreading two-lobed cetacean tail with central notch. One visible eye only; far-side eye patch may be occluded. Clean deep blue water with subtle daylight rays. All fins, head and horizontal tail visible with space around them. Do not put the eye inside the white eye patch; no throat grooves, shark tail or extra fins.",
          "Use case: precise-object-edit. Correct ONLY the tail geometry of this original killer whale (Orcinus orca) illustration. Keep the entire head, black-and-white eye patch and belly pattern, gray saddle, tall male dorsal fin, pectoral flippers, texture and blue underwater background unchanged. Replace the vertically oriented fish-like tail at right with a normal HORIZONTAL cetacean fluke pair extending to either side in the left-right horizontal plane, with one central notch. Show it in slight elevated three-quarter perspective so its horizontal plane is unmistakable. Thin realistic flukes attached to the single narrow tailstock; no upward-and-downward fin lobes, no third lobe. Both tail tips fully within frame with clear water margin. Keep whole animal visible and the same educational natural-history style. No new fins, animals, marks or text."
        ],
        "generatedAt": "2026-10-02T18:03:49.896Z",
        "checkedAt": "2026-10-03",
        "sha256": "895a55328124f086d325efb3fdcf699884ced3d93c691808fe05b6a5d4fe0c11",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "orca",
        "src": "assets/images/orca-chatgpt-feeding-top-approach-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "범고래 · 위사선에서 본 물고기 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 부리 없는 머리·작은 눈과 흰 눈무늬·회색 안장무늬, 연결된 검/흰 몸과 단일 등핀, 두 가슴핀, 수평 두 꼬리엽 확인. 입 거의 닫고 먹이와 분리됨.",
        "behaviorCheck": "NOAA가 설명하는 물고기를 먹는 집단의 식단을 토대로 작은 물고기와 간격을 둔 접근 장면을 재구성. 모든 범고래 집단이 같은 먹이를 먹는다거나 실제 포획·섭식 성공을 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Killer whale: appearance, behavior and population-specific diet",
            "url": "https://www.fisheries.noaa.gov/species/killer-whale"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: Underwater in cool northeast Pacific coastal blue water, one adult resident-type killer whale Orcinus orca turning slightly in pursuit of a small intact silver salmon immediately ahead of its slightly open mouth. The salmon is small relative to the whale; this is a calm moment just before fish capture, no biting damage. Do not show seals or mammals as prey. Side three-quarter view, whale swimming diagonally left, full body visible.\nAnatomy: black back, white underside, natural small eye separate from the white eye patch behind it, gray saddle behind one upright dorsal fin, exactly two rounded pectoral flippers, horizontal left-right whale tail flukes perpendicular to the upright dorsal fin, not a fish tail. Tail flukes both visibly spread in a horizontal plane. Mouth subtly open with modest conical teeth, not a frightening grin. Quiet distant coastal water without invented sound beams.",
          "Create ONE original realistic natural-history illustration for Sea Atlas, children ages 5–12, landscape 3:2, refined painterly marine illustration. Species Orcinus orca, one adult killer whale. Use attached image ONLY for black-and-white identity, anatomy and style, never copy, mirror or rotate its broad left-facing side silhouette. NEW CAMERA is clearly ABOVE AND BEHIND THE LEFT SHOULDER, looking obliquely down at the black back. The head is closer in the LOWER LEFT, the broad torso and raised tail recede toward the UPPER RIGHT, with a modestly curved body axis in depth. NEW POSE: the orca gently pitches downward toward one much smaller intact silver fish beneath and in front, head lowered, back arched only gently and tail stock raised. Near pectoral flipper sweeps partly out to the side and back; far pectoral is angled more downward under the body, naturally foreshortened, each continuously attached behind the head. A single tall triangular dorsal fin rises from the middle BACK, not from the belly. Smooth broad rounded head without a dolphin beak, small lateral eye and white eye patch each side, white underside and flank marking glimpsed at the roll, grey saddle behind the dorsal fin. One continuous caudal peduncle leads into TWO horizontal tail flukes, both completely inside the frame and clearly connected at the shared root. No dorsal ridge added, no third fluke or disconnected tail. Mouth nearly closed, no exaggerated teeth or grin. Maintain a clear gap between the orca and fish, no bite, gore or swallowing. This is an educational approach scene consistent with fish-eating populations, not a claim that every killer whale group eats fish or that a specific hunt succeeded. Cool open coastal blue water, restrained kelp silhouettes distant below, no other orcas or species, text, labels, panels or watermark. Make the top/back three-dimensional view and pitched-body/flipper arrangement unmistakably different from the previous flat side swimming pose."
        ],
        "generatedAt": "2026-10-08T16:54:12.244Z",
        "checkedAt": "2026-10-11",
        "sha256": "5357f9acf2d01b37ab0d850cd3d515efa17791704526cb316b1996d708916375",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "머리와 등 쪽을 내려다보는 높은 앞옆 사선",
        "pose": "머리는 아래쪽 먹이 방향으로 낮추고 꼬리는 뒤에서 높아지며 가슴지느러미는 서로 다른 각도로 펼친 모습",
        "poseVariationCheck": "기존 흰 아랫면이 크게 보이는 수평 옆/앞 사선 및 열린 입에서 등면이 넓게 보이는 높은 앞 사선, 낮아진 머리/높은 후방꼬리, 가슴핀 다른 노출과 닫힌 입으로 바뀜. 실제3D 시점과 머리/핀 상태 차이.",
        "visualLimitations": "꼬리·등지느러미 끝이 프레임 안이나 여백이 좁음. 개체 성별과 먹이 어종·실제 포획 성공은 확정하지 않음. 완전 뒤어깨 시점이 아닌 위 앞 사선. 꼬리 오른쪽과 등핀 위 여백은 매우 좁지만 원본 프레임 안. 먹이 종류·성별·포획 성공 인증 아님."
      },
      {
        "id": "orca",
        "src": "assets/images/orca-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "범고래 · 무리와 함께 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "분리된 3개체의 전신·가슴지느러미 각 2개·등지느러미 각 1개·수평 2엽 꼬리 확인. 앞 개체 실제 눈이 흰 반점과 별도로 보임.",
        "behaviorCheck": "여러 마리가 무리를 이루어 살아요. 연안에서 함께 이동하는 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Killer Whale: Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/killer-whale"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: Three killer whales Orcinus orca traveling together through cool northeast Pacific coastal water. Underwater broad three-quarter view from slightly above, looking toward their heads, distinctly different from a single side profile. One foreground adult female and two smaller distant individuals with separate visible bodies and comfortable space, all moving quietly in the same direction below the sunlit surface. The nearby adult is completely framed; distant animals also completely framed. Low-contrast rocky coast/kelp far away, no prey and no acrobatic behavior.\nAnatomy: each whale has black back, white underside, small natural eyes distinct from white patches behind eyes, gray saddle behind one upright dorsal fin, exactly two rounded pectoral flippers, horizontal left-right tail flukes perpendicular to its dorsal fin. Female's dorsal fin modestly curved, not all whales giant male dorsal fins. Keep tails visibly spreading left-right in horizontal planes even under perspective. Do not invent visible sound waves."
        ],
        "generatedAt": "2026-10-03T00:41:28.636Z",
        "checkedAt": "2026-10-03",
        "sha256": "e32e4190d105e7737d9be2634690bf506285514eaa061d73bd83609bfd89eddb",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "sea-otter",
    "name": "해달",
    "scientificName": "Enhydra lutris",
    "group": "포유류",
    "habitatIds": [
      "coast"
    ],
    "summary": "연안에서 등을 대고 떠 있으며 두꺼운 털로 체온을 유지하는 해양포유류.",
    "identity": [
      "조밀한 털, 작은 앞발과 넓은 뒷발, 수면에서 배를 위로 한 자세가 특징이다."
    ],
    "ecology": "성게 같은 바닥의 무척추동물을 먹으며 다시마 숲의 먹이망에 중요한 역할을 한다. 북방·남방·러시아 아종이 있다.",
    "diet": "게, 성게, 조개, 전복 등; 북방 해달은 물고기도 먹는다.",
    "range": "북태평양 연안. 캘리포니아 남방해달과 알래스카·브리티시컬럼비아·러시아·일본의 아종을 구분한다.",
    "size": "Monterey가 설명한 남방해달 기준 길이 약 1.2 m, 몸무게 약 32 kg까지. 종 전체의 일률적인 최대값은 아니다.",
    "depth": "연안·하구·다시마 숲에서 수면 생활과 바닥 먹이 잠수를 한다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Sea otter",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Sea otter"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "sea-otter",
        "src": "assets/images/sea-otter-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해달 · 물 위에 등을 대고 떠 있는 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "털로 덮인 몸·앞발 2개·물갈퀴가 있는 뒷발 2개·짧은 꼬리를 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult sea otter, Enhydra lutris, floating naturally on its back at the ocean surface. Slightly elevated three-quarter full-body view so entire head, body, paws, hindfeet and tail are visible. Dense dark-brown waterproof fur with a lighter tan round face, small rounded ears, black nose and fine pale whiskers, realistic small dark eyes. Exactly FOUR limbs: two small forepaws resting naturally on chest, TWO broad flattened webbed hindfeet extending behind belly, one short thick tapered furry tail between hindfeet. Natural compact otter proportions, no human hands or exaggerated baby face. Clear calm blue coastal water, only small realistic ripples around animal; keep foreground simple and no other animal, shell, stone or kelp obscuring paws. Peaceful expression but closed natural mouth, not smiling. Avoid beaver paddle tail, seal flippers or river-otter long sleek tail."
        ],
        "generatedAt": "2026-10-02T17:50:11.449Z",
        "checkedAt": "2026-10-03",
        "sha256": "5a209f264b3bc548108802e53f89c6e747af239c1819e2d2d6046a0c0b939ebd",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "sea-otter",
        "src": "assets/images/sea-otter-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "해달 · 돌로 조개를 열 준비하기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "젖은 털·작은 귀·근측 눈·수염·앞발 2개·물갈퀴 뒷발 2개·별도 꼬리 1개 확인. 돌·조개 분리되고 사람 손·망치 없음.",
        "behaviorCheck": "해달은 가슴을 받침으로 삼고 돌을 써서 단단한 먹이를 열어요. 조개를 두드리기 직전의 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Sea otter: feeding and kelp habitat",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One southern sea otter Enhydra lutris floating on its back at the quiet surface of a California coastal kelp bed, seen three-quarter from above. Its furry chest is a table: a small rounded smooth stone rests on its chest, both small forepaws holding one closed clam shell just above the stone in the moment before cracking it. Show clearly that this is shell against stone, not a hammer held by a human-like hand. Calm natural face, gaze toward the clam, not camera.\nAnatomy: dense dark brown wet fur, paler natural muzzle, small rounded ears, natural eyes, long whiskers, exactly two small forepaws with compact animal digits, exactly two broad webbed hindfeet spread at the lower end, one furry tapered tail distinct from hindfeet. All body, feet, tail and tools framed. Small real clam, no giant shell, no piles of food, no shattered shell spray. Kelp floating quietly nearby."
        ],
        "generatedAt": "2026-10-03T00:43:22.815Z",
        "checkedAt": "2026-10-03",
        "sha256": "6728a7001702b411c8dc573fdef20261bfcd49a03f03fd4cba1edb29f911fc28",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sea-otter",
        "src": "assets/images/sea-otter-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "해달 · 다시마 숲으로 잠수하기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "털 난 전신·귀·눈·수염·접힌 앞발 2개·물갈퀴 뒷발 2개·별도 꼬리 확인. 원측 뒷발 일부는 자연가림.",
        "behaviorCheck": "다시마 숲에서 살며 바닥의 먹이를 찾으러 잠수해요. 이 장면에서는 아래로 헤엄쳐 가고 있어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Sea otter: feeding and kelp habitat",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One sea otter Enhydra lutris swimming downward through a California giant-kelp forest, viewed underwater from a slightly low side-front angle. The complete otter is moving horizontally and gently downward with its back uppermost, muzzle pointed toward a quiet rocky seafloor, no food in paws or mouth. Kelp stems and golden blades stand around it with open space separating the animal from plants, sun rays above, natural clear blue-green water. Very different pose from floating on its back.\nAnatomy: natural sleek dense dark brown fur and light muzzle, small ears, whiskers, two natural eyes (far eye can be naturally hidden), compact forepaws two held tucked close to chest, exactly two large webbed hindfeet propelling it behind, one long tapered furry tail clearly separate from the hindfeet. No seal flippers replacing paws, no fish fins. Whole animal and tail framed with margin. No bubbles coming from its eyes or invented breathing apparatus."
        ],
        "generatedAt": "2026-10-03T00:44:59.993Z",
        "checkedAt": "2026-10-03",
        "sha256": "81e6bcadf504252d05adc29dce6e50a115f3c15e3f2cb8e3c021d18645190f48",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sea-otter-purple-sea-urchin",
        "src": "assets/images/sea-otter-purple-sea-urchin-chatgpt-interaction-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해달과 자주성게 · 수면에서 먹이를 살피기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "해달의 젖은 갈색 털, 둥근 작은 귀, 수염, 자연스러운 눈과 코, 성게를 잡은 앞발 2개, 각각 구분되는 넓은 물갈퀴 뒷발 2개와 하나의 털 있는 꼬리를 확인했다. 자주색 가시로 덮인 작은 둥근 성게가 앞발 사이에 있고 얼굴이나 과장된 이빨이 없다.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult sea otter, Enhydra lutris, floating naturally on its back at the ocean surface. Slightly elevated three-quarter full-body view so entire head, body, paws, hindfeet and tail are visible. Dense dark-brown waterproof fur with a lighter tan round face, small rounded ears, black nose and fine pale whiskers, realistic small dark eyes. Exactly FOUR limbs: two small forepaws resting naturally on chest, TWO broad flattened webbed hindfeet extending behind belly, one short thick tapered furry tail between hindfeet. Natural compact otter proportions, no human hands or exaggerated baby face. Clear calm blue coastal water, only small realistic ripples around animal; keep foreground simple and no other animal, shell, stone or kelp obscuring paws. Peaceful expression but closed natural mouth, not smiling. Avoid beaver paddle tail, seal flippers or river-otter long sleek tail.",
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult Pacific purple sea urchin, Strongylocentrotus purpuratus, whole animal on a small simple rocky surface in clear cool coastal water, slightly elevated oblique view. Compact rounded flattened spherical test densely covered in medium-short sturdy tapering purple-violet SPINES with natural varied lengths radiating outward. Fivefold radial organization subtle, many fine flexible translucent tube feet emerge BETWEEN rigid spines, some gently gripping the rock. Natural dark muted violet body, lighter spine tips, one central test only. Spines clearly separate from tube feet; no flowers or faces. Entire outline and all longest spine tips visible with generous plain blue-water margin. No long needle-like black Diadema spines, red urchin, starfish arms, tentacle crown, sea-anemone body, fantasy bioluminescence, eyeballs, mouth on top, multiple urchins or kelp obscuring outline.",
          "Use case: scientific-educational illustration for Sea Atlas ages 5–12. Own reference image1 is Enhydra lutris SEA OTTER anatomy, own reference image2 is Strongylocentrotus purpuratus PURPLE SEA URCHIN anatomy. Create ONE original natural-history painting, landscape3:2, whole otter floating on its BACK at the ocean surface beside a quiet kelp bed, holding ONE SMALL INTACT purple sea urchin carefully between its TWO small furred front paws just above its chest, before opening or eating it. This is an ecological predator-prey interaction, not friendship or play. Sea urchin round body about 8cm across excluding short stout purple spines; visually fist-sized relative to the 1.2m otter, never a gigantic ball. Urchin no eyes or face and no enlarged teeth or flowerlike mouth; underside mouth naturally obscured by the paws. Otter natural wet brown fur, small rounded ears, whiskers, two visible front paws, TWO separate broad WEBBED hind feet raised gently at right, and ONE distinct furry tail beyond them; accurate animal paws, not human fingers. Whole otter and tiny whole urchin including leg/foot/tail ends in frame with generous margins. Elevated side-camera angle, otter head upper-left looking neutrally at the urchin, kelp fronds and a few bulbs on calm water at the sides, natural daylight, refined realistic painterly style matching references. No rock needed. No cracking shell, exposed tissue, blood, wounds, missing spines, anthropomorphism, smile, glowing eyes, labels, text, logo, borders, boats or people. The otter is on the surface, NOT eating underwater. This reconstructed scene explains sea otters taking urchin prey in kelp ecosystems, not an observed individual event."
        ],
        "generatedAt": "2026-10-03T01:28:25.776Z",
        "checkedAt": "2026-10-03",
        "sha256": "9755913febc9a8f890d84470e1360b4ad4e845d8cda7bb248d5fe364b1fbc108",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "해달은 바닥에서 잡은 성게를 수면으로 가져와 먹어요. 성게를 살피는 먹이 관계를 그린 장면이며 실제 섭취 순간을 보여주지는 않아요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium · Sea otter feeding and kelp ecosystem",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
          },
          {
            "title": "Monterey Bay Aquarium · Purple sea urchin",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
          }
        ],
        "interactionIds": [
          "sea-otter",
          "purple-sea-urchin"
        ]
      },
      {
        "id": "sea-otter",
        "src": "assets/images/sea-otter-chatgpt-maternal-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해달 · 새끼를 배 위에 올려 돌보기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 작은 둥근 귀·눈과 코·수염·조밀한 털의 성체와 독립된 작은 새끼 머리·몸 연결을 확인. 성체 두 넓은 뒷발과 별도의 짧은 털 꼬리, 새끼 두 뒤발이 프레임 안에 있다. 앞발 일부와 새끼 꼬리는 몸·털·성체 앞발에 가려진다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create exactly ONE original 3:2 landscape natural-history illustration for Sea Atlas for children ages 5–12, refined painterly realism, educational reconstruction rather than a photograph. Show TWO anatomically plausible southern sea otters Enhydra lutris nereis in calm Monterey Bay coastal water beside sparse floating kelp: a full adult floating naturally on its back, with a much smaller fluffy pup lying separately on the adult's chest and belly, as a maternal-care reconstruction. Slightly elevated three-quarter view. Adult has dense wet dark brown fur, paler rounded tan face, small round ears, dark nose and fine whiskers, exactly two short forepaws loosely around the pup without anthropomorphic fingers, two broad webbed hindfeet resting on the water, one short flattened furry tail. Pup has its own connected head and torso, two short forepaws, two separate hindfeet and a small furry tail; show the pup curled naturally with its limbs clearly belonging to it, no fused paws or duplicated bodies. Keep adult's hindfeet and tail and the entire pup inside the canvas with generous 10 percent margins. Natural small dark eyes, no cartoon smile or clothing. Soft daylight and uncluttered teal water, subtle surface ripples, distant kelp only. This is a calm care scene, not feeding or nursing, no human, aquarium structures, text, labels, collage, logo, border, wounds, gore or toy appearance. Do not depict giant sea-lion flippers or a long river-otter tail."
        ],
        "generatedAt": "2026-10-03T13:15:58.453Z",
        "checkedAt": "2026-10-03",
        "sha256": "0fa8a3b4037f8411af2d4985d36bf238a83b1d377da0e42bb621fc29916dddd3",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "남방해달의 수면 새끼 돌봄 자료에 근거한 교육 재구성. 그림만으로 친자 관계·성별·정확한 나이·보온 효과나 돌봄 성공을 확정하지 않는다.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Sea otters, adult carrying pup on chest",
            "url": "https://www.montereybayaquarium.org/visit/exhibits/sea-otters"
          },
          {
            "title": "Monterey Bay Aquarium — Life of a rescued sea otter, coat buoyancy and learning",
            "url": "https://www.montereybayaquarium.org/about-us/stories/life-of-a-rescued-sea-otter"
          },
          {
            "title": "Monterey Bay Aquarium — Wild southern sea otter mother and pup",
            "url": "https://www.montereybayaquarium.org/wallpaper/wild-southern-sea-otter-mom-pup-wallpaper"
          }
        ]
      }
    ]
  },
  {
    "id": "green-sea-turtle",
    "name": "푸른바다거북",
    "scientificName": "Chelonia mydas",
    "group": "파충류",
    "habitatIds": [
      "reef",
      "coast",
      "pelagic"
    ],
    "summary": "어릴 때는 외해에서 지내다가 연안으로 옮겨 해초와 해조류를 먹는 바다거북.",
    "identity": [
      "비교적 작은 머리, 눈 사이 큰 비늘 두 개, 등갑 양옆 네 쌍의 판을 확인한다. 이름과 달리 등갑은 갈색·회색·올리브색일 수 있다."
    ],
    "ecology": "공기 호흡을 하고 암컷은 모래 해변에 알을 낳는다. 어린 시기와 성체의 서식지와 먹이가 다르다.",
    "diet": "성체는 주로 해초와 해조류. 어린 개체와 일부 지역 집단은 동물성 먹이도 먹는다.",
    "range": "세계의 열대·아열대 바다와 산란 해변.",
    "size": "NOAA의 일반 성체 설명은 길이 약 0.9–1.2 m. 나이와 지역에 따라 달라진다.",
    "depth": "외해의 유년기에서 얕은 연안의 먹이터까지 성장 단계에 따라 변화한다.",
    "sources": [
      {
        "title": "NOAA Fisheries — Green Turtle",
        "url": "https://www.fisheries.noaa.gov/species/green-turtle"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "바다거북",
      "Green sea turtle"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "green-sea-turtle",
        "src": "assets/images/green-sea-turtle-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "푸른바다거북 · 등딱지와 네 지느러미발",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "지느러미발 4개·등딱지 가운데 방패 5개와 양옆 방패 4쌍을 육안 대조. 머리의 세부 비늘로 종을 동정한 것은 아님.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult green sea turtle, Chelonia mydas, swimming calmly, slightly elevated three-quarter dorsal view with entire shell, head, FOUR flippers and small tail visible. Oval smooth olive-brown mottled carapace with FIVE central vertebral scutes and exactly FOUR pairs of large costal scutes along the sides; tidy natural plate boundaries, not an arbitrary hexagon mosaic. Relatively small rounded head and blunt beak, no strongly hooked hawksbill beak. TWO large prefrontal scales visible between the eyes on top of head, one pair. TWO long front paddle flippers, TWO shorter rear flippers, one small tail; far flippers may be foreshortened but not duplicated. Natural brown and olive shell with warm cream plastron edge, subtly scaled gray-green head and limbs, no neon green body. Pale blue tropical water, faint sandy bottom far beneath; no other creatures or coral obscuring shape. One claw per front flipper if visible; no tortoise walking legs."
        ],
        "generatedAt": "2026-10-02T17:51:24.783Z",
        "checkedAt": "2026-10-03",
        "sha256": "5eabd5be811c80efe942db04f240b650225e1228b0da20c9c5fce83d6076ebaa",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "green-sea-turtle",
        "src": "assets/images/green-sea-turtle-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "푸른바다거북 · 해초 뜯어 먹기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "매끈한 넓은 등갑·둥근 머리·작은 부리·근측 눈·근측 앞지느러미·뒤지느러미 2개·별도 짧은 꼬리 확인. 반대 앞지느러미·비늘·scute 전수는 확인 불가.",
        "behaviorCheck": "자란 푸른바다거북은 해초와 해조류를 먹어요. 얕은 바다에서 해초에 입을 대는 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Green Turtle: diet and night-time nesting",
            "url": "https://www.fisheries.noaa.gov/species/green-turtle"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One adult green sea turtle Chelonia mydas grazing living seagrass in a shallow clear coastal meadow. Low underwater side three-quarter view, head lowered with its beak gently touching and clipping a few natural thin seagrass blades rooted in sand, calm sunny water and broad meadow behind. Show whole turtle and all limbs within frame. The plant is seagrass, flat narrow ribbon leaves arising in small shoots, not floating lettuce or coral.\nAnatomy: smooth broad brown-olive hard shell with five central vertebral scutes and four costal scutes per side in regular natural arrangement; small rounded head and modest serrated beak, no hawksbill hook, one pair of large prefrontal scales between eyes when visible. Exactly two long front flippers and two smaller rear flippers, one small separate tail, natural dark eyes (far eye may be hidden). Grazing mouth slightly open, not human teeth. No fish prey. Foreground grass may naturally partly overlap small limb areas but must not hide entire body."
        ],
        "generatedAt": "2026-10-03T00:46:48.997Z",
        "checkedAt": "2026-10-03",
        "sha256": "8520049ccf62bc87b8566c579a6678596463234fcc27dd83af649ed4570cdd61",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "green-sea-turtle",
        "src": "assets/images/green-sea-turtle-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "푸른바다거북 · 밤 해변에서 둥지 만들기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전신 등갑·둥근 머리·근측 눈·긴 근측 앞지느러미·뒤지느러미 2개·별도 짧은 꼬리 확인. 반대 앞지느러미와 scute 전수는 가림으로 확인 불가.",
        "behaviorCheck": "암컷이 밤에 모래 해변으로 올라오는 산란기 모습을 그렸어요. 모래 아래의 알이나 산란이 끝난 순간을 보여주지는 않아요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Green Turtle: diet and night-time nesting",
            "url": "https://www.fisheries.noaa.gov/species/green-turtle"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One adult female green sea turtle Chelonia mydas alone on a quiet natural tropical sandy nesting beach at night. Slightly elevated rear-side three-quarter view showing her complete body from head to short tail. She rests in a shallow body pit, a rear flipper gently working the sand beside the deeper egg chamber under her rear. Eggs are entirely concealed underground; no cutaway, no exposed eggs, no hatchlings, no visible reproductive organs. This is a nesting-period scene, not a human-assisted event. Calm moonlit ocean in far background, pale soft natural moonlight and dark shore vegetation; bright enough to read anatomy but distinctly night, no artificial lights.\nAnatomy: broad smooth olive-brown hard shell, five central scutes and four costal scutes per side regular arrangement, small rounded head and modest beak, two long front flippers resting on sand, exactly two shorter rear flippers associated with nest digging, one short tail distinct from hindflippers; no land tortoise feet, no fifth limb. Near natural eye visible if angle allows. Avoid tiny circular cage-like nest ring or eggs sitting on top of sand."
        ],
        "generatedAt": "2026-10-03T00:48:17.865Z",
        "checkedAt": "2026-10-03",
        "sha256": "2eff72da209cb3a5771e01c7e2e37f996ac4f2820bedb8611ae6745521d1f57d",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "green-sea-turtle",
        "src": "assets/images/green-sea-turtle-chatgpt-juvenile-ecology-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "외해의 떠다니는 모자반 주변을 유영하는 어린 바다거북의 교육 재구성.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "앞긴핀2·뒤짧고넓은핀2·별도짧은꼬리·둥근머리와올리브갈색등갑 확인. v1길고좁은뒤핀문제 교정됨. 머리전전두비늘·늑갑판전수는경계/투영미감수.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. A young oceanic-stage green sea turtle Chelonia mydas swimming naturally near a loose mat of FLOATING Sargassum in warm open-ocean surface water. Full turtle in a new oblique overhead-three-quarter view with exactly four separate paddle-like flippers and short tail inside margins. Rounded modest head, one pair of prefrontal scales when readable, four lateral costal scutes on each side where perspective allows, olive-brown heart-shaped shell, no hawksbill hooked beak or leatherback ridges. Natural growth proportions, no infant cartoon eyes. Floating branched golden-brown Sargassum with tiny air bladders, never rooted seabed kelp; no reef or seafloor. Mouth closed, not eating a giant plant leaf, no plastic. Small natural drift-community particles, gentle surface light. Do not claim precise age or a completely herbivorous diet.",
          "Edit this original green sea turtle Chelonia mydas floating-Sargassum illustration. Correct only the turtle appendage proportions while preserving the realistic shell/head, four anatomically connected flippers, short tail and offshore floating Sargassum background. TWO ANTERIOR flippers at the shoulders beside the neck remain long narrow wing-shaped swimming flippers (upper-center and right). TWO POSTERIOR flippers at the back of the shell must BOTH be clearly short small BROAD rounded steering paddles, each only about ONE THIRD the length of an anterior flipper. CRITICAL: the long narrow appendage emerging from the lower-left rear corner of the shell is a HIND flipper and must become a SHORT BROAD rounded hind paddle, not a second long front wing. Make the far-side rear flipper (leftmost near tail) likewise a short small broad paddle. No extra limbs, keep all four distinct, short tail between rear flippers, complete tips with margin. Natural young oceanic-stage turtle, not a claim of exact age. Landscape3:2 painterly educational realism ages5–12, no text, cartoon face, blood or humans. No pixel cropping, show full animal."
        ],
        "generatedAt": "2026-10-03T12:39:35.786Z",
        "checkedAt": "2026-10-03",
        "sha256": "ee3eedaca0f607caa8d15714c95ac0b31edb30d7346d93fdcf102692d4459b76",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "외해모자반 drift-community 재구성. 정확한어린연령과실제섭식·순수초식 미인증.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/green-turtle"
          }
        ]
      }
    ]
  },
  {
    "id": "whale-shark",
    "name": "고래상어",
    "scientificName": "Rhincodon typus",
    "group": "어류",
    "habitatIds": [
      "coast",
      "pelagic"
    ],
    "summary": "커다란 입으로 작은 먹이를 걸러 먹는 세계에서 가장 큰 물고기.",
    "identity": [
      "납작하고 넓은 머리, 머리 앞쪽의 큰 입, 어두운 몸 위의 흰 반점과 줄무늬가 특징이다."
    ],
    "ecology": "플랑크톤과 알이 모이는 해역에서 여과섭식한다. 포유류인 고래와 달리 아가미로 호흡하는 상어다.",
    "diet": "동물플랑크톤, 크릴, 물고기 알, 작은 물고기 등.",
    "range": "대서양·태평양·인도양의 열대 해역.",
    "size": "Georgia Aquarium 소개의 대표 길이는 약 5.5–10 m. 최대 기록과 구분한다.",
    "depth": "외해와 연안에서 관찰되며 먹이를 따라 수면 가까이에 나타나기도 한다. 최대 잠수값은 여기서 단정하지 않는다.",
    "sources": [
      {
        "title": "Georgia Aquarium — Whale Shark",
        "url": "https://www.georgiaaquarium.org/animal/whale-shark/"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "고래 상어",
      "Whale shark"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "whale-shark",
        "src": "assets/images/whale-shark-chatgpt-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "고래상어 · 하얀 점무늬와 다섯 아가미 틈",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "납작하고 넓은 머리·앞쪽 입·점과 선 무늬·근측 아가미 틈 5개·등지느러미 2개·세로 꼬리를 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult whale shark, Rhincodon typus, calm full-body left-facing lateral view, slightly from above so flattened broad head is visible. Very broad flat head, huge wide straight mouth located at the FRONT of head, tiny lateral eye, FIVE gill slits immediately behind head on visible side. Massive streamlined gray-blue body covered with orderly rows of SMALL pale white spots and faint pale cross-lines, pale belly, three subtle longitudinal body ridges. Two pectoral fins, two pelvic fins, TWO dorsal fins with first much larger than second, one anal fin, VERTICAL heterocercal shark caudal fin with longer upper lobe. Far paired fins can be partly occluded; no duplicates. Narrow tailstock, entire tail top and bottom tips fully visible. Gentle tropical blue open water, no teeth display, no prey, no fish around it. Must be a spotted shark rather than whale, no horizontal whale tail, no beak or exaggerated open mouth.",
          "Edit this existing Sea Atlas illustration with one precise anatomical correction: the whale shark must have EXACTLY FIVE distinct gill slits on its visible left side immediately behind the head. Currently the closely spaced curves suggest an extra sixth slit. Replace the whole gill area with a clearly readable sequence of five simple curved vertical slits, no extra gill-like crease, while preserving the pectoral fin attachment. Keep the same Rhincodon typus animal, broad flattened head, front terminal mouth, white spots and pale lines, fin layout and vertical crescent tail, natural realistic illustration style and blue underwater background. Do not add other animals or text. Keep the whole body and tail visible within the frame."
        ],
        "generatedAt": "2026-10-02T18:09:50.464Z",
        "checkedAt": "2026-10-03",
        "sha256": "2ff067ee5e563e256df3453e3522284e67f11d716ce1086fe3c0edfa730a4db1",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "whale-shark",
        "src": "assets/images/whale-shark-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "고래상어 · 입을 벌려 작은 먹이 거르기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "넓은 머리 앞쪽 입·작은 눈·근측 아가미 5틈·반점/줄·등지느러미 2개·가슴지느러미 2개·큰 위엽의 수직 꼬리 확인. 반대 눈/아가미·배지느러미 전수는 가림.",
        "behaviorCheck": "물과 함께 들어오는 플랑크톤 같은 작은 먹이를 걸러 먹어요. 입을 열고 이동하는 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "Georgia Aquarium — Whale Shark: feeding behavior",
            "url": "https://www.georgiaaquarium.org/animal/whale-shark/"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One whale shark Rhincodon typus slowly moving through a subtle concentration of tiny natural suspended plankton particles in warm blue ocean water just below the sunlit surface. Three-quarter head-on underwater view from slightly to its right, enough body shown to see near-side gills and whole tail. Its very wide terminal mouth at the very front of the broad flat head is moderately open to ram filter-feed. This is filtering tiny food from water, not biting a large fish. Plankton is only a faint fine particle haze, no oversized shrimp, no arrows or drawn water jets.\nAnatomy: broad flat head, mouth across the FRONT of head, two small lateral natural eyes, distinct near-side FIVE gill slits as exactly five simple openings, do not count head wrinkles as slits. Dark blue-gray back with rows of small pale spots and faint stripes, white belly, one large first dorsal and one smaller second dorsal fin, exactly two pectoral fins, normal paired pelvic fins, vertical crescent tail with larger upper lobe. All major parts fully in frame, no giant sharp teeth, no baleen curtain. Mouth interior quiet dark and not frightening."
        ],
        "generatedAt": "2026-10-03T00:50:09.195Z",
        "checkedAt": "2026-10-03",
        "sha256": "1989200fec6e806e59cdfb42569ddae25e816ed71ae3a42e34a7b463bc095cd8",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "whale-shark",
        "src": "assets/images/whale-shark-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "고래상어 · 위에서 본 헤엄치는 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "위에서 본 넓은 머리·닫힌 앞쪽 입·작은 눈·근측 아가미 5틈·등지느러미 2개·가슴지느러미 2개·수직 꼬리 확인. 반대 눈/아가미·배지느러미 전수는 가림.",
        "behaviorCheck": "따뜻한 바다를 헤엄치는 모습을 위쪽에서 그렸어요. 넓은 머리와 하얀 점무늬를 찾아보세요.",
        "behaviorSources": [
          {
            "title": "Georgia Aquarium — Whale Shark: feeding behavior",
            "url": "https://www.georgiaaquarium.org/animal/whale-shark/"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One whale shark Rhincodon typus cruising quietly through warm clear turquoise-to-deep-blue ocean water. A high underwater dorsal three-quarter view looking almost down on the back, full animal swimming diagonally from lower-left head toward upper-right tail. Dramatically different from mouth-open close view. Broad flat head and all of the patterned back are visible, mouth closed. Subtle sun caustics and empty quiet water, faint distant seabed only, no fish riders, no dramatic feeding event. Entire head, body and tail inside frame with clear margins.\nAnatomy: white spot rows and faint lines on dark blue-gray dorsal body, broad flattened head, lateral small natural eyes when visible, one tall first dorsal and much smaller second dorsal fin, two broad pectoral fins spreading out separately on left and right, smaller paired pelvic fins behind them. Tail is VERTICAL with larger upper lobe, not horizontal whale flukes; from above use natural perspective and preserve upright orientation. Exactly five gill openings per side only where visible, never invent extra furrows. No baleen, no giant teeth."
        ],
        "generatedAt": "2026-10-03T00:51:26.445Z",
        "checkedAt": "2026-10-03",
        "sha256": "8ac38080e5af2e199173faa8a619b3bab1ceae33e93382caea66d1e436da0d60",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "great-white-shark",
    "name": "백상아리",
    "scientificName": "Carcharodon carcharias",
    "group": "어류",
    "habitatIds": [
      "coast",
      "pelagic"
    ],
    "summary": "회색 등과 흰 배를 가진 큰 포식성 상어. 어린 개체와 성체의 주요 먹이가 달라진다.",
    "identity": [
      "탄탄한 방추형 몸, 뾰족한 주둥이, 큰 삼각형 등지느러미, 회색과 흰색의 뚜렷한 경계를 확인한다."
    ],
    "ecology": "넓은 거리를 이동하며 감각기관으로 먹이를 찾는다. 성체는 물개류를 주요 먹이로 이용하지만 모든 개체의 먹이가 같지는 않다.",
    "diet": "물고기, 가오리와 다른 상어; 큰 성체는 물개와 바다사자 등도 먹는다.",
    "range": "세계 온대 바다의 대륙붕과 외해; 때로 열대 해역에도 들어간다.",
    "size": "Monterey 소개에서 성체 길이 약 6.4 m까지, 암컷이 대체로 더 크다. 별도의 최대 보고값과 구분한다.",
    "depth": "수면부터 약 1,280 m까지의 이용 기록이 소개되어 있다. 항상 심해에 산다는 뜻은 아니다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — White shark",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/white-shark"
      }
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "aliases": [
      "백상어",
      "Great white shark"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "great-white-shark",
        "src": "assets/images/great-white-shark-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "백상아리 · 회색 등과 흰 배의 옆모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "뾰족한 주둥이·회색 등과 흰 배·근측 아가미 틈 5개·큰 첫 등지느러미와 작은 둘째 등지느러미·세로 꼬리를 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult great white shark, Carcharodon carcharias, calm full-body left-facing lateral underwater view with closed mouth. Stout powerful torpedo-shaped body, moderately pointed conical snout, small black lateral eye, FIVE gill slits behind head. Slate-gray upper half and white belly with clear natural boundary, not covered in spots. TWO dorsal fins: one large triangular first dorsal and one very small second dorsal nearer tail. Two long triangular pectoral fins, two pelvic fins and one small anal fin. VERTICAL crescent-shaped caudal fin with approximately balanced upper and lower lobes and narrow caudal peduncle, visible lateral keel. Far paired fins may be occluded, no duplicated fins. Full animal including ALL tail and fin tips inside frame. Plain cool blue ocean, no prey or bubbles obscuring features. Peaceful scientific portrait, no attack, open jaws, exaggerated teeth, scars, blood or frightening monster features. No horizontal whale tail, whale-shark dots or hammerhead."
        ],
        "generatedAt": "2026-10-02T17:53:28.910Z",
        "checkedAt": "2026-10-03",
        "sha256": "754ce1c03e86dde060c6e1e3c3a132494db7a656df18c1d39f2398a55b7726cb",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "great-white-shark",
        "src": "assets/images/great-white-shark-chatgpt-feeding-approach-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "백상아리 · 몸을 굽혀 물고기 무리 쪽으로 돌기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "회색 등과 흰 배, 원뿔 주둥이와 작은 옆눈, 근측 다섯 아가미 틈, 양쪽 가슴지느러미, 큰 앞 등지느러미와 작은 뒤 등지느러미, 연속 꼬리자루와 두 꼬리엽을 원본에서 확인. 전신과 끝이 잘리지 않음.",
        "behaviorCheck": "어린 백상아리는 물고기 같은 먹이를 먹어요. 작은 물고기 무리에 다가가는 장면을 구성했어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — White Shark: juvenile diet and habitat",
            "url": "https://www.fisheries.noaa.gov/species/white-shark"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One juvenile great white shark Carcharodon carcharias in shallow temperate coastal water above a sandy continental-shelf seabed, calmly pursuing a small group of intact small silver schooling fish ahead of it. The shark is a lean young animal, not a huge bulky adult; fishes individually much smaller than shark. Side three-quarter view, entire shark and tail framed with margin, fish group separated from the shark's mouth. A moment before capture, no fish being bitten, no injury and no dramatic attack. Mouth almost closed or very slightly parted, no giant display of teeth.\nAnatomy: natural conical snout and compact round dark lateral eye; gray dorsal body and white belly, exactly five distinct near-side gill slits, large triangular first dorsal fin and much smaller second dorsal fin, exactly two pectoral fins with proper roots, paired pelvic fins, small anal fin, strong narrow caudal peduncle with keel, vertical crescent-shaped tail, no horizontal whale tail. Young white shark body proportions, not an adult seal-hunting monster. Quiet blue-green water, subtle sand and distant reef rock, no seals, people or gear.",
          "Use case: scientific-educational. Sea Atlas natural-history painted illustration, landscape 3:2, ages 5–12, realistic marine anatomy. Input image is an identity and painterly style reference ONLY. Completely redraw the animal in the specified different three-dimensional view and pose; do not preserve, mirror, rotate or paste the old side-on silhouette. Full animal including every fin and tail tip inside generous margins. Calm educational mood, no text, labels, panels, watermark, people, gore or fantasy. One young Carcharodon carcharias in shallow temperate coastal water approaches a few small intact silver fish with a clear gap. NEW VIEW from low FRONT three-quarter: conical nose nearest at lower centre-left, torso recedes diagonally up-right; show the white underside and both pectorals in strong perspective. NEW POSE gentle continuous C-shaped turning trunk with the caudal peduncle and entire vertical crescent tail bent to the shark's left, near pectoral angled down and far pectoral raised sideways. NOT a straight horizontal fish tilted on canvas. Lean juvenile proportions, natural small dark eyes, five gill slits visible on near side, grey back and white belly, one large triangular anterior dorsal plus one much smaller posterior dorsal, paired pectorals/pelvics, small anal fin, narrow keeled caudal peduncle. Almost closed mouth, no giant tooth grin, no successful bite. Subtle sand and rocks behind, fish separated and much smaller. No seals."
        ],
        "generatedAt": "2026-10-08T16:38:58.246Z",
        "checkedAt": "2026-10-11",
        "sha256": "d629d42e9817f35dd7d30a431a07578a88b607e8f8a0904f4ff7abbef97f7200",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "앞쪽 아래 사선에서 본 가까운 머리와 흰 배",
        "pose": "완만하게 굽은 몸통과 꼬리, 서로 다른 각도의 가슴지느러미",
        "poseVariationCheck": "기존 시트02의 수평 옆모습 세 컷과 달리 머리가 가까운 앞 사선으로 몸이 후퇴하고 가슴지느러미 두 각도와 꼬리 굽힘이 달라짐. 평면 회전이나 미러로 만든 차이 아님.",
        "visualLimitations": "몸 C자 굽힘은 약하며 핵심 변화는 원근과 지느러미 각도. 먼쪽 지느러미 일부는 자연스럽게 가려짐. 배·등이 함께 보이는 앞 사선이며 아주 낮은 배면 시점으로 단정하지 않음. 원측 배지느러미 등 작은 부위는 가림 때문에 전수 확인 불가. 실제 나이·사냥 성공·전문 동정으로 해석하지 않음."
      },
      {
        "id": "great-white-shark",
        "src": "assets/images/great-white-shark-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "백상아리 · 먼바다에서 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원추형 주둥이·작은 눈·근측 아가미 5틈·등지느러미 2개·가슴지느러미 2개·흰 배/회색 등·수직 꼬리·닫힌 입 확인. 반대 눈/아가미·작은 짝지느러미 전수는 가림.",
        "behaviorCheck": "자란 백상아리가 먼바다를 헤엄치는 장면이에요. 비스듬한 아래쪽에서 본 모습으로 그렸어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — White Shark: juvenile diet and habitat",
            "url": "https://www.fisheries.noaa.gov/species/white-shark"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One adult great white shark Carcharodon carcharias peacefully cruising in open temperate ocean. Low underwater oblique front-side view looking upward at the pale underside and near flank while the animal passes diagonally from lower-right head to upper-left tail. Entire animal and all fin tips clearly framed with generous margin. Empty deep blue water beneath, distant sunlit surface above, no seabed or coast and no prey; no charging toward camera, no open-mouthed attack. This view is distinctly different from a flat side-profile coastal feeding picture.\nAnatomy: robust torpedo body with conical snout and natural small dark eyes, gray back sharply countershaded to white underside, one large triangular upright first dorsal fin and one much smaller second dorsal fin, exactly two long pectoral fins arising from side body behind gills, paired pelvic fins, small anal fin, narrow caudal peduncle with keel, vertical crescent tail with upper and lower lobes. Exactly five near-side gill slits if seen, no sixth crease, no extra fins. Mouth CLOSED and relaxed, no visible rows of giant teeth, smooth natural fin edges, no injuries. Natural camera perspective can hide far-side small fins, don't invent extra appendages."
        ],
        "generatedAt": "2026-10-03T00:54:48.050Z",
        "checkedAt": "2026-10-03",
        "sha256": "4a06731d1d4bd16358a9161a5aff731376bfa6280647350db316419a9a685df2",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "clownfish",
    "name": "퍼큘라 흰동가리",
    "scientificName": "Amphiprion percula",
    "group": "어류",
    "habitatIds": [
      "reef",
      "coast"
    ],
    "summary": "주황색 몸과 세 개의 흰 띠를 가진 작은 산호초 물고기로 말미잘과 함께 산다.",
    "identity": [
      "세 개의 흰 세로띠와 검은 테두리, 둥근 몸을 확인한다. 원명 Clown anemonefish; 닮은 Amphiprion ocellaris와 사진만으로 혼동하기 쉽다."
    ],
    "ecology": "숙주 말미잘 주변에서 영역을 지키고 알을 돌본다. 집단의 번식 암컷이 사라지면 큰 수컷이 암컷으로 성전환할 수 있다.",
    "diet": "동물플랑크톤, 작은 바닥 무척추동물과 해조류 등.",
    "range": "서태평양의 따뜻한 얕은 바다.",
    "size": "Georgia Aquarium 소개는 길이 약 7.6 cm까지. 암컷이 수컷보다 대체로 크다.",
    "depth": "주로 약 12 m보다 얕은 연안의 산호초와 암반.",
    "sources": [
      {
        "title": "Georgia Aquarium — Clown Anemonefish",
        "url": "https://www.georgiaaquarium.org/animal/clown-anemonefish/"
      },
      {
        "title": "WoRMS — Amphiprion percula",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=278402"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "주황흰동가리",
      "흰동가리",
      "Percula clownfish",
      "Clown anemonefish"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "clownfish",
        "src": "assets/images/clownfish-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "퍼큘라 흰동가리 · 주황색 몸과 세 흰 띠",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "주황색 몸·흰 띠 3개·띠와 지느러미의 검은 테두리를 육안 대조. 유사종과의 전문 동정은 미완료.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult true percula clownfish, Amphiprion percula, full-body left-facing lateral view in clear blue shallow reef water, with only faint soft sea-anemone tentacles low in background that never obscure fish. Warm orange compact deep body, exactly THREE vertical white bands with broad dark-black borders: first band immediately behind eye/head, second mid-body band with a rounded forward bulge, third band near the tail base. Broad black edging around fins and white bands, realistic natural true-percula pattern rather than generic ocellaris. Single small realistic lateral eye with orange iris and dark pupil. One continuous dorsal fin with a spiny front section and soft rounded rear section, rounded fan-shaped tail, pectoral fin behind gill cover, small pelvic and anal fins. Front dorsal section has ten spines if individually visible. All fin tips visible, natural small mouth closed, no smile or exaggerated cartoon eyes. No fourth white band, no horizontal body stripes, no maroon clownfish, no duplicated fish or fin."
        ],
        "generatedAt": "2026-10-02T17:54:34.017Z",
        "checkedAt": "2026-10-03",
        "sha256": "f8affaa209618eca58d030ecb06cbbff25435676f697c159a47e3ee69bdfe6a3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "clownfish",
        "src": "assets/images/clownfish-chatgpt-feeding-hover-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "퍼큘라 흰동가리 · 앞에서 본 먹이 찾기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "주황 몸의 검은 테두리를 가진 흰 띠 세 개, 양쪽 눈과 가슴지느러미, 이어진 등지느러미와 둥근 꼬리 확인. 지느러미 뿌리와 몸이 연속 연결됨.",
        "behaviorCheck": "말미잘 가까이에서 작은 동물플랑크톤을 먹어요. 아주 작은 먹이는 알아보기 쉽도록 표현했어요.",
        "behaviorSources": [
          {
            "title": "Georgia Aquarium — Clown Anemonefish",
            "url": "https://www.georgiaaquarium.org/animal/clown-anemonefish/"
          },
          {
            "title": "Museums Victoria — Fishes of Australia: Amphiprion percula",
            "url": "https://fishesofaustralia.net.au/Home/species/317"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One wild-type Amphiprion percula beside its host anemone Heteractis magnifica on a shallow tropical reef, clear lateral view looking left, fish mouth slightly open picking a tiny transparent zooplankton crustacean just above the tentacle tips. Show precisely three vertical white bars behind eye, at midbody with a forward round bulge, and on tail base; distinctly black-bordered white bars and fins, orange body, natural small eye, continuous dorsal fin, entire tail visible. A few very small plankton specks, not oversized shrimp or a swarm; anemone only in lower right, fish silhouette clear. Mild feeding event reconstruction without injury.",
          "Use case: scientific-educational. Sea Atlas natural-history painted illustration, landscape 3:2, ages 5–12, realistic marine anatomy. Input image is an identity and painterly style reference ONLY. Completely redraw the animal in the specified different three-dimensional view and pose; do not preserve, mirror, rotate or paste the old side-on silhouette. Full animal including every fin and tail tip inside generous margins. Calm educational mood, no text, labels, panels, watermark, people, gore or fantasy. One wild-type Amphiprion percula beside a host anemone Heteractis magnifica picks at a few tiny zooplankton near the tentacle tips, no contact or successful swallowing claimed. NEW VIEW almost HEAD-ON from slightly below and to the fish's left: small orange snout nearest, BOTH lateral eyes and both pectoral fin fans readable, rounded narrow chest, body recedes toward upper right and tail behind. NEW POSE fish gently yaws while hovering, tail gently bent to one side and left/right pectoral fans at different strokes. Not a side portrait looking the other way. Exactly three black-bordered white vertical body bars: behind eye, middle with forward rounded bulge, tail base, naturally foreshortened and partly occluded in this view; no duplicated bars painted on the face. Orange body, natural small eyes, continuous dorsal fin, rounded intact caudal fin. Tiny transparent crustacean in front of mouth with a gap, no giant shrimp, no invented ear fins. Anemone in lower side of frame, silhouette clear."
        ],
        "generatedAt": "2026-10-08T16:40:19.382Z",
        "checkedAt": "2026-10-11",
        "sha256": "2e0a72fca651a9c92bbfdec85dcea3a5dcde6eeb3a4ce2dc024bd356046c5371",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "머리가 가까운 앞 사선",
        "pose": "몸과 꼬리를 살짝 틀고 양 가슴지느러미를 펼쳐 제자리를 지키는 자세",
        "poseVariationCheck": "기존 시트02의 완전 측면/바닥 쪽 하향과 달리 가까운 얼굴의 앞 사선 원근, 양쪽으로 서로 다르게 펼친 가슴지느러미가 실제로 달라짐.",
        "visualLimitations": "완전 정면 대신 앞 사선이며 뒤몸 단축은 약함. 자세 차이는 앞머리 원근과 양가슴지느러미 펼침으로 판단함. 등지느러미 극조/연조 수를 이 삽화로 전문 계수하지 않으며 유사 흰동가리 종과 전문 동정한 것이 아님. 먹이는 교육상 크게 표현한 작은 부유 갑각류로 종·섭식 성공 미확인."
      },
      {
        "id": "clownfish",
        "src": "assets/images/clownfish-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "퍼큘라 흰동가리 · 바위에 붙은 알 지키기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전신 흰 3띠·검은 테두리·꼬리와 자연스러운 가슴지느러미, 말미잘 곁 바위에 붙은 길쭉한 알 확인. 성별·등가시 수는 확정 불가.",
        "behaviorCheck": "수컷이 말미잘 가까운 바위에 붙은 알을 돌보는 장면이에요. 작은 알이 잘 보이도록 확대해 그렸어요.",
        "behaviorSources": [
          {
            "title": "Georgia Aquarium — Clown Anemonefish",
            "url": "https://www.georgiaaquarium.org/animal/clown-anemonefish/"
          },
          {
            "title": "Museums Victoria — Fishes of Australia: Amphiprion percula",
            "url": "https://fishesofaustralia.net.au/Home/species/317"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One adult male wild-type Amphiprion percula, complete side profile angled slightly downward to the right, just above a modest patch of many tiny translucent pale amber elongated eggs attached vertically to a cleaned rock immediately beside a Heteractis magnifica host anemone. The fish guards and gently fans the egg patch with its naturally positioned pectoral fins; a calm brooding scene without visual motion streaks. Show exactly three black-bordered vertical white bars, orange body, middle bar with a forward rounded bulge, black fin borders, natural small eye, continuous dorsal fin and complete tail. Eggs are 3–4mm scale relative to the 7cm fish, no large pebbles or bubble eggs, no second fish, host tentacles do not obscure the fish or egg patch."
        ],
        "generatedAt": "2026-10-03T00:42:37.419Z",
        "checkedAt": "2026-10-03",
        "sha256": "40720594e6a4e268a5b134f6f73bb4fae146e8ceaed1df16700481f8c4b8af3e",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "giant-pacific-octopus",
    "name": "대문어",
    "scientificName": "Enteroctopus dofleini",
    "group": "연체동물",
    "habitatIds": [
      "coast"
    ],
    "summary": "북태평양의 큰 문어. 바위굴에 몸을 숨기고 피부색과 질감을 바꾼다.",
    "identity": [
      "팔 8개와 빨판, 큰 둥근 외투막, 거칠게 변하는 피부를 확인한다. 색만으로 종을 식별하지 않는다."
    ],
    "ecology": "암컷은 굴 천장에 알을 붙여 돌보며 산소가 공급되도록 물을 흘려보낸다. 부화 직후에는 표층에서 작은 먹이를 먹는다.",
    "diet": "게, 조개, 전복, 물고기, 물고기 알과 다른 문어 등.",
    "range": "북태평양 연안.",
    "size": "Monterey 전시 안내는 팔 끝에서 반대편 팔 끝까지 약 2–4 m 이상으로 설명한다. 몸통 길이와 팔 펼친 길이를 혼동하지 않는다.",
    "depth": "바위와 다시마 숲의 굴 등. 번식과 성장 단계에 따라 이용하는 수심이 달라진다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Giant Pacific octopus",
        "url": "https://www.montereybayaquarium.org/animals/animals-a-to-z/giant-pacific-octopus"
      },
      {
        "title": "Monterey Bay Aquarium — Giant Pacific octopus exhibit",
        "url": "https://www.montereybayaquarium.org/visit/exhibits/giant-pacific-octopus"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Giant Pacific octopus"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "giant-pacific-octopus",
        "src": "assets/images/giant-pacific-octopus-chatgpt-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대문어 · 바위 바닥에서 펼친 여덟 팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "팔 끝 왼쪽 3개·가운데 1개·오른쪽 4개로 총 8개를 중앙에서 추적. 둥근 외투막·돌기 피부·팔 안쪽 빨판 줄을 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult giant Pacific octopus, Enteroctopus dofleini, calm on a simple rocky sandy seabed in cool blue coastal water, slightly elevated oblique view. Large soft rounded mantle behind head, realistic two eyes on head, reddish-brown skin with subtle irregular papillae and folds. Exactly EIGHT muscular tapering arms attached around the mouth at the head: four fan gently toward the left and four toward the right/front so all eight separate tips can be followed. Each arm has TWO staggered rows of round suckers along inward underside where visible. Arms may curve gently but must not merge, split, sprout from mantle or become nine/ten arms. No long feeding tentacles or finned squid mantle. Entire animal with all eight arm tips visible and margins, no rocks blocking arms. Mouth and beak mostly concealed at base of arms. Modest natural texture and quiet observation pose, no attacking, open monster mouth, hooks, decorative fins or human-like face.",
          "Correct this existing natural-history illustration of Enteroctopus dofleini. It currently has seven clearly visible arm tips. It must show EXACTLY EIGHT separate continuous arms emerging only from the crown below the eyes. Keep the existing seven arms and add one distinct eighth arm emerging from the center-right base, extending through the open space between the long foreground center arm and lower right arm. Give the new arm a clearly visible tapering curled tip and the same two rows of round suckers as the others. Every arm should be traceable independently to the central crown; no branched, fused, duplicated or disconnected arm, no arm growing from the mantle. The animal has eight arms total, not nine. Preserve the reddish-brown bumpy rounded mantle, golden eyes, broad arm bases, realistic texture, blue shallow rocky habitat, composition and lighting. Keep the complete animal within the frame, all eight arm tips visible, no text or other animals."
        ],
        "generatedAt": "2026-10-02T18:11:33.082Z",
        "checkedAt": "2026-10-03",
        "sha256": "a9e085752fd9917210fb96e0a19cda322ce0c60727de8259c545c9bf6fa2b41e",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "giant-pacific-octopus",
        "src": "assets/images/giant-pacific-octopus-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "대문어 · 팔로 작은 게 붙잡기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 외투막·측면 눈·거친 적갈색 피부·빨판, 바위 곁 짧게 감긴 우후방 끝 포함 8팔 끝 확인. 팔막/머리 겹침으로 8기부 연결 전수는 확인 불가.",
        "behaviorCheck": "빨판이 있는 팔로 게 같은 먹이를 붙잡아요. 일부 팔의 시작 부분은 몸 뒤에 가려져 있어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Giant Pacific octopus",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-pacific-octopus"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One Enteroctopus dofleini holding one small intact crab gently but securely on a cold North Pacific rocky seafloor at the edge of a rocky den. Oblique overhead three-quarter view, large rounded reddish-brown mantle behind head, natural side eye, textured skin, exactly eight distinct arms attached once around the head and gradually tapering to separate tips. Arrange arms clearly: six relaxed arms spread across foreground and sides, two forward arms gently enclosing the small crab; each visible inner arm has two rows of white suckers, no extra branches or tentacles, no squid fins. Entire mantle and all eight arm tips inside frame, crab much smaller than octopus, prey intact and no bites, exposed beak, wounds or torn shells. Quiet cold green-blue water and modest kelp background."
        ],
        "generatedAt": "2026-10-03T00:43:47.571Z",
        "checkedAt": "2026-10-03",
        "sha256": "9bca0b416ebbee15dbd14fcfa74cc19c1e0379048e5bfa386ba35f751a120032",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "giant-pacific-octopus",
        "src": "assets/images/giant-pacific-octopus-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "대문어 · 바위굴에서 알 돌보기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 외투막·측면 눈·적갈색 피부·빨판 팔과 굴 천장의 작은 알줄기 확인. 몸/굴/팔 겹침으로 8팔과 8기부 전수 계수는 확인 불가.",
        "behaviorCheck": "암컷은 굴 천장에 매단 알 무리를 돌봐요. 알과 팔이 보이도록 구성한 그림이며 뒤쪽 팔은 일부 가려져 있어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Giant Pacific octopus",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-pacific-octopus"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One adult female Enteroctopus dofleini caring for strings of tiny rice-grain-size pale eggs suspended from the ceiling of her cold North Pacific rocky den. Wide close three-quarter view into the den, complete rounded reddish-brown mantle and head visible, exactly eight naturally attached tapering arms: two gently reaching toward dangling egg strings, four relaxed around den floor and sides, two resting behind with ends still within the scene. Two rows of white suckers only on visible inner arm surfaces, naturally textured reddish-pink skin, eye on side of head, no squid fins. Keep substantial separation so most arms can be traced, allow only realistic slight overlap. Many delicate egg strands hanging from roof, not huge grapes or eggs on octopus body. Calm dim teal cave with gentle daylight at entrance; no prey since brooding female does not feed, no damage or frightened expression."
        ],
        "generatedAt": "2026-10-03T00:44:43.434Z",
        "checkedAt": "2026-10-03",
        "sha256": "ea8a11a271b2e0d7daaac18975348f9cc8e7ef22702dc78a9227ca043c40ee65",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "vampire-squid",
    "name": "흡혈오징어",
    "scientificName": "Vampyroteuthis infernalis",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "이름과 달리 피를 먹지 않으며 바닷속 유기물 입자인 해양 눈을 모으는 두족류.",
    "identity": [
      "큰 눈, 팔 사이의 막, 외투막의 지느러미, 두 개의 가느다란 먹이 수집 필라멘트가 특징이다."
    ],
    "ecology": "산소가 적은 중층에서 살아가며 긴 필라멘트로 가라앉는 유기물을 모은다. 일반 오징어류와 다른 계통이다.",
    "diet": "해양 눈과 작은 동물플랑크톤.",
    "range": "세계 열대·온대 바다.",
    "size": "MBARI는 전체 길이 약 30 cm까지로 설명한다. 외투막 길이와 혼동하지 않는다.",
    "depth": "MBARI 소개 기준 약 600–900 m, 특히 산소최소층. 이 범위를 모든 지역의 절대 한계로 해석하지 않는다.",
    "sources": [
      {
        "title": "MBARI — Vampire squid",
        "url": "https://www.mbari.org/animal/vampire-squid/"
      }
    ],
    "depthZoneIds": [
      "twilight"
    ],
    "aliases": [
      "Vampire squid",
      "흡혈오징어"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "vampire-squid",
        "src": "assets/images/vampire-squid-chatgpt-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "흡혈오징어 · 막으로 연결된 여덟 팔의 정면",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "중앙에서 이어지는 팔과 끝 8개·팔 사이 막·팔 안쪽 가는 돌기·가느다란 필라멘트 2개·작은 지느러미 한 쌍을 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style.\nSubject: adult vampire squid, Vampyroteuthis infernalis, seen from directly in front of its open arm crown. Anatomical illustration pose optimized to make every arm countable: an open round webbed umbrella has EXACTLY EIGHT natural tapering arms arranged radially, with eight tips at the eight compass directions (top, upper-right, right, lower-right, bottom, lower-left, left, upper-left). Eight arms ONLY, each independently extending from the one central crown; no hidden tip, no ninth arm, no split arms. The round web between adjacent arms is thin reddish-brown translucent tissue with smooth free edges and eight radial supporting arms. Tiny hairlike cirri lie on the INNER surfaces of the eight arms, not around membrane edges. Behind the arm crown in the upper background are the round reddish-brown mantle, two large natural reflective eyes and EXACTLY TWO small paddlelike fins, clearly distinguishable from the eight arms. TWO very fine smooth feeding filaments extend sideways well outside the web, one to either side, distinctly thinner than arms, without sucker rows or clubs. Show the whole single small animal and complete filament ends with clear margins in deep dark blue water, soft illumination revealing the web. Biological natural-history painting, no geometric icon, no labels, no fantasy or horror."
        ],
        "generatedAt": "2026-10-02T18:14:42.596Z",
        "checkedAt": "2026-10-03",
        "sha256": "334810461a03bc00283531c2f1de3761f3fd94bc01d605485bc5ee118d151cc3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "vampire-squid",
        "src": "assets/images/vampire-squid-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "흡혈오징어 · 가는 필라멘트로 해양 눈 모으기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 외투막·핀 2개·큰 눈·얇은 팔막·팔 안쪽 cirri·가는 비분지 필라멘트 2개 확인. 8팔과 필라멘트 기부 연결 전수는 겹침으로 확인 불가.",
        "behaviorCheck": "가는 실 같은 필라멘트로 바닷속 유기물 입자인 해양 눈을 모아요. 작은 입자를 알아보기 쉽게 그렸어요.",
        "behaviorSources": [
          {
            "title": "MBARI — Vampire squid, marine snow feeding",
            "url": "https://www.mbari.org/animal/vampire-squid/"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style, accurate adult anatomy, natural colors and eyes, restrained texture, no anthropomorphism. Landscape 3:2. Show a whole focal animal with important appendages and margins. A meaningful behavior in its actual habitat with uncluttered background; tiny prey if required. No text, labels, arrows, borders, logos, watermark, people, boats, toys, fantasy, horror, blood or injuries. This is an explanatory reconstruction, not documentary photography. Subject: ONE vampire squid, Vampyroteuthis infernalis, gently collecting falling marine snow in dim low-oxygen midwater, not hunting fish. Slightly low side-front three-quarter camera, round reddish-brown mantle at upper-right, large natural reflective eyes, exactly two small paddlelike fins on mantle, webbed crown opening toward lower-left. Eight tapering arms joined by thin natural webbing form a relaxed open cloak; show separate arm ribs and tips where visible, never extra thick limbs. Tiny soft fingerlike cirri attach to INNER faces of arms, not a comb of teeth along membrane edges. EXACTLY TWO hair-thin smooth unbranched feeding filaments emerge from the arm crown: one extends far LEFT into sparse pale organic flakes, with a few tiny particles attached; the other curves down-right closer to the crown as if being drawn back. The filaments are much thinner than arms, have no club-shaped tips, no hooks or rows of huge suckers, and complete filament ends stay in frame. Marine snow is irregular tiny floating fragments, not literal ice crystals, giant eggs or sparkling magical snow. Soft explanatory light reveals the mantle and clear arm web against quiet dark blue water. No fish, blood, horror, black ink, bioluminescent laser eyes, teeth or fantasy."
        ],
        "generatedAt": "2026-10-03T00:49:08.240Z",
        "checkedAt": "2026-10-03",
        "sha256": "7077814aa9cec709949720e713ab14b2ebd501591d105ff5661c018a23ce0afa",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "vampire-squid",
        "src": "assets/images/vampire-squid-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "흡혈오징어 · 팔막을 말아올려 몸 보호하기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "외투막·핀 2개·큰 눈·앞쪽에서 컵처럼 말린 팔막과 내면 cirri 확인. 8팔 전수와 위쪽 가는 부속지의 필라멘트 여부는 확인 불가.",
        "behaviorCheck": "팔 사이의 막을 말아올리는 방어 자세를 그렸어요. 몸 전체를 완전히 감싼 마지막 자세까지 보여주지는 않아요.",
        "behaviorSources": [
          {
            "title": "MBARI — Vampire squid, inside-out web defense",
            "url": "https://www.mbari.org/animal/vampire-squid/"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style, accurate adult anatomy, natural colors and eyes, restrained texture, no anthropomorphism. Landscape 3:2. Show a whole focal animal with important appendages and margins. A meaningful behavior in its actual habitat with uncluttered background; tiny prey if required. No text, labels, arrows, borders, logos, watermark, people, boats, toys, fantasy, horror, blood or injuries. This is an explanatory reconstruction, not documentary photography. Subject: ONE vampire squid Vampyroteuthis infernalis demonstrating its natural protective cloak posture in quiet dark blue midwater, seen from a low front-left oblique angle. Its reddish-brown webbed arms have gently curled UP and partly turned inside out around the front of the mantle, like a soft protective cup, not an open flat umbrella. Show the web as a continuous natural membrane supported by eight arm ribs, with soft pale fingerlike cirri now exposed on the outward facing INNER surfaces of the arms. These are soft short fleshy filaments, not teeth, metallic spikes, hard urchin spines or fangs. Some arms and the two delicate feeding filaments are naturally hidden or retracted by the protective cloak; do not pretend every arm tip is visible. The rounded rear mantle and TWO small paddlelike fins remain visible behind the cupped web, one large natural eye partly peeks beside it. Whole animal fits in frame with clear margins. Modest neutral illumination, sparse particles, no attacking animal or fear expression. NO blue light effects or glowing eyes, no black ink, no skeleton, no mouth with sharp teeth, no bat wings, no horror. This scene illustrates the documented inside-out web protection posture, with gentle biologically plausible texture."
        ],
        "generatedAt": "2026-10-03T00:51:17.841Z",
        "checkedAt": "2026-10-03",
        "sha256": "c5dcfed60891c9f4c79ac2d998732326076ae82da6dd639d350779914f14a65d",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      }
    ]
  },
  {
    "id": "giant-isopod",
    "name": "대왕등각류",
    "scientificName": "Bathynomus giganteus",
    "group": "절지동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "단단한 마디 갑각과 열네 개의 보행다리를 가진 깊은 바다의 등각류.",
    "identity": [
      "몸을 가로지르는 갑각 마디, 두 쌍의 더듬이, 7쌍의 보행다리, 넓은 꼬리 부채가 특징이다. 비슷한 Bathynomus 종이 많아 사진 동정에는 주의가 필요하다."
    ],
    "ecology": "심해 바닥에서 떨어져 내려온 물고기 사체 등 먹이를 찾는다. 같은 속에 분포와 크기가 다른 여러 종이 있다.",
    "diet": "동물 사체와 유기물, 물고기와 게 등.",
    "range": "서대서양의 깊은 바다에서 보고된다. 인도·태평양의 유사 등각류 사진을 이 종으로 자동 배정하지 않는다.",
    "size": "Monterey 소개는 약 40 cm까지. 같은 속의 다른 종과 최대값을 섞지 않는다.",
    "depth": "NOAA의 2021년 Dive 09에서 수심 984 m 관측. 이는 한 관측 사례이며 이 종의 전체 서식 범위나 잠수 한계를 뜻하지 않는다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Giant isopod",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-isopod"
      },
      {
        "title": "NOAA Ocean Exploration — Giant isopod, Windows to the Deep 2021, Dive 09",
        "url": "https://oceanexplorer.noaa.gov/multimedia/okeanos-explorations-ex2107-gallery-media-dive09-isopod/"
      }
    ],
    "depthZoneIds": [
      "twilight"
    ],
    "aliases": [
      "거대등각류",
      "Giant isopod",
      "바티노무스(속 이름)"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "giant-isopod",
        "src": "assets/images/giant-isopod-chatgpt-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕등각류 · 갑각과 더듬이 두 쌍",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "근측 보행다리 7개·길고 짧은 더듬이류 2쌍·겹친 등판·꼬리 부채를 육안 대조. Bathynomus 유사종과의 전문 동정은 미완료.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult giant isopod, Bathynomus giganteus, on plain dark sandy deep-sea floor in cool dark blue water, body gently lit for educational observation. Slightly elevated three-quarter view showing segmented back and both sides. Large elongated oval flattened cream-beige gray armored crustacean with head at left-front, TWO dark compound eyes widely separated on head, TWO pairs of antennae (one short antennule pair and one longer antenna pair). Seven overlapping large thoracic plates across back, with exactly SEVEN pairs of walking legs emerging beneath their corresponding thoracic segments; show seven individually traceable jointed legs on visible near side, far legs may be partly hidden by carapace. Shorter abdominal segments behind, broad flattened central pleotelson tail plate edged with short spines and paired lateral uropods forming a broad tail fan. Natural isopod shape, not insect, lobster or centipede; no giant pincers, wings or scorpion tail. Full antenna tips, feet and fan visible, avoid overlapping legs and excessive claws, no other animal or debris obscuring shape.",
          "Edit this Bathynomus giganteus natural-history illustration with a single minimal anatomical clarification. It currently shows three clearly visible head antennae. Add the missing fourth antenna so the head has EXACTLY TWO PAIRS: two short slender antennules near the center-front, and two longer multi-segmented antennae slightly outside them. Place the additional short antennule just forward of the near dark eye, clearly visible against the dark seabed, continuous from its own head base and not branched from another antenna. The two existing longer antennae may remain in their current sweeping directions. No other extra antenna-like appendage. Preserve the seven clearly countable walking legs on the visible side and corresponding far-side legs, armored overlapping back plates, eyes, tail fan, beige gray color and whole-animal composition. Distinguish small mouthparts from antennae. Same realistic scientific illustration and dark blue seabed, no text, no extra animals."
        ],
        "generatedAt": "2026-10-02T18:13:55.018Z",
        "checkedAt": "2026-10-03",
        "sha256": "9d6927198aa9865520296e28e10938d4a2ebd5443747b28b2a63c2bf5560eaf3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "giant-isopod",
        "src": "assets/images/giant-isopod-chatgpt-feeding-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "대왕등각류 · 정면에서 본 바닥 먹이 찾기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 양눈과 갑각, 긴/짧은 두 더듬이쌍, 연결된 앞 보행다리·겹친 뒤 갑각·팬형 꼬리 확인. 앞 두 굽은 다리가 음식 쪽으로 모이되 따로 떠 있지 않음.",
        "behaviorCheck": "Monterey Bay Aquarium의 가라앉은 물고기 등 청소성 먹이자료에 따른 교육용 접근 자세. 물고기는 입밖에 있고 섭식성공·정확한 운동위상은 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium: Giant isopod",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-isopod"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult giant isopod, Bathynomus giganteus, on plain dark sandy deep-sea floor in cool dark blue water, body gently lit for educational observation. Slightly elevated three-quarter view showing segmented back and both sides. Large elongated oval flattened cream-beige gray armored crustacean with head at left-front, TWO dark compound eyes widely separated on head, TWO pairs of antennae (one short antennule pair and one longer antenna pair). Seven overlapping large thoracic plates across back, with exactly SEVEN pairs of walking legs emerging beneath their corresponding thoracic segments; show seven individually traceable jointed legs on visible near side, far legs may be partly hidden by carapace. Shorter abdominal segments behind, broad flattened central pleotelson tail plate edged with short spines and paired lateral uropods forming a broad tail fan. Natural isopod shape, not insect, lobster or centipede; no giant pincers, wings or scorpion tail. Full antenna tips, feet and fan visible, avoid overlapping legs and excessive claws, no other animal or debris obscuring shape.",
          "Edit this Bathynomus giganteus natural-history illustration with a single minimal anatomical clarification. It currently shows three clearly visible head antennae. Add the missing fourth antenna so the head has EXACTLY TWO PAIRS: two short slender antennules near the center-front, and two longer multi-segmented antennae slightly outside them. Place the additional short antennule just forward of the near dark eye, clearly visible against the dark seabed, continuous from its own head base and not branched from another antenna. The two existing longer antennae may remain in their current sweeping directions. No other extra antenna-like appendage. Preserve the seven clearly countable walking legs on the visible side and corresponding far-side legs, armored overlapping back plates, eyes, tail fan, beige gray color and whole-animal composition. Distinguish small mouthparts from antennae. Same realistic scientific illustration and dark blue seabed, no text, no extra animals.",
          "Create ONE new 3:2 landscape natural-history illustration of Bathynomus giganteus giant isopod approaching fallen fish food on a quiet deep-sea floor. Attached image provides ONLY identity, pale armor texture and painterly style. Do not retain, mirror or rotate the long flat side-view pose.\nNEW CAMERA: extremely LOW straight FRONTAL view at sediment level, facing the head. Head and its two dark compound eyes are centered and nearest the viewer, the armored body recedes directly toward top center, with continuous rear tail fan naturally partly visible behind. Strong genuine foreshortening, not the long body extending horizontally to one side.\nNEW POSTURE: front half raised enough to expose the small mouthparts under the head, anterior walking legs bent FORWARD and INWARD beside a tiny intact fallen silver fish on the sediment. Their pointed feet rest near the food while smaller anatomical mouth appendages stay connected under the head; no giant jaw, claws, pincers or humanoid grasp. Rear walking legs brace outward and back with different joint angles, seven walking-leg pairs in the body plan, hidden ones naturally occluded. Two antenna pairs attached to head, one long pair sweeping wide over the sediment and one visibly shorter pair curving down toward the fish, all tips fully in frame. Fish remains outside mouth with no bite, wound, blood or tearing; this is a reconstructed scavenging approach, not proof of consumption. Broad overlapping pale grey-beige dorsal plates, dark eyes, compact head, rear uropods and central pleotelson continuous with abdomen. Full isopod, tail and antenna ends inside generous margins in dim deep blue water, sparse particles, soft illustrative fill light. No other animals, no text, labels, border or collage."
        ],
        "generatedAt": "2026-10-08T16:54:51.757Z",
        "checkedAt": "2026-10-11",
        "sha256": "9838b0bd4db3ba74f0305f9c49cf10ac6b3a0db7282acafa8ae1b14c285d244a",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "바닥 높이의 정면, 머리가 가까운 단축원근",
        "pose": "앞몸을 조금 들고 앞다리를 먹이 가까이 모으며 뒤다리는 바깥뒤로지지",
        "poseVariationCheck": "기존 시트03의 옆먹이 구도와 새 위생태 구도 모두와 달리 바닥 높이 정면에서 얼굴이 가장 크고 몸이 후퇴함. 앞몸이 들리고 앞발들이 안으로 굽어 이전의 곧게 지지한 다리와 다른 실제 자세.",
        "visualLimitations": "등판 아래 뒤 다리 기부는 가려져 열네 다리 전체 계수로 표시하지 않음. 물고기는 먹이 관계 재구성이며 실제 포획 성공을 뜻하지 않음. 정면에서 겹친 뒤쪽 다리 때문에 14개 기부/끝을 모두 검증하지 못함. 입의 작은 부속지 구조 전문 동정은 하지 않음. 바닥 물고기는 접근 대상이며 실제 사체 섭식 성공/접촉은 단정하지 않음."
      },
      {
        "id": "giant-isopod",
        "src": "assets/images/giant-isopod-chatgpt-ecology-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "대왕등각류 · 등 쪽에서 본 바닥 걷기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "겹친 등 갑각, 양눈과 짧은/긴 두 쌍 더듬이, 몸에서 이어진 관절다리와 뒤쪽 팬형 꼬리 확인. 들어 올린 근측 중간다리 뿌리·굽은 끝이 연속되고 분리된 다리 없음.",
        "behaviorCheck": "Monterey Bay Aquarium의 심해바닥 이동·열네 다리·두 더듬이쌍 원문에 따른 교육 재구성. 다리 운동순서·정확한 유속은 관측기록이 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium: Giant isopod",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-isopod"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult giant isopod, Bathynomus giganteus, on plain dark sandy deep-sea floor in cool dark blue water, body gently lit for educational observation. Slightly elevated three-quarter view showing segmented back and both sides. Large elongated oval flattened cream-beige gray armored crustacean with head at left-front, TWO dark compound eyes widely separated on head, TWO pairs of antennae (one short antennule pair and one longer antenna pair). Seven overlapping large thoracic plates across back, with exactly SEVEN pairs of walking legs emerging beneath their corresponding thoracic segments; show seven individually traceable jointed legs on visible near side, far legs may be partly hidden by carapace. Shorter abdominal segments behind, broad flattened central pleotelson tail plate edged with short spines and paired lateral uropods forming a broad tail fan. Natural isopod shape, not insect, lobster or centipede; no giant pincers, wings or scorpion tail. Full antenna tips, feet and fan visible, avoid overlapping legs and excessive claws, no other animal or debris obscuring shape.",
          "Edit this Bathynomus giganteus natural-history illustration with a single minimal anatomical clarification. It currently shows three clearly visible head antennae. Add the missing fourth antenna so the head has EXACTLY TWO PAIRS: two short slender antennules near the center-front, and two longer multi-segmented antennae slightly outside them. Place the additional short antennule just forward of the near dark eye, clearly visible against the dark seabed, continuous from its own head base and not branched from another antenna. The two existing longer antennae may remain in their current sweeping directions. No other extra antenna-like appendage. Preserve the seven clearly countable walking legs on the visible side and corresponding far-side legs, armored overlapping back plates, eyes, tail fan, beige gray color and whole-animal composition. Distinguish small mouthparts from antennae. Same realistic scientific illustration and dark blue seabed, no text, no extra animals.",
          "Create a new 3:2 natural-history painting of the same Bathynomus giganteus giant isopod. Use the attached illustration for pale armor and identity only, NOT pose. New camera is DIRECTLY OVERHEAD, looking down at a full broad oval dorsal carapace; head at BOTTOM CENTER, tail at TOP CENTER. This is not a three-quarter side view and not a rotated copy. The dorsal plates and small lateral eye slivers dominate.\nNew actual joint state: the animal walks over a clearly visible LOW ROUNDED SEDIMENT RIDGE across the middle of the frame. Its front half is on the raised part of the ridge, rear half still lower behind, making a modest articulated ARCH (never a rolled-up ball). Seven pairs of legs must remain attached under seven thoracic segments. On its RIGHT side the third walking leg is bent out sideways with its entire pointed foot visibly RAISED off the sediment, showing open water/dark shadow below the foot; on its LEFT side the neighboring leg is extended straight back along the floor while another foot braces forward atop the ridge. Other legs have uneven natural joint angles, not a repeated comb of identical downward hooks. Distal feet do not become extra legs. Keep the exact seven-pair plan without inventing new joints. Two antenna pairs: one long pair swept out left/right and one distinctly shorter pair, continuous with the head. All four tips inside generous margins. Continuous tail fan with uropods and central pleotelson, complete body within frame. Deep blue Atlantic seafloor, muted pale grey-beige plates and black eyes, subtle illustration lighting, no prey, people, text, labels, borders or collage. Clear animal anatomy takes priority over dramatic motion."
        ],
        "generatedAt": "2026-10-08T16:52:53.730Z",
        "checkedAt": "2026-10-11",
        "sha256": "4cdbd3b868a0f910eb6719f7f08aaba68d613664948994108431b28b30eaee0c",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "거의 수직 등쪽 정면, 머리화면아래·꼬리화면위",
        "pose": "낮은 둔덕 위 앞몸과 완만한등굽힘, 근측 중간발 확실히 들림·반대 발뒤지지",
        "poseVariationCheck": "시트03의 반복된 옆사선에서 머리 아래/꼬리 위의 거의 수직 등쪽 시점으로 바뀜. 둔덕 위 몸의 완만한 굴곡과 들린 오른중간발·지지발 차이가 있어 단순 방향 회전/배경만의 변화 아님.",
        "visualLimitations": "등판에 가린 보행발은 전수 계수하지 않음. 정확한 다리 운동 순서와 꼬리의 미세 가시 수는 확정하지 않음. 14개 보행다리의 모든 끝과 기부를 전수 대응하지 못함. 아래 숨어 있는 배 갑각·호흡다리와 꼬리 세부 가시를 전문 동정하지 않음. 몸을 공처럼 말거나 잘못된 가파른 관절 굽힘은 보이지 않음."
      }
    ]
  },
  {
    "id": "moon-jelly",
    "name": "북동태평양 달해파리",
    "scientificName": "Aurelia labiata",
    "group": "자포동물",
    "habitatIds": [
      "coast",
      "pelagic"
    ],
    "summary": "투명한 둥근 우산과 짧은 가장자리 촉수를 가진 북동태평양의 달해파리.",
    "identity": [
      "달처럼 비치는 우산과 가장자리의 짧은 촉수, 가운데 구완을 확인한다. 원명 Moon jelly; 한국의 보름달물해파리라는 이름을 다른 Aurelia 종과 공통으로 쓰지 않는다."
    ],
    "ecology": "자유롭게 떠다니는 해파리 단계와 바닥에 붙어 지내는 폴립 단계를 거친다. 폴립에서 작은 에피라가 떨어져 나온다.",
    "diet": "동물플랑크톤.",
    "range": "북동태평양, 캘리포니아 연안과 몬터레이만 등.",
    "size": "Monterey 안내는 우산 지름 약 60 cm까지. 우산 지름과 촉수를 포함한 길이를 구분한다.",
    "depth": "연안과 외해의 수중에서 떠다닌다. 폴립은 바닥이나 구조물에 붙으므로 생활 단계별 수심을 구분한다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Moon jelly (Aurelia labiata)",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/moon-jelly"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "달해파리",
      "Moon jelly"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "moon-jelly",
        "src": "assets/images/moon-jelly-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "북동태평양 달해파리 · 투명한 우산과 네 생식소",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "우산 속 말굽 모양 생식소 4개·구완 4개·가장자리의 짧고 가는 촉수를 육안 대조. 이 특징만으로 Aurelia 종을 동정한 것은 아님.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE Pacific moon jelly, Aurelia labiata, a translucent pale milky-blue shallow saucer-shaped umbrella drifting in clear blue coastal water. Slightly elevated oblique view to see both the round upper bell and its underside. Four clearly separated subtle horseshoe-shaped lavender gonadal rings visible through center of bell in fourfold symmetry; delicate radial canals. Fine fringe of MANY very short thin tentacles evenly spaced around rim, not a few thick long tentacles. Exactly FOUR modest frilly oral arms hang down from central mouth on underside, much shorter than the bell diameter, clearly separated and slightly curved. Broad nearly circular flattened dome, clean transparent edges, natural delicate jellyfish anatomy, faint pale lavender accents. Whole rim, oral arms and tentacle fringe fully visible. Do not create lion's mane jelly, Portuguese man-of-war, box jellyfish, octopus arms, giant long tentacles, neon fantasy body or glowing face. No face, eyes, teeth, fish or second jellyfish."
        ],
        "generatedAt": "2026-10-02T18:00:04.407Z",
        "checkedAt": "2026-10-03",
        "sha256": "be6fbfe49ea6135eef43a996f1b9c0edf93d3bd6015afb3f57cb1c5bf06240a9",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "moon-jelly",
        "src": "assets/images/moon-jelly-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "북동태평양 달해파리 · 짧은 촉수로 플랑크톤 모으기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "얕고 투명한 우산·짧은 촉수 fringe·내부 4꽃잎형 구조·주름 구완 확인. 4구완 기부 전수와 A. labiata 정밀 종 동정은 겹침으로 확인 불가.",
        "behaviorCheck": "우산 가장자리의 짧은 촉수로 작은 플랑크톤을 모아요. 먹이를 알아보기 쉽게 표현한 그림이에요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Moon jelly",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/moon-jelly"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One Aurelia labiata moon jelly drifting in northeast Pacific coastal water with a sparse sprinkling of tiny copepod zooplankton near its bell margin. View obliquely from just below and to the side, showing the entire shallow translucent milky bell, a delicate dense fringe of SHORT hair-fine tentacles around the rim, and the four short softly frilled oral arms hanging centrally. Show four faint petal or horseshoe-like gonad structures within the translucent bell, anatomically coherent radial canals, soft pale pink interior. A few tiny plankton held at margin mucus and near central oral arms indicate feeding; not a huge shrimp, fish prey or clouds. Short rim tentacles never longer than bell radius; no eyes, face, bones, rainbow comb rows or long sea-nettle tentacles. Entire jelly and all oral arm ends in frame, natural dim blue-green water, no neon glow."
        ],
        "generatedAt": "2026-10-03T00:45:49.938Z",
        "checkedAt": "2026-10-03",
        "sha256": "576106a3f25b9c9239bda8b5a9ba4ab2e0c37267c4ea6c0e0b17f21e42995e31",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "moon-jelly",
        "src": "assets/images/moon-jelly-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "달해파리 · 아래에서 본 오므라드는 우산",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 하나의 투명 우산, 네 말굽형 생식소, 중앙에서 연속 이어지는 네 주름진 입팔과 짧은 가장자리 촉수, 방사상 관을 확인. 분리된 팔이나 긴 해파리형 촉수 없음.",
        "behaviorCheck": "Aurelia류의 물속 이동과 우산 수축을 교육용으로 재구성. 정확한 순간 관측이나 개체 동정 사진이 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium: Moon jelly",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/moon-jelly"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE Pacific moon jelly, Aurelia labiata, a translucent pale milky-blue shallow saucer-shaped umbrella drifting in clear blue coastal water. Slightly elevated oblique view to see both the round upper bell and its underside. Four clearly separated subtle horseshoe-shaped lavender gonadal rings visible through center of bell in fourfold symmetry; delicate radial canals. Fine fringe of MANY very short thin tentacles evenly spaced around rim, not a few thick long tentacles. Exactly FOUR modest frilly oral arms hang down from central mouth on underside, much shorter than the bell diameter, clearly separated and slightly curved. Broad nearly circular flattened dome, clean transparent edges, natural delicate jellyfish anatomy, faint pale lavender accents. Whole rim, oral arms and tentacle fringe fully visible. Do not create lion's mane jelly, Portuguese man-of-war, box jellyfish, octopus arms, giant long tentacles, neon fantasy body or glowing face. No face, eyes, teeth, fish or second jellyfish.",
          "Create one completely NEW 3:2 landscape natural-history illustration for a Korean children's marine atlas. Species: northeast-Pacific moon jelly Aurelia labiata. Use the attached illustration ONLY for species identity, translucency, restrained colors and painterly realistic style. Re-stage and redraw the animal from a genuinely different camera and different swimming phase; do not preserve its original front-oblique silhouette, do not just rotate or mirror the reference.\nNEW CAMERA: almost directly underneath the jelly, looking UP into the underside of the bell, with a modest off-axis 15-degree perspective. The round underside faces the viewer and is foreshortened into a nearly circular disc; the top of the dome is behind it, not a full side-view umbrella above a hanging skirt.\nNEW POSE: mid-pulse contraction, the bell rim has drawn inward into a cupped circular edge, with gentle asymmetry as it releases a pulse. Exactly FOUR compact frilly oral arms attach continuously around the central mouth and curl outward toward the viewer at four different depths instead of all hanging vertically. Four horseshoe-shaped pale pink gonads are visible through the bell, not eyes. Many very SHORT fine marginal tentacles attach to the rim; no long trailing stingers and no giant ribbon arms. Keep delicate radial canals, translucent bluish-white bell, soft pink center. No face or anthropomorphic features. The bell and all four oral-arm tips and short marginal tentacles are fully within the frame, clear water around them. Quiet blue coastal midwater, sparse marine particles, no prey, no eggs, no larvae, no extra animals. Natural museum illustration with clear connected anatomy, soft underwater light, no text, no labels, no border, no collage."
        ],
        "generatedAt": "2026-10-08T16:29:49.393Z",
        "checkedAt": "2026-10-11",
        "sha256": "c3be4cd19df90c99f8069c4c91029d47e805755805c2ccb166046314637086dc",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "거의 배쪽 정면에서 위를 바라보는 약15도 사선",
        "pose": "수축 우산과 네 입팔의 서로 다른 단축 원근·굴곡",
        "poseVariationCheck": "기존 시트03의 옆앞 우산/하향 입팔 세 컷과 달리 입 쪽 아래에서 거의 정면으로 우산 내부를 봄. 네 입팔이 각각 다른 원근과 굴곡으로 앞으로 모여 실제 시점·입팔 자세가 달라짐.",
        "visualLimitations": "네 말굽형 생식소는 입팔 투영에 일부 가림. 미세 촉수와 관 분지 전수판정 아님. 짧은 가장자리 촉수와 중앙 입팔은 보이나 Aurelia 유사종의 미세 전문 동정과 생식소 성숙도를 삽화에서 확정하지 않음. 공개 이름의 A. labiata 전문 동정 완료를 뜻하지 않음."
      }
    ]
  },
  {
    "id": "elkhorn-coral",
    "name": "엘크뿔산호",
    "scientificName": "Acropora palmata",
    "group": "자포동물",
    "habitatIds": [
      "reef"
    ],
    "summary": "넓고 납작한 가지가 엘크의 뿔처럼 뻗는 카리브해의 군체 산호.",
    "identity": [
      "황갈색에서 연갈색의 군체, 흰 가지 끝, 넓고 납작하게 뻗은 가지가 특징이다. 원명 Elkhorn coral를 병기한다."
    ],
    "ecology": "많은 작은 폴립이 군체를 이루고 공생 조류로부터 영양분을 얻는다. 복잡한 가지는 다른 생물의 은신처가 된다.",
    "diet": "공생 조류가 만드는 영양분과 촉수로 잡는 플랑크톤.",
    "range": "플로리다·바하마·카리브해의 맑고 얕은 산호초.",
    "size": "개별 폴립이 아닌 군체 기준으로 높이 약 1.8 m, 지름 약 3.7 m 이상까지 성장할 수 있다.",
    "depth": "NOAA의 대표 서식 설명은 약 0.3–4.6 m의 얕고 파도가 강한 산호초.",
    "sources": [
      {
        "title": "NOAA Fisheries — Elkhorn Coral",
        "url": "https://www.fisheries.noaa.gov/species/elkhorn-coral"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Elkhorn coral",
      "산호"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "elkhorn-coral",
        "src": "assets/images/elkhorn-coral-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "엘크뿔산호 · 넓고 납작한 가지의 한 군체",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "한 바닥에서 연결되는 군체·넓고 납작한 뿔 모양 가지·황갈색 표면과 옅은 끝을 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE connected healthy elkhorn coral colony, Acropora palmata, on a small simple rock base in clear shallow Caribbean reef water. Entire colony viewed at a slight angle, open branching silhouette like an elk's antlers. Broad stout FLATTENED paddle-like branches that fork and fan upward and sideways, naturally irregular but all joined to same basal trunk. Golden tan to muted yellow-brown rough living coral texture with tiny subtle corallites/polyps, modest pale cream-white growing tips only. Clearly show broad flattened blades and substantial branch thickness; not skinny round branching staghorn coral. Soft blue water and pale sand background, daylight, no fish, other coral colonies or plants competing with subject. Keep all branch tips within frame, show rock base and water margin. No fantasy rainbow colors, pink tree, leaf foliage, smooth plastic, giant exposed flower polyps or completely white bleached dead colony."
        ],
        "generatedAt": "2026-10-02T18:01:01.821Z",
        "checkedAt": "2026-10-03",
        "sha256": "79610e25e84112bbd6b47a8104fd1aad47c91bca487bacc3071786461fda3e4a",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "elkhorn-coral",
        "src": "assets/images/elkhorn-coral-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "엘크뿔산호 · 작은 폴립의 먹이 활동",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "넓고 납작한 황갈색 가지·밝은 가장자리·작은 컵형 폴립과 가는 촉수 확인. 군체 전체는 확대 구도로 생략; 정확 촉수 수·미세 corallite 구조는 미감수.",
        "behaviorCheck": "폴립이라고 부르는 작은 산호 동물들이 촉수로 플랑크톤을 잡아요. 아주 작은 모습을 크게 그렸어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Elkhorn coral",
            "url": "https://www.fisheries.noaa.gov/species/elkhorn-coral"
          },
          {
            "title": "Australian Institute of Marine Science — Corals",
            "url": "https://www.aims.gov.au/research-topics/marine-life/corals"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: A natural macro close view of a healthy Acropora palmata flattened branch surface underwater at dusk. The branch remains recognizably a broad tan flattened elkhorn-coral frond, with a gently curving cream growing edge in the background. On the foreground branch surface show many truly tiny roughly 1mm corallite cups and short delicate translucent tan polyps extended slightly outside their cups; one clearly visible small polyp captures one tiny copepod with a subtle short tentacle toward its central mouth. Tentacle arrangement follows stony coral sixfold symmetry with a small ring of twelve slender short tentacles where sufficiently visible, not eight feathery soft-coral arms; keep tentacles no longer than about the polyp cup width. Do not turn polyps into huge flowers or sea anemones; no thick stalks, eyes, large mouths, oversized shrimp, or fantastical glowing tips. Close crop of a branch is intentional for feeding detail, branch contours still visible; cool muted background and natural cream/tan tissue."
        ],
        "generatedAt": "2026-10-03T00:47:49.323Z",
        "checkedAt": "2026-10-03",
        "sha256": "b4886683df50157baa202c8f3574b6f7700d04472b05a602a83697912cef776e",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "elkhorn-coral",
        "src": "assets/images/elkhorn-coral-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "엘크뿔산호 · 위에서 본 넓고 납작한 가지",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "황갈색의 넓고 납작한 가지들과 흰 성장 끝, 표면의 작은 폴립/골격 컵 및 바닥 고착 연결을 확인. 가는 사슴뿔산호형 원통 줄기나 가지가 떠다니는 형태 아님.",
        "behaviorCheck": "NOAA의 중앙 줄기에서 나온 넓고 납작한 가지·얕은 산호초 서식 설명에 따른 관찰 재구성. 고착성 산호의 가지가 동물 팔처럼 움직인다고 표현하지 않는다. 정적 시점과 폴립 표면 상태의 차이를 허용한다.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Elkhorn coral",
            "url": "https://www.fisheries.noaa.gov/species/elkhorn-coral"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One full healthy Acropora palmata colony growing on a very shallow Caribbean reef crest in clear daytime water. Elevated oblique side view from slightly above shows the full colony from base to outer tips, broad flattened golden-tan frond-like branches with a few gently rounded sections radiating outward and upward from a common central trunk, pale cream growing tips, fine rough corallite texture. Include realistic quiet sandy rubble substrate and sunlit turquoise water, faint surface shimmer, a subtle distant reef only. Ensure broad palm-like elk-antler fronds with substantial width, not thin cylindrical Acropora cervicornis staghorn branches, not purple plastic tree or fleshy petals, no eyes. All branch tips and colony base within frame. Sparse small understated reef fish can be excluded; focal colony alone clearly readable.",
          "Create ONE genuinely NEW 3:2 landscape natural-history illustration of a complete connected Acropora palmata elkhorn coral colony in a clear shallow Caribbean reef. Attached reference gives ONLY accurate golden-tan flattened antler branches and subtly painterly educational style. Do not keep the old eye-level upward tree silhouette, do not mirror or simply rotate it.\nNEW CAMERA: exactly TOP DOWN, looking vertically from directly above the colony toward the sandy coral-rubble substrate. The entire colony is seen in plan view as broad flat branched blades spreading radially out from one central trunk. Strong overhead projection: no horizon line, no water-surface ceiling, no front view of a tall tree. The lower basal trunk and rock attachment are naturally partly hidden by the crown above; where visible between branch gaps they stay continuously connected. The near-vertical branch faces appear strongly foreshortened, while the wide upper paddle surfaces dominate. Show genuinely different visible top surfaces and branch spacing, not the same old branch silhouette rotated into a circle.\nThe colony is FIXED to its substrate. Branches do not flap, bend or swim. Irregular broad stout flattened frond-like antler branches, not skinny cylindrical staghorn sticks or leaves. Golden tan to pale brown healthy coral, modest cream-white growing margins and tips, tiny roughly millimetric corallite cups visible as fine dense rough texture. NEW POLYP STATE: small polyps seated low within their skeletal cups, no long extended tentacle tufts; unlike the close-up feeding scene with extended tentacles. This view emphasizes fixed colony architecture and upper tissue state, never inventing limb movement or giant flower-like polyps. Clear shallow turquoise water, warm daylight, pale sand and modest natural rubble below visible through gaps, quiet low-contrast habitat with no competing colony or fish. Full connected colony, every outer branch tip entirely inside generous 9 percent margins. No bleaching, detached branch chunks, eyes, text, labels, arrows, border, split panels or watermark."
        ],
        "generatedAt": "2026-10-10T15:45:05.692Z",
        "checkedAt": "2026-10-11",
        "sha256": "4b8311c9785b44664b9951f1b7fce95bfa48c59e1cf8781bc79770bf7ed3efec",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "군체 바로 위에서 수직 아래를 보는 평면 시점",
        "pose": "움직이지 않는 고착 군체의 가지 배치와 폴립이 표면의 작은 컵에 낮게 놓인 상태",
        "poseVariationCheck": "시트03의 앞에서 보는 가지 군체/먹이 근접과 달리 위에서 수직으로 넓은 가지 윗면·갈래 배치를 봄. 먹이 그림의 크게 편 촉수 대신 낮게 놓인 표면 폴립 상태로 시점·폴립 상태가 바뀌며 군체를 걷거나 움직이게 하지 않음.",
        "visualLimitations": "고정 군체라 동물처럼 몸을 굽힌 변화는 요구하지 않음. 아주 작은 폴립·세포 형태 전문검증 미실시 기부는 위 가지에 일부 가려짐. 개별 폴립 촉수수·골격 전문 동정, 정확한 군체 나이/크기와 순간 수축 행동을 이 그림으로 검증하지 않음. 흰 끝을 병변/백화로 단정하지 않음."
      }
    ]
  },
  {
    "id": "purple-sea-urchin",
    "name": "자주성게",
    "scientificName": "Strongylocentrotus purpuratus",
    "group": "극피동물",
    "habitatIds": [
      "coast"
    ],
    "summary": "자주색 가시와 관족을 지닌 암반 해안의 성게. 어린 개체의 가시는 초록색일 수 있다.",
    "identity": [
      "둥근 껍질을 덮는 움직이는 가시, 관족, 아래쪽 입을 확인한다. 원명 Purple sea urchin를 병기하며 한국 연안 성게와 혼동하지 않는다."
    ],
    "ecology": "관족으로 이동하며 해조류를 먹는다. 성게가 크게 늘어나면 다시마 숲을 줄일 수 있고 해달 등의 포식자가 개체수를 조절한다.",
    "diet": "홍조류·갈조류·녹조류 등.",
    "range": "캐나다 밴쿠버섬에서 멕시코 바하칼리포르니아 세드로스섬까지.",
    "size": "Monterey 설명 기준 몸 지름 약 7 cm까지. 가시를 포함한 폭과 껍질 지름의 측정을 구분한다.",
    "depth": "조간대 웅덩이와 연안 암반 바닥. 수심의 확정 상한은 이 초기 자료에서 제시하지 않는다.",
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Purple sea urchin",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Purple sea urchin"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "purple-sea-urchin",
        "src": "assets/images/purple-sea-urchin-chatgpt-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "자주성게 · 짧은 가시와 가는 관족",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 몸·보라색의 비교적 짧고 튼튼한 가시·가시 사이의 가늘고 긴 관족을 육안 대조.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult Pacific purple sea urchin, Strongylocentrotus purpuratus, whole animal on a small simple rocky surface in clear cool coastal water, slightly elevated oblique view. Compact rounded flattened spherical test densely covered in medium-short sturdy tapering purple-violet SPINES with natural varied lengths radiating outward. Fivefold radial organization subtle, many fine flexible translucent tube feet emerge BETWEEN rigid spines, some gently gripping the rock. Natural dark muted violet body, lighter spine tips, one central test only. Spines clearly separate from tube feet; no flowers or faces. Entire outline and all longest spine tips visible with generous plain blue-water margin. No long needle-like black Diadema spines, red urchin, starfish arms, tentacle crown, sea-anemone body, fantasy bioluminescence, eyeballs, mouth on top, multiple urchins or kelp obscuring outline."
        ],
        "generatedAt": "2026-10-02T18:02:08.545Z",
        "checkedAt": "2026-10-03",
        "sha256": "5c166346825001feb36a2ffdcadfd30c7edc770c160662d94c08dd4515cf62ed",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
      },
      {
        "id": "purple-sea-urchin",
        "src": "assets/images/purple-sea-urchin-chatgpt-feeding-underside-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "보라성게 · 아랫면의 입으로 해조류를 나르는 관족",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속된 둥근 자주 가시 몸과 암석에 붙은 면, 배쪽 흰 입 부품, 투명 관족과 흡착 끝, 입 아래 이어지는 해조류를 확인. 뒤집힌 부유 개체로 보이지 않음.",
        "behaviorCheck": "Monterey Bay Aquarium의 관족이 해조류를 아랫면의 입까지 나른다는 설명을 따른 교육 재구성. 바위에 붙은 정상 방향의 동물 아래에서 보는 구도이며 뒤집혀 떠다니는 모습이 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Purple sea urchin",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One adult Strongylocentrotus purpuratus eating a small naturally torn brown kelp blade on a northeast Pacific shallow rocky shore. Low oblique view across a small rock ledge permits a discreet glimpse of the normal central mouth on the UNDERSIDE as the urchin straddles the edge, without flipping it upside down or exposing internal organs. Compact rounded somewhat flattened test densely covered in relatively short stout purple spines, finer translucent tube feet emerge between spines and pass kelp toward underside mouth. Keep tiny five toothlike lantern tips subtle at mouth, not a huge smile, large human teeth, shell hole or face. Kelp rests partly beneath and alongside body, natural feeding posture, entire urchin including spine tips in frame, no Diadema long black spines, no starfish arms, red wounds or giant suction-cup tube feet. Quiet seawater, coralline-covered rock, warm brown kelp contrasted with natural violet spines.",
          "Use case: precise-object-edit, scientific-educational. Correct only the feeding mouth anatomy and local posture in this naturalistic Strongylocentrotus purpuratus illustration. Keep the purple short stout spines, round body, kelp, rock, water, lighting, landscape 3:2, overall realistic painterly style and all other features. The present frontal flower-like mouth and numerous pale teeth are incorrect. Remove that entire conspicuous flower mouth. The normal very small mouth belongs on the UNDERSIDE center of the test, facing DOWN toward the kelp and rock, not on the vertical front side. Put the kelp slightly beneath the urchin, occluding most of the tiny underside mouth so at most one or two very small pale tips of its five-toothed Aristotle's lantern may be glimpsed deep in shadow. Do NOT show a circle of ten petals, a large hole, face or smile. Natural low resting posture on rock, a few fine translucent tube feet transport kelp down to that underside opening. Do not expose internal tissue. No text, arrows, labels, humans, wounds, horror or enlarged teeth. The mouth is naturally obscured in this ecology scene, and it is acceptable that five individual teeth cannot be counted in the picture.",
          "Create ONE realistic natural-history illustration for a children's Sea Atlas, landscape 3:2, accurate delicate painterly rendering. Species Strongylocentrotus purpuratus, purple sea urchin. The attached illustration is ONLY a species texture/colour reference; do NOT keep its front-upper ball view or just mirror it. NEW CAMERA: genuinely LOW FROM BELOW and obliquely to one side of a small rock ledge, looking up at the ORAL UNDERSIDE of the urchin as it clings across the sloping underside-edge of the rock. This is a normal attached sea urchin, NOT floating or unnaturally flipped on its back. Frame the entire purple domed animal, its long spines and exposed underside with generous margins. Its round test is continuous, covered with numerous slender movable purple tapering spines; lower spines angle aside naturally. Show a broad oval pale purplish-brown peristomal underside facing the viewer beneath the dome, and a very small central five-part feeding apparatus with FIVE modest pale teeth/plates at the real mouth. No human teeth, monster jaws, bright circular eye or giant hole. Several flexible translucent pale tube feet extend from around the oral surface: some end in tiny suction discs that hold onto the adjacent rock; a few gently pass a narrow torn strip of golden-brown kelp inward toward the small underside mouth. The kelp strip is held UNDER the animal, not spread horizontally in front like the reference. Tube feet must emerge from the animal, not become severed stalks or kelp stems. Clearly show a different attached-body angle, underside perspective, and tube-foot arrangement. Natural cool blue kelp-forest water with a little distant kelp above, modest rock edge at one side; no other animals, no labels, diagrams, text or watermark. This is an educational feeding reconstruction based on tube feet conveying algae to the underside mouth, not a photograph of a specific event."
        ],
        "generatedAt": "2026-10-08T16:41:29.346Z",
        "checkedAt": "2026-10-11",
        "sha256": "d1302af7e1b2a9275e7afdd6686da607a8aca97365d15f54496064663f519b3c",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "viewpoint": "바위 가장자리 아래에서 올려다본 낮은 옆사선",
        "pose": "비스듬한 바위에 붙어 아랫면을 드러내고 관족을 뻗어 작은 해조류 조각을 입 쪽으로 모은 모습",
        "poseVariationCheck": "기존 앞위의 등 구체와 가로 해조류에서 아래옆 카메라로 아랫면이 크게 보이며 부착면/관족과 해조류가 수직으로 내려옴. 시점과 관족/부착 각도 두 축 변화.",
        "visualLimitations": "입 일부가 해조류에 가려져 치아 다섯 개 전체 대응은 확정하지 않음. 특정 실제 섭식 순간이 아닌 교육 재구성. 입 흰 부품 약4개 명료·나머지 가림이라 5판 전수 계수는 못함. 섭식 성공/가시 수 인증 아님. 몸과 가시 끝은 프레임 안."
      },
      {
        "id": "purple-sea-urchin",
        "src": "assets/images/purple-sea-urchin-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "자주성게 · 바위 틈에 붙어 살기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "낮은 둥근 몸·짧고 굵은 자주색 가시·바위에 닿는 가는 관족 확인. 얼굴/과장된 입 없으며 숨은 입·5치·정밀 종 동정은 확인 불가.",
        "behaviorCheck": "가는 관족으로 바위에 붙어 있어요. 바위 틈에 자리 잡은 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Purple sea urchin",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One adult Strongylocentrotus purpuratus nestled naturally in a shallow northeast Pacific rocky crevice underwater at low tide. Oblique overhead three-quarter view with full compact purple-spined body visible, spines short and relatively stout, rounded subtly flattened test. Show a few fine translucent extensible tube feet between the spines attaching with tiny terminal discs to the adjacent rock surfaces, not thick octopus suckers or arms. Natural pink coralline algae and wet rock contours frame the safe hollow, clear water with gentle filtered daylight. Urchin spine tips remain fully inside frame, small mouth stays naturally hidden below, no eyes or face, no starfish arms, long black Diadema needles, bioluminescent tips or huge circular suction cups."
        ],
        "generatedAt": "2026-10-03T00:52:26.232Z",
        "checkedAt": "2026-10-03",
        "sha256": "58b373340e696997ec0cde398164076c44d052aa82ff6f45fcfd6597fc6f43fb",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "sea-otter-purple-sea-urchin",
        "src": "assets/images/sea-otter-purple-sea-urchin-chatgpt-interaction-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해달과 자주성게 · 수면에서 먹이를 살피기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "해달의 젖은 갈색 털, 둥근 작은 귀, 수염, 자연스러운 눈과 코, 성게를 잡은 앞발 2개, 각각 구분되는 넓은 물갈퀴 뒷발 2개와 하나의 털 있는 꼬리를 확인했다. 자주색 가시로 덮인 작은 둥근 성게가 앞발 사이에 있고 얼굴이나 과장된 이빨이 없다.",
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult sea otter, Enhydra lutris, floating naturally on its back at the ocean surface. Slightly elevated three-quarter full-body view so entire head, body, paws, hindfeet and tail are visible. Dense dark-brown waterproof fur with a lighter tan round face, small rounded ears, black nose and fine pale whiskers, realistic small dark eyes. Exactly FOUR limbs: two small forepaws resting naturally on chest, TWO broad flattened webbed hindfeet extending behind belly, one short thick tapered furry tail between hindfeet. Natural compact otter proportions, no human hands or exaggerated baby face. Clear calm blue coastal water, only small realistic ripples around animal; keep foreground simple and no other animal, shell, stone or kelp obscuring paws. Peaceful expression but closed natural mouth, not smiling. Avoid beaver paddle tail, seal flippers or river-otter long sleek tail.",
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE adult Pacific purple sea urchin, Strongylocentrotus purpuratus, whole animal on a small simple rocky surface in clear cool coastal water, slightly elevated oblique view. Compact rounded flattened spherical test densely covered in medium-short sturdy tapering purple-violet SPINES with natural varied lengths radiating outward. Fivefold radial organization subtle, many fine flexible translucent tube feet emerge BETWEEN rigid spines, some gently gripping the rock. Natural dark muted violet body, lighter spine tips, one central test only. Spines clearly separate from tube feet; no flowers or faces. Entire outline and all longest spine tips visible with generous plain blue-water margin. No long needle-like black Diadema spines, red urchin, starfish arms, tentacle crown, sea-anemone body, fantasy bioluminescence, eyeballs, mouth on top, multiple urchins or kelp obscuring outline.",
          "Use case: scientific-educational illustration for Sea Atlas ages 5–12. Own reference image1 is Enhydra lutris SEA OTTER anatomy, own reference image2 is Strongylocentrotus purpuratus PURPLE SEA URCHIN anatomy. Create ONE original natural-history painting, landscape3:2, whole otter floating on its BACK at the ocean surface beside a quiet kelp bed, holding ONE SMALL INTACT purple sea urchin carefully between its TWO small furred front paws just above its chest, before opening or eating it. This is an ecological predator-prey interaction, not friendship or play. Sea urchin round body about 8cm across excluding short stout purple spines; visually fist-sized relative to the 1.2m otter, never a gigantic ball. Urchin no eyes or face and no enlarged teeth or flowerlike mouth; underside mouth naturally obscured by the paws. Otter natural wet brown fur, small rounded ears, whiskers, two visible front paws, TWO separate broad WEBBED hind feet raised gently at right, and ONE distinct furry tail beyond them; accurate animal paws, not human fingers. Whole otter and tiny whole urchin including leg/foot/tail ends in frame with generous margins. Elevated side-camera angle, otter head upper-left looking neutrally at the urchin, kelp fronds and a few bulbs on calm water at the sides, natural daylight, refined realistic painterly style matching references. No rock needed. No cracking shell, exposed tissue, blood, wounds, missing spines, anthropomorphism, smile, glowing eyes, labels, text, logo, borders, boats or people. The otter is on the surface, NOT eating underwater. This reconstructed scene explains sea otters taking urchin prey in kelp ecosystems, not an observed individual event."
        ],
        "generatedAt": "2026-10-03T01:28:25.776Z",
        "checkedAt": "2026-10-03",
        "sha256": "9755913febc9a8f890d84470e1360b4ad4e845d8cda7bb248d5fe364b1fbc108",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "해달은 바닥에서 잡은 성게를 수면으로 가져와 먹어요. 성게를 살피는 먹이 관계를 그린 장면이며 실제 섭취 순간을 보여주지는 않아요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium · Sea otter feeding and kelp ecosystem",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/sea-otter"
          },
          {
            "title": "Monterey Bay Aquarium · Purple sea urchin",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
          }
        ],
        "interactionIds": [
          "sea-otter",
          "purple-sea-urchin"
        ]
      }
    ]
  },
  {
    "id": "bottlenose-dolphin",
    "name": "큰돌고래",
    "scientificName": "Tursiops truncatus",
    "group": "포유류",
    "habitatIds": [
      "coast",
      "pelagic"
    ],
    "summary": "짧고 두꺼운 부리와 둥근 이마를 가진 회색 돌고래. 혼자 또는 무리로 바다를 이동해요.",
    "identity": [
      "회색 등과 밝은 배, 짧고 두꺼운 부리와 둥근 이마, 낫 모양 등지느러미 1개, 가슴지느러미 2개, 좌우로 펼쳐진 수평 꼬리.",
      "큰돌고래 Tursiops truncatus는 제주에서 알려진 남방큰돌고래 Tursiops aduncus와 다른 종이에요. 비슷한 외형만으로 종을 구별하기는 어려워요."
    ],
    "ecology": "혼자 또는 무리로 이동하며 무리가 나뉘고 다시 합쳐지기도 해요. 소리를 이용해 의사소통하고 먹이를 찾아요.",
    "diet": "물고기, 오징어, 새우와 게 같은 갑각류. 지역과 무리마다 먹이와 먹이 찾는 방법이 달라요.",
    "range": "전 세계 온대와 열대 바다의 연안과 외해. 비슷한 큰돌고래속의 다른 종과 지역 개체군을 한데 묶어 읽지 않아요.",
    "size": "몸길이는 지역과 성별에 따라 달라요. 국립수산과학원 종 소개는 보통 2.7–3.3 m, 최대 3.9 m 기록을 제시해요.",
    "depth": "수면에서 숨을 쉬고 물속으로 잠수해요. 연안과 외해 집단이 이용하는 깊이가 달라 단일 수심이나 최대 잠수 한계로 단정하지 않아요. 이 도감은 수면 가까운 활동을 햇빛 구간으로 표시해요.",
    "sources": [
      {
        "title": "NOAA Fisheries — Common Bottlenose Dolphin",
        "url": "https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin"
      },
      {
        "title": "국립수산과학원 e-연구바다 — 큰돌고래 Tursiops truncatus",
        "url": "https://www.nifs.go.kr/portal/bt/frctA/actionSpeciesSearchView.do?taxonId=12061"
      },
      {
        "title": "WoRMS — Tursiops truncatus taxon list",
        "url": "https://www.marinespecies.org/aphia.php?p=taxlist&tName=Tursiops+truncatus"
      },
      {
        "title": "해양수산부 — 남방큰돌고래 Tursiops aduncus 구분",
        "url": "https://www.mof.go.kr/doc/ko/selectDoc.do?bbsSeq=10&docSeq=21044&menuSeq=971"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "큰 돌고래",
      "Common bottlenose dolphin",
      "Bottlenose dolphin"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "bottlenose-dolphin",
        "src": "assets/images/bottlenose-dolphin-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰돌고래 · 온몸을 펼쳐 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 이마와 짧고 두꺼운 부리, 작은 옆눈, 회색 등과 밝은 배를 확인. 몸에 연결된 가슴지느러미 2개, 낫 모양 등지느러미 1개, 좌우 꼬리 2엽을 읽을 수 있고 전신 끝이 화면 안에 있다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas species gallery, ONE standalone horizontal 3:2 image, not a collage.\nStyle: refined exquisitely detailed naturalistic educational painting for children ages 5–12, real natural anatomy and proportions, realistic subtle skin texture and natural eyes, gentle documentary feeling, quiet marine habitat background. No text, labels, arrows, logo, border, watermark, people, boats, fishing gear, blood, wounds, horror, anthropomorphism, exaggerated smiles, glowing eyes or toy/plastic/cartoon appearance.\nSubject identity: common bottlenose dolphin Tursiops truncatus, robust smooth gray torpedo body, darker gray back graduating to pale belly, rounded melon forehead separated by a subtle crease from a SHORT THICK beak-like rostrum. Do not use long narrow spinner/common dolphin snout, white-sided/hourglass body patterns, spotted dolphin markings or gray-whale body. Do not label as Indo-Pacific bottlenose dolphin Tursiops aduncus, no abdominal black spots as an identification motif. No region or subspecies should be claimed just from appearance.\nAnatomy invariants: exactly TWO pectoral flippers attached behind head on opposite body sides, ONE curved falcate dorsal fin, ONE tail peduncle ending in TWO horizontal left-right flukes with central notch. Whale tail plane must be perpendicular to upright dorsal fin, never fish-like vertical upper/lower lobes. No hindlimbs, pelvic fins or shark gill slits. Small natural lateral eyes, one subtle blowhole on top of head behind forehead if visible. Entire principal animal and all appendage ends comfortably inside frame, about 7% margin.\nScene/composition: ONE adult common bottlenose dolphin in clear blue temperate Pacific seawater. Full body side three-quarter view, head at left and tail at right, slightly above the viewer so pale underside is gently visible. Both pectoral flippers visibly separated with proper roots: nearer one angled down-forward, farther one below chest without looking like an extra limb. Upright curved dorsal fin and horizontal tail left-right spread clearly show contrasting planes. Closed relaxed mouth with normal straight/slightly curved natural mouth line, no human grin. No prey or other dolphin. Soft daylight filtered from above, uncluttered water gradient, no reef plants or land. Primary educational body portrait, not leaping from water."
        ],
        "generatedAt": "2026-10-03T01:26:08.468Z",
        "checkedAt": "2026-10-03",
        "sha256": "0eb28e2bb89fcd27dfdeffe3cf27ae726dcab491bb3d90b1950a67da71ef573b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "bottlenose-dolphin",
        "src": "assets/images/bottlenose-dolphin-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰돌고래 · 물고기를 향해 다가가기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "오른쪽 방향의 짧고 두꺼운 부리, 둥근 이마, 작은 눈, 회색 등과 밝은 배를 확인. 가슴지느러미 2개, 등지느러미 1개, 비스듬하게 투영된 좌우 꼬리 2엽이 몸에 자연스럽게 연결된다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas species gallery, ONE standalone horizontal 3:2 image, not a collage.\nStyle: refined exquisitely detailed naturalistic educational painting for children ages 5–12, real natural anatomy and proportions, realistic subtle skin texture and natural eyes, gentle documentary feeling, quiet marine habitat background. No text, labels, arrows, logo, border, watermark, people, boats, fishing gear, blood, wounds, horror, anthropomorphism, exaggerated smiles, glowing eyes or toy/plastic/cartoon appearance.\nSubject identity: common bottlenose dolphin Tursiops truncatus, robust smooth gray torpedo body, darker gray back graduating to pale belly, rounded melon forehead separated by a subtle crease from a SHORT THICK beak-like rostrum. Do not use long narrow spinner/common dolphin snout, white-sided/hourglass body patterns, spotted dolphin markings or gray-whale body. Do not label as Indo-Pacific bottlenose dolphin Tursiops aduncus, no abdominal black spots as an identification motif. No region or subspecies should be claimed just from appearance.\nAnatomy invariants: exactly TWO pectoral flippers attached behind head on opposite body sides, ONE curved falcate dorsal fin, ONE tail peduncle ending in TWO horizontal left-right flukes with central notch. Whale tail plane must be perpendicular to upright dorsal fin, never fish-like vertical upper/lower lobes. No hindlimbs, pelvic fins or shark gill slits. Small natural lateral eyes, one subtle blowhole on top of head behind forehead if visible. Entire principal animal and all appendage ends comfortably inside frame, about 7% margin.\nScene/composition: ONE common bottlenose dolphin Tursiops truncatus calmly approaching ONE intact small silver fish underwater in temperate Pacific seawater. Side-front three-quarter composition facing RIGHT, dolphin's entire body and horizontal tail in frame, clearly distinct from its left-facing portrait. Fish is small relative to dolphin, well ahead of the dolphin's very slightly open mouth with a clear noncontact gap; prey is complete, no bite damage or blood. Modest small conical teeth may only subtly show if necessary, never dramatic tooth display. Mouth positioned naturally below the short thick rostrum, not smiling or human expression. Both pectoral flippers and horizontal two-lobed tail remain clear. Quiet sunlit blue water with a few subtle particles and no dramatic chase streaks or sound beams. This is a cautious educational reconstruction of fish foraging before capture, not an observed event. No squid, seals, humans or other dolphins in this single feeding view."
        ],
        "generatedAt": "2026-10-03T01:28:07.413Z",
        "checkedAt": "2026-10-03",
        "sha256": "ce9e65b098f0857f4e375ab1d3781937f2e862306474ff275f57575ee9d38f66",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "큰돌고래는 물고기를 먹어요. 물고기에게 다가가는 모습을 그렸고, 실제로 잡아 삼키는 순간은 아니에요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Common Bottlenose Dolphin: Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin"
          }
        ]
      },
      {
        "id": "bottlenose-dolphin",
        "src": "assets/images/bottlenose-dolphin-chatgpt-ecology-turn-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰돌고래 · 몸을 굽혀 아래로 방향 바꾸기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "짧고 굵은 주둥이와 둥근 이마, 몸 양쪽의 두 가슴지느러미, 등지느러미 하나, 꼬리자루에 연속 연결된 수평 두 꼬리엽을 확인. 전신과 각 지느러미 끝이 화면 안에 있음.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas species gallery, ONE standalone horizontal 3:2 image, not a collage.\nStyle: refined exquisitely detailed naturalistic educational painting for children ages 5–12, real natural anatomy and proportions, realistic subtle skin texture and natural eyes, gentle documentary feeling, quiet marine habitat background. No text, labels, arrows, logo, border, watermark, people, boats, fishing gear, blood, wounds, horror, anthropomorphism, exaggerated smiles, glowing eyes or toy/plastic/cartoon appearance.\nSubject identity: common bottlenose dolphin Tursiops truncatus, robust smooth gray torpedo body, darker gray back graduating to pale belly, rounded melon forehead separated by a subtle crease from a SHORT THICK beak-like rostrum. Do not use long narrow spinner/common dolphin snout, white-sided/hourglass body patterns, spotted dolphin markings or gray-whale body. Do not label as Indo-Pacific bottlenose dolphin Tursiops aduncus, no abdominal black spots as an identification motif. No region or subspecies should be claimed just from appearance.\nAnatomy invariants: exactly TWO pectoral flippers attached behind head on opposite body sides, ONE curved falcate dorsal fin, ONE tail peduncle ending in TWO horizontal left-right flukes with central notch. Whale tail plane must be perpendicular to upright dorsal fin, never fish-like vertical upper/lower lobes. No hindlimbs, pelvic fins or shark gill slits. Small natural lateral eyes, one subtle blowhole on top of head behind forehead if visible. Entire principal animal and all appendage ends comfortably inside frame, about 7% margin.\nScene/composition: THREE common bottlenose dolphins Tursiops truncatus traveling calmly together just below the surface of clear temperate Pacific ocean water, full bodies of all three framed. Elevated underwater three-quarter view from above and slightly behind their left shoulders, diagonally looking toward their heads as they swim toward the lower-left. One closer animal and two farther animals with clear open water spacing, not overlapping or fused bodies, no calf nursing or mating scene. Each retains short thick rostrum and robust gray body. Same-direction gentle social group travel, no prey. This is an educational reconstruction; do not suggest a permanent family trio or claim particular sex or age. Sunlight patterns restrained, quiet distant coast-free blue ocean backdrop. Emphasize the gray backs and curved upright dorsal fins while the two pectoral flippers and HORIZONTAL left-right tail flukes of each animal are anatomically coherent under perspective. Whales' horizontal tail flukes spread laterally like wings, not upright fish tails. No fourth dolphin, no synchronized jumping, no body-contact aggression, no arrows or imagined sound beams.",
          "Use case: scientific-educational. Asset: Sea Atlas ecology illustration, horizontal 3:2, ages 5–12. Image 1 is an identity and natural-history painting-style reference ONLY. Create a newly drawn common bottlenose dolphin Tursiops truncatus in a genuinely different swimming pose, NOT a background edit, flip, rotation or reused horizontal silhouette. View the entire single dolphin from slightly below and in front as it curves gently into a descending turn: short thick snout points down toward lower centre and toward the camera, trunk bends naturally, tail stock rises behind it toward upper right, horizontal tail flukes flex upward in a propulsion stroke. One connected pair of pectoral flippers at visibly different angles, exactly one curved dorsal fin, a single narrowing caudal peduncle continuously joining both left/right tail lobes. Show the light belly and foreshortened head as well as grey back; keep realistic dolphin proportions, rounded melon, small lateral eyes and closed natural mouth. All fin and tail tips fully inside frame with generous margin. Calm blue coastal water, subtle particles, soft natural light, no prey, no extra animals, no bubbles standing for anatomy, no text or watermark. Must read as an active descending turn with a different camera angle and fin configuration from the referenced side-on animal; retain species identity and painterly scientific realism, not the reference pose."
        ],
        "generatedAt": "2026-10-08T16:22:52.411Z",
        "checkedAt": "2026-10-11",
        "sha256": "7b6f58d23eada6194e3f8ef6ca08a5df12868081ad49f269bd54b446bae00ec5",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "몸을 굽혀 진행 방향을 바꾸는 유영 자세의 교육 재구성. 특정 실제 관측의 복제가 아님.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Common Bottlenose Dolphin: Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin"
          }
        ],
        "viewpoint": "위앞에서 내려다본 사선",
        "pose": "머리를 아래로 기울이고 몸통을 굽힌 채 꼬리와 가슴지느러미를 움직이는 자세",
        "poseVariationCheck": "시트04의 수평 옆모습/무리 추가 컷과 달리 위앞 카메라, 머리가 아래로 향하는 굽은 몸통, 뒤에서 올라간 꼬리와 서로 다른 가슴지느러미 각도가 실제로 달라짐. 단순 미러/평면 회전/배경 교체 아님.",
        "visualLimitations": "실제출력은 위앞사선. 정밀운동학 주장 없음. 행동을 설명하는 생성 삽화의 육안 점검이며 실제 방향 전환 속도·관측 수심이나 전문가 감수를 뜻하지 않음. 프롬프트의 아래 시점 대신 결과는 위앞 시점이라 수정된 후보 설명과 일치함."
      }
    ]
  },
  {
    "id": "giant-manta-ray",
    "name": "대왕쥐가오리",
    "scientificName": "Mobula birostris",
    "group": "어류",
    "habitatIds": [
      "pelagic",
      "coast"
    ],
    "summary": "큰 삼각형 가슴지느러미를 펼쳐 헤엄치며 작은 플랑크톤을 걸러 먹는 거대한 가오리.",
    "identity": [
      "넓은 마름모 몸과 좌우의 큰 삼각형 가슴지느러미, 앞을 향한 넓은 입, 입 양옆의 머리지느러미 두 개가 특징이다.",
      "등은 검은색 계열이며 밝은 어깨 무늬가 나타날 수 있다. 긴 꼬리와 작은 등지느러미가 있고, 배의 점무늬는 개체마다 다르다."
    ],
    "ecology": "바깥바다와 생산성이 높은 연안 사이를 이동한다. 작은 먹이가 많은 곳에서는 모여 먹지만, 같은 행동을 모든 개체가 늘 하는 것으로 단정하지 않는다.",
    "diet": "동물플랑크톤: 크릴류, 요각류, 작은 갑각류와 갑각류 유생 등을 물에서 걸러 먹는다.",
    "range": "전 세계의 열대·아열대·온대 바다. 외해와 먹이가 풍부한 연안에서 발견된다.",
    "size": "NOAA 제시 최대 체반폭 약 7.9 m(26 ft). 양쪽 가슴지느러미 끝 사이의 폭이며, 머리에서 꼬리까지의 길이가 아니다.",
    "depth": "얕은 먹이 집합은 수심 10 m 미만에서도 관찰된다. 표지 추적에서는 200–450 m 잠수와 1,000 m를 넘는 깊은 잠수가 기록되었으며, 이 기록이 모든 개체의 늘 머무는 수심은 아니다.",
    "sources": [
      {
        "title": "NOAA Fisheries — Giant Manta Ray",
        "url": "https://www.fisheries.noaa.gov/species/giant-manta-ray"
      },
      {
        "title": "NOAA Fisheries — Manta and Mobula Identification Guide",
        "url": "https://www.fisheries.noaa.gov/s3/dam-migration/manta_and_devil_ray_id_fishery_obsever_guide.pdf"
      },
      {
        "title": "NOAA Fisheries — Giant Manta Ray scientific-name revision",
        "url": "https://www.fisheries.noaa.gov/action/final-rule-list-giant-manta-ray-threatened-under-endangered-species-act"
      }
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "aliases": [
      "쥐가오리",
      "자이언트 만타",
      "Giant manta ray",
      "Oceanic manta ray",
      "Manta birostris"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "giant-manta-ray",
        "src": "assets/images/giant-manta-ray-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕쥐가오리 · 커다란 지느러미 펼치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 가슴날개 2개·머리지느러미 2개·작은 등핀 1개·긴 단일 꼬리의 연결과 끝이 모두 프레임 안에서 확인된다. 몸 앞쪽 넓은 입·옆 눈·검은 등의 흰 어깨무늬를 읽는다. 배쪽 아가미가 일부만 보여 양쪽 5쌍 전수와 꼬리 기부의 미세 돌기·종의 정밀 동정은 확정하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. One independent original natural-history illustration for Sea Atlas, for children ages 5–12. Refined painterly realism with slight brush texture, natural anatomy and colors, soft natural underwater light, no anthropomorphism. Landscape 3:2. One adult giant oceanic manta ray, Mobula birostris, chevron color form, not Mobula alfredi. Broad diamond-shaped central body with exactly TWO very large triangular wing-like pectoral fins smoothly connected left and right; front-facing broad terminal mouth between exactly TWO cephalic lobes, eyes small and naturally on the sides of the head. Black-charcoal dorsal surface with clearly edged broad white shoulder patches creating the normal dark T-shaped shoulder pattern, white belly where visible. One long thin tapering tail attached at posterior body, one small dorsal fin near tail base; small normal pelvic fins may be visible naturally but must not become extra wings. No large barbed stinging tail spine or scorpion tail, no exaggerated teeth, eyes on cephalic lobes, neck, horns or five wings. All wing tips, cephalic lobe tips and entire tail fit inside frame with generous clear-water margins. No text, arrows, labels, borders, humans, boats, blood, injuries, prey fish, horror or neon glowing eyes. Scene: calm full-body swimming in open blue ocean, elevated front three-quarter view, facing lower left of frame with tail trailing upward-right. Both entire triangular wings are stretched out in a nearly level plane, front mouth closed or only a relaxed narrow opening, both cephalic lobes naturally loosely rolled inward. The black dorsal T-shaped shoulder area and distinct white shoulder patches are clearly visible, subtle white underside near edges. Quiet pale-to-deep blue gradient background, no other animals, no seabed. Keep left and right wings balanced and all body connections clear."
        ],
        "generatedAt": "2026-10-03T01:26:12.377Z",
        "checkedAt": "2026-10-03",
        "sha256": "5fdfb1a3e2ef42572ad780be07fdf3f23f2f010e6ee8665199a1b450aa03c2ab",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "giant-manta-ray",
        "src": "assets/images/giant-manta-ray-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕쥐가오리 · 작은 먹이를 걸러 먹기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 가슴날개 2개·펼친 머리지느러미 2개·옆 눈·작은 등핀·긴 단일 꼬리의 전체 윤곽과 끝을 확인한다. 열린 입은 머리 앞쪽에 있고 흰 배의 아가미 줄 일부와 후방 점무늬가 보인다. 입속 줄무늬 여과조직은 도식적 표현이며 판수·정밀 내부해부·양쪽 아가미 전수를 확정하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. One independent original natural-history illustration for Sea Atlas, for children ages 5–12. Refined painterly realism with slight brush texture, natural anatomy and colors, soft natural underwater light, no anthropomorphism. Landscape 3:2. One adult giant oceanic manta ray, Mobula birostris, chevron color form, not Mobula alfredi. Broad diamond-shaped central body with exactly TWO very large triangular wing-like pectoral fins smoothly connected left and right; front-facing broad terminal mouth between exactly TWO cephalic lobes, eyes small and naturally on the sides of the head. Black-charcoal dorsal surface with clearly edged broad white shoulder patches creating the normal dark T-shaped shoulder pattern, white belly where visible. One long thin tapering tail attached at posterior body, one small dorsal fin near tail base; small normal pelvic fins may be visible naturally but must not become extra wings. No large barbed stinging tail spine or scorpion tail, no exaggerated teeth, eyes on cephalic lobes, neck, horns or five wings. All wing tips, cephalic lobe tips and entire tail fit inside frame with generous clear-water margins. No text, arrows, labels, borders, humans, boats, blood, injuries, prey fish, horror or neon glowing eyes. Scene: full animal in a low front three-quarter underwater view facing toward the viewer and slightly left. Mouth naturally broad and open at the FRONT edge of head, two cephalic lobes UNROLLED outward and curling around the sides to form a smooth O-like funnel directing water with tiny sparse zooplankton specks into mouth. Show the natural white ventral surface with subtle dark spots toward the posterior, paired gill-slit groups on the underside if clearly visible; avoid black spots crowding between the gill slits. Both broad triangular wings fully spread, no symmetry-breaking extra wings, entire slender tail curves gently behind and remains fully inside frame. Tiny prey particles only, not oversized prawns or a giant fish in the mouth. Shallow open sea with soft daylight, no seabed, mouth not a human smile or fearsome toothed maw. Simple water-filtering feeding moment, not a chase or violent attack."
        ],
        "generatedAt": "2026-10-03T01:27:12.424Z",
        "checkedAt": "2026-10-03",
        "sha256": "0362b790db8339a84d586ed4eebc708784f837a19ba1b155d990aebcc6ea539a",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "입 앞의 두 머리지느러미로 작은 먹이가 든 물을 모아 걸러 먹어요. 입속 모양은 설명을 위한 재현이며 세밀한 해부 도판은 아니에요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Giant Manta Ray",
            "url": "https://www.fisheries.noaa.gov/species/giant-manta-ray"
          }
        ]
      },
      {
        "id": "giant-manta-ray",
        "src": "assets/images/giant-manta-ray-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕쥐가오리 · 바다에서 방향 바꾸기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "등쪽 시점에서 큰 가슴날개 2개·앞쪽 머리지느러미 2개·꼬리 기부의 작은 등핀·긴 단일 꼬리와 작은 배지느러미 윤곽을 확인한다. 검은 등과 흰 어깨무늬가 보이며 날개·꼬리 끝이 잘리지 않았다. 앞 입과 복측 아가미는 가려져 해당 구조·전수는 확인 불가하다.",
        "generationPrompts": [
          "Use case: scientific-educational. One independent original natural-history illustration for Sea Atlas, for children ages 5–12. Refined painterly realism with slight brush texture, natural anatomy and colors, soft natural underwater light, no anthropomorphism. Landscape 3:2. One adult giant oceanic manta ray, Mobula birostris, chevron color form, not Mobula alfredi. Broad diamond-shaped central body with exactly TWO very large triangular wing-like pectoral fins smoothly connected left and right; front-facing broad terminal mouth between exactly TWO cephalic lobes, eyes small and naturally on the sides of the head. Black-charcoal dorsal surface with clearly edged broad white shoulder patches creating the normal dark T-shaped shoulder pattern, white belly where visible. One long thin tapering tail attached at posterior body, one small dorsal fin near tail base; small normal pelvic fins may be visible naturally but must not become extra wings. No large barbed stinging tail spine or scorpion tail, no exaggerated teeth, eyes on cephalic lobes, neck, horns or five wings. All wing tips, cephalic lobe tips and entire tail fit inside frame with generous clear-water margins. No text, arrows, labels, borders, humans, boats, blood, injuries, prey fish, horror or neon glowing eyes. Scene: distinct HIGH overhead dorsal three-quarter view of the whole manta swimming diagonally toward the upper left in open ocean, one large triangular wing gently raised and the other gently lowered in an ordinary slow banking turn. Make BOTH wings' connections and outer tips visible and their shape still broad triangular, not rolled into extra fins. Mouth in a calm closed relaxed state, exactly two naturally rolled cephalic lobes at front, long single tail trailing down-right and fully in frame, small dorsal fin at posterior. Show black-charcoal dorsal body, distinct white shoulder patches and dark T-shaped shoulder pattern, fine rough natural skin texture. Sunlit water surface far above and a quiet spacious deep-blue water-column backdrop below, sparse marine particles, no coral reef, seabed, cleaner fish, sharks or second manta. Different viewing angle and posture from the portrait; entire silhouette and tail readable."
        ],
        "generatedAt": "2026-10-03T01:28:23.321Z",
        "checkedAt": "2026-10-03",
        "sha256": "3348953a23f1d09f8f5ea492c88b02b7ea34b1728e87320ad34a44892b88112b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "바깥바다에서 헤엄치며 방향을 바꾸는 모습을 다른 각도로 그렸어요. 특정 개체의 이동 경로를 관찰한 기록은 아니에요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Giant Manta Ray",
            "url": "https://www.fisheries.noaa.gov/species/giant-manta-ray"
          },
          {
            "title": "NOAA Fisheries — Manta and Mobula Identification Guide",
            "url": "https://www.fisheries.noaa.gov/s3/dam-migration/manta_and_devil_ray_id_fishery_obsever_guide.pdf"
          }
        ]
      },
      {
        "id": "giant-manta-ray",
        "src": "assets/images/giant-manta-ray-chatgpt-cleaning-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕쥐가오리 · 청소 물고기 곁에서",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두큰가슴날개끝·두두부엽·앞입·근측옆눈·등핀1·가늘고길며분지없는꼬리1확인. 작은줄무늬물고기2.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE giant oceanic manta ray Mobula birostris, NOT reef manta M. alfredi. Very broad diamond disc with TWO complete triangular pectoral wings, forward-facing terminal mouth and TWO rolled cephalic lobes beside it, small eyes laterally, one small dorsal fin at tail base, ONE thin long unbranched tail fully framed. Dark charcoal dorsal surface with angular pale shoulder patches, pale belly with restrained natural dark speckling. No stingray barb, teeth, horns or missing wing. Low front-side three-quarter view slightly below animal hovering gently horizontally above low coral-rock seamount cleaning station. TWO TINY blue-streaked cleaner wrasse Labroides dimidiatus (slender tapered small fishes, blue-white body with uninterrupted black longitudinal stripe, no sucker disc, no remoras) gently inspect near pectoral underside and gill-area edge. Fish mouth near skin, no wounds or magnified parasites, parasite removal itself not visible. Complete ray and fishes with clear scale contrast and margins. Natural diffuse shallow-seamount daylight; no divers or ocean surface. Calm mutualistic cleaning reconstruction."
        ],
        "generatedAt": "2026-10-03T12:28:19.947Z",
        "checkedAt": "2026-10-03",
        "sha256": "a3e8b6374829ff36565feeb559e232e3c54d6e18c1cf72f363a9be0ef7a20b8c",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Mobula birostris와 Labroides dimidiatus를 조사한 Murie et al.2020 연구에 근거한 청소소 재구성. 작은 물고기들이 아가미/가슴핀 배면 주변에 접근한다. 실제 기생충 제거·입 접촉 성공·치유·구체 현장을 정지 삽화로 인증하지 않는다. Mobula alfredi 연구를 이 장면의 종별 행동 근거로 혼합하지 않았다.",
        "behaviorSources": [
          {
            "title": "Murie et al. 2020 — Current strength, temperature, and bodyscape modulate cleaning services for giant manta rays",
            "url": "https://doi.org/10.1007/s00227-020-3674-2"
          }
        ]
      }
    ]
  },
  {
    "id": "marine-iguana",
    "name": "해양이구아나",
    "scientificName": "Amblyrhynchus cristatus",
    "group": "파충류",
    "habitatIds": [
      "coast"
    ],
    "summary": "갈라파고스 바위 해안에서 살며 바다의 해조류를 먹는 이구아나예요.",
    "identity": [
      "짧고 둥근 주둥이와 거친 비늘을 보세요.",
      "목에서 등을 따라 뾰족한 가시 비늘이 이어져요.",
      "네 다리와 발톱으로 바위를 붙잡아요.",
      "긴 꼬리는 좌우로 납작해 헤엄치는 데 도움을 줘요."
    ],
    "ecology": "큰 개체는 바닷속 바위에 붙은 해조류를 먹고, 작은 개체는 물이 빠진 해안에서 먹이를 찾기도 해요. 바위에서 햇볕을 쬐며 체온을 조절하고, 코로 남는 소금을 내보내요.",
    "diet": "바위에 붙은 해조류",
    "range": "에콰도르 갈라파고스 제도의 바위 해안",
    "size": "기관 안내의 평균 길이는 약 0.7m, 큰 개체는 약 1.5m예요. 섬과 성별에 따라 달라요.",
    "depth": "바위 해안·조간대와 가까운 바닷속에서 먹이를 찾아요. 정확한 깊이는 이 도감에서 단정하지 않아요.",
    "sources": [
      {
        "title": "Galapagos Conservation Trust — Marine iguana",
        "url": "https://galapagosconservation.org.uk/species/marine-iguana/"
      },
      {
        "title": "Charles Darwin Foundation — Marine iguanas: between land and sea (2022), p26",
        "url": "https://www.darwinfoundation.org/en/documents/110/FCD_Marine_iguanas_between_land_and_sea.pdf"
      },
      {
        "title": "International Iguana Foundation — Galapagos Marine Iguana",
        "url": "https://www.iguanafoundation.org/what-we-support/galapagos-iguanas/galapagos-marine-iguana/"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "바다이구아나",
      "marine iguana",
      "갈라파고스 해양이구아나"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "marine-iguana",
        "src": "assets/images/marine-iguana-chatgpt-portrait-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해양이구아나 · 화산 바위 위 전신 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "검회색 비늘, 짧고 둥근 주둥이와 작은 자연스러운 눈, 목부터 등의 가시열, 하나의 긴 가늘어지는 꼬리를 확인했다. 네 다리가 몸에 연결되고 네 발 모두 바위에 닿는 전신 구도이다. 발가락에는 일부 겹침이 있어 20개 전수 확인으로 판정하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style with subtle brush texture, believable wild-animal anatomy, natural colors and eyes, gentle documentary mood. Landscape 3:2. Whole focal animal and important appendages inside the frame with generous margins, no cutoffs. No text, labels, arrows, border, logo, watermark, humans, boats, gore, blood, wounds, horror, fantasy, cartoon, anthropomorphism, glowing eyes or plastic appearance. Subject: ONE marine iguana, Amblyrhynchus cristatus, ordinary charcoal-black to dark gray adult coloration outside vivid breeding coloration, pebbly scaly skin, short blunt rounded snout rather than a long crocodile snout, subtle natural eye, modest dorsal crest of pointed scales from neck through back and proximal tail. Exactly FOUR naturally connected sprawling reptile legs, two front and two hind, each foot with exactly FIVE slender clawed toes, no branching legs, no human hands, no extra toes. ONE long tapered tail flattened side-to-side like a narrow vertically deep swimming paddle, not a broad fish fin or a bifurcated tail, no bands of huge spikes around the tail. Portrait scene with a deliberately HIGH overhead three-quarter natural-history viewpoint so the WHOLE iguana forms a clear four-limbed silhouette. One adult lies low and relaxed on a broad flat black volcanic rock beside the sea; head points upper-left, tail extends down-right in a single gentle curve with its complete tip and generous margin. Exactly FOUR legs splay naturally sideways onto FOUR SEPARATE AREAS OF ROCK, two forelegs beside the shoulders and two hindlegs beside the pelvis. All four compact feet rest on ROCK OUTSIDE THE BODY OUTLINE, never on its own back or tail. Each foot has exactly five separate short clawed toes. Avoid perspective overlap of the far hindleg: clearly show its upper leg attached at the far pelvis and its lower leg ending on the rock beyond that side of the body. Belly low, no upright sitting pose. Quiet blue sea and low lava rocks behind, soft clear daylight. Keep the realistic adult marine iguana's short blunt snout, pebbly charcoal scales, modest dorsal crest and slender long laterally flattened tapering tail. Do not turn the tail into a fifth leg. No other animal, no cropping."
        ],
        "generatedAt": "2026-10-03T01:36:23.457Z",
        "checkedAt": "2026-10-03",
        "sha256": "01e14e2982bda9eb0d6bd00e3ff4bb4151f5eb3a28b0fabdd8228199b0e93420",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "marine-iguana",
        "src": "assets/images/marine-iguana-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해양이구아나 · 바위의 해조류 먹기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "검회색 비늘, 짧은 주둥이, 등가시열, 긴 단일 꼬리를 확인했다. 가까운 앞다리와 뒷다리가 바위를 지지하고 먼 뒷발 일부가 보인다. 먼 앞다리는 몸 뒤에 가려져 네 다리와 20개 발가락을 모두 확인했다고 기록하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style with subtle brush texture, believable wild-animal anatomy, natural colors and eyes, gentle documentary mood. Landscape 3:2. Whole focal animal and important appendages inside the frame with generous margins, no cutoffs. No text, labels, arrows, border, logo, watermark, humans, boats, gore, blood, wounds, horror, fantasy, cartoon, anthropomorphism, glowing eyes or plastic appearance. Subject: ONE marine iguana, Amblyrhynchus cristatus, ordinary charcoal-black to dark gray adult coloration outside vivid breeding coloration, pebbly scaly skin, short blunt rounded snout rather than a long crocodile snout, subtle natural eye, modest dorsal crest of pointed scales from neck through back and proximal tail. Exactly FOUR naturally connected sprawling reptile legs, two front and two hind, each foot with exactly FIVE slender clawed toes, no branching legs, no human hands, no extra toes. ONE long tapered tail flattened side-to-side like a narrow vertically deep swimming paddle, not a broad fish fin or a bifurcated tail, no bands of huge spikes around the tail. Feeding scene: one adult marine iguana underwater on a shallow Galapagos rocky seabed, a low front-side three-quarter view looking slightly down. Head faces right and the short blunt snout touches short natural green-red turf algae attached to the black volcanic rock, gently cropping the algae, not eating a fish or flowering land plant. Four legs brace and grip separate rock areas; natural partial far-leg occlusion is allowed, show all leg roots anatomically coherent, each visible foot has five compact clawed toes. Tail extends to the left in a soft curved taper with its complete tip in frame, no fifth leg. A few quiet ripples of sunlight through cool clear water, restrained underwater particles, no underwater breathing bubbles or sneeze spray. Whole animal and tail with ample frame margins, mouth only slightly parted at the algae, no exposed giant teeth. This is an educational reconstruction of seaweed feeding, not a photographed feeding event."
        ],
        "generatedAt": "2026-10-03T01:29:01.053Z",
        "checkedAt": "2026-10-03",
        "sha256": "1b73b572d2f756ac0f0800adef561a71ae920f23f10680b792e7ff071fa17f58",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "바닷속 바위에 붙은 해조류를 먹어요. 발톱으로 바위를 붙잡는 모습을 재현했고, 실제 삼킴이나 잠수 깊이를 확인한 장면은 아니에요.",
        "behaviorSources": [
          {
            "title": "Galapagos Conservation Trust — Marine iguana",
            "url": "https://galapagosconservation.org.uk/species/marine-iguana/"
          },
          {
            "title": "Charles Darwin Foundation — Marine iguanas: between land and sea (2022), printed p26",
            "url": "https://www.darwinfoundation.org/en/documents/110/FCD_Marine_iguanas_between_land_and_sea.pdf"
          }
        ]
      },
      {
        "id": "marine-iguana",
        "src": "assets/images/marine-iguana-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해양이구아나 · 바위에서 햇볕 쬐기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "뒤쪽 구도에서 검회색 비늘, 짧은 주둥이, 척추를 따르는 가시열과 긴 단일 꼬리를 확인했다. 가까운 앞다리와 뒷다리, 먼 뒷다리가 명확하며 먼 앞다리는 목과 몸 뒤에 자연스럽게 가려져 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style with subtle brush texture, believable wild-animal anatomy, natural colors and eyes, gentle documentary mood. Landscape 3:2. Whole focal animal and important appendages inside the frame with generous margins, no cutoffs. No text, labels, arrows, border, logo, watermark, humans, boats, gore, blood, wounds, horror, fantasy, cartoon, anthropomorphism, glowing eyes or plastic appearance. Subject: ONE marine iguana, Amblyrhynchus cristatus, ordinary charcoal-black to dark gray adult coloration outside vivid breeding coloration, pebbly scaly skin, short blunt rounded snout rather than a long crocodile snout, subtle natural eye, modest dorsal crest of pointed scales from neck through back and proximal tail. Exactly FOUR naturally connected sprawling reptile legs, two front and two hind, each foot with exactly FIVE slender clawed toes, no branching legs, no human hands, no extra toes. ONE long tapered tail flattened side-to-side like a narrow vertically deep swimming paddle, not a broad fish fin or a bifurcated tail, no bands of huge spikes around the tail. Ecology scene: one marine iguana basking in the Galapagos morning sun on a broad dry flat lava rock above the surf. A distinctly HIGH rear-side three-quarter view, head points toward the upper-right, torso runs diagonally, long laterally compressed tail rests in a gentle S along the lower-left rock with its complete tip framed. Natural sprawling resting posture with exactly four separate legs resting against the rock, far feet extend beyond the body's outline so the four limbs and as many natural five-clawed toes as possible can be read without forced stretching. Head slightly raised and eyes natural, mouth closed. Dorsal crest follows the spine, subtle sunlit scales, quiet ocean in background, no other animal. Show a resting thermoregulation posture, no sneeze spray, white mist or salt crystals needed. This is an explanatory basking reconstruction; static art cannot demonstrate a measured rise in body temperature. More skyward warm morning light than the underwater feeding scene, whole body and tail with margin."
        ],
        "generatedAt": "2026-10-03T01:30:16.629Z",
        "checkedAt": "2026-10-03",
        "sha256": "3bd04121fd9346674de67585550e31cb24efeda238f8d0aeb52f58f7896be2ab",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "물 밖 바위에서 햇볕을 쬐며 체온을 조절해요. 햇볕 쬐기를 그린 장면이며 소금을 내보내는 순간을 보여 주지는 않아요.",
        "behaviorSources": [
          {
            "title": "Galapagos Conservation Trust — Marine iguana",
            "url": "https://galapagosconservation.org.uk/species/marine-iguana/"
          },
          {
            "title": "Charles Darwin Foundation — Marine iguanas: between land and sea (2022), printed p26",
            "url": "https://www.darwinfoundation.org/en/documents/110/FCD_Marine_iguanas_between_land_and_sea.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "barreleye",
    "name": "투명머리물고기",
    "scientificName": "Macropinna microstoma",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "barreleye",
        "src": "assets/images/barreleye-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투명머리물고기 · 투명막 안의 관 모양 눈",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "투명한 머리 막 내부의 녹색 관눈2와 얼굴 바깥 검은 후각기관2가 따로 읽힌다. 불투명 몸통·작은 입·근측 큰 가슴핀·등핀·뒷핀·갈라진 꼬리 전체 확인. 원측 짝지느러미와 배지느러미는 가려 전수 확인하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression. Subject: ONE Macropinna microstoma barreleye fish with an opaque dark olive-gray small fish body, fine scales, a SMALL closed horizontal mouth at the front of the snout, translucent broad paired pectoral fins near the sides and translucent dorsal/anal fins toward the rear, and one complete translucent forked fish tail. Above the face is a continuous rounded clear fluid-filled tissue shield, NOT a glass helmet, NOT a skeletal skull and NOT a wholly transparent body. Exactly TWO cylindrical tubular eyes are INSIDE the shield behind the face, each topped by a green lens. Clearly reveal enough of the tube under each green lens to read it as a tubular internal eye. Exactly TWO little dark nares/olfactory organs on the outer front face ABOVE the mouth; these are simple dark depressions with no iris or sclera, NOT exterior cartoon eyes. No extra eyes, no glowing emitted rays, no smiling face. Composition: left-facing front-side three-quarter whole body at eye level. The two internal green tubular eyes point UP toward the shield roof while the dark nares remain distinct on the face. Fish holds a level horizontal posture with its broad pectoral fins extended. Empty midwater, a few tiny suspended particles, no prey. Educational reconstruction of the animal, not a scientific specimen photo."
        ],
        "generatedAt": "2026-10-03T07:14:34.065Z",
        "checkedAt": "2026-10-03",
        "sha256": "3ff1cc3e368e28dcafe72c6a4e156b84747d646e7a4d564b61a55e173ff119ef",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "barreleye",
        "src": "assets/images/barreleye-chatgpt-feeding-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투명머리물고기 · 앞쪽으로 눈을 돌려 작은 먹이 바라보기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속 투명 머리막 안의 두 녹색 관 눈·바깥 작은 콧구멍 두 개·작은 입·불투명 갈색 몸·짝 넓은 가슴핀·이어진 등/뒷/꼬리핀을 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression. Subject: ONE Macropinna microstoma barreleye fish with an opaque dark olive-gray small fish body, fine scales, a SMALL closed horizontal mouth at the front of the snout, translucent broad paired pectoral fins near the sides and translucent dorsal/anal fins toward the rear, and one complete translucent forked fish tail. Above the face is a continuous rounded clear fluid-filled tissue shield, NOT a glass helmet, NOT a skeletal skull and NOT a wholly transparent body. Exactly TWO cylindrical tubular eyes are INSIDE the shield behind the face, each topped by a green lens. Clearly reveal enough of the tube under each green lens to read it as a tubular internal eye. Exactly TWO little dark nares/olfactory organs on the outer front face ABOVE the mouth; these are simple dark depressions with no iris or sclera, NOT exterior cartoon eyes. No extra eyes, no glowing emitted rays, no smiling face. Composition: right-facing low front-side three-quarter whole body, gently angled upward. The two green tubular eyes rotate FORWARD inside the clear shield to face a SINGLE tiny intact drifting copepod-like crustacean just ahead and slightly above the SMALL mouth. No prey touching the mouth, no captured or wounded animal. Other fins stable, complete tail. Educational reconstruction of approaching zooplankton based on diet and observed eye rotation; do NOT depict a proven kill, siphonophore food theft or contact with stinging tentacles.",
          "Use case: scientific-educational. Make ONE NEW 3:2 landscape natural-history illustration for Sea Atlas ages5–12. Input is only a Macropinna microstoma IDENTITY/COLOR/STYLE reference; do not copy its sideways pose, mirror it, or simply rotate the silhouette. Redraw the whole fish with strong new 3D perspective and fin gesture. One complete barreleye fish calmly orienting toward ONE tiny zooplankton crustacean, still separate ahead of its small mouth. NEW CAMERA: LOW NEAR-FRONTAL THREE-QUARTER view from in front and slightly below, the clear forehead and small face closest at lower RIGHT, dark opaque body receding toward upper LEFT. Both nares are visible on the front of the snout; show true foreshortening with the tail farther away, not a full broadside fish. NEW POSE: gentle curved body yaw as it turns toward the camera, complete forked tail tipped slightly sideways behind upper LEFT. Broad transparent paired pectoral fins are extended at visibly different angles: near fin downward/outward, far fin more level and foreshortened, not identical fanned wings. Accurate dark olive-grey body with fine scales, NOT wholly transparent. One continuous rounded transparent fluid-filled forehead shield made of living tissue, NOT a glass helmet or skull. EXACTLY TWO cylindrical tubular eyes sit INSIDE that shield with clear tube length beneath their green lens ends; the internal eyes tilt modestly FORWARD toward the tiny food, biologically plausible eye rotation. Exactly TWO small dark nares/olfactory depressions on the EXTERNAL front face above the small horizontal mouth; no iris, sclera or extra cartoon eyes in the nares. Small mouth only slightly parted, no teeth or smile. Translucent dorsal and anal fins and one fully connected translucent forked tail, no extra parts or detached tail. Entire fish, all fin tips and tail inside generous 15 percent margins. Calm dim deep midwater with sparse particles, no seabed, sun, surface, siphonophore or claimed prey theft. Subtle illustrative fill light, green lenses are restrained not neon searchlights. Scientific painterly realism matching reference. No humans, text, labels, arrows, panels, frame, watermark, fantasy, gore or successful capture."
        ],
        "generatedAt": "2026-10-08T16:44:45.795Z",
        "checkedAt": "2026-10-11",
        "sha256": "82085949b56ea27fc5aa5c6bb1214bc12a75d6d4de1c9a3185a11ced2deb15c2",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "MBARI의 갑각류 먹이와 섭식 시 눈이 앞쪽으로 회전하는 관찰을 바탕으로 먹이 접근을 재구성. 해파리 먹이 훔치기나 포획 성공은 표현하지 않음.",
        "behaviorSources": [
          {
            "title": "MBARI — Barreleye fish",
            "url": "https://www.mbari.org/animal/barreleye-fish/"
          },
          {
            "title": "MBARI — Researchers solve mystery of deep-sea fish with tubular eyes and transparent head",
            "url": "https://www.mbari.org/news/researchers-solve-mystery-of-deep-sea-fish-with-tubular-eyes-and-transparent-head/"
          }
        ],
        "viewpoint": "머리가 가까운 앞 아래 사선, 꼬리는 왼쪽 위 뒤로 멀어짐",
        "pose": "몸을 완만하게 틀고 두 가슴지느러미를 서로 다른 각도로 펼침. 관 모양 눈이 앞의 갑각류를 향함",
        "poseVariationCheck": "가까운 머리가 커지고 꼬리는 왼쪽 위로 멀어지는 실제 앞 사선이며, 몸이 틀어지고 가까운 가슴핀은 아래로 크게 펼치고 먼 것은 단축되어 옆으로 보인다. 기존의 긴 옆면 및 second의 위쪽 뒤 시점과 서로 구별된다.",
        "visualLimitations": "관눈의 정확한 회전 각도·포획 성공이나 돔 내부 미세조직은 확정하지 않음. 관 눈의 앞쪽 기울기는 보이지만 섭식 회전 각도·핀 ray 계수는 인증하지 않는다. 작은 갑각류는 입 바깥에 따로 있으며 포획 성공을 주장하지 않는다."
      },
      {
        "id": "barreleye",
        "src": "assets/images/barreleye-chatgpt-ecology-second-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투명머리물고기 · 뒤쪽 위에서 본 방향 바꾸기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "몸 뒤쪽을 통해 머리 위 투명막과 안의 녹색 관 눈 두 개가 보이고 머리 바깥으로 돌출하지 않는다. 몸은 불투명이며 양 가슴핀·몸의 연속 꼬리 연결을 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression. Subject: ONE Macropinna microstoma barreleye fish with an opaque dark olive-gray small fish body, fine scales, a SMALL closed horizontal mouth at the front of the snout, translucent broad paired pectoral fins near the sides and translucent dorsal/anal fins toward the rear, and one complete translucent forked fish tail. Above the face is a continuous rounded clear fluid-filled tissue shield, NOT a glass helmet, NOT a skeletal skull and NOT a wholly transparent body. Exactly TWO cylindrical tubular eyes are INSIDE the shield behind the face, each topped by a green lens. Clearly reveal enough of the tube under each green lens to read it as a tubular internal eye. Exactly TWO little dark nares/olfactory organs on the outer front face ABOVE the mouth; these are simple dark depressions with no iris or sclera, NOT exterior cartoon eyes. No extra eyes, no glowing emitted rays, no smiling face. Composition: a HIGH front-side oblique viewpoint of one fish facing upper-left; whole body and complete tail visible while broad translucent pectoral fins extend to hold position. Two internal green tubular eyes point upward under the intact transparent head shield. Body is horizontal in open dark twilight midwater with tiny drifting particles; no surface, seafloor, jelly or other fish. A different view from the portrait. Educational reconstruction of hovering in midwater, not proof of exact movement or water depth.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE Macropinna microstoma. NEW HIGH REAR three-quarter camera: complete small forked caudal fan nearest LOWER RIGHT, head farther UPPER LEFT, back of fish visible, unmistakable foreshortening not side profile. Gentle continuous C bend of posterior body and peduncle, near broad pectoral held upward/out, far pectoral lower/foreshortened, different state from front feeding pose. Opaque olive-gray scaled body, small snout and mouth, natural dorsal and anal fins. Clear SOFT fluid-filled tissue shield over forehead only, not whole body transparent and not a hard glass helmet. EXACTLY TWO internal green tubular eyes under shield look upward naturally, with visible lens/tube relation; small external dark spots are NARES not extra eyes. Preserve complete connected tail, natural fin attachment. No food or other animals, dim blue midwater. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo.",
          "Scientific educational illustration of Macropinna microstoma. Reference is ONLY for fish identity and rendering. Change the CAMERA in three dimensions, do not simply rotate a side view. Show a nearly DORSAL-REAR view from high ABOVE its TAIL: tail fan closest at bottom center, long body goes AWAY from viewer into depth, small transparent head farthest at upper center. We mainly see fish BACK and TOP. Distant face/mouth and external nares naturally partly hidden; do not manufacture a full front face. Back between head and tail clearly overlaps and foreshortens. Two broad pectoral fins on opposite sides seen from above, left fin spread straight outward, right swept BACK closer to body, producing asymmetric angles unlike reference. Tail sweeps gently LEFT in a curved swimming stroke. Transparent dome is a continuous soft clear scalp, two green tubular eyes visible INSIDE viewed through its TOP, oriented upward. No outside green eyes or tubes poking through skin, no hard helmet. Compact brown fish, dorsal/anal/caudal fins correctly attached, no extra fins or limbs. No prey, no captions, no labels. Full animal with wide 12 percent margins all fins uncut. Dark blue mesopelagic midwater. 3:2 image. Genuine dorsal-rear foreshortening plus asymmetric fin and tail sweep, not mirroring or simple diagonal rotation."
        ],
        "generatedAt": "2026-10-10T15:57:39.954Z",
        "checkedAt": "2026-10-11",
        "sha256": "efcaf0202a518d61408921668e2c6f85f9b6b090981c0d6a26c856073efc3ab8",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI의 큰 가슴핀으로 안정된 유영 자세를 취하고 두 관 모양 눈이 위를 향하는 관찰을 바탕으로 재구성. 먹이탈취 가설·정확한 운동 계측으로 단정하지 않음.",
        "behaviorSources": [
          {
            "title": "MBARI — Barreleye fish",
            "url": "https://www.mbari.org/animal/barreleye-fish/"
          },
          {
            "title": "MBARI — Tubular eyes and transparent head (2009)",
            "url": "https://www.mbari.org/news/researchers-solve-mystery-of-deep-sea-fish-with-tubular-eyes-and-transparent-head/"
          }
        ],
        "viewpoint": "꼬리 쪽 높은 뒤에서 등면을 내려다봄, 머리는 화면 위로 멀어짐",
        "pose": "좌우 가슴핀의 펼침·뒤 젖힘이 다르고 꼬리가 왼쪽으로 완만하게 휨",
        "poseVariationCheck": "꼬리가 앞 아래에 크고 머리는 뒤 위에 작게 멀어지며 얼굴/입/콧구멍은 몸에 가려지는 실제 등쪽 뒤 시점이다. 왼 가슴핀은 펼치고 오른 것은 뒤로 접히며 몸과 꼬리가 왼쪽으로 연속 휜다. 기존 세 컷 및 first 앞 사선과 실제 시점+부속지/몸 상태가 모두 다르다.",
        "visualLimitations": "등쪽 지느러미 및 얼굴 콧구멍은 자연 가림으로 전부 확인 불가. 꼬리 끝 여백 좁지만 원본 안쪽 등/뒷핀 일부가 몸 겹침과 시점에 가려 뿌리·ray 개수를 모두 확인할 수 없다. 뒤 시점에서 얼굴을 숨긴 상태는 정상적인 가림이며 이를 콧구멍 소실로 판정하지 않는다. 전문 해부 인증 아님."
      }
    ],
    "summary": "투명한 머리막 안에 초록색 렌즈를 가진 관 모양 눈 두 개가 있어요. 한국어 이름은 모습을 설명한 잠정 이름이에요.",
    "identity": [
      "머리 위의 투명한 막 안에 관 모양 눈 두 개가 있어요.",
      "초록색 부분은 눈의 렌즈이며, 얼굴 바깥의 작은 검은 점 두 개는 후각기관이에요.",
      "작은 입과 넓은 지느러미를 보세요. 몸 전체가 투명한 물고기는 아니에요."
    ],
    "ecology": "바다 중층에 거의 움직이지 않고 머물며 위쪽을 살펴봐요. 먹이를 볼 때 눈을 앞쪽으로 돌릴 수 있어요. 관해파리에 잡힌 먹이를 가져갈 수 있다는 설명은 연구자의 가설이에요.",
    "diet": "갑각류와 관해파리류를 포함한 동물플랑크톤. 먹이 탈취 가설을 모든 먹이활동의 확정된 방식으로 단정하지 않아요.",
    "range": "북태평양: 베링해에서 일본과 바하칼리포르니아까지.",
    "size": "MBARI 종 안내의 최대 길이는 15cm예요. 안내에서 몸길이와 전장 측정 기준은 자세히 구분하지 않아요.",
    "depth": "MBARI 안내는 600–800m 중층을 제시해요. 2009년 연구 소개에서도 이 깊이에서 관측한 모습을 설명하며, 이 숫자를 종의 모든 수심 기록이나 잠수 한계로 단정하지 않아요.",
    "sources": [
      {
        "title": "MBARI — Barreleye fish",
        "url": "https://www.mbari.org/animal/barreleye-fish/"
      },
      {
        "title": "MBARI — Tubular eyes and transparent head (2009)",
        "url": "https://www.mbari.org/news/researchers-solve-mystery-of-deep-sea-fish-with-tubular-eyes-and-transparent-head/"
      }
    ],
    "depthZoneIds": [
      "twilight"
    ],
    "aliases": [
      "바렐아이",
      "barreleye fish",
      "Pacific barreleye",
      "볼록눈물고기"
    ]
  },
  {
    "id": "black-seadevil",
    "name": "검은바다악마",
    "scientificName": "Melanocetus johnsonii",
    "summary": "머리의 작은 불빛으로 먹이를 가까이 부르는 심해 아귀예요.",
    "identity": [
      "암컷은 검고 둥근 몸과 큰 입을 가졌어요.",
      "머리 위 가느다란 낚싯대 끝에 작은 빛나는 부분이 있어요.",
      "눈은 작고 입 안에는 가는 이빨이 있어요."
    ],
    "ecology": "어두운 바다에서 머리의 불빛으로 먹이를 끌어들여요. 도감은 큰 입과 낚싯대가 있는 암컷 모습을 보여 줘요.",
    "diet": "갑각류 등 작은 바다 동물",
    "range": "세계 여러 바다의 깊은 물속",
    "size": "기관 자료에서 최대 약 20cm로 소개해요. 암컷과 수컷의 모습·크기는 달라요.",
    "depth": "기관 안내 범위는 약 100–4,500m예요. MBARI가 촬영한 개체는 약 580m에서 발견됐어요.",
    "aliases": [
      "Black seadevil",
      "Humpback anglerfish",
      "심해 아귀",
      "Melanocetus johnsoni"
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Black seadevil anglerfish",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/black-seadevil-anglerfish"
      },
      {
        "title": "MBARI — Melanocetus johnsonii observed at 580m (2014)",
        "url": "https://www.mbari.org/news/amazing-black-sea-devil-anglerfish-observed-in-monterey-bay/"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "black-seadevil",
        "src": "assets/images/black-seadevil-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "검은바다악마 · 작은 불빛과 둥근 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 둥근 검갈색 몸, 작은 근측 옆눈, 큰 입과 가는 치아, 머리에서 나온 단일 낚싯대와 단일 밝은 끝, 근측 가슴지느러미·뒤쪽 등/뒷지느러미·짧은 부채 꼬리를 확인했다. 원측 가슴지느러미와 반대눈은 가려져 짝 전체·치아와 지느러미살의 정확 수를 인증하지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE female black seadevil anglerfish, Melanocetus johnsonii: compact globose black-to-dark-brown soft-skinned body, a large natural upturned mouth, small non-glowing lateral eyes, slender modest uneven inward-pointing teeth without exaggerated monster fangs. ONE thin curved illicium fishing stalk naturally emerging from the top front of the head, ending in ONE small softly glowing pale bulb-like esca with only a faint local halo. Not multiple lures, no giant lantern. Paired small rounded pectoral fins behind the head, one modest posterior dorsal fin, one anal fin beneath the rear body, and one short caudal peduncle with a simple small fan-shaped tail, no long eel tail, no pelvic leg-fins, legs or feet. Natural fin membrane rays, no huge horned forehead. Portrait: centered oblique SIDE view facing left, mouth only slightly parted so a few fine teeth read naturally, both head stalk and complete tail visible. Near pectoral fin clear; far pectoral may be naturally hidden. Lure hangs forward above head, low gentle glow. No prey. Relaxed floating pose."
        ],
        "generatedAt": "2026-10-03T07:13:26.767Z",
        "checkedAt": "2026-10-03",
        "sha256": "8a9ebbe7145caee447785e97dfdc910a5170edb9fcc88cc3c5a9395f6ab7aa6c",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "black-seadevil",
        "src": "assets/images/black-seadevil-chatgpt-feeding-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "검은바다악마 · 앞 사선에서 본 작은 먹이 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "작은 양쪽 눈·어두운 둥근 암컷·연결된 미끼줄기 하나와 작은 빛끝·턱에 붙은 가는 치아·짝 가슴핀·후방 등/뒷핀·붙어 있는 꼬리를 확인했다. 별도의 미끼/사지 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE female black seadevil anglerfish, Melanocetus johnsonii: compact globose black-to-dark-brown soft-skinned body, a large natural upturned mouth, small non-glowing lateral eyes, slender modest uneven inward-pointing teeth without exaggerated monster fangs. ONE thin curved illicium fishing stalk naturally emerging from the top front of the head, ending in ONE small softly glowing pale bulb-like esca with only a faint local halo. Not multiple lures, no giant lantern. Paired small rounded pectoral fins behind the head, one modest posterior dorsal fin, one anal fin beneath the rear body, and one short caudal peduncle with a simple small fan-shaped tail, no long eel tail, no pelvic leg-fins, legs or feet. Natural fin membrane rays, no huge horned forehead. Feeding educational reconstruction: lower front SIDE three-quarter view facing right, a SINGLE very small intact deep-sea shrimp floating a little ahead of the softly glowing head lure. Shrimp is clearly separated from mouth, all shrimp legs normal and tiny, no biting or swallowing. Mouth naturally moderately parted without screaming. Patient ambush before capture, no chase lines. Show full fish and tail, no extra lure or tooth inflation.",
          "Use case: scientific-educational. Create ONE new 3:2 landscape natural-history illustration for Sea Atlas, refined realistic painterly style for ages5–12. The input is an IDENTITY, COLOR and STYLE reference only for female Melanocetus johnsonii; redraw the pose from a NEW 3D camera. NEW CAMERA: LOW NEAR-FRONTAL three-quarter view of the face, large natural mouth closest at lower RIGHT, dark rounded body and tail recede far LEFT behind the head. Convincing shortening in depth: both tiny lateral eyes visible UNEQUALLY, one near and one far, not a normal side profile or mirrored fish. NEW POSE: subtle body bank with near rounded pectoral extended down/out into camera, far pectoral held higher and foreshortened, tail fan oblique. One small intact shrimp ahead of the softly glowing lure, completely outside the mouth, no capture or swallowing. Mouth modestly opened, calm documentary presentation, fine moderate uneven inward teeth, no exaggerated monster fangs. Compact globose soft dark brown-black female body, tiny natural eyes. EXACTLY ONE thin curved fishing stalk naturally connected to TOP FRONT of head, with ONE small pale softly glowing terminal esca, no extra lure or giant lamp. Natural paired small rounded pectoral fins, ONE small posterior dorsal and ONE anal beneath rear body, short connected caudal peduncle and one simple fan tail. NO pelvic fins, armor, legs, attached male, long eel tail or neon eyes. Whole fish, entire stalk, tail and every fin tip contained inside generous margins; no crop. Dim deep open midwater, sparse particles, subtle neutral illustrative fill light (not sunlight). No text, panels, grid, labels, arrows, watermark, gore or fantasy. The actual fish camera and fin pose must visibly change; a rotation or mirror does not satisfy this request."
        ],
        "generatedAt": "2026-10-10T15:41:57.631Z",
        "checkedAt": "2026-10-11",
        "sha256": "b70918fb3ced305af69ff0aa125f3c680c440d6214c440ab272b39d40af9f4c3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "Monterey Bay Aquarium 갑각류 식성·머리 단일 발광미끼의 유인 설명을 바탕으로 먹이 접근 전을 재구성. 실제 유인/포획/삼킴 성공은 확인하지 않음.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Black seadevil anglerfish",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/black-seadevil-anglerfish"
          },
          {
            "title": "MBARI — Melanocetus johnsonii observed at 580m (2014)",
            "url": "https://www.mbari.org/news/amazing-black-sea-devil-anglerfish-observed-in-monterey-bay/"
          }
        ],
        "viewpoint": "머리가 가까운 앞 사선, 꼬리는 왼쪽 뒤로 멀어짐",
        "pose": "몸을 살짝 기울이고 가까운 가슴핀을 아래로, 먼 가슴핀은 위로 펼침",
        "poseVariationCheck": "큰 앞입과 양눈이 가까운 오른쪽 아래에, 꼬리는 작게 뒤 왼쪽에 놓이며 실제 앞 사선 원근이 생겼다. 가까운 가슴핀은 아래 크게 펼치고 먼 것은 위로 단축되어 몸과 핀 상태가 바뀐다. 기존 옆면 및 second의 등뒤 원근과 상호 구별된다.",
        "visualLimitations": "먹이 접촉 전 재구성. 식성 이외 실제 포획이나 핀 광선수를 확인했다고 주장하지 않음 밝은 눈 표현·미끼는 정체성 확인용이며 실제 발광량과 미세 연조 계수는 인증하지 않는다. 새우는 입 바깥에 온전하게 있어 포획 성공을 묘사하지 않는다."
      },
      {
        "id": "black-seadevil",
        "src": "assets/images/black-seadevil-chatgpt-ecology-second-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "검은바다악마 · 뒤쪽 위에서 본 작은 낚싯대",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "어두운 둥근 몸과 작은 눈·머리에 붙은 가느다란 미끼줄기 하나·가는 치아·뒤 등/뒷핀·연결 꼬리와 가까운 가슴핀을 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE female black seadevil anglerfish, Melanocetus johnsonii: compact globose black-to-dark-brown soft-skinned body, a large natural upturned mouth, small non-glowing lateral eyes, slender modest uneven inward-pointing teeth without exaggerated monster fangs. ONE thin curved illicium fishing stalk naturally emerging from the top front of the head, ending in ONE small softly glowing pale bulb-like esca with only a faint local halo. Not multiple lures, no giant lantern. Paired small rounded pectoral fins behind the head, one modest posterior dorsal fin, one anal fin beneath the rear body, and one short caudal peduncle with a simple small fan-shaped tail, no long eel tail, no pelvic leg-fins, legs or feet. Natural fin membrane rays, no huge horned forehead. Ecology: slightly elevated REAR SIDE three-quarter view, fish facing upper-left at a small upward angle, show rounded body and rear dorsal/anal/tail arrangement clearly while the head with tiny eye and one lure remains readable. Single fish floating quietly in the enormous dark midwater, placed slightly left of center with more negative space to right. Mouth closed or gently parted, no prey. No seafloor; habitat depiction only, not a measured depth or event.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE adult female Melanocetus johnsonii. NEW HIGH REAR three-quarter: tail closest LOWER LEFT, rounded dark soft-skinned body recedes to head far UPPER RIGHT; back prominent, tiny far-side eye only, mouth nearly closed. Tail fan turned obliquely, near small rounded pectoral extended out/down and far fin foreshortened upward, subtle body bank. ONE fine curved fishing stalk naturally rooted on TOP FRONT of head with ONE tiny softly glowing pale bulb-like esca, no second stalk, no giant lamp. Compact dark brown/black globular body, tiny eyes, modest fine uneven teeth barely visible, small posterior dorsal and anal, paired pectorals, short peduncle with connected fan tail. NO pelvic fins, long eel tail, armor, giant eyes or attached male. Dim deep open water, no prey. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo."
        ],
        "generatedAt": "2026-10-10T15:58:04.022Z",
        "checkedAt": "2026-10-11",
        "sha256": "89663f66fa2e47816db3566af4ec5ce680d9aa99024d773b96ce3a7b5045a678",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Monterey Bay Aquarium/MBARI의 둥근 암컷 몸과 단일 발광미끼 형태를 바탕으로 조용한 유영을 재구성. 실제 유인·포획을 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Black seadevil anglerfish",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/black-seadevil-anglerfish"
          },
          {
            "title": "MBARI — Melanocetus johnsonii observed at 580m (2014)",
            "url": "https://www.mbari.org/news/amazing-black-sea-devil-anglerfish-observed-in-monterey-bay/"
          }
        ],
        "viewpoint": "높은 뒤 사선. 꼬리가 왼쪽 아래 가까움, 머리는 오른쪽 위 먼 곳",
        "pose": "짧은 꼬리 팬과 서로 다른 가슴핀 각도, 입은 조금 벌림",
        "poseVariationCheck": "왼쪽 아래 가까운 꼬리에서 오른쪽 위 먼 머리로 이어지는 실제 등뒤 사선. 등/뒤 몸이 주면으로 보이고 가까운 핀은 옆아래로 펼치며 먼 것은 위로 단축된다. 기존 옆컷·first 낮은 앞컷과 실제 시점 및 꼬리/핀 평면이 다르다.",
        "visualLimitations": "입을 완전히 닫는 요청은 충족 못해 실제 조금 벌린 입으로 기록. 치열 세부 확인 불가 먼 가슴핀의 뿌리와 앞얼굴 일부가 몸에 겹쳐 가려지며 미세 핀 연조 계수는 인증하지 않는다. 거대한 눈·추가 낚싯대·분리된 꼬리 같은 명확한 오류는 보이지 않는다."
      }
    ]
  },
  {
    "id": "pelican-eel",
    "name": "펠리컨장어",
    "scientificName": "Eurypharynx pelecanoides",
    "summary": "큰 입과 길고 가느다란 꼬리를 가진 심해 장어예요.",
    "identity": [
      "검은 몸 앞쪽에 아주 큰 입이 있어요.",
      "눈은 작고 주둥이 가까이에 있어요.",
      "길게 가늘어지는 꼬리 끝에 작은 발광 기관이 있어요.",
      "큰 꼬리지느러미 없이 가느다란 꼬리 끝으로 이어져요."
    ],
    "ecology": "깊은 바다의 물속에서 먹이를 찾아요. 넓게 벌어지는 입으로 작은 먹이와 물을 함께 받아들이는 것으로 알려져 있어요. 꼬리 끝 불빛의 역할은 아직 단정하지 않아요.",
    "diet": "주로 갑각류, 그 밖에 작은 물고기와 오징어 등",
    "range": "전 세계 열대·온대 바다의 깊은 물속",
    "size": "기관 자료의 최대 길이는 약 75–80cm예요. 75cm는 꼬리 끝까지의 전체 길이예요.",
    "depth": "약 500–3,000m에서 기록됐어요. 이 범위가 모든 개체의 늘 머무는 깊이는 아니에요.",
    "aliases": [
      "Pelican eel",
      "Gulper eel",
      "펠리컨 뱀장어"
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "sources": [
      {
        "title": "Australian Museum — Pelican Eel, Eurypharynx pelecanoides",
        "url": "https://australian.museum/learn/animals/fishes/pelican-eel-eurypharynx-pelecanoides/"
      },
      {
        "title": "Museums Victoria / Fishes of Australia — Eurypharynx pelecanoides",
        "url": "https://fishesofaustralia.net.au/home/species/3300"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "pelican-eel",
        "src": "assets/images/pelican-eel-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "펠리컨장어 · 큰 입과 가느다란 꼬리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 주둥이 가까운 작은 눈, 긴 큰 턱과 그 아래 넓은 목주머니, 검은 단일 길쭉한 몸, 작은 근측 가슴지느러미, 낮게 이어지는 지느러미 가장자리, 가늘어지는 긴 단일 꼬리와 작은 분홍 끝을 확인했다. 큰 부채꼬리/아귀 낚싯대/거대 송곳니는 보이지 않는다. 미세 치아 줄·원측 핀·아가미 구멍은 정확히 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE pelican eel, Eurypharynx pelecanoides, NOT Saccopharynx: velvety soft black scaleless skin, tiny skull relative to massive long jaws, very small eyes close to snout tip. Large pouch-like expandable throat beneath the jaws, a coherent continuous slender elongated body that tapers into ONE extremely long compressed whip-like tail. Tiny reduced pectoral fins low on body just behind small gill openings, thin low continuous dorsal and anal fin margins along the tail. NO broad fan-shaped caudal fin, forked tail, fish tail paddle, legs, wing fins, head fishing stalk, huge teeth, horns or dragon crest. Small numerous teeth only. Tail ends with a tiny subtle pinkish luminous organ, no big neon ball and no claim it attracts food. Portrait: clean whole-animal oblique SIDE view with head facing left and the large jaws gently open, broad lower throat pouch relaxed rather than fully inflated. Main body and extremely long tapering tail sweep gently toward the right in one uninterrupted shallow S, complete minute pinkish tail tip visible inside generous margin. One near pectoral fin tiny and clear. This silhouette must read as a large jawed pelican eel followed by a slender tapering body, not a normal moray eel. No prey."
        ],
        "generatedAt": "2026-10-03T07:15:53.719Z",
        "checkedAt": "2026-10-03",
        "sha256": "28436be9320582c3a7a110d202bc60773355072c446928e73268d67e6a7ce812",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "pelican-eel",
        "src": "assets/images/pelican-eel-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "펠리컨장어 · 넓은 입 앞의 작은 갑각류",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 주둥이 가까운 작은 눈, 긴 큰 턱과 그 아래 넓은 목주머니, 검은 단일 길쭉한 몸, 작은 근측 가슴지느러미, 낮게 이어지는 지느러미 가장자리, 가늘어지는 긴 단일 꼬리와 작은 분홍 끝을 확인했다. 큰 부채꼬리/아귀 낚싯대/거대 송곳니는 보이지 않는다. 미세 치아 줄·원측 핀·아가미 구멍은 정확히 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE pelican eel, Eurypharynx pelecanoides, NOT Saccopharynx: velvety soft black scaleless skin, tiny skull relative to massive long jaws, very small eyes close to snout tip. Large pouch-like expandable throat beneath the jaws, a coherent continuous slender elongated body that tapers into ONE extremely long compressed whip-like tail. Tiny reduced pectoral fins low on body just behind small gill openings, thin low continuous dorsal and anal fin margins along the tail. NO broad fan-shaped caudal fin, forked tail, fish tail paddle, legs, wing fins, head fishing stalk, huge teeth, horns or dragon crest. Small numerous teeth only. Tail ends with a tiny subtle pinkish luminous organ, no big neon ball and no claim it attracts food. Feeding reconstruction: LOW SIDE three-quarter angle facing right, enormous jaws naturally opened and lower throat pouch expanded into a soft dark triangular scoop, tiny eye at upper snout. A SINGLE small intact deep-sea shrimp rests in open water JUST AHEAD of the gape, distinctly separate, no actual swallowing, no wounds. The eel's body curves back to left and down in a single long slender tapering tail with minute pinkish tip fully framed. Jaws have only extremely small fine teeth, no fangs. Do not claim tail light is a prey lure. All eel and shrimp in frame."
        ],
        "generatedAt": "2026-10-03T07:16:37.899Z",
        "checkedAt": "2026-10-03",
        "sha256": "cda5ce1b647adaaf43f85f15870fb24f9b526c2d0dca491dd6294462999821e9",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "입 앞에 작은 온전한 갑각류가 놓인 안전한 섭식 준비 재구성. 실제 흡입·물 배출·삼킴 성공과 먹이 종을 인증하지 않으며 꼬리빛을 먹이 미끼로 단정하지 않는다.",
        "behaviorSources": [
          {
            "title": "Australian Museum — Pelican Eel, Eurypharynx pelecanoides",
            "url": "https://australian.museum/learn/animals/fishes/pelican-eel-eurypharynx-pelecanoides/"
          },
          {
            "title": "Museums Victoria / Fishes of Australia — Eurypharynx pelecanoides",
            "url": "https://fishesofaustralia.net.au/home/species/3300"
          }
        ]
      },
      {
        "id": "pelican-eel",
        "src": "assets/images/pelican-eel-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "펠리컨장어 · 깊은 물속에서 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 주둥이 가까운 작은 눈, 긴 큰 턱과 그 아래 넓은 목주머니, 검은 단일 길쭉한 몸, 작은 근측 가슴지느러미, 낮게 이어지는 지느러미 가장자리, 가늘어지는 긴 단일 꼬리와 작은 분홍 끝을 확인했다. 큰 부채꼬리/아귀 낚싯대/거대 송곳니는 보이지 않는다. 미세 치아 줄·원측 핀·아가미 구멍은 정확히 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational. One ORIGINAL Sea Atlas natural-history illustration for children ages 5–12. Refined painterly realism with subtle brush texture, scientifically plausible natural anatomy, natural tiny eyes and calm documentary presentation, no anthropomorphism. Landscape 3:2. Whole focal animal, every important appendage and complete tail inside the frame with generous margins. Dark deep-ocean midwater fading into black, sparse suspended particles, no visible sea surface, no sunbeams, no caustics, no seabed unless specified, no bubble wake. Subtle neutral soft illustrative fill light lets children understand its shape; this light is not natural sunlight or a claimed luminescent body. No text, arrows, labels, logos, border, humans, boats, blood, wounds, violence, horror expressions, fantasy spikes, huge cartoon eyes, plastic sheen or glowing eyes. Subject ONE pelican eel, Eurypharynx pelecanoides, NOT Saccopharynx: velvety soft black scaleless skin, tiny skull relative to massive long jaws, very small eyes close to snout tip. Large pouch-like expandable throat beneath the jaws, a coherent continuous slender elongated body that tapers into ONE extremely long compressed whip-like tail. Tiny reduced pectoral fins low on body just behind small gill openings, thin low continuous dorsal and anal fin margins along the tail. NO broad fan-shaped caudal fin, forked tail, fish tail paddle, legs, wing fins, head fishing stalk, huge teeth, horns or dragon crest. Small numerous teeth only. Tail ends with a tiny subtle pinkish luminous organ, no big neon ball and no claim it attracts food. Ecology: HIGH SIDE oblique view from above, head toward upper-left, massive jaw only slightly open with relaxed pouch. Long black body and tail form a gentle smooth diagonal S toward lower-right, all tail and tiny pinkish tip visible. Show low dorsal and anal ribbon edges, extremely small eye and reduced pectoral fin anatomically connected. Animal swimming alone in dark ocean midwater, no surface or seabed, no prey, no invented balloon defense or mating scene. More open space and smaller animal in frame than portrait."
        ],
        "generatedAt": "2026-10-03T07:17:15.975Z",
        "checkedAt": "2026-10-03",
        "sha256": "a3ab712bc0443e94048d8f6c9a7ab26cf6fe563071c4f2859e28b6f00e6cfbe9",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "심해 물속 단독 유영 서식 재구성. 방어 팽창·교미·먹이 유인·실제 수심을 주장하지 않는다. 꼬리 기관의 약한 분홍 표시는 기관 형태를 설명하는 표현이다.",
        "behaviorSources": [
          {
            "title": "Australian Museum — Pelican Eel, Eurypharynx pelecanoides",
            "url": "https://australian.museum/learn/animals/fishes/pelican-eel-eurypharynx-pelecanoides/"
          },
          {
            "title": "Museums Victoria / Fishes of Australia — Eurypharynx pelecanoides",
            "url": "https://fishesofaustralia.net.au/home/species/3300"
          }
        ]
      }
    ]
  },
  {
    "id": "fangtooth",
    "name": "송곳니고기",
    "scientificName": "Anoplogaster cornuta",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "fangtooth",
        "src": "assets/images/fangtooth-chatgpt-portrait-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "송곳니고기 · 입을 다문 성체 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "짧고 높은 검갈색 몸·큰 뼈질 머리의 능선/오목부·작은 옆눈·옆줄·근측 가슴핀과 배핀·등핀·뒷핀·갈라진 꼬리 연결과 전신 프레임 확인. 입이 거의 닫혀 긴 이빨 두 개의 기부·방향·전수는 확인 불가. 원측 짝지느러미 가림.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression.  Subject: one small adult common fangtooth Anoplogaster cornuta. Natural deep-sea fish, short deep dark brown-black body, large bony head with rough serrated ridges and cavities, tiny SMALL eye only about 1/12 of head height, small prickly body scales, pronounced lateral-line groove. Stubby pectoral and pelvic fins naturally paired with occlusion, one rear dorsal fin, one rear anal fin, and complete forked tail. NO juvenile long head horns, no lure. The mouth is FULLY CLOSED in a natural oblique jaw line. The lower-jaw fangs fit into upper-mouth pockets and are concealed when the jaw shuts. NO exposed gigantic downward tusks, NO roaring gape, NO human lips. Show a real small marine fish, not a monster. Portrait composition: one fish whole body facing left, strict natural lateral profile with a slight frontward angle. Fully closed mouth, one small lateral eye, quiet dark midwater, no prey. Full fins and forked tail with generous margins. Refined painterly realism. Educational anatomy reconstruction, not an observed specimen."
        ],
        "generatedAt": "2026-10-03T07:22:13.675Z",
        "checkedAt": "2026-10-03",
        "sha256": "460b3380ba025e8d0d27819def6aa963cd1a244973330a207cddd575292dfc83",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "fangtooth",
        "src": "assets/images/fangtooth-chatgpt-feeding-turn-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "송곳니고기 · 정면에서 본 먹이 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "거칠고 큰 골질 머리와 작은 양쪽 눈, 두꺼운 닫힌 입, 두 가슴지느러미와 배 쪽 한 쌍 지느러미, 뒤쪽 등/뒷지느러미 및 연결된 갈라진 꼬리를 확인. 낚싯대·분리된 송곳니·추가 가지 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression.  Subject: one small adult common fangtooth Anoplogaster cornuta. Natural deep-sea fish, short deep dark brown-black body, large bony head with rough serrated ridges and cavities, tiny SMALL eye only about 1/12 of head height, small prickly body scales, pronounced lateral-line groove. Stubby pectoral and pelvic fins naturally paired with occlusion, one rear dorsal fin, one rear anal fin, and complete forked tail. NO juvenile long head horns, no lure. The mouth is FULLY CLOSED in a natural oblique jaw line. The lower-jaw fangs fit into upper-mouth pockets and are concealed when the jaw shuts. NO exposed gigantic downward tusks, NO roaring gape, NO human lips. Show a real small marine fish, not a monster. Feeding composition: whole adult fish facing RIGHT in a front-side oblique angle. Mouth remains CLOSED as the fish approaches ONE very small intact silver fish floating clearly in front with a gap between them. No contact or capture. No teeth visible because the mouth is shut. Full fish bodies and all tails within generous frame margins. Quiet dark open midwater. Reconstruction based on adult fish diet, not proof of actual predation.",
          "Use case: scientific-educational. Sea Atlas natural-history painted illustration, landscape 3:2, ages 5–12, realistic marine anatomy. Input image is an identity and painterly style reference ONLY. Completely redraw the animal in the specified different three-dimensional view and pose; do not preserve, mirror, rotate or paste the old side-on silhouette. Full animal including every fin and tail tip inside generous margins. Calm educational mood, no text, labels, panels, watermark, people, gore or fantasy. One adult Anoplogaster cornuta approaches ONE much smaller uninjured silver fish in dark open midwater. NEW VIEW nearly FRONT-ON and slightly below: big rough bony head nearest in centre, tiny lateral eyes on both sides, short deep brown-black body recedes to upper right. NEW POSE a gentle lateral body and forked-tail bend behind the head; near and far small pectoral fins at different angles, not a rotated side-on copy. Natural very small eyes, bony head cavities and ridges, pronounced lateral-line groove, rear dorsal and anal fins, paired pectoral/pelvic fins. Mouth fully CLOSED; long lower fangs fit into upper-mouth recesses and must NOT protrude like tusks. No head horns, lure, monster teeth, large glass eyes or gigantic grin. A clear gap separates fish and prey, no capture claim. No seafloor, surface or sunlight shafts."
        ],
        "generatedAt": "2026-10-08T16:41:34.721Z",
        "checkedAt": "2026-10-11",
        "sha256": "1a1ddfb0ddf4a6912d01d7bf6ade2435349a9c6706930341759c2aa6fc976cf3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "온전한 작은 물고기와 입 사이의 간격이 있는 접근 장면. 성체 식단 근거의 교육 재구성이며 실제 추적·포획·섭식 성공 또는 먹이의 종을 단정하지 않는다.",
        "behaviorSources": [
          {
            "title": "MBARI — Fangtooth",
            "url": "https://www.mbari.org/animal/fangtooth/"
          },
          {
            "title": "Australian Museum — Fangtooth, Anoplogaster cornuta",
            "url": "https://australian.museum/learn/animals/fishes/fangtooth-anoplogaster-cornuta-valenciennes-1833/"
          }
        ],
        "viewpoint": "정면에 가까운 낮은 앞 사선",
        "pose": "작은 가슴지느러미를 펼치고 몸 뒤와 꼬리를 옆으로 굽힌 자세",
        "poseVariationCheck": "기존 시트05의 옆모습 전신 세 컷에 비해 정면 가까운 머리와 뒤로 후퇴하는 몸통, 서로 다른 양쪽 지느러미 각도 및 꼬리 굽힘으로 두 축이 바뀜.",
        "visualLimitations": "닫힌 입으로 긴 송곳니는 가려짐. 미세 비늘 형태와 실제 먹이 포획 성공은 확인하지 않음. 닫힌 입 속 송곳니는 보이지 않으므로 치열 검증을 주장하지 않음. 원측 작은 지느러미 뿌리 일부는 가림. 먹이 물고기의 종이나 섭식 성공은 단정하지 않음."
      },
      {
        "id": "fangtooth",
        "src": "assets/images/fangtooth-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "송곳니고기 · 어두운 중층의 다른 구도",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "비스듬한 검갈색 몸·큰 머리의 능선과 오목부·작은 눈·옆줄·근측 가슴/배핀·후방 등/뒷핀·갈라진 꼬리가 전부 프레임 안에서 읽힌다. 긴 유년 머리 가시·미끼 없음. 닫힌 입 속 이빨 기부/전수와 원측 핀은 가려졌다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE original natural-history illustration for Sea Atlas for children ages 5–12. Refined realistic painterly style, subtle brush texture, believable wild animal anatomy, natural proportions, quiet documentary mood. Landscape 3:2. Full animal, fins and tail inside the frame with generous margins. Dark blue-black deep midwater without surface, sunbeams or seafloor; soft neutral illustration lighting solely to make the form readable, not claimed sunlight or biological glow. No text, labels, arrows, watermark, humans, submersibles, fantasy, anthropomorphism, horror, blood, wounds, torn prey or aggressive monster expression.  Subject: one small adult common fangtooth Anoplogaster cornuta. Natural deep-sea fish, short deep dark brown-black body, large bony head with rough serrated ridges and cavities, tiny SMALL eye only about 1/12 of head height, small prickly body scales, pronounced lateral-line groove. Stubby pectoral and pelvic fins naturally paired with occlusion, one rear dorsal fin, one rear anal fin, and complete forked tail. NO juvenile long head horns, no lure. The mouth is FULLY CLOSED in a natural oblique jaw line. The lower-jaw fangs fit into upper-mouth pockets and are concealed when the jaw shuts. NO exposed gigantic downward tusks, NO roaring gape, NO human lips. Show a real small marine fish, not a monster. Ecology composition: HIGH rear-side oblique whole-body view, one adult faces upper-right away from viewer. Keep near small eye and head ridges visible, lateral-line groove, whole dorsal/anal/near paired fins and forked tail. Mouth remains completely closed. Quiet solitary open dark midwater with tiny drifting particles. No seafloor or surface. Different viewpoint from portrait, educational midwater posture reconstruction."
        ],
        "generatedAt": "2026-10-03T07:24:16.043Z",
        "checkedAt": "2026-10-03",
        "sha256": "4fbb529c0bccde4263e0bffca8007a8808189e20cfbf55c0daeae3624a44f324",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "어두운 중층의 다른 자세를 보여 주는 교육 재구성이다. 프롬프트의 뒤쪽 시점보다 옆쪽 기울어진 구도로 나왔으나 대표/먹이와 구도가 다르다. 실제 상향 이동·매복 사냥·수심을 인증하지 않는다.",
        "behaviorSources": [
          {
            "title": "MBARI — Fangtooth",
            "url": "https://www.mbari.org/animal/fangtooth/"
          },
          {
            "title": "Australian Museum — Fangtooth, Anoplogaster cornuta",
            "url": "https://australian.museum/learn/animals/fishes/fangtooth-anoplogaster-cornuta-valenciennes-1833/"
          }
        ]
      }
    ],
    "summary": "작은 몸에 큰 머리와 긴 이빨을 가진 심해 물고기예요. 한국어 이름은 모습을 설명한 잠정 이름이에요.",
    "identity": [
      "성체는 검은색에서 짙은 갈색이며 몸은 짧고 높아요.",
      "큰 머리와 입, 작은 눈, 몸 옆의 뚜렷한 옆줄을 보세요.",
      "아래턱 앞쪽의 긴 이빨 두 개는 입을 닫을 때 위쪽 공간에 들어가요.",
      "어린 개체는 밝은 회색과 긴 머리 가시가 있어 성체와 모습이 달라요."
    ],
    "ecology": "중층의 어두운 바다에서 살아요. 옆줄로 주변 물의 움직임을 감지해요. 먹이를 기다릴 가능성이 제시되지만 모든 개체의 행동을 같은 방식으로 단정하지 않아요.",
    "diet": "물고기와 갑각류. 호주박물관은 어린 개체의 갑각류, 성체의 물고기 식단을 구분해요.",
    "range": "전 세계 온대와 열대 바다.",
    "size": "기관 안내에서 최대 길이는 약 17–18cm로 제시돼요. 호주박물관은 17cm, MBARI는 18cm를 안내하며 측정 기준을 서로 같다고 단정하지 않아요.",
    "depth": "MBARI 안내는 500–2,100m를 제시해요. 호주박물관은 주로 500–2,000m이며 약 5,000m까지의 기록도 설명해요. 대표 활동 구간과 전체 기록을 구분해 읽어요.",
    "sources": [
      {
        "title": "MBARI — Fangtooth",
        "url": "https://www.mbari.org/animal/fangtooth/"
      },
      {
        "title": "Australian Museum — Fangtooth, Anoplogaster cornuta",
        "url": "https://australian.museum/learn/animals/fishes/fangtooth-anoplogaster-cornuta-valenciennes-1833/"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "fangtooth",
      "common fangtooth",
      "longhorn fangtooth",
      "귀신고기"
    ]
  },
  {
    "id": "bloody-belly-comb-jelly",
    "name": "붉은배 빗해파리",
    "scientificName": "Lampocteis cruentiventer",
    "group": "빗해파리류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "summary": "붉은 위와 몸을 따라 난 빗판이 특징인 심해 빗해파리. 빗판의 작은 섬모를 움직여 헤엄쳐요.",
    "identity": [
      "부드럽고 반투명한 몸, 두 넓은 입쪽 엽과 짙은 붉은 위, 몸을 따라 난 여덟 빗판 열이 특징이에요.",
      "자포동물 해파리와 다른 빗해파리류예요. 조명을 받는 빗판의 무지갯빛은 빛의 회절·굴절이며 이 종의 자체 생물발광으로 설명하지 않아요."
    ],
    "ecology": "어두운 중층에서 섬모를 움직여 유영해요. 붉은 위는 발광 먹이의 빛을 가리는 데 도움이 되며, 심해의 자연광에서는 붉은색이 어둡게 보여요.",
    "diet": "정확한 먹이 종류와 포획 과정은 아직 연구 중이에요. MBARI와 Monterey Bay Aquarium의 식단 항목은 Unknown으로 표시하며, 작은 발광 먹이를 먹을 수 있다는 설명을 제공해요.",
    "range": "MBARI 종 소개 기준 북태평양: 캐나다에서 바하칼리포르니아, 일본까지 기록돼요.",
    "size": "MBARI 제시 최대 크기 16 cm. Monterey Bay Aquarium은 최대 15 cm를 안내해요. 서로 다른 안내 수치이며 삽화로 크기를 측정하지 않아요.",
    "depth": "MBARI 안내 250–1,500 m. Monterey Bay Aquarium은 400–1,000 m 중층을 소개해요. 산소가 적은 구간에서도 관찰돼요.",
    "sources": [
      {
        "title": "MBARI — Bloody-belly comb jelly",
        "url": "https://www.mbari.org/animal/bloody-belly-comb-jelly/"
      },
      {
        "title": "Monterey Bay Aquarium — Bloody-belly comb jelly",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/bloodybelly-comb-jelly"
      },
      {
        "title": "Harbison, Matsumoto & Robison (2001) — original species description, author upload",
        "url": "https://www.researchgate.net/publication/233606794_Lampocteis_cruentiventer_gen_nov_sp_nov_A_new_mesopelagic_lobate_ctenophore_representing_the_type_of_a_new_family_Class_Tentaculata_Order_Lobata_Family_Lampoctenidae_fam_nov"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "붉은배빗해파리",
      "Bloody-belly comb jelly",
      "Bloodybelly comb jelly"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "bloody-belly-comb-jelly",
        "src": "assets/images/bloody-belly-comb-jelly-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은배 빗해파리 · 붉은 위와 빗판의 전신 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 반투명 붉은 몸과 짙은 붉은 중심, 길게 이어지는 빗판 열, 입쪽의 넓은 두 엽을 확인했다. 눈·이빨·문어 팔·자포동물의 긴 촉수나 달해파리 네 생식소는 보이지 않는다. 뒤쪽 빗판 열과 작은 구강 구조는 겹침으로 여덟 열 전체와 정밀 기부를 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE bloody-belly comb jelly, Lampocteis cruentiventer, a lobate ctenophore, NOT a cnidarian jellyfish. A delicate translucent red-maroon gelatinous body, vertically elongated oval upper body with a domed aboral top, two broad rounded soft oral lobes continuing from its lower sides and framing a narrow central oral area. A large dark crimson central stomach/pharyngeal region is visible through the semitransparent body; subdued delicate canal lines only. Exactly eight longitudinal meridional comb rows overall, each a fine series of short closely spaced translucent ciliary plates, NOT giant spines or mechanical zippers. Show the naturally visible rows, allow back rows to hide under perspective; do not invent extra rows just to expose all eight. Short fine auricles near oral region may be naturally partly obscured. No long dangling cnidarian tentacle fringe, no moon-jelly umbrella or four horseshoe gonads, no octopus arms, eyes, face or bright glowing stomach. Tiny restrained iridescent glints on comb plates are diffraction of the soft illustrative light, NOT self-produced bioluminescence. No glowing aura or rays from the body.\nComposition: eye-level front three-quarter full portrait of the jelly hanging vertically in quiet black midwater. Its domed end points upward; two soft separated oral lobes open gently at the lower end. Main body about two-thirds of frame height and centrally placed, with open dark water and sparse tiny drifting specks. Render its translucent volume, dark red central stomach and fine longitudinal comb plates cleanly without clutter. No prey shown."
        ],
        "generatedAt": "2026-10-03T07:17:57.429Z",
        "checkedAt": "2026-10-03",
        "sha256": "a363d138928324376d7a7d0fcbb34079152f15586372f1f1d81a210b40db91c1",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "bloody-belly-comb-jelly",
        "src": "assets/images/bloody-belly-comb-jelly-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은배 빗해파리 · 작은 미동정 먹이에 접근하는 재구성",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본 크기로 반투명 붉은 몸과 짙은 붉은 중심, 길게 이어지는 빗판 열, 입쪽의 넓은 두 엽을 확인했다. 눈·이빨·문어 팔·자포동물의 긴 촉수나 달해파리 네 생식소는 보이지 않는다. 뒤쪽 빗판 열과 작은 구강 구조는 겹침으로 여덟 열 전체와 정밀 기부를 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE bloody-belly comb jelly, Lampocteis cruentiventer, a lobate ctenophore, NOT a cnidarian jellyfish. A delicate translucent red-maroon gelatinous body, vertically elongated oval upper body with a domed aboral top, two broad rounded soft oral lobes continuing from its lower sides and framing a narrow central oral area. A large dark crimson central stomach/pharyngeal region is visible through the semitransparent body; subdued delicate canal lines only. Exactly eight longitudinal meridional comb rows overall, each a fine series of short closely spaced translucent ciliary plates, NOT giant spines or mechanical zippers. Show the naturally visible rows, allow back rows to hide under perspective; do not invent extra rows just to expose all eight. Short fine auricles near oral region may be naturally partly obscured. No long dangling cnidarian tentacle fringe, no moon-jelly umbrella or four horseshoe gonads, no octopus arms, eyes, face or bright glowing stomach. Tiny restrained iridescent glints on comb plates are diffraction of the soft illustrative light, NOT self-produced bioluminescence. No glowing aura or rays from the body.\nComposition: DISTINCT close oblique view from slightly BELOW toward the open oral lobes, body tilted diagonally upper-left to lower-right, whole body framed. A few extremely tiny indistinct pale animal-plankton specks drift just outside the narrow space between the two broad oral lobes. Do not draw an identifiable shrimp, copepod or fish, a captured large animal, food visibly swallowed, stinging attack, wrapping long tentacles, giant mouth, glowing prey or stomach emission. This only reconstructs a possible approach to small unidentified prey; the exact diet and capture process remain scientifically unknown. A dark red central stomach and fine comb rows remain coherent. Keep tiny specks clearly separated from the animal."
        ],
        "generatedAt": "2026-10-03T07:19:19.562Z",
        "checkedAt": "2026-10-03",
        "sha256": "c354678c5f72ea1c4ab7d6a91ada00962675feb8e7e91f468ecd2876e78b8941",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "열린 입쪽 엽 주변의 작은 미동정 먹이에 접근하는 재구성이다. 정확한 먹이 종류와 포획 과정은 연구 중이며, 확립된 포획법·먹이 종·실제 섭식 성공을 주장하지 않는다. 빗판 무지갯빛은 조명 회절·굴절 표현이다.",
        "behaviorSources": [
          {
            "title": "MBARI — Bloody-belly comb jelly",
            "url": "https://www.mbari.org/animal/bloody-belly-comb-jelly/"
          },
          {
            "title": "Monterey Bay Aquarium — Bloody-belly comb jelly",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/bloodybelly-comb-jelly"
          }
        ]
      },
      {
        "id": "bloody-belly-comb-jelly",
        "src": "assets/images/bloody-belly-comb-jelly-chatgpt-ecology-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은배 빗해파리 · 낮은 앞쪽에서 본 두 입쪽 엽",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속된 투명 붉은 몸 안의 진붉은 위, 앞에서 양쪽으로 펼친 넓은 입쪽 엽 두 개와 뒤쪽 빗판 열을 확인. 엽은 몸에서 이어지고 몸축을 불가능하게 접거나 해파리 촉수를 넣지 않음.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE bloody-belly comb jelly, Lampocteis cruentiventer, a lobate ctenophore, NOT a cnidarian jellyfish. A delicate translucent red-maroon gelatinous body, vertically elongated oval upper body with a domed aboral top, two broad rounded soft oral lobes continuing from its lower sides and framing a narrow central oral area. A large dark crimson central stomach/pharyngeal region is visible through the semitransparent body; subdued delicate canal lines only. Exactly eight longitudinal meridional comb rows overall, each a fine series of short closely spaced translucent ciliary plates, NOT giant spines or mechanical zippers. Show the naturally visible rows, allow back rows to hide under perspective; do not invent extra rows just to expose all eight. Short fine auricles near oral region may be naturally partly obscured. No long dangling cnidarian tentacle fringe, no moon-jelly umbrella or four horseshoe gonads, no octopus arms, eyes, face or bright glowing stomach. Tiny restrained iridescent glints on comb plates are diffraction of the soft illustrative light, NOT self-produced bioluminescence. No glowing aura or rays from the body.\nComposition: DISTINCT high rear-side three-quarter full view of the animal tilted gently toward the right in dark midwater with large negative space. The back comb rows and domed aboral end are favored by the perspective; two soft lower oral lobes can partly overlap naturally. Dark crimson stomach is only softly readable through the body. Show more subdued dim red tissue and only a few tiny diffraction colors where illustrative light touches comb plates, never a glowing neon jelly. Quiet water with sparse suspended particles, no seafloor or prey. Explain its cilia-driven midwater swimming by a calm ordinary swimming pose, without motion trails or arrows.",
          "Create ONE new 3:2 landscape refined natural-history illustration of Lampocteis cruentiventer, bloody-belly comb jelly, suspended alone in dark deep midwater. Use the attached reference ONLY for correct species identity, restrained crimson tissues, ctenophore detail and painterly atlas style. Replace the old elongated diagonal side-view body with a genuinely different end-on view, not a rotation or mirror of it.\nCAMERA: from BELOW the oral end, looking upward along the body's long oral-to-aboral axis with a small 15-degree side offset. The two broad oral lobes are the nearest structures, spread softly to left and right, and the rounded aboral dome recedes behind them. Make the main body strongly foreshortened, nearly round/oval in projection rather than a long sideways sausage. Show the undersides of the two large translucent lobes and the short soft oral structures between them. Exactly TWO broad lobes, attached continuously to the compact upright body; their proximal connections clear. The lobes are a little more OPEN and separated than the narrow folded trailing lobes in the reference, so camera and lobe state BOTH change. Keep the central body axis straight; no twisting torso, dolphin-like bend, invented fins or limb motion.\nTransparent soft dark-crimson jelly with a deep red opaque stomach seen through it, eight real longitudinal ciliary comb rows distributed around the body, projecting as foreshortened curved paths receding toward the far pole. Tiny repeated transverse ciliary plates reflect gentle external-light rainbow hints, not glowing neon or self-luminescent beams. The small hidden rows can be naturally occluded; do not add extra rows to fill the view. Preserve believable internal branching canals and soft tissue, no eyes, teeth, tentacle fringe, long trailing arms, four moon-jelly gonads or giant red flower. Whole animal including both full lobe tips well inside generous 12 percent margins. Sparse particles in quiet dark navy midwater, soft illustrative external light, no seabed or coral, no prey or other animals since exact diet is unknown. No text, labels, arrows, collage, border or watermark.",
          "Create ONE NEW 3:2 landscape natural-history view of the SAME species Lampocteis cruentiventer bloody-belly comb jelly shown in the reference. Change the camera decisively. The previous attempt still looks like a long body standing upright in side view. We need a very low oral-end axial view, as if the viewer is below the creature looking up along its straight body axis, not an upright rotated side view.\nThe TWO broad translucent oral lobes are nearest the camera in the FOREGROUND, flaring gently apart to left and right and projecting toward the viewer; their undersides and near rims are large. Behind and between them the main rounded body is STRONGLY foreshortened and appears as a compact oval dome, almost circular, only about as tall as it is wide. Its far aboral pole is receding behind the near oral structures and lobes, not sitting at the top of a long upright ellipsoid. The darker crimson stomach is likewise foreshortened into a shorter oval visible through the main body, not a long cigar. Body axis itself remains straight, do not bend, twist or fold the trunk to fake perspective. Maintain TWO lobes attached continuously, no extra huge petals or tentacles. Camera looks up through their clear tissues, all connections remain biologically plausible. Two lobes in an open separated state, eight longitudinal comb rows in the real body plan, their tiny transverse ciliary plates visible as foreshortened curved paths round the far body, naturally occluded where appropriate. No adding rows to make an ornamental wheel. Fine internal canals, real dark crimson translucent tissue and opaque red stomach, subtle externally lit comb iridescence, no neon self-glow. This is a calm deep-midwater swimming reconstruction, no prey because exact diet remains unknown. Whole animal and both lobe tips within 12 percent frame margin. Match refined painterly atlas style and quiet dark blue particles. No seabed, other animals, eyes, jaws, text, arrows, panels, border or watermark."
        ],
        "generatedAt": "2026-10-10T15:46:50.774Z",
        "checkedAt": "2026-10-11",
        "sha256": "56a7215f0ba66761d0120d37160bafa0049a600c50beec02f0fced4857c88b36",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI 중층 서식과 섬모 유영을 바탕으로 한 교육용 재구성. 몸 굽힘으로 원근을 만들지 않으며 식성이 미확인이라 먹이를 넣지 않는다. 정확한 운동 위상을 주장하지 않는다.",
        "behaviorSources": [
          {
            "title": "MBARI — Bloody-belly comb jelly",
            "url": "https://www.mbari.org/animal/bloody-belly-comb-jelly/"
          }
        ],
        "viewpoint": "낮은 앞 사선의 단축원근, 가까운 두 엽 뒤로 몸이 물러남",
        "pose": "곧은 몸에서 두 넓은 엽이 전경으로 조금 벌어진 채 유영",
        "poseVariationCheck": "시트05의 길게 늘어진 앞옆 모습 세 컷에 비해 가까운 두 엽이 커지고 뒤 몸이 작게 후퇴하는 앞 원근. 두 엽이 옆으로 벌어진 상태로 기존 하향/모아진 엽 상태와 실제 차이가 있음.",
        "visualLimitations": "완전 입축 아래 시점은 아니므로 낮은 앞 사선으로 기록. 여덟 빗판은 가림으로 전부 계수하지 못함 요청한 완전 입축 아래 시점보다 낮은 앞 사선에 가까운 결과이며 이를 그대로 기록. 작은 auricle과 원측 빗판 열을 전수 계수하지 못하고 몸 안 미세 관망도 전문 동정 미실시. 좌우 엽 끝 여백은 좁지만 잘리지 않음. MBARI 식성이 Unknown이므로 먹이·섭식 장면으로 사용하지 않음."
      }
    ]
  },
  {
    "id": "swimming-sea-cucumber",
    "name": "유영해삼",
    "scientificName": "Enypniastes eximia",
    "group": "극피동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "넓은 앞쪽 막을 펄럭여 바닥 위를 헤엄치는 부드러운 심해 해삼. 먹을 때는 해저로 내려가요.",
    "identity": [
      "반투명한 분홍·자주·적갈색 몸, 몸 앞쪽에 연결된 넓은 유영막과 뒤쪽 양옆의 작은 막이 특징이에요.",
      "입은 앞쪽 배면에 있고 주변의 짧고 갈라진 잎 모양 촉수로 퇴적물을 모아요. 해파리나 오징어가 아닌 해삼이에요."
    ],
    "ecology": "앞쪽 막을 펄럭여 해저 위를 이동하고 뒤쪽 막으로 자세를 조절해요. 접촉 자극에 따른 생물발광이 보고됐지만, 모든 유영 장면에서 늘 빛나는 것은 아니에요.",
    "diet": "해저 표면 퇴적물에 담긴 유기물. 입 주변 촉수로 바닥에 쌓인 작은 유기물과 퇴적물을 모아 먹어요.",
    "range": "세계 여러 깊은 바다에 분포해요. NOAA는 멕시코만·대서양·뉴질랜드·남극해 등의 기록을 소개해요.",
    "size": "Museums Victoria 제시 최대 몸 크기 약 25 cm. 막을 펼친 폭이나 종 전체의 모든 개체 크기로 단정하지 않아요.",
    "depth": "Museums Victoria는 500–7,000 m 이상을 안내해요. NOAA 개별 관측은 오아후 서쪽 1,203 m와 멕시코만 약 2,060 m 등이에요. 관측 수심은 종의 최대 한계와 달라요.",
    "sources": [
      {
        "title": "NOAA Ocean Exploration — What is a headless chicken monster?",
        "url": "https://oceanexplorer.noaa.gov/ocean-fact/what-is-a-headless-chicken-monster/"
      },
      {
        "title": "Museums Victoria — Enypniastes eximia",
        "url": "https://collections.museumsvictoria.com.au/species/16848"
      },
      {
        "title": "NOAA Ocean Exploration — May 1, 2021 Sea Cucumber",
        "url": "https://oceanexplorer.noaa.gov/multimedia/daily-image-media-20210501/"
      },
      {
        "title": "NOAA Ocean Exploration — Swimming Sea Cucumber 2025 observation",
        "url": "https://oceanexplorer.noaa.gov/multimedia/swimming-sea-cucumber/"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "헤엄치는 해삼",
      "Swimming sea cucumber",
      "Spanish dancer sea cucumber",
      "자홍심해해삼"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "swimming-sea-cucumber",
        "src": "assets/images/swimming-sea-cucumber-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "유영해삼 · 앞쪽 유영막과 반투명한 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "반투명 분홍/자주색의 부푼 몸, 몸에 이어진 넓은 앞쪽 유영막과 뒤 양옆 작은 막 두 개, 앞쪽 막 안쪽의 입 주변에 모인 짧고 갈라진 촉수를 원본 크기로 확인했다. 눈/이빨/어류 꼬리/오징어 팔은 보이지 않는다. 입 부위와 촉수 기부가 겹쳐 배면 위치·개수·개별 기부의 전수를 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE swimming sea cucumber, Enypniastes eximia, a benthopelagic echinoderm NOT a jellyfish, squid or fish. Soft translucent pink-mauve to red-brown bulbous elongated barrel-like body, convex dorsal side and flatter ventral side, approximately twice as long as broad. One broad anterior webbed swimming cowl, a rounded scalloped flowing membrane forming a partial brim around the anterior end from fused podia, about twelve fine membrane supports, NOT a detached umbrella and NOT two detached wings. Two smaller posterior lateral webbed brims are continuous with the posterior sides of the SAME body, NOT hind legs or fish tail. At the anterior VENTRAL mouth directly BELOW and INSIDE the cowl, a cluster of approximately twenty SHORT leaf-like feeding tentacles with small forked tips connects around the small mouth opening, NOT to the outer cowl edge. Natural perspective may hide some; do not fan twenty giant octopus arms around the body. A subtle curved sediment-filled intestinal loop may be visible through the body, no cutaway organs. No head, vertebrate eyes, beak, face, skeleton, scales or limbs. No ongoing self-luminescence in this calm non-contact scene; soft light simply makes transparent tissue visible.\nComposition: front-ventral three-quarter full-body portrait, floating mostly vertically above a very distant dim silty seabed. Large rounded anterior swimming cowl at TOP, barrel body below and smaller posterior side brims at BOTTOM. The mouth and short feeding-tentacle cluster are clearly placed on the anterior ventral surface below the cowl, not an eye or face. Show complete continuous membrane roots and a faint natural intestinal curve. Animal occupies about 65% height with clear surrounding black water. Calm hovering, no feeding contact or other animal."
        ],
        "generatedAt": "2026-10-03T07:22:29.903Z",
        "checkedAt": "2026-10-03",
        "sha256": "ddf7b89bf2c9ea6d064875e00b9937891d96bdffdc25a7661a56129748fb951b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "swimming-sea-cucumber",
        "src": "assets/images/swimming-sea-cucumber-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "유영해삼 · 입 주변 촉수로 해저 퇴적물 모으기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "반투명 분홍/자주색의 부푼 몸, 몸에 이어진 넓은 앞쪽 유영막과 뒤 양옆 작은 막 두 개, 앞쪽 막 안쪽의 입 주변에 모인 짧고 갈라진 촉수를 원본 크기로 확인했다. 눈/이빨/어류 꼬리/오징어 팔은 보이지 않는다. 입 부위와 촉수 기부가 겹쳐 배면 위치·개수·개별 기부의 전수를 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE swimming sea cucumber, Enypniastes eximia, a benthopelagic echinoderm NOT a jellyfish, squid or fish. Soft translucent pink-mauve to red-brown bulbous elongated barrel-like body, convex dorsal side and flatter ventral side, approximately twice as long as broad. One broad anterior webbed swimming cowl, a rounded scalloped flowing membrane forming a partial brim around the anterior end from fused podia, about twelve fine membrane supports, NOT a detached umbrella and NOT two detached wings. Two smaller posterior lateral webbed brims are continuous with the posterior sides of the SAME body, NOT hind legs or fish tail. At the anterior VENTRAL mouth directly BELOW and INSIDE the cowl, a cluster of approximately twenty SHORT leaf-like feeding tentacles with small forked tips connects around the small mouth opening, NOT to the outer cowl edge. Natural perspective may hide some; do not fan twenty giant octopus arms around the body. A subtle curved sediment-filled intestinal loop may be visible through the body, no cutaway organs. No head, vertebrate eyes, beak, face, skeleton, scales or limbs. No ongoing self-luminescence in this calm non-contact scene; soft light simply makes transparent tissue visible.\nComposition: DISTINCT low side-front oblique view of the WHOLE animal gently settled onto a fine pale-gray silty abyssal seabed. Its anterior end bends down so short mouth tentacles gently touch and scoop loose surface sediment directly UNDER the front mouth, while the broad anterior cowl is relaxed above and behind that mouth. Body runs diagonally from front at lower-right to posterior at upper-left, two small posterior lateral brims remain connected to its sides. Show a tiny lightly disturbed patch of sediment near the tentacle tips, no enormous cloud, no stones held in tentacles, no fish or seaweed prey, no midwater filter-feeding. Tentacles are short fork-tipped delicate pads, not squid arms. Educational reconstruction of collecting sediment organic material, cannot show actual swallowing success."
        ],
        "generatedAt": "2026-10-03T07:24:16.256Z",
        "checkedAt": "2026-10-03",
        "sha256": "c08906505484022048ea41399b0b10395e22b61ab2ea4d515bf9aaacad44182f",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "해저 표면 퇴적물에 입 주변 촉수를 대는 먹이 활동 재구성이다. NOAA의 바닥에 내려가 유기물이 든 퇴적물을 모아 먹는 설명에 부합하며 수중 플랑크톤 여과 먹이로 바꾸지 않았다. 실제 삼킴과 섭식량은 확인하지 못한다.",
        "behaviorSources": [
          {
            "title": "NOAA Ocean Exploration — What is a headless chicken monster?",
            "url": "https://oceanexplorer.noaa.gov/ocean-fact/what-is-a-headless-chicken-monster/"
          },
          {
            "title": "Museums Victoria — Enypniastes eximia",
            "url": "https://collections.museumsvictoria.com.au/species/16848"
          },
          {
            "title": "NOAA Ocean Exploration — May 1, 2021 Sea Cucumber",
            "url": "https://oceanexplorer.noaa.gov/multimedia/daily-image-media-20210501/"
          }
        ]
      },
      {
        "id": "swimming-sea-cucumber",
        "src": "assets/images/swimming-sea-cucumber-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "유영해삼 · 막을 펼쳐 해저 위를 이동하는 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "반투명 분홍/자주색의 부푼 몸, 몸에 이어진 넓은 앞쪽 유영막과 뒤 양옆 작은 막 두 개, 앞쪽 막 안쪽의 입 주변에 모인 짧고 갈라진 촉수를 원본 크기로 확인했다. 눈/이빨/어류 꼬리/오징어 팔은 보이지 않는다. 입 부위와 촉수 기부가 겹쳐 배면 위치·개수·개별 기부의 전수를 인증하지 못한다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset: ONE original Sea Atlas natural-history gallery illustration for children ages 5–12, horizontal landscape 3:2, no collage.\nStyle: refined naturalistic painterly realism, believable delicate marine anatomy and natural muted color, quiet documentary mood. Very dark navy-black deep-sea midwater or abyssal seafloor as specified. Soft neutral illustrative fill light reveals anatomy; this is not sunlight or emitted light. No visible surface, sunbeams, surface caustics, bubbles, text, labels, arrows, logo, border, humans, boats, blood, injury, horror, anthropomorphic face, eyes where absent, teeth where absent, fantasy neon aura or plastic appearance. Whole animal and all important appendage ends inside frame with generous margins.\nSubject identity: ONE swimming sea cucumber, Enypniastes eximia, a benthopelagic echinoderm NOT a jellyfish, squid or fish. Soft translucent pink-mauve to red-brown bulbous elongated barrel-like body, convex dorsal side and flatter ventral side, approximately twice as long as broad. One broad anterior webbed swimming cowl, a rounded scalloped flowing membrane forming a partial brim around the anterior end from fused podia, about twelve fine membrane supports, NOT a detached umbrella and NOT two detached wings. Two smaller posterior lateral webbed brims are continuous with the posterior sides of the SAME body, NOT hind legs or fish tail. At the anterior VENTRAL mouth directly BELOW and INSIDE the cowl, a cluster of approximately twenty SHORT leaf-like feeding tentacles with small forked tips connects around the small mouth opening, NOT to the outer cowl edge. Natural perspective may hide some; do not fan twenty giant octopus arms around the body. A subtle curved sediment-filled intestinal loop may be visible through the body, no cutaway organs. No head, vertebrate eyes, beak, face, skeleton, scales or limbs. No ongoing self-luminescence in this calm non-contact scene; soft light simply makes transparent tissue visible.\nComposition: DISTINCT high side-rear three-quarter whole-body view of one animal swimming just above the silty deep seabed, body tilted diagonally upward-left with a clear gap below it. Broad anterior cowl is extended with one gentle fold indicating a paddling stroke, visibly CONTINUOUS with its anterior body; two posterior side membranes are smaller and subtly flared as stabilizers. Anterior ventral feeding tentacles are mostly tucked naturally beneath the cowl and may be partly hidden. The distant silty bottom and sparse sinking organic specks are softly visible in lower background; no predators, escape attack, shed skin, or bioluminescent display. Calm transit to another feeding spot; actual motion and speed not measured."
        ],
        "generatedAt": "2026-10-03T07:25:31.265Z",
        "checkedAt": "2026-10-03",
        "sha256": "47dcea1139ed702cae8da8e7cc948b926f94ec9370bfbfcfffa31c1a60fa8048",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "해저와 간격을 두고 막을 펼쳐 유영하는 재구성이다. 앞 막의 펄럭임과 뒤 막의 자세 조절을 설명하지만 실제 속도나 이동 목적을 측정한 것은 아니다. 접촉 자극·발광·피부 탈락 사건은 추가하지 않았다.",
        "behaviorSources": [
          {
            "title": "NOAA Ocean Exploration — What is a headless chicken monster?",
            "url": "https://oceanexplorer.noaa.gov/ocean-fact/what-is-a-headless-chicken-monster/"
          },
          {
            "title": "Museums Victoria — Enypniastes eximia",
            "url": "https://collections.museumsvictoria.com.au/species/16848"
          },
          {
            "title": "NOAA Ocean Exploration — May 1, 2021 Sea Cucumber",
            "url": "https://oceanexplorer.noaa.gov/multimedia/daily-image-media-20210501/"
          }
        ]
      }
    ]
  },
  {
    "id": "blue-whale",
    "name": "흰긴수염고래",
    "scientificName": "Balaenoptera musculus",
    "group": "포유류",
    "habitatIds": [
      "pelagic",
      "polar"
    ],
    "summary": "아주 큰 몸으로 작은 크릴을 먹는 수염고래예요. 입 안의 수염으로 물속 먹이를 걸러요.",
    "identity": [
      "얼룩진 푸른 회색 몸은 길고 날씬해요.",
      "머리는 넓고 납작하며, 작은 등지느러미는 몸 뒤쪽에 있어요.",
      "목 아래 주름과 수평으로 펼쳐진 두 꼬리 엽을 보세요."
    ],
    "ecology": "혼자나 둘이 유영하며 작은 무리로 보이기도 해요. 많은 개체가 여름에 차가운 바다에서 먹이를 찾지만, 모든 개체가 같은 경로로 이동하지는 않아요.",
    "diet": "주로 크릴. 입을 벌리면 목주름이 펼쳐지고, 물을 내보낼 때 수염에 먹이가 남아요. 일부는 작은 물고기나 요각류도 먹어요.",
    "range": "NOAA 안내는 북극해를 제외한 세계 바다를 제시해요. 이번 그림은 남극 바다를 배경으로 한 재구성이며 아종을 그림으로 동정하지 않아요.",
    "size": "NOAA의 지역별 최대 길이 안내는 북대서양·북태평양 약 90피트(27m), 남극 약 110피트(34m)예요. 모두의 보통 크기를 뜻하지 않아요.",
    "depth": "수면에서 호흡하고 물속 먹이 무리를 따라 잠수해요. 햇빛 구간 표시는 이번 상층 먹이·수면 장면을 뜻하며, 종의 최대 잠수 수심은 여기서 확정하지 않아요.",
    "sources": [
      {
        "title": "NOAA Fisheries — Blue whale",
        "url": "https://www.fisheries.noaa.gov/species/blue-whale"
      },
      {
        "title": "Norwegian Polar Institute — Blue whale",
        "url": "https://npolar.no/en/species/blue-whale/"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "blue whale",
      "대왕고래"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "blue-whale",
        "src": "assets/images/blue-whale-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "얼룩진 푸른 회색 몸과 멀리 뒤쪽 작은 등지느러미를 가진 흰긴수염고래.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "길고 얼룩진 청회색몸·넓은 주둥이·목주름·가슴핀2·낮은 뒤등핀·수평꼬리2엽 전부 프레임 안 확인. 작은 눈과닫힌입. 수염/숨구멍 내부와 주름전수 불명.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. An anatomically plausible blue whale Balaenoptera musculus: exceptionally long slender mottled blue-gray body, broad flat U-shaped rostrum, small eye on the visible side, low small dorsal fin far back, exactly two narrow pectoral flippers, ventral longitudinal throat pleats, horizontal tail flukes with two broad lobes and a central notch. No teeth, no sperm-whale square head, no humpback bumps, no huge shark-like dorsal fin. Show a single whale swimming slowly leftward in Antarctic open ocean, slightly below and to the front of a side view so both pectoral flippers and both horizontal tail lobes are readable. Mouth closed, unexpanded throat grooves. Clear cool upper-ocean water, no other animals, understated distant ice edge. Whale occupies about 70 percent of width."
        ],
        "generatedAt": "2026-10-03T12:15:19.973Z",
        "checkedAt": "2026-10-03",
        "sha256": "862f643a2198484c43180a33037cc9ac99cd5f5b7e45355fe8041a3431188077",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "blue-whale",
        "src": "assets/images/blue-whale-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "크릴 무리를 향해 입을 벌리고 목주름을 펼치는 여과섭식의 교육 재구성.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "긴몸·가슴핀2·작은 뒤등핀·수평2엽꼬리·펼쳐진목주름·위턱의 수염 fringe 읽힘. 이빨 없는 표현, 수염판/주름 전수 미확인.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. An anatomically plausible blue whale Balaenoptera musculus: exceptionally long slender mottled blue-gray body, broad flat U-shaped rostrum, small eye on the visible side, low small dorsal fin far back, exactly two narrow pectoral flippers, ventral longitudinal throat pleats, horizontal tail flukes with two broad lobes and a central notch. No teeth, no sperm-whale square head, no humpback bumps, no huge shark-like dorsal fin. Single whole whale in a side-three-quarter view performing a modest open-mouth lunge toward a dense small krill cloud in the upper Southern Ocean. Lower jaw open and throat pouch expanded naturally with stretched parallel ventral pleats; dark baleen fringe may be partly visible along upper jaw, NEVER teeth. Whale's body does not become a spherical balloon. Krill must be tiny suspended specks at the whale's scale, no oversized shrimp. Show feeding approach rather than bloody prey or proof of capture. Both tail lobes inside frame, natural partial far-side flipper occlusion allowed. Soft upper-ocean light."
        ],
        "generatedAt": "2026-10-03T12:16:19.009Z",
        "checkedAt": "2026-10-03",
        "sha256": "dbf30d1bac1bdb68c95ea1720a9066c285d0a5190fc1ca2d42b82dac1e7f6cc2",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "작은 크릴 무리 향해 입을 벌리고 목주머니를 펼치는 교육 재구성. 여과나 섭식 성공의 실제 관측 아님.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/blue-whale"
          }
        ]
      },
      {
        "id": "blue-whale",
        "src": "assets/images/blue-whale-chatgpt-ecology-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "남극 바다 수면 가까이 유영하는 모습. 정확한 아종이나 호흡 순간은 그림으로 동정하지 않음.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "넓은앞머리·목주름·가슴핀2(원측일부수면투영)·낮은 뒤등핀·두꼬리끝 모두 프레임 안 읽힘. 숨구멍 주변 분출 연출 있으나 구멍2개 세부 미확인.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. An anatomically plausible blue whale Balaenoptera musculus: exceptionally long slender mottled blue-gray body, broad flat U-shaped rostrum, small eye on the visible side, low small dorsal fin far back, exactly two narrow pectoral flippers, ventral longitudinal throat pleats, horizontal tail flukes with two broad lobes and a central notch. No teeth, no sperm-whale square head, no humpback bumps, no huge shark-like dorsal fin. Different composition: gently oblique overhead view of a single whole blue whale near the Antarctic sea surface, mouth closed, one faint natural exhalation at the paired blowhole region, calm ocean ripples, distant ice floes much smaller than the whale. Both pectoral flippers are submerged and visible, horizontal tail with both lobes. Do not show leaping, vertical fish tail or a whale on the ice. No other animals.",
          "Edit this original educational blue whale illustration into a NEW landscape 3:2 image. Preserve the plausible Balaenoptera musculus anatomy, mottled gray-blue long body, small far-back dorsal fin, two pectoral flippers and horizontal two-lobed tail, closed mouth, Antarctic ocean surface scene and refined painterly realism. Pull the camera BACK enough that the WHOLE whale including BOTH complete tail-lobe tips and snout are inside the canvas with at least 8 percent water margin on all sides. The rightmost tail tip is clipped in the source: correct the framing by generating natural surrounding ocean and whole tail, not by amputating or shortening the tail. No text, collage, border, gore, humans or anthropomorphic face. Keep 3:2 landscape. Educational reconstruction."
        ],
        "generatedAt": "2026-10-03T12:18:20.775Z",
        "checkedAt": "2026-10-03",
        "sha256": "a025bba9d92b97127d45a180e01233bd2a2478c342140e165a11639e74963bb4",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "수면 유영·호흡을 표현한 재구성. 숨구멍 세부 두 개와 실제 호흡 사건 인증 아님.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/blue-whale"
          }
        ]
      },
      {
        "id": "blue-whale-antarctic-krill",
        "src": "assets/images/blue-whale-antarctic-krill-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "거대한 흰긴수염고래와 아주 작은 남극크릴의 먹이 관계를 나타낸 교육 재구성.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "긴 얼룩몸·가슴핀2·작은 뒤등핀·수평2엽꼬리·목주름/위턱수염 읽힘. 크릴은작은점 무리로 축소. 개별미세형질·절대축척 인증 불가.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. An anatomically plausible blue whale Balaenoptera musculus: exceptionally long slender mottled blue-gray body, broad flat U-shaped rostrum, small eye on the visible side, low small dorsal fin far back, exactly two narrow pectoral flippers, ventral longitudinal throat pleats, horizontal tail flukes with two broad lobes and a central notch. No teeth, no sperm-whale square head, no humpback bumps, no huge shark-like dorsal fin. One whole blue whale gently approaching a dense tiny Antarctic krill cloud in the upper Southern Ocean, mouth slightly open and throat just beginning to expand. Broad diagonal composition from below and slightly in front, entire tail visible and both pectoral flippers separated. Krill Euphausia superba at realistic relative scale: whale tens of meters, krill at most about 6cm; show fine reddish specks, NEVER dozens of giant shrimp comparable with whale flippers. No macro inset or graphic magnification. Educational feeding relationship, no blood, wounds, swallowed prey or proof of capture. Background muted Antarctic ice edge.",
          "Edit this original blue-whale-and-Antarctic-krill interaction illustration, preserving the whole plausible blue whale Balaenoptera musculus, both pectoral flippers, small far-back dorsal fin, horizontal tail and baleen without teeth. CRITICAL CHANGE: remove ALL large clearly outlined foreground shrimp. Render EVERY krill in this picture only as tiny reddish suspended pinpoints, about 1–3 pixels long at a 1536px-wide canvas, in a dense cloud ahead of the whale. Keep all krill at approximately the whale's distance: a whale about30meters versus Euphausia superba maximumabout6cm. No foreground macro shrimp, no inset, no magnification, no giant crustaceans. Leave ample margin around all whale tips. Antarctic upper-ocean scene with distant ice, refined painterly educational realism ages5–12, landscape3:2. Slightly open mouth, no blood/gore/text or proof of capture."
        ],
        "generatedAt": "2026-10-03T12:32:34.847Z",
        "checkedAt": "2026-10-03",
        "sha256": "95b757ce221106990373cbeff8d97c4cefcf4f913be27bbe6d06c5a195a2e72d",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "흰긴수염고래가 작은 남극크릴에 접근하는 먹이관계 재구성. 실제 여과/섭식 성공 및 크릴 세부종 미인증.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/blue-whale"
          },
          {
            "title": "Australian Antarctic Program – Antarctic krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          }
        ],
        "interactionIds": [
          "blue-whale",
          "antarctic-krill"
        ]
      }
    ]
  },
  {
    "id": "adelie-penguin",
    "name": "아델리펭귄",
    "scientificName": "Pygoscelis adeliae",
    "group": "조류",
    "habitatIds": [
      "polar",
      "coast",
      "pelagic"
    ],
    "summary": "눈 둘레의 하얀 고리가 특징인 남극의 펭귄이에요. 날개를 지느러미처럼 써서 물속을 헤엄쳐요.",
    "identity": [
      "검은 머리와 등, 하얀 배를 보세요.",
      "눈 둘레에 가느다란 하얀 고리가 있어요.",
      "두 납작한 날개와 물갈퀴 발, 짧은 꼬리를 가져요."
    ],
    "ecology": "남극 해안과 작은 섬의 드러난 돌바닥에 모여 번식해요. 조약돌 둥지를 만들고 부모가 번갈아 알을 품어요. 겨울에는 바다와 해빙 주변에서 지내요.",
    "diet": "먹이를 찾는 장소에 따라 달라요. 호주 남극기관은 연안에서 물고기·옆새우류·Euphausia crystallorophias, 외해에서 주로 남극크릴 Euphausia superba를 먹는다고 설명해요. 먹이 그림은 외해를 재구성했어요.",
    "range": "남극 대륙의 해안과 인근 작은 섬, 주변 남극 바다와 해빙.",
    "size": "호주 남극기관의 성체 안내: 서 있을 때 높이 약 70cm, 무게 3–6kg. 누운 몸길이나 새끼 크기와 다른 기준이에요.",
    "depth": "호주 남극기관은 보통 수면 아래 70m 이내에서 먹이를 찾으며, 일부 개체는 175m까지 잠수한다고 안내해요. 이 수치를 종의 모든 잠수 기록이나 한계로 단정하지 않아요.",
    "sources": [
      {
        "title": "Australian Antarctic Program — Adélie penguin",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Adélie penguin",
      "Adelie penguin"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "adelie-penguin",
        "src": "assets/images/adelie-penguin-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "검은 머리와 흰 눈테가 읽히는 아델리펭귄의 전신 모습.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "흰눈테·검은 머리/등과 흰배·날개2·발2·몸뒤짧은깃꼬리 확인. 원측눈은가림, 발가락/깃털전수 미감수.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Adélie penguin Pygoscelis adeliae with black head and back, white belly, narrow complete white eye ring around each naturally visible dark eye, short dark beak with feathered base, two flipper wings, two pinkish webbed feet, short stiff tail. No yellow patches, no gentoo white head stripe, no chinstrap line. A single adult-form Adélie stands on exposed dark Antarctic coastal rock, full body in three-quarter view. Both wings slightly away from body, both feet separate on rock, tail visible behind. Distant snow and sea, no nest or other penguins. Moderate realistic proportions, no smiling expression."
        ],
        "generatedAt": "2026-10-03T12:19:31.119Z",
        "checkedAt": "2026-10-03",
        "sha256": "30877e854734c8ddaa0d6bd7f635491fb745c643fa51674ba2cf12179c4d2bf6",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "adelie-penguin",
        "src": "assets/images/adelie-penguin-chatgpt-feeding-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "외해에서 작은 남극크릴에 접근하는 먹이 활동. 실제 포획 성공을 뜻하지 않음.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "흰눈테·흑백몸·날개2·분리된발2·별도짧은꼬리 확인. 크릴은 수cm를 떠올리게 하는 작은몸이며 미세종진단/절대축척 불명.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Adélie penguin Pygoscelis adeliae with black head and back, white belly, narrow complete white eye ring around each naturally visible dark eye, short dark beak with feathered base, two flipper wings, two pinkish webbed feet, short stiff tail. No yellow patches, no gentoo white head stripe, no chinstrap line. A single Adélie swimming horizontally underwater in clear Antarctic upper-ocean water toward a loose school of tiny natural Antarctic krill. Wings spread in a swimming stroke, webbed feet trailing separately, short tail clear. Slightly open short beak but no prey inside and no contact. Krill only a few centimeters compared with a roughly 70cm penguin. Left-facing side-three-quarter angle, no giant shrimp, no blood.",
          "Edit this original Adélie penguin feeding illustration. Keep the whole Pygoscelis adeliae, narrow white eye ring, black head/back and white belly, exactly two separate flipper wings and two separate webbed feet plus short tail, and tiny Euphausia superba Antarctic krill. CHANGE THE BACKGROUND to Antarctic OFFSHORE OPEN OCEAN: no seafloor, no rocks, no coast, no seabed, no coral and no grounded ice. Only deep blue water below and distant rippled water surface above; clear gently lit upper ocean. Reduce foreground krill size moderately so each is a few centimeters versus roughly70cm penguin. Penguin approaches krill with slightly open beak, no contact or prey inside, no proof of capture. Keep whole bird inside with generous margin, landscape3:2 refined educational painterly realism ages5–12, no text, humans, blood, horror or cartoon face."
        ],
        "generatedAt": "2026-10-03T12:23:12.419Z",
        "checkedAt": "2026-10-03",
        "sha256": "28ba337d234877452c9a85d69b90440a67861420bb4bacbf224335d74ff5cf42",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "해저 없는 외해의 작은 남극크릴 접근 장면으로 교정. E.superba 외해 식단 기관 근거에 따른 재구성, 포획 성공 아님.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/"
          }
        ]
      },
      {
        "id": "adelie-penguin",
        "src": "assets/images/adelie-penguin-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "아델리펭귄 · 조약돌 둥지에 웅크린 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전경웅크림 개체의 흰눈테·근측날개·짧은꼬리 보임; 원측날개/발은 몸과돌에가림. 서있는개체는 두날개/두발 읽힘. 배경개체전수검사 아님.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Adélie penguin Pygoscelis adeliae with black head and back, white belly, narrow complete white eye ring around each naturally visible dark eye, short dark beak with feathered base, two flipper wings, two pinkish webbed feet, short stiff tail. No yellow patches, no gentoo white head stripe, no chinstrap line. A different composition on exposed Antarctic coastal rock: one foreground adult-form Adélie crouches over a small pebble nest, intact eggs concealed by its abdomen rather than displayed; a second Adélie stands nearby naturally. Broad colony context with a few smaller distant birds. Foreground eye ring and two natural wings readable, crouched feet may be naturally occluded. Stones on dry rocky ground, never a nest floating on ice or underwater. Calm summer light."
        ],
        "generatedAt": "2026-10-03T12:24:25.975Z",
        "checkedAt": "2026-10-03",
        "sha256": "573f69d06868c8faa88f8813be4da3e6c7d252d09bffc9f31ee4300e7025a560",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "마른 자갈 바닥의 둥지에 머무는 모습은 기관 번식 생태에 따른 교육 재구성이다. 알은 몸과 자갈에 가려져 확인 불가이며, 성별·짝관계·알 품기 성공을 그림으로 확정하지 않는다.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/"
          }
        ]
      },
      {
        "id": "adelie-penguin-antarctic-krill",
        "src": "assets/images/adelie-penguin-antarctic-krill-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "아델리펭귄과 남극크릴 · 외해 먹이 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "흰 눈테·검은 등·흰 배, 두 분리된 날개와 뒤로 뻗은 두 발, 별도의 짧은 꼬리를 확인. 축소된 작은 크릴형 개체들은 투명 분홍 마디 몸·눈·더듬이·꼬리팬을 갖추며 부리와 분리돼 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Adélie penguin Pygoscelis adeliae swimming horizontally left to right in Antarctic OFFSHORE upper open water with a loose small swarm of Antarctic krill Euphausia superba ahead, clear water background without seabed or coastal colony. Penguin natural black head/back and white belly, a thin distinct WHITE RING around each natural eye, short mostly feather-covered dark beak, TWO flipper wings, TWO small trailing webbed feet, ONE short stiff pointed tail distinct from feet. Side-oblique view lets near flipper show fully and far flipper emerge separately beneath far body edge; both feet separate behind body. Whole penguin within margin. Krill naturally tiny 2–6cm compared with about70cm penguin; translucent pink slender segmented shrimp-like bodies with two black stalked eyes, fine antennae, small thoracic basket legs and a small tail fan. No gigantic lobster claws. Penguin beak slightly ajar toward but not touching swarm. No bitten animal, no blood, no bubbles, no confirmed capture. This explicitly reconstructs offshore E. superba feeding approach, not coastal E. crystallorophias feeding.",
          "Edit this original Sea Atlas illustration while preserving the penguin's existing correct anatomy, the entire whole body, TWO flippers, TWO separate trailing webbed feet, ONE short pointed tail, white eye ring, natural beak and calm painterly natural-history style. Preserve landscape 3:2, upper OFFSHORE Antarctic open water with no seabed or coastal colony. Correct ONLY the krill SCALE: every Euphausia superba krill body from rostrum to tail tip (excluding fine antennae) should be around ONE FIFTEENTH to ONE TWENTIETH of the penguin's nose-to-tail length, NEVER more than ONE TWELFTH. Make all current foreground krill at least 50 percent smaller in body length; NO magnified close foreground specimens. Keep them a loose subtle swarm ahead of the penguin at the SAME viewing distance, several with tiny translucent pink segmented bodies, paired natural black eyes, fine antennae and small basket-like thoracic legs/tail fan. No giant prawns or lobster claws. The penguin is about70cm long and krill are 2–6cm, no scale labels. Penguin approaches separated swarm, no contact or capture success. Keep all penguin parts clear with generous frame margins; do not crop left feet/tail. No text, blood, wounds, bubbles, neon, arrows or anthropomorphism."
        ],
        "generatedAt": "2026-10-03T12:35:53.287Z",
        "checkedAt": "2026-10-03",
        "sha256": "ccc99a5bcc44fe9dc82203fbb63ce1cf40086a8bbde1546bd88af4edfe1cf66b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "호주 남극기관 외해 E.superba 식단에 맞춘 열린 상층물 접근 재구성. 연안 E.crystallorophias와 구분, 부리/먹이는 떨어져 실제포획·섭식성공 불명.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Adélie penguin, diet and feeding",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/"
          },
          {
            "title": "Australian Antarctic Program — Krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          }
        ],
        "interactionIds": [
          "adelie-penguin",
          "antarctic-krill"
        ]
      }
    ]
  },
  {
    "id": "antarctic-krill",
    "name": "남극크릴",
    "scientificName": "Euphausia superba",
    "group": "절지동물",
    "habitatIds": [
      "polar",
      "pelagic"
    ],
    "summary": "투명한 몸을 가진 작은 갑각류예요. 작은 조류를 먹고 고래·펭귄을 비롯한 여러 남극 동물의 먹이가 돼요.",
    "identity": [
      "투명한 몸에 붉은 색소 점과 큰 검은 눈이 보여요.",
      "긴 더듬이와 마디진 배, 꼬리 부채를 보세요.",
      "미세조류를 먹으면 몸속 소화기관이 녹색으로 보일 수 있어요."
    ],
    "ecology": "남극 바다에서 무리를 이루어요. 밤에 수면 가까이, 낮에 더 아래에서 먹이를 찾는 경우가 있어요. 어린 단계에는 해빙 아래 조류도 중요한 먹이가 돼요.",
    "diet": "주로 식물플랑크톤. 가슴의 섬세한 부속지를 먹이 바구니처럼 써요. 계절과 장소에 따라 해빙 조류, 가라앉은 유기물이나 작은 동물도 먹어요.",
    "range": "남극수렴대 남쪽의 남극 바다. 이 지역의 여러 크릴 종 가운데 하나이며, 모든 크릴이 Euphausia superba는 아니에요.",
    "size": "호주 남극기관은 성체 길이 약 6cm, BAS는 최대 약 6cm를 안내해요. 몸길이이며 더듬이를 합친 길이 기준은 안내에서 따로 명시하지 않아요.",
    "depth": "상층 바다에 많이 분포해요. BAS의 2008년 연구 소개는 남극반도 주변에서 수심 약 3000m까지 해저 가까이 먹는 관측도 설명해요. 탐사 전체의 500–3500m 범위를 이 종의 일상 서식 범위로 바꾸지 않아요.",
    "sources": [
      {
        "title": "Australian Antarctic Program — Antarctic krill",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
      },
      {
        "title": "British Antarctic Survey — Krill discovered living in the Antarctic abyss (2008)",
        "url": "https://www.bas.ac.uk/news/krill-discovered-living-in-the-antarctic-abyss/"
      },
      {
        "title": "Australian Antarctic Program — Seabed-feeding krill (2011)",
        "url": "https://www.antarctica.gov.au/news/2011/bottoms-up-for-antarctic-krill/"
      }
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "aliases": [
      "Antarctic krill"
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "antarctic-krill",
        "src": "assets/images/antarctic-krill-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰 검은 눈과 붉은 점, 투명한 몸을 가진 남극크릴의 확대 삽화.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "투명붉은점몸·검은눈자루2·더듬이·마디배·가슴 부속지와 배유영지·꼬리팬 확인. 미세다리기부/촉각분기·아가미전수 겹침미감수.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Antarctic krill Euphausia superba, a small approximately 6-centimeter shrimp-like crustacean, translucent slender segmented body with restrained red pigment speckles, a faint green digestive tract, two large dark stalked eyes, slender antennae, compact fine thoracic appendages underneath, small abdominal swimmerets and a natural fan-shaped tail. No lobster claws, no mantis-shrimp raptorial arms, no huge monster eyes, no fish fins. Use plausible overlap of fine appendages, not arbitrary isolated limb counts. Scientific macro view of a single whole krill against soft deep blue Antarctic upper-ocean water. Left-facing side-three-quarter view, both eyes readable and delicate antennae not cropped, several compact thoracic appendages and abdominal swimmerets naturally overlapping. Whole tail fan. No magnification label, no other animal. Fine transparent anatomy without artificial glowing dots."
        ],
        "generatedAt": "2026-10-03T12:25:35.477Z",
        "checkedAt": "2026-10-03",
        "sha256": "10c22a22f95b2ad0d390fabea7f2058c08c0609e3900e93146693bb733ce65c7",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "antarctic-krill",
        "src": "assets/images/antarctic-krill-chatgpt-feeding-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "남극크릴 · 배 쪽에서 본 작은 먹이바구니",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "양 자루눈과 더듬이 뿌리, 연속 갑각·복부마디·꼬리팬 확인. 가슴 아래 털 있는 내지들이 모여 바구니를 이루고 뒤 복부 헤엄다리와 구별됨. 입에서 긴 포획팔이 자라는 형태 없음.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Antarctic krill Euphausia superba, a small approximately 6-centimeter shrimp-like crustacean, translucent slender segmented body with restrained red pigment speckles, a faint green digestive tract, two large dark stalked eyes, slender antennae, compact fine thoracic appendages underneath, small abdominal swimmerets and a natural fan-shaped tail. No lobster claws, no mantis-shrimp raptorial arms, no huge monster eyes, no fish fins. Use plausible overlap of fine appendages, not arbitrary isolated limb counts. Scientific macro view of a single whole krill against soft deep blue Antarctic upper-ocean water. Left-facing side-three-quarter view, both eyes readable and delicate antennae not cropped, several compact thoracic appendages and abdominal swimmerets naturally overlapping. Whole tail fan. No magnification label, no other animal. Fine transparent anatomy without artificial glowing dots.",
          "Create ONE new 3:2 landscape realistic painterly natural-history illustration of Antarctic krill, Euphausia superba, for a children's marine atlas. Reference is species identity, transparent pinkish-white tissue, red speckles and style ONLY. Redraw a genuinely new 3D view and appendage state; do not preserve, rotate or mirror the long side silhouette.\nNEW CAMERA: low VENTRAL FRONT THREE-QUARTER view, close to the underside of the head, looking diagonally back along the animal. The pair of round black stalked eyes and short pointed rostrum are closest to camera in the upper-center left, the thorax and abdomen visibly recede toward upper-right with strong foreshortening. BOTH sides of the thoracic feeding basket are visible from underneath; this must not be a sideways horizontal shrimp profile.\nNEW POSE: one krill quietly filters tiny phytoplankton from the water, its paired setose thoracic endopods cup inward under the thorax into a broad fine-bristled filtering basket. Show six functional paired filtering limbs forming this basket as two facing rows, limbs connected to the thorax rather than a detached wire cage. Do not make claws or praying-mantis arms. The reduced rearmost thoracic legs need not be separately exposed. Six abdominal segments curve gently AWAY and UP, with the five pairs of small paddle-like pleopods folded in a different swimming phase behind the basket; tail fan continuous with abdomen and seen receding in perspective. Two antennal pairs with natural fine branches are connected to the head and curve outward at unequal angles, every drawn antenna end inside frame. Pale translucent carapace, small red-orange spots, modest greenish digestive gland, not lobster red. Tiny diffuse green-brown phytoplankton specks near the basket, no oversized food, no swallowed prey. Whole body and all appendages within generous margins in cold clear blue midwater. Subtle illustrative fill light, no labels, text, panels or extra animals."
        ],
        "generatedAt": "2026-10-08T16:37:11.867Z",
        "checkedAt": "2026-10-11",
        "sha256": "f03220dbc4db90d84464bb664f8410cb32ac02c9f81ddf266d8d6bfc02de5968",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "호주남극청의 식물플랑크톤 식단과 ANARE 30의 강모성 흉부 내지 먹이바구니·다섯 쌍 헤엄다리에 따른 교육 재구성. 먹이를 실제로 포획한 순간·정확한 다리 운동위상은 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program: Antarctic krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          },
          {
            "title": "O'Sullivan & Hosie 1985 ANARE Research Notes 30 pp.35,38 (원문 PDF 실제 읽음)",
            "url": "https://www.antarctica.gov.au/site/assets/files/64914/arn_030.pdf"
          }
        ],
        "viewpoint": "배 쪽 앞 사선에서 머리가 가깝고 꼬리가 멀어지는 단축 원근",
        "pose": "흉부 먹이다리를 모아 바구니를 만들고 복부를 위뒤로 완만히 굽힘",
        "poseVariationCheck": "기존 시트06의 얕은 옆먹이 구도에 비해 아래앞 카메라로 양눈과 넓은 가슴 밑 바구니를 보고 꼬리는 뒤로 굽어 멀어짐. 바구니를 안으로 모은 상태와 복부 굴곡이 실제로 달라짐.",
        "visualLimitations": "강모 다리가 겹쳐 기능 다리 여섯 쌍 및 작은 유영다리 다섯 쌍 전체를 전수 대응하지 못함. 먹이 입자는 교육적 표현. 먹이바구니의 모든 기능다리쌍 기부를 원측까지 독립 계수할 수 없고 노출 아가미도 일부 겹침. 먹이 입자는 크게 그린 교육 재구성이며 먹이종·실제 섭식 속도/성공 미확인. 꼬리 끝은 안에 있으나 오른쪽 여백이 좁음."
      },
      {
        "id": "antarctic-krill",
        "src": "assets/images/antarctic-krill-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "남극크릴 · 등 쪽에서 본 헤엄치는 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "투명한 갑각의 양 자루눈, 연결된 더듬이, 여섯 복부마디에서 이어지는 꼬리팬, 흉부 털다리와 복부 헤엄다리 위치 차이를 확인. 녹색 소화기관과 주황붉은 작은 색소가 보임.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. Antarctic krill Euphausia superba, a small approximately 6-centimeter shrimp-like crustacean, translucent slender segmented body with restrained red pigment speckles, a faint green digestive tract, two large dark stalked eyes, slender antennae, compact fine thoracic appendages underneath, small abdominal swimmerets and a natural fan-shaped tail. No lobster claws, no mantis-shrimp raptorial arms, no huge monster eyes, no fish fins. Use plausible overlap of fine appendages, not arbitrary isolated limb counts. Scientific macro view of a single whole krill against soft deep blue Antarctic upper-ocean water. Left-facing side-three-quarter view, both eyes readable and delicate antennae not cropped, several compact thoracic appendages and abdominal swimmerets naturally overlapping. Whole tail fan. No magnification label, no other animal. Fine transparent anatomy without artificial glowing dots.",
          "Create one completely NEW 3:2 landscape natural-history illustration of Antarctic krill Euphausia superba in cold blue Southern Ocean midwater. Species and restrained painterly texture from attached portrait ONLY; do NOT retain, mirror or rotate its lateral straight-body silhouette. This must be a different 3D camera and swimming posture, not another side shrimp.\nNEW CAMERA: a strong DORSAL view from almost directly ABOVE, slightly behind the animal's head. We look down on the broad transparent carapace and dorsal plates of six abdominal segments. Head faces lower-left toward the viewer, abdomen recedes toward upper-right and is visibly foreshortened. Both black stalked eyes sit on opposite sides of the head; the near eye cannot replace the far eye. Two connected antennal pairs fan forward at different angles, naturally fine and branched.\nNEW POSE: animal is in a gentle swimming turn, with abdomen flexing modestly DOWN underneath the body (a natural articulated shrimp bend, not a snake coil), so the last two abdominal segments and continuous tail fan are partly foreshortened and aim diagonally away, not in a long straight line. Five pairs of small setose swimming pleopods beneath the abdomen are at different paddle phases, seen naturally peeking along the left and right edges where not hidden. Thoracic feeding limbs are relaxed close beneath the carapace rather than expanded in a feeding basket, no claws. Keep realistic translucent whitish-pink tissues, small red-orange speckles, short rostrum, delicate exposed gills beside thorax, not bright red lobster shell. A single complete connected krill with generous empty space around all antenna and tail tips. Sparse distant soft marine snow; no large prey, no fish, no predators, no algae basket or science equipment. Soft blue light and detailed educational realism, no text, letters, panels, border or collage."
        ],
        "generatedAt": "2026-10-08T16:38:54.671Z",
        "checkedAt": "2026-10-11",
        "sha256": "a29ed2d204f669a85625d2d7c92d7b41f924112f8b913387d31544e30c89093f",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "남극청의 부유성 서식과 ANARE 30의 다섯 쌍 헤엄다리 설명에 따른 교육 재구성. 정확한 순간·운동학을 관측했다고 하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program: Antarctic krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          },
          {
            "title": "ANARE Research Notes 30 pp.35,38",
            "url": "https://www.antarctica.gov.au/site/assets/files/64914/arn_030.pdf"
          }
        ],
        "viewpoint": "거의 위에서 내려다보는 등 쪽 사선과 뒤쪽 복부 단축 원근",
        "pose": "복부를 배쪽으로 완만히 굽힘, 헤엄다리는 서로 다른 단계, 먹이다리는 가슴 밑으로 모임",
        "poseVariationCheck": "기존 시트06의 길고 평평한 측면 세 컷에서 가까운 머리 위 사선으로 등판 폭을 보고 복부가 뒤로 굽어 후퇴함. 흉부다리가 모이고 복부다리 스트로크가 달라져 실제 두 축 변화.",
        "visualLimitations": "얇은 다리와 더듬이 가지가 겹치는 부분은 전수 계수하지 않음. 특정 실제 유영 단계로 확정하지 않음. 여러 다리의 원측 가지·기부와 노출 아가미는 겹쳐 완전 계수 불가. ANARE Fig11은 크릴목 일반 구조 도해이므로 E. superba의 전문 동정 완료 근거로 확대하지 않음. 유영 위상·광기관 위치를 모두 검증하지 않음."
      },
      {
        "id": "blue-whale-antarctic-krill",
        "src": "assets/images/blue-whale-antarctic-krill-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "거대한 흰긴수염고래와 아주 작은 남극크릴의 먹이 관계를 나타낸 교육 재구성.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "긴 얼룩몸·가슴핀2·작은 뒤등핀·수평2엽꼬리·목주름/위턱수염 읽힘. 크릴은작은점 무리로 축소. 개별미세형질·절대축척 인증 불가.",
        "generationPrompts": [
          "Create exactly one original landscape 3:2 natural-history educational illustration for ages 5–12, refined painterly realism with scientifically plausible anatomy and subdued natural colors. No text, labels, logo, border, collage, human, anthropomorphism, cartoon face, gore, injury, horror or exaggerated anatomy. Entire main animal and all visible appendages inside the canvas with comfortable margins. Natural occlusion is allowed but no fused, duplicated or amputated parts. This is an educational reconstruction, not a photograph. An anatomically plausible blue whale Balaenoptera musculus: exceptionally long slender mottled blue-gray body, broad flat U-shaped rostrum, small eye on the visible side, low small dorsal fin far back, exactly two narrow pectoral flippers, ventral longitudinal throat pleats, horizontal tail flukes with two broad lobes and a central notch. No teeth, no sperm-whale square head, no humpback bumps, no huge shark-like dorsal fin. One whole blue whale gently approaching a dense tiny Antarctic krill cloud in the upper Southern Ocean, mouth slightly open and throat just beginning to expand. Broad diagonal composition from below and slightly in front, entire tail visible and both pectoral flippers separated. Krill Euphausia superba at realistic relative scale: whale tens of meters, krill at most about 6cm; show fine reddish specks, NEVER dozens of giant shrimp comparable with whale flippers. No macro inset or graphic magnification. Educational feeding relationship, no blood, wounds, swallowed prey or proof of capture. Background muted Antarctic ice edge.",
          "Edit this original blue-whale-and-Antarctic-krill interaction illustration, preserving the whole plausible blue whale Balaenoptera musculus, both pectoral flippers, small far-back dorsal fin, horizontal tail and baleen without teeth. CRITICAL CHANGE: remove ALL large clearly outlined foreground shrimp. Render EVERY krill in this picture only as tiny reddish suspended pinpoints, about 1–3 pixels long at a 1536px-wide canvas, in a dense cloud ahead of the whale. Keep all krill at approximately the whale's distance: a whale about30meters versus Euphausia superba maximumabout6cm. No foreground macro shrimp, no inset, no magnification, no giant crustaceans. Leave ample margin around all whale tips. Antarctic upper-ocean scene with distant ice, refined painterly educational realism ages5–12, landscape3:2. Slightly open mouth, no blood/gore/text or proof of capture."
        ],
        "generatedAt": "2026-10-03T12:32:34.847Z",
        "checkedAt": "2026-10-03",
        "sha256": "95b757ce221106990373cbeff8d97c4cefcf4f913be27bbe6d06c5a195a2e72d",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "흰긴수염고래가 작은 남극크릴에 접근하는 먹이관계 재구성. 실제 여과/섭식 성공 및 크릴 세부종 미인증.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries",
            "url": "https://www.fisheries.noaa.gov/species/blue-whale"
          },
          {
            "title": "Australian Antarctic Program – Antarctic krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          }
        ],
        "interactionIds": [
          "blue-whale",
          "antarctic-krill"
        ]
      },
      {
        "id": "adelie-penguin-antarctic-krill",
        "src": "assets/images/adelie-penguin-antarctic-krill-chatgpt-interaction-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "아델리펭귄과 남극크릴 · 외해 먹이 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "흰 눈테·검은 등·흰 배, 두 분리된 날개와 뒤로 뻗은 두 발, 별도의 짧은 꼬리를 확인. 축소된 작은 크릴형 개체들은 투명 분홍 마디 몸·눈·더듬이·꼬리팬을 갖추며 부리와 분리돼 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Adélie penguin Pygoscelis adeliae swimming horizontally left to right in Antarctic OFFSHORE upper open water with a loose small swarm of Antarctic krill Euphausia superba ahead, clear water background without seabed or coastal colony. Penguin natural black head/back and white belly, a thin distinct WHITE RING around each natural eye, short mostly feather-covered dark beak, TWO flipper wings, TWO small trailing webbed feet, ONE short stiff pointed tail distinct from feet. Side-oblique view lets near flipper show fully and far flipper emerge separately beneath far body edge; both feet separate behind body. Whole penguin within margin. Krill naturally tiny 2–6cm compared with about70cm penguin; translucent pink slender segmented shrimp-like bodies with two black stalked eyes, fine antennae, small thoracic basket legs and a small tail fan. No gigantic lobster claws. Penguin beak slightly ajar toward but not touching swarm. No bitten animal, no blood, no bubbles, no confirmed capture. This explicitly reconstructs offshore E. superba feeding approach, not coastal E. crystallorophias feeding.",
          "Edit this original Sea Atlas illustration while preserving the penguin's existing correct anatomy, the entire whole body, TWO flippers, TWO separate trailing webbed feet, ONE short pointed tail, white eye ring, natural beak and calm painterly natural-history style. Preserve landscape 3:2, upper OFFSHORE Antarctic open water with no seabed or coastal colony. Correct ONLY the krill SCALE: every Euphausia superba krill body from rostrum to tail tip (excluding fine antennae) should be around ONE FIFTEENTH to ONE TWENTIETH of the penguin's nose-to-tail length, NEVER more than ONE TWELFTH. Make all current foreground krill at least 50 percent smaller in body length; NO magnified close foreground specimens. Keep them a loose subtle swarm ahead of the penguin at the SAME viewing distance, several with tiny translucent pink segmented bodies, paired natural black eyes, fine antennae and small basket-like thoracic legs/tail fan. No giant prawns or lobster claws. The penguin is about70cm long and krill are 2–6cm, no scale labels. Penguin approaches separated swarm, no contact or capture success. Keep all penguin parts clear with generous frame margins; do not crop left feet/tail. No text, blood, wounds, bubbles, neon, arrows or anthropomorphism."
        ],
        "generatedAt": "2026-10-03T12:35:53.287Z",
        "checkedAt": "2026-10-03",
        "sha256": "ccc99a5bcc44fe9dc82203fbb63ce1cf40086a8bbde1546bd88af4edfe1cf66b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "interaction",
        "behaviorCheck": "호주 남극기관 외해 E.superba 식단에 맞춘 열린 상층물 접근 재구성. 연안 E.crystallorophias와 구분, 부리/먹이는 떨어져 실제포획·섭식성공 불명.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Adélie penguin, diet and feeding",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/"
          },
          {
            "title": "Australian Antarctic Program — Krill",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/krill/"
          }
        ],
        "interactionIds": [
          "adelie-penguin",
          "antarctic-krill"
        ]
      }
    ]
  },
  {
    "id": "spotted-seahorse",
    "name": "복해마",
    "scientificName": "Hippocampus kuda",
    "group": "어류",
    "habitatIds": [
      "coast",
      "reef"
    ],
    "summary": "낮고 둥근 머리 돌기와 돌돌 감는 꼬리를 가진 해마예요.",
    "identity": [
      "몸의 돌기는 뾰족한 가시보다 둥근 작은 혹에 가까워요.",
      "머리 꼭대기 돌기가 낮고 둥글어요.",
      "관처럼 긴 주둥이 끝에 작은 입이 있어요.",
      "꼬리로 해초를 감아 몸을 붙잡아요."
    ],
    "ecology": "해초가 자라는 얕은 바다와 강물이 바다에 닿는 곳에서 살아요. 꼬리로 식물을 붙잡고 작은 먹이가 가까워지면 주둥이로 빨아들여요. 수컷은 배 아래 주머니에서 알을 돌봐요.",
    "diet": "작은 갑각류와 동물성 플랑크톤",
    "range": "인도양과 태평양의 따뜻한 해역",
    "size": "FishBase의 최대 전체 길이 기록은 30cm예요. 몸통만 잰 길이와 구분해요.",
    "depth": "0–68m의 기록이 있고 보통 0–8m의 얕은 물에 나타나요. 기록 범위가 늘 머무는 깊이를 뜻하지는 않아요.",
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Spotted seahorse",
      "Common seahorse",
      "노랑해마(설명용 별칭)",
      "점박이해마(설명용 별칭)"
    ],
    "sources": [
      {
        "title": "국립생물자원관 — 국가생물종목록 척추동물, Hippocampus kuda 복해마",
        "url": "https://www.nibr.go.kr/aiibook/catImage/21/National%20Species%202.pdf"
      },
      {
        "title": "Project Seahorse — iSeahorse underwater manual, H. kuda",
        "url": "https://www.projectseahorse.org/wp-content/uploads/2021/06/iSeahorse_Underwater_Manual_English_LowRes_1.0.pdf"
      },
      {
        "title": "NParks — Hippocampus spp., H. kuda habitat",
        "url": "https://www.nparks.gov.sg/florafaunaweb/fauna/3/0/305"
      },
      {
        "title": "FishBase — Hippocampus kuda",
        "url": "https://www.fishbase.se/summary/5955"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "spotted-seahorse",
        "src": "assets/images/spotted-seahorse-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "복해마 · 해초를 잡는 꼬리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "관형 주둥이와 작은 입, 낮고 둥근 관, 넓고 깊은 몸통, 낮은 둥근 융기, 근측 작은 가슴핀과 등핀, 단일 감긴 꼬리의 줄기 연결을 실제 원본에서 확인. 꼬리·주둥이·몸 전부 프레임 안에 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Hippocampus kuda, common/spotted seahorse. A deep broad torso, almost SMOOTH clean rounded surface with flat subtle bony trunk/tail ring seams and only TINY LOW rounded bumps, absolutely no prominent knobs, spikes or jagged ridge. A VERY LOW simple round coronet close to head surface, no tall crown or multi-point crown. Thick tubular snout with small round opening, no teeth. Modest natural eye. Muted golden ochre body with subtle sparse brown freckles, no zebra stripes. One long prehensile tail, NO tail fin, NO legs or arms. Small translucent dorsal fin at rear trunk and tiny pectoral fins behind gill cover. Far-side fin may be naturally hidden. Portrait whole animal in clear left-facing side profile upright in shallow seagrass meadow. Tail forms one loose spiral around a single narrow blade. Low rounded coronet, broad torso and small dorsal fin clearly readable. No prey."
        ],
        "generatedAt": "2026-10-03T12:20:31.377Z",
        "checkedAt": "2026-10-03",
        "sha256": "b2b933bf92394e2e3dccf16f166a98f8b8f75a811eb344370431ba30e63f53c0",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "spotted-seahorse",
        "src": "assets/images/spotted-seahorse-chatgpt-feeding-second-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "복해마 · 뒤 사선에서 본 작은 먹이 바라보기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "v1 목의 추가 세로 부채가 없어져 가까운 아가미 뒤 한 작은 가슴핀과 목 뒤 일부 가려진 먼 핀 두 개, 몸 뒤의 등핀 하나로 읽힌다. 뼈고리와 관 주둥이·낮은 둔한 관·끊기지 않은 열린 꼬리 고리와 해초 잡기를 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Hippocampus kuda, common/spotted seahorse. A deep broad torso, almost SMOOTH clean rounded surface with flat subtle bony trunk/tail ring seams and only TINY LOW rounded bumps, absolutely no prominent knobs, spikes or jagged ridge. A VERY LOW simple round coronet close to head surface, no tall crown or multi-point crown. Thick tubular snout with small round opening, no teeth. Modest natural eye. Muted golden ochre body with subtle sparse brown freckles, no zebra stripes. One long prehensile tail, NO tail fin, NO legs or arms. Small translucent dorsal fin at rear trunk and tiny pectoral fins behind gill cover. Far-side fin may be naturally hidden. Whole animal right-facing side view, tail anchored to seagrass. Tubular snout points toward three tiny naturally translucent copepod-like crustaceans in the water, each far smaller than its eye-to-snout length. A slight small mouth opening suggests feeding approach. No giant shrimp, no engulfed prey or prey inside transparent body, no claim of capture success.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE adult Hippocampus kuda, golden-brown with small scattered freckles, LOW rounded coronet and almost smooth trunk with small low rounded bumps, never spiny armor or zebra bands. NEW CAMERA HIGH REAR-SIDE: show nape/back of head, head far upper LEFT, trunk receding away, tail nearest lower RIGHT in a broad OPEN loop whose very tip holds a thin seagrass blade. A different open loop and trunk lean from the front S-curled ecology image. Tubular snout points upper-left toward ONE tiny crustacean outside the mouth; no visible swallowing. Small dorsal fin on back seen at a new tilted plane, natural tiny paired pectoral fins near gills. No caudal fin, no legs or arms. Entire tail and blade attachment within margins. Natural shallow seagrass water. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo.",
          "Scientific educational illustration of Hippocampus kuda spotted seahorse. Correct reference by truly rebuilding camera from HIGH BEHIND THE ANIMAL, not rotating same side silhouette. Main torso shows BACK OF NECK and dorsal midline toward viewer; ribbed belly is on far side. Tail and LOWER TRUNK are closest at lower-right, head is smaller/farther at upper-left with snout aimed away-left into depth, only one partly occluded eye naturally possible. Shoulder overlaps most far cheek. A golden brown spotted seahorse with modest low crown, narrow tube snout, rounded trunk with subtle bony rings, tail smoothly OPEN-LOOP gripping one seagrass blade lower-right. Exactly ONE broad transparent dorsal fin grows on central BACK of LOWER TRUNK and flutters toward camera. Exactly TWO small pectoral fins belong to the OPERCULA behind head, NOT to trunk or throat. Show near opercular pectoral as ONE small fan; far pectoral partly hidden behind back of neck. Erase the EXTRA third small fan near the throat in reference: never three pectoral fins or extra neck fins. No pelvic, anal fan, caudal fan, legs or arms. Keep tail/back connected. Genuine back-of-neck/back view and open tail-loop anchoring, dorsal fin seen face-on and near small pectoral angled edge-on, compared with old profile and new frontal ecology. A few tiny mysids a distance ahead of far snout, pre-capture reconstruction, no prey inside mouth, no blood. Calm natural seagrass water, full animal and all fin/tail ends with 12 percent margin, 3:2. No text, no collage."
        ],
        "generatedAt": "2026-10-10T16:04:32.147Z",
        "checkedAt": "2026-10-11",
        "sha256": "4b146f8ba5cac4643720071d7220c9c2e5a41dec28ee5ab45b438b049981eea3",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "NParks/FishBase의 꼬리로 해초를 잡고 작은 동물플랑크톤을 먹는 설명을 바탕으로 접근 상황을 재구성.",
        "behaviorSources": [
          {
            "title": "국립생물자원관 — 국가생물종목록 척추동물, Hippocampus kuda 복해마",
            "url": "https://www.nibr.go.kr/aiibook/catImage/21/National%20Species%202.pdf"
          },
          {
            "title": "Project Seahorse — iSeahorse underwater manual, H. kuda",
            "url": "https://www.projectseahorse.org/wp-content/uploads/2021/06/iSeahorse_Underwater_Manual_English_LowRes_1.0.pdf"
          },
          {
            "title": "NParks — Hippocampus spp., H. kuda habitat",
            "url": "https://www.nparks.gov.sg/florafaunaweb/fauna/3/0/305"
          },
          {
            "title": "FishBase — Hippocampus kuda",
            "url": "https://www.fishbase.se/summary/5955"
          }
        ],
        "viewpoint": "목 뒤와 등면을 보는 높은 뒤 사선, 꼬리·아래 몸통이 가깝고 머리는 왼쪽 위로 멀어짐",
        "pose": "해초를 잡은 열린 꼬리 고리, 뒤쪽 한 등핀과 아가미 뒤 가슴핀의 다른 투영",
        "poseVariationCheck": "머리가 작게 왼쪽 위 먼 곳에 놓이고 목 뒤/등면과 raised dorsal midline이 보이는 뒤 사선이다. 아래 몸통과 열린 꼬리 고리가 전경 오른쪽에 있고 가까운/먼 가슴핀과 등핀 평면이 다르다. 기존의 옆/아래 주둥이 세 컷과 first 양눈 앞 시점과 실제 카메라·목/꼬리 상태가 구별된다.",
        "visualLimitations": "머리 왼쪽 측면 일부가 여전히 보이는 뒤 사선. 원측 가슴핀 기부는 가려져 정확한 ray 계수는 확인 못함 완전 뒤 정면보다는 뒤쪽 옆 사선이며 몸통 고리·fin ray·성별 세부를 전문 인증하지 않는다. 목 뒤 먼 핀은 일부 가려진 상태. 작은 먹이는 입 바깥으로 떨어져 있어 포획 성공을 주장하지 않는다."
      },
      {
        "id": "spotted-seahorse",
        "src": "assets/images/spotted-seahorse-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "복해마 · 앞쪽에서 본 해초 잡기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "관 모양 주둥이·두 눈·몸통 뼈고리·낮은 관과 작은 둔한 돌기·등지느러미 하나·머리 양쪽 가슴지느러미·해초를 감은 연속 꼬리를 확인했다. 꼬리지느러미 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Hippocampus kuda, common/spotted seahorse. A deep broad torso, almost SMOOTH clean rounded surface with flat subtle bony trunk/tail ring seams and only TINY LOW rounded bumps, absolutely no prominent knobs, spikes or jagged ridge. A VERY LOW simple round coronet close to head surface, no tall crown or multi-point crown. Thick tubular snout with small round opening, no teeth. Modest natural eye. Muted golden ochre body with subtle sparse brown freckles, no zebra stripes. One long prehensile tail, NO tail fin, NO legs or arms. Small translucent dorsal fin at rear trunk and tiny pectoral fins behind gill cover. Far-side fin may be naturally hidden. Different oblique side view of whole animal upright camouflaged beside shallow estuarine seagrass and algae, tail wrapped once around a slender plant stem, head faces left away from viewer. Keep whole tail readable. No pregnancy, babies, mating or sex claim.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape Sea Atlas natural-history illustration for ages5–12. Input is a SPECIES AND STYLE REFERENCE only for Hippocampus kuda, NOT a pose to preserve. Redraw one complete spotted seahorse from a clearly different three-dimensional camera angle and tail gesture. NEW CAMERA: close to FRONTAL three-quarter view from slightly below; the tubular snout points toward the viewer and a little to the RIGHT, so BOTH modest natural eyes on opposite sides of the head and the rounded chest have true unequal-perspective visibility. Show the front and one flank, NOT the same flat side silhouette reversed. NEW BODY/TAIL POSE: the trunk leans gently diagonally toward upper RIGHT instead of vertical; its long prehensile tail sweeps broadly down and LEFT in an open S-shaped curve, and ONLY the final tail tip makes a small grip around ONE narrow diagonal seagrass blade at lower LEFT. Tail is a single unbroken continuation of the trunk; do not use the old tight curl at the bottom of a straight upright body. A small translucent dorsal fin is open at the back of the trunk, tiny pectoral fins sit behind each gill cover, naturally foreshortened differently in this view. One complete animal only, all of head/coronet/snout/tail/fin tips inside generous 15 percent clear margins. Accurate H. kuda: broad deep torso, subtle bony ring seams, nearly smooth rounded surface with only very low rounded bumps, NO pointed spines or exaggerated knobs. VERY LOW rounded coronet close to the head, never tall crown. Thick tubular snout and tiny terminal round mouth, no teeth, no mammal face or oversized cartoon eyes. Muted golden ochre with subtle sparse brown freckles. No tail fin, legs, arms or extra appendages. Quiet shallow seagrass meadow and soft blue-green estuary water with a little sandy bottom, ample uncluttered water around the entire animal. Tail grips a blade, no feeding, eggs, other seahorses or exaggerated pregnancy. Refined realistic painterly texture and clear natural soft fill light matching the reference. No text, labels, panels, border, watermark, fantasy or anthropomorphic expression."
        ],
        "generatedAt": "2026-10-08T16:34:17.941Z",
        "checkedAt": "2026-10-11",
        "sha256": "9ca864f0df5bed0ea15ae2c31367b947edbed9a459ae89d082a162db6a325d27",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "NParks의 H. kuda 해초/하구 환경과 감는 꼬리 고정 설명에 근거한 교육 재구성. 성별·임신·정확 장소는 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "NParks — Hippocampus spp.; H. kuda ecology",
            "url": "https://www.nparks.gov.sg/florafaunaweb/fauna/3/0/305"
          },
          {
            "title": "FishBase — Hippocampus kuda",
            "url": "https://www.fishbase.se/summary/5955"
          }
        ],
        "viewpoint": "양 눈과 앞 가슴이 보이는 정면에 가까운 사선",
        "pose": "머리 오른쪽 앞·몸통 비스듬히·꼬리는 왼쪽 아래로 넓게 뻗고 끝만 해초에 감김",
        "poseVariationCheck": "기존 세 옆모습과 달리 얼굴 앞과 양눈·넓어진 앞 몸통이 보이고 주둥이가 실제로 단축된다. 목을 안으로 굽힌 S자와 꼬리의 잡는 방향·지느러미 평면도 달라 실제 카메라와 몸/부속지 두 축이 변했다. second v1의 긴 옆면 주둥이와 구별된다.",
        "visualLimitations": "자연스러운 가림으로 먼쪽 몸 구조와 미세 지느러미살 전수 계수는 하지 않음. 먼 가슴지느러미는 머리 가장자리에 붙어 일부 가려지고 몸통 고리·세부 fin ray 개수는 인증하지 않는다. 미세 종 동정은 전문 검토 대상이며 그림의 해초 위치를 실제 관찰 기록으로 주장하지 않는다."
      }
    ]
  },
  {
    "id": "ocean-sunfish",
    "name": "개복치",
    "scientificName": "Mola mola",
    "group": "어류",
    "habitatIds": [
      "pelagic"
    ],
    "summary": "몸 뒤가 뚝 잘린 듯한 모양과 높이 솟은 지느러미가 특징인 큰 물고기예요.",
    "identity": [
      "몸이 옆으로 납작하고 넓어요.",
      "등지느러미와 뒷지느러미가 길게 솟아 있어요.",
      "보통 물고기 같은 꼬리지느러미 대신 물결 모양 가장자리의 키 같은 부분이 있어요.",
      "몸에 비해 입과 가슴지느러미가 작고 배지느러미는 없어요."
    ],
    "ecology": "바깥 바다에서 등지느러미와 뒷지느러미를 움직여 헤엄쳐요. 물속에서 먹이를 찾고 때로는 수면 가까이 옆으로 누워 머물러요. 비슷한 다른 개복치 종류의 기록과 구분해야 해요.",
    "diet": "해파리와 다른 젤리 같은 동물, 작은 갑각류·물고기·오징어 등",
    "range": "세계의 온대·열대 바다",
    "size": "호주 박물관 자료는 길이 3.3m까지 소개해요. 지느러미 끝 사이의 높이와 길이는 달라요. 비슷한 종의 최고중량 기록은 여기 넣지 않았어요.",
    "depth": "수면과 깊은 물을 오가요. 옛 Mola 기록의 종 구분에 주의해 이 도감에서는 최대 수심을 단정하지 않아요.",
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "aliases": [
      "Ocean sunfish",
      "Common mola"
    ],
    "sources": [
      {
        "title": "Australian Museum — Ocean Sunfish, Mola mola; similar species",
        "url": "https://australian.museum/learn/animals/fishes/ocean-sunfish-mola-mola/"
      },
      {
        "title": "Museums Victoria / Fishes of Australia — Mola mola",
        "url": "https://fishesofaustralia.net.au/home/species/785"
      },
      {
        "title": "Monterey Bay Aquarium — Ocean sunfish",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "ocean-sunfish",
        "src": "assets/images/ocean-sunfish-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "개복치 · 높은 지느러미와 물결 모양 몸끝",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 납작한 타원 몸, 작은 입·근측 눈, 가슴핀 앞 아가미구멍, 높은 등핀과 뒷핀, 물결치는 clavus 몸끝 확인. 일반 어류 꼬리핀이나 배핀은 추가되지 않았다. 모든 주요 끝은 프레임 안에 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Mola mola ocean sunfish, not Mola alexandrini or Mola tecta. Broad deep laterally compressed silvery grey round body, blunt rounded forehead without a prominent protruding head bump, small mouth, small gill slit by tiny rounded pectoral fin. ONE very tall dorsal fin and ONE very tall anal fin. Rear body ends in a broad truncated scalloped/wavy clavus, no normal projecting caudal fin or forked tail, no pelvic fins. Entire rear clavus and both tall fins must be visible. Subdued mottled grey natural skin. Clean full left-facing SIDE profile swimming in blue open water. Distinct small pectoral fin and gill slit, tall dorsal and anal fins and scalloped rear clavus all readable, generous margins. No prey."
        ],
        "generatedAt": "2026-10-03T12:22:45.308Z",
        "checkedAt": "2026-10-03",
        "sha256": "95f7440f142a17f4d181c1c2421f295ee410b9df9acada7976f5da7c4b493f35",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "ocean-sunfish",
        "src": "assets/images/ocean-sunfish-chatgpt-feeding-front-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "개복치 · 앞쪽에서 본 작은 해파리와의 만남",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "낮고 둥근 이마, 작은 양쪽 눈과 입, 양쪽 작은 가슴지느러미, 옆으로 납작한 몸, 높고 연결된 등/뒷지느러미, 후방 물결 테두리의 꼬리판 확인. 일반 물고기 꼬리·배지느러미 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Mola mola ocean sunfish, not Mola alexandrini or Mola tecta. Broad deep laterally compressed silvery grey round body, blunt rounded forehead without a prominent protruding head bump, small mouth, small gill slit by tiny rounded pectoral fin. ONE very tall dorsal fin and ONE very tall anal fin. Rear body ends in a broad truncated scalloped/wavy clavus, no normal projecting caudal fin or forked tail, no pelvic fins. Entire rear clavus and both tall fins must be visible. Subdued mottled grey natural skin. Whole animal right-facing side-oblique view in open water approaching one small translucent jellyfish in front of its small slightly open mouth. Jellyfish clearly separate, about one quarter body height including tentacles, no contact, no bite, no injured jellyfish. No other fish or clutter.",
          "Use case: scientific-educational. Sea Atlas natural-history painted illustration, landscape 3:2, ages 5–12, realistic marine anatomy. Input image is an identity and painterly style reference ONLY. Completely redraw the animal in the specified different three-dimensional view and pose; do not preserve, mirror, rotate or paste the old side-on silhouette. Full animal including every fin and tail tip inside generous margins. Calm educational mood, no text, labels, panels, watermark, people, gore or fantasy. One Mola mola ocean sunfish approaches ONE small translucent jellyfish, separate with a visible gap and no contact. NEW VIEW nearly HEAD-ON, slightly below and to the animal's right: small blunt mouth nearest at lower centre, BOTH eyes and tiny paired pectorals, laterally compressed body much narrower than in a flat side portrait, rear body recedes up-left. NEW POSE gently yawing during slow swimming, tall dorsal fin leans one way while tall anal fin sweeps a different stroke; keep realistic stiff broad body, do not bend the body like an eel. Complete tall fin tips and entire rear wavy clavus visible with at least ten percent margin. Blunt rounded forehead without protruding Mola alexandrini bump, natural mottled silver-grey skin, small gill openings beside pectorals. No normal projecting forked tail, no pelvic fins, no extra dorsal/anal fins. Jellyfish small and well separated, clear open coastal water, restrained natural light."
        ],
        "generatedAt": "2026-10-08T16:43:06.510Z",
        "checkedAt": "2026-10-11",
        "sha256": "81d9ca390f7c12d5f9197a17f7b9dfb440f07bab56dd219563885d69a221ae15",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "작은 해파리와 떨어진 먹이접근 재구성. 물기·삼키기/섭식 성공은 보이지 않아 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Museum — Ocean Sunfish, Mola mola; similar species",
            "url": "https://australian.museum/learn/animals/fishes/ocean-sunfish-mola-mola/"
          },
          {
            "title": "Museums Victoria / Fishes of Australia — Mola mola",
            "url": "https://fishesofaustralia.net.au/home/species/785"
          },
          {
            "title": "Monterey Bay Aquarium — Ocean sunfish",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish"
          }
        ],
        "viewpoint": "앞 사선에서 본 머리와 얇은 몸의 원근",
        "pose": "큰 등·뒷지느러미가 서로 다른 각도로 펼쳐지고 양가슴지느러미를 벌린 채 접근",
        "poseVariationCheck": "기존 시트06의 평평한 측면 원반과 달리 앞 사선에서 얼굴/양 가슴지느러미를 보고 몸이 후퇴함. 등·뒷지느러미가 서로 다른 각도로 움직이는 상태라 단순 방향 반전 아님.",
        "visualLimitations": "거의 정면 요청보다 측면 노출이 크지만 기존 완전 측면과 구별됨. 지느러미 끝은 화면 안에 있으나 위 여백은 좁음. 윗 등지느러미 끝은 잘리지 않았으나 화면 위 여백이 매우 좁음. 유사 Mola 종의 전문 동정은 이 삽화로 확정하지 않음. 해파리는 입과 떨어져 있어 실제 섭식 성공으로 표현하지 않음."
      },
      {
        "id": "ocean-sunfish",
        "src": "assets/images/ocean-sunfish-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "개복치 · 수면 가까이 옆으로 눕기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "납작한 큰 옆면, 작은 입, 근측 아가미·가슴핀, 두 높은 핀과 물결 몸끝 확인. 수면에 옆면을 두는 회전 구도로 핀의 화면 방향을 해석했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Mola mola ocean sunfish, not Mola alexandrini or Mola tecta. Broad deep laterally compressed silvery grey round body, blunt rounded forehead without a prominent protruding head bump, small mouth, small gill slit by tiny rounded pectoral fin. ONE very tall dorsal fin and ONE very tall anal fin. Rear body ends in a broad truncated scalloped/wavy clavus, no normal projecting caudal fin or forked tail, no pelvic fins. Entire rear clavus and both tall fins must be visible. Subdued mottled grey natural skin. Whole animal basking on its SIDE immediately beneath calm sea surface, viewed from above at oblique angle. The broad flank lies nearly horizontal under the surface, dorsal and anal fins project laterally left/right in this pose; whole scalloped clavus remains visible. Subtle surface reflections, no boat, no bird cleaning, no dead/floating belly-up pose."
        ],
        "generatedAt": "2026-10-03T12:24:36.491Z",
        "checkedAt": "2026-10-03",
        "sha256": "2236c2b00de23a62f98562c6636186d8dafdc324b1a337514075b6b0fa2aa486",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "수면 근처에 옆면을 두고 머무는 기관 행동 소개의 재구성. 그림에서 실제 체온변화·건강상태·행동 완료를 인증하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Museum — Ocean Sunfish, Mola mola; similar species",
            "url": "https://australian.museum/learn/animals/fishes/ocean-sunfish-mola-mola/"
          },
          {
            "title": "Museums Victoria / Fishes of Australia — Mola mola",
            "url": "https://fishesofaustralia.net.au/home/species/785"
          },
          {
            "title": "Monterey Bay Aquarium — Ocean sunfish",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/ocean-sunfish"
          }
        ]
      }
    ]
  },
  {
    "id": "peacock-mantis-shrimp",
    "name": "공작갯가재",
    "scientificName": "Odontodactylus scyllarus",
    "group": "절지동물",
    "habitatIds": [
      "reef",
      "coast"
    ],
    "summary": "두 눈을 따로 움직이고 둥근 앞다리로 단단한 먹이를 두드리는 갯가재예요.",
    "identity": [
      "눈 두 개가 각각 자루 끝에 있어요.",
      "몸 앞쪽에 접힌 곤봉 모양의 먹이잡이 다리 한 쌍이 있어요.",
      "마디가 있는 몸 뒤에 펼쳐지는 꼬리 부채가 있어요.",
      "녹색 몸과 주황빛 다리가 눈에 띄지만 색만으로 종을 정하지 않아요."
    ],
    "ecology": "따뜻한 산호초 주변 자갈 바닥에 굴을 만들어요. 둥글고 단단한 먹이잡이 다리로 조개 같은 먹이를 두드려요. 굴과 먹이 활동 장면은 실제 순간을 찍은 사진이 아니라 설명을 위한 재구성이에요.",
    "diet": "조개·고둥 같은 단단한 껍데기의 작은 동물과 다른 갑각류",
    "range": "인도양과 태평양의 따뜻한 바다",
    "size": "몬터레이만 수족관 소개 범위는 2.5–17.8cm예요. 이 페이지는 길이 측정 끝점을 따로 적지 않아 정밀 측정값으로 쓰지 않아요.",
    "depth": "산호초 주변 바닥과 자갈 굴에서 살아요. 이번에 읽은 기관 설명에 전체 수심 범위가 없어 최대 수심은 적지 않았어요.",
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Peacock mantis shrimp",
      "공작갯가재(학명에 붙인 설명용 이름)"
    ],
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Peacock mantis shrimp",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/peacock-mantis-shrimp"
      },
      {
        "title": "University of Texas DigiMorph — Odontodactylus scyllarus, Patek and Summers",
        "url": "https://www2.geo.utexas.edu/specimens/Odontodactylus_scyllarus/whole/"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "peacock-mantis-shrimp",
        "src": "assets/images/peacock-mantis-shrimp-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "공작갯가재 · 접힌 곤봉 앞다리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두 눈자루와 접힌 둥근 타격부 두 개, 어두운 둥근 무늬가 있는 등갑, 마디 배, 뒤쪽 telson·uropod 꼬리팬 확인. 근측 보행다리는 읽히며 원측 부속지 기부는 겹친다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Odontodactylus scyllarus peacock mantis shrimp with anatomically believable compact segmented stomatopod body. Green turquoise carapace with dark spots outlined pale, natural two separately stalked compound eyes, fine paired antennules/antennae and flattened antennal scales. TWO compact club-type raptorial appendages folded under the anterior thorax, NOT large lobster pincers or spear claws. Three pairs of small walking legs behind the clubs, far legs may naturally overlap. Green segmented abdomen terminates in central telson with paired uropods forming ONE broad coherent tail fan. Restrained orange-red walking legs and blue/orange tail margins. No wings, no spikes, no human fists, no fluorescent rainbow. Clean whole-body three-quarter SIDE view on coarse sand near a reef rock. Head on left and full abdomen and tail fan right. Both eye stalks and both folded clubs readable, small walking legs support body naturally, clear generous margins. No prey."
        ],
        "generatedAt": "2026-10-03T12:26:09.256Z",
        "checkedAt": "2026-10-03",
        "sha256": "cf48463b751a584140f87ccecd89a272d3fd81c09534b8000dd64d9b1b2f7b37",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "peacock-mantis-shrimp",
        "src": "assets/images/peacock-mantis-shrimp-chatgpt-feeding-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "공작갯가재 · 위에서 본 먹이 살피기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "위에서 보이는 점무늬 갑각, 두 자루눈, 연결된 복부와 꼬리팬, 굽은 둥근 타격다리 두 개와 더듬이 기부 확인. 한 타격다리 앞쪽 펼침, 다른 쪽 접힘이 구분되며 가재 집게/창과 다름.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Odontodactylus scyllarus peacock mantis shrimp with anatomically believable compact segmented stomatopod body. Green turquoise carapace with dark spots outlined pale, natural two separately stalked compound eyes, fine paired antennules/antennae and flattened antennal scales. TWO compact club-type raptorial appendages folded under the anterior thorax, NOT large lobster pincers or spear claws. Three pairs of small walking legs behind the clubs, far legs may naturally overlap. Green segmented abdomen terminates in central telson with paired uropods forming ONE broad coherent tail fan. Restrained orange-red walking legs and blue/orange tail margins. No wings, no spikes, no human fists, no fluorescent rainbow. Clean whole-body three-quarter SIDE view on coarse sand near a reef rock. Head on left and full abdomen and tail fan right. Both eye stalks and both folded clubs readable, small walking legs support body naturally, clear generous margins. No prey.",
          "Create ONE NEW 3:2 landscape natural-history illustration of peacock mantis shrimp Odontodactylus scyllarus, painterly realistic children's marine atlas style. Use attached image ONLY for species colors/connected anatomy/style. This picture must be a true top-down view and new appendage posture, not a rotated or mirrored side portrait.\nCAMERA almost directly ABOVE (80 degrees down). See broad dorsal carapace and all six abdominal dorsal plates, not the tall lateral flanks. Head centered toward the BOTTOM of the canvas, tail fan at TOP, body shortened in perspective. Complete body in a loose shallow curve around a small intact marine snail shell in front of its head. Both eyes on independent stalks visible from above, two natural antennal pairs curve to either side with every branch ending well within 80-pixel margins.\nPOSE: one of the two rounded smashing raptorial clubs is PARTLY UNFOLDED forward and outward from its elbow in a controlled preparation posture, clearly distinct from the other club held folded underneath the head. It remains a bent anatomical limb with a rounded striking heel, NOT a claw/pincer or a spear, no extra raptorial arm. Small feeding appendages remain near mouth. Three pairs of slender rear-thoracic walking legs form a stable unequal stance with one foot shifted forward, connected to rear thorax only. Abdomen gently flexed in a modest curve, continuous tail fan slightly spread; no impossible spiral. The tiny intact snail remains outside the mouth and outside the raised club, no impact, breakage, wound, flying debris, cavitation, successful capture claim or motion graphics. Green/turquoise spotted carapace, subdued orange-blue highlights, natural sand and shell rubble on tropical reef floor, no other animals. Keep margins around whole animal and snail, no text, labels, borders or collage."
        ],
        "generatedAt": "2026-10-08T16:47:56.253Z",
        "checkedAt": "2026-10-11",
        "sha256": "996bf69a1ff1b569e6447449bcd64febdf47242d3febb4405101476d797521f9",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "UT DigiMorph의 둥근 타격부로 먹이를 두드리는 형태·연구에 근거해 접촉 이전의 교육용 준비 자세만 재구성. 타격·섭식 성공·정확한 운동위상은 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "UT DigiMorph: Odontodactylus scyllarus",
            "url": "https://www2.geo.utexas.edu/specimens/Odontodactylus_scyllarus/whole/"
          },
          {
            "title": "Monterey Bay Aquarium: Peacock mantis shrimp",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/peacock-mantis-shrimp"
          }
        ],
        "viewpoint": "거의 수직 위에서 내려다보는 등 쪽 시점",
        "pose": "한 타격다리는 앞으로 일부 펴고 다른 쪽은 접은 준비 상태, 복부 완만한 굴곡",
        "poseVariationCheck": "기존 시트06의 측면과 새 정면 생태 모두와 달리 거의 수직 등쪽 시점으로 등판을 보고 몸통이 짧아짐. 비대칭 타격다리 펼침과 보행발 각도가 달라 실제 두 축 차이가 있음.",
        "visualLimitations": "작은 먹이 부속지와 보행발 기부가 겹쳐 전수 계수하지 않음. 타격 속도나 포획 성공 장면으로 설명하지 않음. 등판 아래의 세 쌍 보행다리와 작은 먹이부속지 모든 뿌리, 꼬리팬의 세부 가시 배열은 겹침 때문에 전수 확인 불가. 온전한 먹이는 나선형 고둥 조가비로 입/타격부와 분리되어 있고 타격 성공을 주장하지 않음."
      },
      {
        "id": "peacock-mantis-shrimp",
        "src": "assets/images/peacock-mantis-shrimp-chatgpt-ecology-pose-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "공작갯가재 · 굴 입구에서 앞으로 걷기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두 자루눈, 좌우 더듬이와 판형 더듬이 비늘, 둥근 타격부를 가진 접힌 두 포획다리, 연결된 녹색 점무늬 갑각·복부·팬형 꼬리를 확인. 세 쌍 보행다리의 전경이 구분되며 더듬이 끝은 화면 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original Sea Atlas natural-history illustration for children ages 5–12, landscape 3:2, naturalistic painterly realism with restrained brush texture. Whole focal animal and complete important appendages and tail inside generous frame margins. Natural small eyes, no anthropomorphism. Calm documentary composition, believable habitat, clear soft illustrative light. No text, labels, arrows, logos, borders, humans, blood, wounds, horror, fantasy anatomy, exaggerated cartoon eyes. Do not draw extra limbs. Avoid artificial neon glow. This is an educational reconstruction, not a photograph of an observed event. ONE Odontodactylus scyllarus peacock mantis shrimp with anatomically believable compact segmented stomatopod body. Green turquoise carapace with dark spots outlined pale, natural two separately stalked compound eyes, fine paired antennules/antennae and flattened antennal scales. TWO compact club-type raptorial appendages folded under the anterior thorax, NOT large lobster pincers or spear claws. Three pairs of small walking legs behind the clubs, far legs may naturally overlap. Green segmented abdomen terminates in central telson with paired uropods forming ONE broad coherent tail fan. Restrained orange-red walking legs and blue/orange tail margins. No wings, no spikes, no human fists, no fluorescent rainbow. Clean whole-body three-quarter SIDE view on coarse sand near a reef rock. Head on left and full abdomen and tail fan right. Both eye stalks and both folded clubs readable, small walking legs support body naturally, clear generous margins. No prey.",
          "A completely NEW natural-history painting, landscape 3:2. A peacock mantis shrimp Odontodactylus scyllarus is walking straight toward the camera out of a gravel burrow. Reference is ONLY its green-blue spotted shell, orange club surfaces, eyes and painterly texture. Do NOT copy its pose, long side view, antenna arrangement or body orientation. This is a full re-staging, not a small edit or rotation.\nMANDATORY FRONTAL COMPOSITION: the head is centered on the vertical middle line of the canvas, with equal left/right visibility of its face. The abdomen extends DIRECTLY AWAY from the camera behind the head toward the TOP CENTER, heavily foreshortened. It must NOT extend a long way to the left or right. Camera faces the head straight on at low eye level, raised only slightly to let the dorsal rear segments and small connected tail fan peek behind the head. Body length in the picture is short because of true 3D perspective. Both eyes on separate stalks point in slightly different directions.\nMANDATORY NEW LEG POSTURE: calm forward walking, one of the six slender walking legs is bent and visibly LIFTED CLEAR OFF THE SAND, leaving a visible gap beneath the foot; the corresponding leg on the other side is extended back and planted. The other four walking legs carry the body at different joint angles. Exactly three pairs of walking legs attached to rear thorax, plus anatomically separate small mouth appendages. Two powerful rounded smashing clubs under the face stay tucked at unequal elbow angles, no pincers or extra clubs. Forebody lifted modestly, six-segment abdomen slightly arched, tail fan continuous at the rear. Two antenna pairs spread in a broad shallow fan to both sides instead of all pointing left, every tip fits. Keep natural green/turquoise/olive body, dark carapace spots and orange blue fan highlights. Whole animal comfortably inside frame, gravel burrow directly behind, fine sand foreground, quiet clear tropical underwater light. No prey, strike, labels, text, collage, borders, fantasy parts, cartoon face or detached limbs.",
          "Make one minimal anatomical framing correction to the attached new FRONTAL peacock mantis shrimp natural-history painting. Preserve this successful head-on camera, strongly foreshortened abdomen receding to top center, six walking legs with lifted middle feet, two folded rounded smashing clubs, two stalked eyes, connected tail fan, body colors, burrow and painterly style. Do not turn the animal sideways or change its pose. Correct ONLY the long antenna filaments approaching the picture edges: gently shorten and curve their distal ends inward so EVERY visible antennal branch has a natural pointed end clearly INSIDE the frame, at least 80 pixels from the left and right edges. In particular the upper-right antenna branches must not reach the right border. Keep all antennal bases and two-pair anatomy connected to the head; do not add new appendages or make blunt cut ends. Keep existing complete body within the frame, same landscape3:2, no labels, text, arrows, extra animals or collage."
        ],
        "generatedAt": "2026-10-08T16:45:35.544Z",
        "checkedAt": "2026-10-11",
        "sha256": "c9a69c871aeb41f70679374925fa51044d8ad460675a76b8a6e3ea3834f2b61a",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "DigiMorph의 자갈 U자 굴 서식과 Aquarium의 바위·굴 생활 원문에 따른 교육용 보행 재구성. 특정 보행순서나 관측 순간을 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "UT DigiMorph: Odontodactylus scyllarus",
            "url": "https://www2.geo.utexas.edu/specimens/Odontodactylus_scyllarus/whole/"
          },
          {
            "title": "Monterey Bay Aquarium: Peacock mantis shrimp",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/peacock-mantis-shrimp"
          }
        ],
        "viewpoint": "정면·몸 뒤로 강한 단축 원근",
        "pose": "들린 중간 보행발과 지지발, 접힌 타격다리. 더듬이 끝 여백만 교정",
        "poseVariationCheck": "시트06의 옆사선 전신에서 머리 정면으로 복부가 뒤로 짧아지는 원근으로 바뀜. 한 보행발은 들려 굽고 다른 발들은 모래에 지지하며 두 포획다리는 다르게 접혀 실제 시점·부속지 상태가 변함.",
        "visualLimitations": "보행발 기부와 더듬이 일부의 겹침 한계가 남음. 특정 실제 보행 순서를 확정하지 않음. 후방 꼬리엽·작은 먹이부속지 기부와 일부 뒤 발은 몸 아래 겹침. 모든 부속지의 관절·끝을 전문 계수한 것이 아님. 오른쪽 더듬이 끝이 잘린 이전 v2는 선정하지 않음."
      }
    ]
  },
  {
    "id": "blue-glaucus",
    "name": "푸른갯민숭달팽이",
    "scientificName": "Glaucus atlanticus",
    "aliases": [
      "푸른 바다 달팽이",
      "Blue glaucus",
      "Blue dragon"
    ],
    "group": "연체동물",
    "habitatIds": [
      "pelagic"
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "summary": "바다 표면에 거꾸로 떠다니는 작은 갯민숭달팽이예요. 한국어 이름은 모습을 풀어 쓴 설명용 표기예요.",
    "identity": [
      "가늘어진 몸 양옆에 세 쌍의 돌기 무리가 있고, 손가락처럼 생긴 돌기가 한 줄로 벌어져요.",
      "위로 향한 발 쪽은 파랗고 물속 아래로 향한 진짜 등 쪽은 은회색이에요."
    ],
    "ecology": "속에 있는 기체 주머니가 떠 있는 데 도움을 줘요. 바람과 물살을 따라 바다 표면 가까이 이동해요.",
    "diet": "피살리아(Portuguese man-of-war·bluebottle)의 촉수 등을 먹어요. 먹이에서 얻은 자포를 돌기 끝의 주머니에 보관해 방어에 이용해요.",
    "range": "세계의 온대·열대 바다. 해변에 떠밀려 온 기록은 원래 해저에서 산다는 뜻이 아니에요.",
    "size": "Australian Museum 사진의 살아 있는 개체는 몸길이 4 cm로 기록됐어요. 이 개별 기록을 종의 최대 크기로 단정하지 않아요.",
    "depth": "바다 표면 또는 바로 아래에서 생활해요. 확인한 기관 자료는 종의 정확한 최대 잠수 깊이를 제시하지 않아요.",
    "sources": [
      {
        "title": "Australian Museum Sea Slug Forum — Glaucus atlanticus",
        "url": "https://www.seaslugforum.net/find/glauatla"
      },
      {
        "title": "ICAR-CMFRI Cadalmin No.148 — Sea slugs washed ashore",
        "url": "https://eprints.cmfri.org.in/11004/1/Newsletter%20Cadalmin%20-%20148.pdf"
      },
      {
        "title": "Australian Museum — Sea Slug Saga",
        "url": "https://publications.australian.museum/blog/science/sea-slug-saga-2016-sleek-geeks-science-winner/"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "blue-glaucus",
        "src": "assets/images/blue-glaucus-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "푸른갯민숭달팽이 · 거꾸로 뜨는 작은 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "길고 가는 연속몸·앞큰/중간/뒤작은 팬형 cerata 3쌍(6기부)·꼬리끝 확인. 각 팬의 돌기는 단일 부채열로 읽힘.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Glaucus atlanticus, a small shell-less BLUE NEUSTONIC NUDIBRANCH, not a vertebrate dragon. Long flat tapered soft silver-and-deep-blue central body with small rounded head and short tapering posterior tip. EXACTLY THREE pairs of side ceratal clusters, SIX cluster bases total, attached bilaterally along the body: large anterior fan pair, medium middle fan pair, smaller posterior fan pair; each fan has long tapered finger-shaped cerata in ONE SINGLE row, never multi-tier stacked feather fronds. Short natural cephalic tentacles; no wings, legs, scales, jaws, horns or conspicuous eyes. Animal naturally floats inverted just below sea surface: BLUE ventral FOOT side faces UP toward air, true SILVER-grey dorsal side faces DOWN into water. Macro view from ABOVE the surface, gently diagonal head toward upper-left. Calm blue water with small ripples, visible blue foot and SIX unobscured separated ceratal fan bases, whole organism broadly spread at surface. Natural daylight, no reef or seabed."
        ],
        "generatedAt": "2026-10-03T12:15:52.729Z",
        "checkedAt": "2026-10-03",
        "sha256": "0b98955fb654917f94e12230b2dfd3a1421e9f219d1e0867d324933873bc89ce",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "blue-glaucus",
        "src": "assets/images/blue-glaucus-chatgpt-feeding-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "푸른갯민숭달팽이 · 피살리아 촉수에 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속몸·꼬리·3쌍6팬과 피살리아 부력낭/늘어진 촉수 끝이 화면 안. 큰발/날개/척추동물눈 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Glaucus atlanticus, a small shell-less BLUE NEUSTONIC NUDIBRANCH, not a vertebrate dragon. Long flat tapered soft silver-and-deep-blue central body with small rounded head and short tapering posterior tip. EXACTLY THREE pairs of side ceratal clusters, SIX cluster bases total, attached bilaterally along the body: large anterior fan pair, medium middle fan pair, smaller posterior fan pair; each fan has long tapered finger-shaped cerata in ONE SINGLE row, never multi-tier stacked feather fronds. Short natural cephalic tentacles; no wings, legs, scales, jaws, horns or conspicuous eyes. Animal naturally floats inverted just below sea surface: BLUE ventral FOOT side faces UP toward air, true SILVER-grey dorsal side faces DOWN into water. MACRO low oblique side view at surface, Glaucus head right. A single intact Physalia bluebottle appears upper-right at surface as an accurately small relative-scale translucent blue-violet gas float with slight sail ridge and several slender dangling blue feeding tentacles. Glaucus anterior mouth at small head approaches ONE separated thin trailing Physalia tentacle; no tearing, dismemberment or violence. Show surface interface and blue foot upwards, silver dorsal side down. Each animal completely framed. Glaucus whole SIX clustered bases clear with mild angle occlusion only. Safe feeding preparation reconstruction.",
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Glaucus atlanticus, a small shell-less BLUE NEUSTONIC NUDIBRANCH, not a vertebrate dragon. Long flat tapered soft silver-and-deep-blue central body with small rounded head and short tapering posterior tip. EXACTLY THREE pairs of side ceratal clusters, SIX cluster bases total, attached bilaterally along the body: large anterior fan pair, medium middle fan pair, smaller posterior fan pair; each fan has long tapered finger-shaped cerata in ONE SINGLE row, never multi-tier stacked feather fronds. Short natural cephalic tentacles; no wings, legs, scales, jaws, horns or conspicuous eyes. Animal naturally floats inverted just below sea surface: BLUE ventral FOOT side faces UP toward air, true SILVER-grey dorsal side faces DOWN into water. MACRO low oblique side view at surface, Glaucus head right. A single intact Physalia bluebottle appears upper-right at surface as an accurately small relative-scale translucent blue-violet gas float with slight sail ridge and several slender dangling blue feeding tentacles. Glaucus anterior mouth at small head approaches ONE separated thin trailing Physalia tentacle; no tearing, dismemberment or violence. Show surface interface and blue foot upwards, silver dorsal side down. Each animal completely framed. Glaucus whole SIX clustered bases clear with mild angle occlusion only. Safe feeding preparation reconstruction. CORRECTION FOR THIS REVISED IMAGE: reduce both animals slightly and zoom out, leave broad empty margins on ALL sides. Put the ENTIRE Physalia gas float and ALL its few fine long tentacles inside the frame, with visible free ends at least 100px above bottom and inside right margin. Physalia trailing tentacles must be very THIN smooth natural threads with only restrained fine texture, not thick pearl beads or knotted rope. Glaucus should be near/in contact with the surface rather than hovering several body diameters below. The blue ventral foot faces sky. No visible shiny eye globes: slug's small sensory organs must remain inconspicuous, never fishlike eyes. Keep one row of finger cerata per fan and six connected bases, not extra clusters. Full long body and tail within frame."
        ],
        "generatedAt": "2026-10-03T12:18:33.825Z",
        "checkedAt": "2026-10-03",
        "sha256": "4a4d4ff3c1f18586443811dfce993efe49ad371a6c5f69876112c280393107ba",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "피살리아 부속 촉수에 입 앞쪽을 가까이 댄 교육 재구성. v1에서 잘린 피살리아 촉수 끝이 v2에서는 화면 안. 실제 먹이 절단·삼킴·자포 저장은 그림으로 확인하지 않는다.",
        "behaviorSources": [
          {
            "title": "Australian Museum Sea Slug Forum — Glaucus atlanticus",
            "url": "https://www.seaslugforum.net/find/glauatla"
          },
          {
            "title": "ICAR-CMFRI Cadalmin No.148 — Sea slugs washed ashore",
            "url": "https://eprints.cmfri.org.in/11004/1/Newsletter%20Cadalmin%20-%20148.pdf"
          },
          {
            "title": "Australian Museum — Sea Slug Saga",
            "url": "https://publications.australian.museum/blog/science/sea-slug-saga-2016-sleek-geeks-science-winner/"
          }
        ]
      },
      {
        "id": "blue-glaucus",
        "src": "assets/images/blue-glaucus-chatgpt-ecology-front-cerata-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "푸른갯민숭달팽이 · 앞사선에서 본 휘어진 돌기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속된 작은 머리·긴 몸·단일 끝꼬리와 세 쌍 돌기 무리, 각 무리의 여러 가는 돌기를 실제 원본에서 확인. 파란 면은 수면 쪽·은회색 면은 아래 물속 쪽, 연결이 없는 날개나 문어 팔 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Glaucus atlanticus, a small shell-less BLUE NEUSTONIC NUDIBRANCH, not a vertebrate dragon. Long flat tapered soft silver-and-deep-blue central body with small rounded head and short tapering posterior tip. EXACTLY THREE pairs of side ceratal clusters, SIX cluster bases total, attached bilaterally along the body: large anterior fan pair, medium middle fan pair, smaller posterior fan pair; each fan has long tapered finger-shaped cerata in ONE SINGLE row, never multi-tier stacked feather fronds. Short natural cephalic tentacles; no wings, legs, scales, jaws, horns or conspicuous eyes. Animal naturally floats inverted just below sea surface: BLUE ventral FOOT side faces UP toward air, true SILVER-grey dorsal side faces DOWN into water. Underwater UPWARD oblique view directly under quiet ocean surface, silver true dorsal side of inverted Glaucus faces camera below, blue foot visible only at turned upper edge. Head left, body diagonal, SIX fan clusters connected; full animal with negative open-water space. Natural diffused daylight through surface, no reef, seabed, bubbles, prey or eggs.",
          "Use case: scientific-educational. Create ONE original natural-history painted illustration for Sea Atlas, children ages 5–12, landscape 3:2. Species Glaucus atlanticus, blue sea slug. Attached earlier image is an IDENTITY AND STYLE reference ONLY: replace its flat spread-out underside silhouette with a genuinely different 3D viewpoint and soft-body pose; do not mirror or rotate it. NEW CAMERA at the WATERLINE, just above the tiny animal and close to its head, looking lengthwise along the body toward the tail. The small head is nearest at lower-left foreground, narrow body recedes upper-right and gently curves, tapering into ONE long intact tail. The slug floats naturally UPSIDE DOWN at the underside of the sea surface: the bright blue modified FOOT and ventral surfaces face UP toward the air, and the silvery-grey true dorsal surface faces DOWN into the water. Show a narrow glimpse of silver along the lower side; never reverse that colour orientation. Exactly THREE PAIRED cerata-bearing outgrowth groups along the body, six groups total: the anterior pair is largest, middle pair smaller, posterior pair smallest. Many thin pointed fingerlike cerata grow from each connected group, not individual octopus arms, insect legs or feathers. NEW STATE: the closest anterior cerata fan is gently gathered and swept BACK in a soft three-dimensional curve; the far anterior fan and smaller middle/rear groups are more foreshortened and partly overlap at different depths, not a symmetrical flat six-spoked star. Two modest pairs of short simple cephalic tentacles, tiny understated dark eyes, no cute face or horn. Keep the entire animal and every unhidden cerata/tail tip within generous frame margins; natural far-side overlap is allowed but no torn-off appendages. Calm rippled ocean surface with subtle reflections and blue water below, no seabed, prey, other animals, fantasy flight, bubbles attached to the animal, text, labels, diagram, collage or watermark. This is a floating habitat observation, not active swimming or a feeding claim. The head-on oblique perspective and gently gathered anterior fan must both be visibly different from the reference."
        ],
        "generatedAt": "2026-10-10T15:36:19.297Z",
        "checkedAt": "2026-10-11",
        "sha256": "c7af8993836c2aa7ffa260ea4b44b7e970ab2dcf95928e11ad4fdd1f62cde20d",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Australian Museum 원문의 뒤집혀 떠 있는 생활과 위를 향하는 파란 발·아래를 향하는 은회색 등을 따른 교육 재구성. 능동 잠수나 돌기를 날개처럼 움직여 유영한다는 주장이 아님.",
        "behaviorSources": [
          {
            "title": "Australian Museum Sea Slug Forum — Glaucus atlanticus",
            "url": "https://www.seaslugforum.net/find/glauatla"
          }
        ],
        "viewpoint": "수면 아래에서 머리를 가까이 둔 앞사선",
        "pose": "몸 앞쪽 돌기 무리를 뒤로 둥글게 모으고 가늘어지는 몸과 꼬리는 뒤위로 이어진 채 떠 있는 모습",
        "poseVariationCheck": "기존 전체 돌기를 펼친 평면 옆/아래 시점에서 머리가 가까운 앞 사선 원근으로 바뀜. 가까운 앞 돌기들이 뒤로 둥글게 굽고 뒤 무리들은 작아져 실제 시점/돌기 굽힘 두 축 차이.",
        "visualLimitations": "먼 돌기들은 겹쳐 개별 돌기수는 확인 불가. 수면 반사의 색을 전문 동정 근거로 확대하지 않음 수면 아래에서 보는 앞 사선이며 수면 위 시점은 아님. 원측 돌기·작은 촉수 기부 일부 겹쳐 전수계수 인증 안 함. 몸과 끝꼬리/돌기 모두 프레임 안."
      }
    ],
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "blue-sea-star",
    "name": "파란불가사리",
    "scientificName": "Linckia laevigata",
    "aliases": [
      "푸른 린키아 불가사리",
      "Blue sea star",
      "Blue linckia",
      "Azure sea star"
    ],
    "group": "극피동물",
    "habitatIds": [
      "reef",
      "coast"
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "summary": "작은 중심에서 둥근 팔 다섯 개가 뻗은 불가사리예요. 한국어 이름은 파란 모습을 설명한 표기예요.",
    "identity": [
      "둥근 끝을 가진 긴 원통형 팔과 작은 중심 원반, 고운 과립 피부가 특징이에요.",
      "흔히 파란색이지만 색에는 변이가 있어요. 관족은 팔 아래쪽에 있어요."
    ],
    "ecology": "얕은 산호초·암반에서 관족으로 바닥에 붙어 천천히 이동해요. 모래 위에서도 암반 사이를 이동할 수 있어요.",
    "diet": "바위 표면의 작은 생물막·산호조류와 유기물 찌꺼기를 먹는 것으로 알려져 있어요. 특정 미생물이나 야생의 모든 먹이 구성을 확정하지 않아요.",
    "range": "인도양·태평양의 열대 암초 지역. 모든 섬이나 모든 파란 불가사리가 이 종인 것은 아니에요.",
    "size": "DORIS는 팔끝 사이 지름 약 30 cm 이상, 큰 개체는 40 cm에 가까운 기록도 안내해요. 몸길이와 팔 하나의 길이가 아닌 펼친 폭이에요.",
    "depth": "DORIS는 주로 조간대부터 30 m 사이, 60 m까지의 기록을 안내해요. 주 서식 깊이와 깊은 관측 기록을 구분해요.",
    "sources": [
      {
        "title": "FFESSM DORIS — Linckia laevigata",
        "url": "https://doris.ffessm.fr/Especes/Linckia-laevigata-Linckia-bleue-2361"
      },
      {
        "title": "Urasoe City species guide — Linckia laevigata",
        "url": "https://www.city.urasoe.lg.jp/sites/urasoe-envmap/zukan/sonota/aohitode.htm"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "blue-sea-star",
        "src": "assets/images/blue-sea-star-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "파란불가사리 · 둥근 다섯 팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "코발트색 작고구별어려운 중심원반·긴원통형둥근팔5개·모든끝·미세과립과 아래관족일부 확인.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Linckia laevigata BLUE SEA STAR. Five and only FIVE long cylindrical fleshy arms of near-uniform thickness with rounded blunt tips, all independently connected to a small central disc; coherent pentaradial topology. Cobalt-blue finely granular skin, no giant conical black spikes, no pointed triangular cartoon star arms, no facial eyes, smile or central top mouth. A few short pale yellow translucent tube feet appear only along underside ambulacral grooves where angle naturally exposes them, no legs growing out of upper surface. Clean nearly TOP-DOWN view on submerged pale rocky reef ledge, whole sea star with FIVE separated blue arms laid at slightly irregular natural angles, no overlap disguising base count, sharp focus with generous margin. Warm tropical shallow water daylight and faint caustics, discreet blurred coral rubble background."
        ],
        "generatedAt": "2026-10-03T12:21:06.809Z",
        "checkedAt": "2026-10-03",
        "sha256": "a7e33158e7c90410a902d25619f8a34206849a4c8bd6890f5df1eddc076a2312",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "blue-sea-star",
        "src": "assets/images/blue-sea-star-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "파란불가사리 · 바위 표면의 작은 유기물",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "5팔연결/둥근끝과 아래짧은황색관족일부 읽힘. 중심배면은바위가림.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Linckia laevigata BLUE SEA STAR. Five and only FIVE long cylindrical fleshy arms of near-uniform thickness with rounded blunt tips, all independently connected to a small central disc; coherent pentaradial topology. Cobalt-blue finely granular skin, no giant conical black spikes, no pointed triangular cartoon star arms, no facial eyes, smile or central top mouth. A few short pale yellow translucent tube feet appear only along underside ambulacral grooves where angle naturally exposes them, no legs growing out of upper surface. LOW SIDE three-quarter view, all FIVE whole arms around central disc on a submerged gently sloped rock covered with a thin natural olive-brown algal organic film. Central underside stays close in gentle contact with rock, suggesting substrate grazing; no open maw, huge extruded organs, dead animal, shell-cracking or invented prey. A lifted near arm edge naturally exposes a few underside tube feet. Feeding posture reconstruction, fine contents invisible at normal scale. Shallow reef daylight."
        ],
        "generatedAt": "2026-10-03T12:22:35.368Z",
        "checkedAt": "2026-10-03",
        "sha256": "15fc2333630d079c3a54f66fa0618b7809e5f8784c8f89dbccc37235f89c0f01",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "중심 배면이 표면 유기물이 있는 바위와 접촉하는 먹이활동 재구성. 실제 위의 외출/영양흡수 성공·표면 미생물 종류는 외부 정지 그림으로 확인하지 않는다.",
        "behaviorSources": [
          {
            "title": "FFESSM DORIS — Linckia laevigata",
            "url": "https://doris.ffessm.fr/Especes/Linckia-laevigata-Linckia-bleue-2361"
          },
          {
            "title": "Urasoe City species guide — Linckia laevigata",
            "url": "https://www.city.urasoe.lg.jp/sites/urasoe-envmap/zukan/sonota/aohitode.htm"
          }
        ]
      },
      {
        "id": "blue-sea-star",
        "src": "assets/images/blue-sea-star-chatgpt-ecology-rock-climb-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "푸른불가사리 · 바위 굴곡을 따라 구부린 팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "중앙반 하나에서 이어지는 다섯 푸른 원통 팔과 둥근 끝, 알갱이 표면, 아래 관족을 확인. 여분 팔/분리 관절 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. ONE Linckia laevigata BLUE SEA STAR. Five and only FIVE long cylindrical fleshy arms of near-uniform thickness with rounded blunt tips, all independently connected to a small central disc; coherent pentaradial topology. Cobalt-blue finely granular skin, no giant conical black spikes, no pointed triangular cartoon star arms, no facial eyes, smile or central top mouth. A few short pale yellow translucent tube feet appear only along underside ambulacral grooves where angle naturally exposes them, no legs growing out of upper surface. HIGH OBLIQUE wider habitat view, smaller whole sea star slowly draped over a low rock between dead coral rubble and small living corals, FIVE arm bases and rounded tips visible; some arms bend gently to match contour. Shallow tropical Indo-Pacific clear water, natural daylight, no beach stranding, aquarium or floating swimming sea star.",
          "Create ONE original natural-history illustration for Sea Atlas, children ages 5–12, landscape 3:2, realistic refined painterly underwater rendering. Scientific subject: Linckia laevigata, blue sea star. Attached old illustration is ONLY a species-colour and texture reference, NOT a pose template. REBUILD the camera and body pose completely. Show ONE intact cobalt-blue sea star slowly crawling UP THE SIDE of a rough, sloping coral-reef rock ledge. NEW CAMERA: low oblique SIDE view across the ledge at the sea star's central disc level, rather than an overhead flat star. The thick but small central disc is raised modestly against the sloping rock; all FIVE long cylindrical arms have rounded tapering tips and fine granular blue skin, continuous to the same central disc. TWO lower arms spread on the lower rock surface to support the body. THREE other arms gently curve in three dimensions over the upper rock lip, following the uneven surface, each with its own clearly readable tip and connected root. Natural gradual flexion along soft arms, NO elbow hinges, fingers, bones or dramatic acrobatics; do not stretch arm number to six. Reveal short pale yellow-white tube feet along a little of the LOWER/ORAL ambulacral surfaces where an arm curves over the rock, but not a regular white fringe stuck on the dorsal side. Keep the full animal and all five tips inside generous margins, the rock does not hide a whole arm. This must be visibly a side climbing posture with unequal foreshortened curved arms, NOT the old flat five-spoke star rotated or mirrored. Shallow clear tropical reef water, sparse distant coral, no extra sea stars, no fish, no face, no labels, diagrams, text or watermark."
        ],
        "generatedAt": "2026-10-08T16:40:07.023Z",
        "checkedAt": "2026-10-11",
        "sha256": "77ec559e445a322e9f3c8fcf1436ba81e837f870af87489cc71a8da8fbd7eb79",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "바위의 요철을 따라 팔을 천천히 굽히며 관족으로 움직이는 교육 재구성. 관족은 팔 아랫면에 있고 관절로 꺾어 걷는 동작이나 특정 관측의 복제를 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "DORIS — Linckia laevigata",
            "url": "https://doris.ffessm.fr/Especes/Linckia-laevigata-Linckia-bleue-2361"
          },
          {
            "title": "Urasoe City — Aohitode",
            "url": "https://www.city.urasoe.lg.jp/sites/urasoe-envmap/zukan/sonota/aohitode.htm"
          }
        ],
        "viewpoint": "바위 경사면과 중앙반 높이의 낮은 앞사선",
        "pose": "위쪽 두 팔을 바위 가장자리 너머로 부드럽게 굽히고 아래 세 팔은 경사면에 기대어 움직이는 모습",
        "poseVariationCheck": "기존 위앞의 평평한 다섯 팔에서 낮은 앞 사선으로 바뀌고 위 두 팔이 바위 모서리를 넘으며 아치로 굽고 아래3팔은 경사면에 지지함. 실제 카메라/팔 굴곡 두 축 변화.",
        "visualLimitations": "미세 관족의 실제 배열·전체 수는 확정하지 않음. 관절로 꺾은 팔이 아닌 부드러운 굽힘. 요청3팔 굽힘과 달리 실제 큰 굽힘은2팔임. 관족 미세 수·실제 이동 방향/속도 인증 아님. 다섯 끝 모두 프레임 안."
      }
    ],
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "giant-tube-worm",
    "name": "대왕관벌레",
    "scientificName": "Riftia pachyptila",
    "aliases": [
      "거대 관벌레",
      "Giant tubeworm",
      "Giant tube worm"
    ],
    "group": "환형동물",
    "habitatIds": [
      "deep"
    ],
    "depthZoneIds": [
      "midnight"
    ],
    "summary": "흰 관 안에 살며 붉은 아가미를 펼치는 심해 벌레예요. 한국어 이름은 학명의 동물을 설명하는 표기예요.",
    "identity": [
      "바닥에 붙은 흰 관의 위쪽에서 붉은 깃털 같은 아가미가 나와요.",
      "성체에는 입·장·항문 등 소화기관이 없어요. 아가미는 입으로 먹이를 잡는 기관이 아니에요."
    ],
    "ecology": "심해 열수 분출구 주변에 무리 지어 붙어 살아요. 붉은 아가미로 물속 성분을 받아 몸속 공생 세균에 전달해요.",
    "diet": "영양낭(trophosome)의 공생 세균이 황화합물의 화학 에너지를 이용해 만든 영양분을 받아요. 성체가 세균이나 작은 동물을 입으로 삼키는 것은 아니에요.",
    "range": "MBARI는 동태평양 해령과 갈라파고스 열수 지역을 안내해요. 모든 심해 관벌레를 같은 종으로 보지 않아요.",
    "size": "MBARI 제시 최대 약 2 m. AMNH는 6 feet가 넘는 높이를 소개해요. 관과 안의 부드러운 몸을 외부 그림으로 각각 재어 인증하지 않아요.",
    "depth": "MBARI 제시 1,900–3,600 m. 열수는 뜨겁지만 동물이 사는 주변 물은 바닷물과 섞여요.",
    "sources": [
      {
        "title": "NOAA Ocean Exploration — Vent Food Web, Riftia card",
        "url": "https://oceanexplorer.noaa.gov/wp-content/uploads/2025/04/vent-food-web.pdf"
      },
      {
        "title": "MBARI — Giant tubeworm",
        "url": "https://www.mbari.org/animal/giant-tubeworm/"
      },
      {
        "title": "AMNH OLogy — giant tubeworms",
        "url": "https://www.amnh.org/explore/ology/ology-cards/186-giant-tubeworms"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "giant-tube-worm",
        "src": "assets/images/giant-tube-worm-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관벌레 · 흰 관과 붉은 아가미 깃",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "하얀 긴관1개와 위쪽붉은아가미깃·관입구흰기부 확인. 깃 끝은좁은위여백안쪽, 바위에기부 일부가림.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. Adult Riftia pachyptila giant tubeworm: long sturdy slightly curved ivory-white chitinous cylindrical tube, faint growth wrinkles and some pale sulfide stains, rooted at rocky seafloor, open rim at TOP. Soft worm body remains INSIDE opaque tube; a short pale vestimental collar connects at rim to a dense erect red feathery branching BRANCHIAL PLUME. Natural many fine filaments, not flower petals, not a mouth/anemone tentacle ring. No eyes, jaws, teeth, open-mouth feeding, anus, digestive gut, fish fins, segmented snake extending free, or visible internal bacteria. Adults have no mouth or digestive tract: red plume absorbs dissolved compounds which support internal symbiotic bacteria. Deep seafloor hydrothermal vent habitat, black basalt and gently shimmering diffuse flow; no sunlight, sea surface, flame, molten lava or huge erupting smoke through animal. Soft neutral illustration light reveals colors; this is not natural sunlight or animal bioluminescence. ONE isolated focal full-length tube and complete red plume in three-quarter SIDE portrait, anchored base and tube top in frame, surrounding low basalt with no other animals. Upright tube curves mildly, plume shows fan of dense fine red filaments attached to collar, not a flower."
        ],
        "generatedAt": "2026-10-03T12:24:39.885Z",
        "checkedAt": "2026-10-03",
        "sha256": "885e72f2cf40d35d81f674e0d7a399667312666708b6ad602a809b3337275f76",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "giant-tube-worm",
        "src": "assets/images/giant-tube-worm-chatgpt-feeding-gills-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관벌레 · 가까이 본 붉은 아가미와 관 입구",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "하나의 흰 관 입구 내부에서 살아 있는 흰 기부가 이어지고 붉은 가는 가지 아가미 깃이 펼쳐짐. 붉은 깃 전체와 끝 여백을 확인하며 별도 입·외부 먹이·분리된 기부 없음. MBARI 원문은 공생 세균 영양과 깃 수축을 설명함.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. Adult Riftia pachyptila giant tubeworm: long sturdy slightly curved ivory-white chitinous cylindrical tube, faint growth wrinkles and some pale sulfide stains, rooted at rocky seafloor, open rim at TOP. Soft worm body remains INSIDE opaque tube; a short pale vestimental collar connects at rim to a dense erect red feathery branching BRANCHIAL PLUME. Natural many fine filaments, not flower petals, not a mouth/anemone tentacle ring. No eyes, jaws, teeth, open-mouth feeding, anus, digestive gut, fish fins, segmented snake extending free, or visible internal bacteria. Adults have no mouth or digestive tract: red plume absorbs dissolved compounds which support internal symbiotic bacteria. Deep seafloor hydrothermal vent habitat, black basalt and gently shimmering diffuse flow; no sunlight, sea surface, flame, molten lava or huge erupting smoke through animal. Soft neutral illustration light reveals colors; this is not natural sunlight or animal bioluminescence. ONE complete full-length focal tube from low oblique angle; red plume extended into gently rippling diffuse vent water beside a small crack in basalt. Water shimmer near plume is subtle, no bright chemical beads, arrows, molecules or diagram. Composition foregrounds connected plume and rim but keeps full rooted tube inside frame. NO prey, swallowing, stomach depiction or body cutaway. This is a habitat-based reconstruction of dissolved compound uptake by plume, unseen bacteria are not drawn.",
          "Use case: scientific-educational. Asset: Sea Atlas nutrition detail illustration, horizontal 3:2. Image 1 is a species identity and painted style reference ONLY. Make a newly composed CLOSE VIEW FROM ABOVE of the red gill plume and the oval opening of the white tube of ONE Riftia pachyptila giant tubeworm at a deep-sea hydrothermal vent. The viewpoint must be clearly different from the old full-height lateral portrait. Tilt the tube opening toward the viewer so its rim reads as an ellipse, with the attached living white vestimentum emerging through it and numerous finely branching red gill filaments fanning asymmetrically out and sideways in a gentle water current. The plume must remain continuously attached at the tube opening, not a detached plant. Keep the complete red plume inside frame; the lower tube extends outside the close-up naturally, so do not repeat the long full-body pipe portrait. Natural realistic feathery branching filaments, no flower petals or invented giant mouth, eyes, teeth, tentacles or crustaceans. Dark volcanic rock and soft mineral-rich water in the distance; no sunlight at this deep vent. No cutaway, glowing bacteria, arrows, labels, panels or text. Explain through visible anatomy only: gill plume in surrounding water, nutrition is supplied by INTERNAL sulfur-oxidizing symbiotic bacteria and not by eating particles through a mouth. The true new camera view, close study scale and side-swept gill fan must read distinctly from both the old straight single worm and the distant colony image.",
          "Use case: precise-object-edit. Edit ONLY THE FRAMING of the attached Riftia pachyptila giant-tubeworm gill close-up. Zoom the camera out modestly and lower the animal in the composition so the COMPLETE red gill fan, especially every upper filament tip, is visible with at least 8 percent dark water margin above and to the right. Keep the newly drawn oblique top/front view of the oval white tube rim, continuous white living gill bases and fine branching red filaments, side-swept asymmetrical fan, colors, natural painted style and anatomy exactly as they are. Retain the close study view, not a full long pipe portrait. Lower tube can continue beyond the lower edge naturally but NO red gill tip may touch any edge. Extend the same volcanic-rock and deep blue water environment into the added margin, no new animals, no extra plume, no sunlight, no text, arrows or watermark. This is a framing correction only, do not change the red fan into broad petals or add a mouth."
        ],
        "generatedAt": "2026-10-08T16:31:27.467Z",
        "checkedAt": "2026-10-11",
        "sha256": "ba7578ae8fedf38cc2963313482aa95e615c142f7645c37171f89866f5e39b62",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "공생 영양에 쓰이는 물속 성분을 받아들이는 아가미의 교육 재구성. 입으로 입자를 삼키는 장면이 아님.",
        "behaviorSources": [
          {
            "title": "MBARI — Giant tubeworm",
            "url": "https://www.mbari.org/animal/giant-tubeworm/"
          }
        ],
        "viewpoint": "위앞에서 내려다본 가까운 관찰",
        "pose": "물살을 따라 옆으로 펼쳐진 붉은 아가미 깃",
        "poseVariationCheck": "기존 긴 관 전신의 정면/옆면 세 컷과 달리 위앞 가까운 시점, 뚜렷하게 타원형으로 보이는 관 입구, 오른쪽으로 비대칭 펼친 깃으로 관찰 시점과 깃 상태가 달라짐. 단순 전신 확대만이 아님.",
        "visualLimitations": "아가미 상세관찰로 아래 관기부는 화면밖. 외부입먹이/공생세균 시각화 없음. 가까운 아가미 관찰이라 긴 관의 아래쪽은 화면 밖. 모든 개체가 이 같은 펼침을 한다거나 실제 유속·관측 시점을 뜻하지 않는 교육 재구성이며 공생 영양을 외부 먹이 삼킴으로 해석하지 않음."
      },
      {
        "id": "giant-tube-worm",
        "src": "assets/images/giant-tube-worm-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관벌레 · 열수 분출구의 무리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전경에서 관과깃 약7개군집이읽힘. 관 기부는 암석과원근가림, 붉은깃끝안쪽.",
        "generationPrompts": [
          "Use case: scientific-educational. Asset: ORIGINAL Sea Atlas natural-history illustration for ages 5–12. Landscape 3:2, 1536×1024. Refined painterly realism, subtle brush texture, calm documentary animal with realistic proportions. Complete focal animal and all important appendages inside generous frame margins. No text, labels, arrows, panels, logos, people, boats, blood, wounds, horror, fantasy, cartoon face, large humanlike eyes, neon glow, cropped body or cut-off appendages. Adult Riftia pachyptila giant tubeworm: long sturdy slightly curved ivory-white chitinous cylindrical tube, faint growth wrinkles and some pale sulfide stains, rooted at rocky seafloor, open rim at TOP. Soft worm body remains INSIDE opaque tube; a short pale vestimental collar connects at rim to a dense erect red feathery branching BRANCHIAL PLUME. Natural many fine filaments, not flower petals, not a mouth/anemone tentacle ring. No eyes, jaws, teeth, open-mouth feeding, anus, digestive gut, fish fins, segmented snake extending free, or visible internal bacteria. Adults have no mouth or digestive tract: red plume absorbs dissolved compounds which support internal symbiotic bacteria. Deep seafloor hydrothermal vent habitat, black basalt and gently shimmering diffuse flow; no sunlight, sea surface, flame, molten lava or huge erupting smoke through animal. Soft neutral illustration light reveals colors; this is not natural sunlight or animal bioluminescence. WIDER elevated three-quarter habitat view of a small thicket of SEVEN whole Riftia tubes of varying natural height, each distinct white tube connects one red plume at its own top and rocky base, main foreground tube fully unobscured. All whole tubes and plumes in frame; bases naturally anchored together with some partial rear occlusion. Dark basalt diffuse-flow vent, gentle water shimmer, no invented giant animals, no explosive black smoke, no free swimming."
        ],
        "generatedAt": "2026-10-03T12:26:49.820Z",
        "checkedAt": "2026-10-03",
        "sha256": "e67e849f8a8f64d8990d31d7dcebb07fae5cd910a53350c20ebbbe6aa39a812a",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "심해 열수 주변에 붙어 자라는 군집 재구성. 관마다 붉은 아가미가 상단에서 나오는 정착 모습이며 자유 유영·입으로 포획·관내부 세균 표시 없음. 열수 흐름/온도/특정현장 종분포 사건은 인증하지 않는다.",
        "behaviorSources": [
          {
            "title": "NOAA Ocean Exploration — Vent Food Web, Riftia card",
            "url": "https://oceanexplorer.noaa.gov/wp-content/uploads/2025/04/vent-food-web.pdf"
          },
          {
            "title": "MBARI — Giant tubeworm",
            "url": "https://www.mbari.org/animal/giant-tubeworm/"
          },
          {
            "title": "AMNH OLogy — giant tubeworms",
            "url": "https://www.amnh.org/explore/ology/ology-cards/186-giant-tubeworms"
          }
        ]
      }
    ],
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "walrus",
    "name": "바다코끼리",
    "scientificName": "Odobenus rosmarus",
    "group": "포유류",
    "habitatIds": [
      "coast",
      "polar"
    ],
    "summary": "넓은 주둥이의 수염으로 바닥 속 조개를 찾아요. 암컷과 수컷 모두 긴 상아가 있어요.",
    "identity": [
      "주름진 갈색 몸과 넓은 수염 주둥이를 보세요.",
      "위턱의 긴 송곳니 두 개가 입 밖으로 자라 상아가 돼요.",
      "바깥 귓바퀴가 없고, 네 지느러미로 땅에서도 몸을 지탱해요."
    ],
    "ecology": "북극의 해안이나 얼음 위에서 모여 쉬어요. 얕은 바닥에서 먹이를 찾고 물에서는 작은 무리로 이동하기도 해요.",
    "diet": "주로 이매패류 조개. 수염으로 찾고 입과 혀로 조갯살을 빨아먹어요. 다른 동물을 먹는 개체도 있어요.",
    "range": "북극 주변 대서양과 태평양의 여러 떨어진 집단으로 살아요.",
    "size": "노르웨이 극지연구소 안내는 성체 수컷 몸길이 3–3.5m·약 1500kg, 암컷 약 2.5m·900kg을 제시해요. 지역과 성별에 따른 설명이며 전 세계 최대값은 아니에요.",
    "depth": "스발바르 기록에서 대부분의 잠수는 50m보다 얕았지만 450m를 넘는 잠수도 관측됐어요. 한 지역의 관측으로, 모든 개체의 보통 수심이나 종의 최대값은 아니에요.",
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "sources": [
      {
        "title": "Norwegian Polar Institute — Walrus",
        "url": "https://npolar.no/en/species/walrus/"
      },
      {
        "title": "USFWS — Bivalve mollusks, walrus feeding",
        "url": "https://www.fws.gov/media/bivalve-mollusks"
      }
    ],
    "aliases": [
      "walrus"
    ],
    "featured": false,
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "walrus",
        "src": "assets/images/walrus-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "바다코끼리의 두 엄니와 넓은 수염 난 주둥이.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 넓은 수염 주둥이·두 엄니와 끝·갈색 주름 몸·앞지느러미2와 뒤쪽 두 지느러미 윤곽을 확인. 외부 귓바퀴 없음.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Walrus Odobenus rosmarus: robust bulky cinnamon-brown wrinkled body, small head with broad blunt whiskered muzzle, two external downward-pointing upper canine tusks connected to the upper jaw, small natural eyes, no external ear flaps. Exactly two foreflippers and two hindflippers. No elephant trunk, no horns, no seal-lion ear flaps, no extra tusks or legs. A single adult-form walrus resting on an Arctic rocky shoreline in a full-body side-three-quarter view. Both foreflippers separated and both small hindflippers readable at the rear of the long body. Tusk roots and both full tips visible, natural warm brown skin rather than naked pink cartoon. Arctic sea and sparse distant sea ice. Do not place penguins in Arctic. Body mostly horizontal; head lifted moderately, no human seated pose."
        ],
        "generatedAt": "2026-10-03T13:17:41.009Z",
        "checkedAt": "2026-10-04",
        "sha256": "0661df15fc43601faf37da51df65ad9329d248eb6b8838adfaa49cd5591d9cba",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "walrus",
        "src": "assets/images/walrus-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "해저의 조개를 수염 난 주둥이로 찾는 먹이 활동 재구성.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "수염·두 엄니 기부·근측 앞지느러미·뒤지느러미2와 전신을 원본 확인. 원측 앞핀 대부분과 엄니 끝 일부는 퇴적물/몸에 가려짐.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Walrus Odobenus rosmarus: robust bulky cinnamon-brown wrinkled body, small head with broad blunt whiskered muzzle, two external downward-pointing upper canine tusks connected to the upper jaw, small natural eyes, no external ear flaps. Exactly two foreflippers and two hindflippers. No elephant trunk, no horns, no seal-lion ear flaps, no extra tusks or legs. A single whole walrus underwater on a shallow Arctic soft sandy seafloor searching for small bivalve clams with its sensitive whiskered muzzle. Both tusks point downward at sides of muzzle and do not act as spears or dig giant trenches. Foreflippers are natural broad paddles; slight sediment cloud near muzzle, several small partly buried paired shells. Muzzle close to sediment, mouth gently pursed, no extracted bloody flesh and no proof of suction success. Long whole body and two trailing hindflippers visible, plausible natural overlap allowed, side-three-quarter perspective, quiet diffuse shallow light."
        ],
        "generatedAt": "2026-10-03T13:18:52.653Z",
        "checkedAt": "2026-10-04",
        "sha256": "604367c3caa0113c5f18acd3bbd562b4978e8112ec6536d7e82d47ffd25cee6a",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "모래 속 이매패류에 주둥이를 가까이 대는 교육 재구성. 상아로 조개를 찌르거나 흡입 성공을 인증하는 장면으로 설명하지 않음.",
        "behaviorSources": [
          {
            "title": "Norwegian Polar Institute — Walrus",
            "url": "https://npolar.no/en/species/walrus/"
          },
          {
            "title": "US Fish & Wildlife Service — bivalve mollusks",
            "url": "https://www.fws.gov/media/bivalve-mollusks"
          }
        ]
      },
      {
        "id": "walrus",
        "src": "assets/images/walrus-chatgpt-ecology-low-rest-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "바다코끼리 · 얼음 위에 몸을 낮추고 쉬기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "수염 많은 넓은 주둥이와 작은 눈, 위턱에 이어진 엄니2, 주름진 갈색 긴 몸과 연결 앞/뒤 발지느러미를 확인. 고래 꼬리/외부 귓바퀴/분리 엄니 없음.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Walrus Odobenus rosmarus: robust bulky cinnamon-brown wrinkled body, small head with broad blunt whiskered muzzle, two external downward-pointing upper canine tusks connected to the upper jaw, small natural eyes, no external ear flaps. Exactly two foreflippers and two hindflippers. No elephant trunk, no horns, no seal-lion ear flaps, no extra tusks or legs. Different elevated wide composition: a small social group of THREE walruses resting close together on a broad Arctic ice floe, foreground animal wholly visible in oblique side view with both tusks and front flippers, hindflippers naturally readable where not occluded. Distant two animals partly occluded by natural group spacing, not fused with the foreground body. Ice supports the animals, realistic quiet sea with sparse floating ice, no Antarctic penguins or tropical reef. Not fighting and no tusk wounds.",
          "Use case: scientific-educational. Create ONE original natural-history painted illustration for Sea Atlas, children 5–12, landscape 3:2, realistic Arctic mammal anatomy. Species Odobenus rosmarus. Input is identity and style reference ONLY. Completely replace its seated upright front pose; do not mirror, rotate or paste that silhouette. NEW CAMERA: moderately HIGH REAR-SIDE oblique view looking down across the animal's broad BACK on an Arctic ice floe. Draw ONE adult walrus resting low on its belly and slightly on its left side, torso lying lengthwise from upper-left rear to lower-right head. NEW BODY STATE: shoulders and heavy wrinkled neck settle low, head relaxed and gently turned left toward the viewer, muzzle close to the ice but not buried. Two long ivory upper-canine TUSKS arise continuously from the upper jaw and slope forward/sideways close above the ice in a natural resting position; do not make them pass through ice, flex like tentacles, cross impossibly, or grow from the chin. Broad blunt muzzle with dense short pale stiff whiskers, tiny lateral eyes slightly relaxed, small head compared with immense cinnamon-brown torso, thick wrinkled sparsely haired skin, no external ear flaps. Near foreflipper lies out to the side on the ice while the far foreflipper is folded more closely by the chest, both attached anatomically. TWO short connected hindflippers are relaxed beside each other behind the body, with modest natural overlap; no dolphin or whale tail, extra flippers or detached feet. Keep the entire walrus, both tusk tips and visible flipper tips inside at least eight percent margins. A second walrus can be only a small distant background silhouette, never overlapping the main animal. Quiet blue Arctic water and modest distant sea ice, subdued natural daylight. This is an educational haul-out/rest scene consistent with walruses resting on ice, not a claimed observed sleep episode. No feeding, injuries, humans, text, labels, panels or watermark. The back/side camera, lowered trunk and relaxed flippers must differ visibly from the old raised-head front portrait."
        ],
        "generatedAt": "2026-10-10T15:38:37.555Z",
        "checkedAt": "2026-10-11",
        "sha256": "32dc42147b9da273f01322eb7bbdd2d74ec823753708da9bf34c05c1d1829eda",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Norwegian Polar Institute의 얼음판에서 쉬는 생활을 따른 교육 재구성. 몸을 낮춘 휴식 자세이며 특정 수면 관측이나 엄니로 얼음을 뚫는 행동을 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Norwegian Polar Institute — Walrus",
            "url": "https://npolar.no/en/species/walrus/"
          }
        ],
        "viewpoint": "머리와 넓은 등을 함께 보는 높은 앞옆 사선",
        "pose": "배와 가슴을 얼음에 낮추고 앞지느러미를 편 뒤 머리도 가까이 내려 쉬는 모습",
        "poseVariationCheck": "기존 목/머리를 높이 올린 정면/앞옆에서 등을 넓게 보이는 높은 앞옆 사선과 가슴/머리 낮춘 휴식으로 바뀜. 펼친 앞핀과 낮춘 목이 시점 변화와 함께 읽힘.",
        "visualLimitations": "원측 뒤 지느러미는 가려졌으며 피부·발톱 세부는 전문검증 미실시 뒤옆 요청과 달리 실제 앞옆 위 사선. 먼 앞핀 기부는 몸에 가리고 엄니 끝은 얼음에 닿아 보임. 특정 수면상태·나이·성별/엄니 사용을 확정하지 않음. 전체 몸과 엄니 끝 프레임 안."
      }
    ]
  },
  {
    "id": "leopard-seal",
    "name": "표범물범",
    "scientificName": "Hydrurga leptonyx",
    "group": "포유류",
    "habitatIds": [
      "coast",
      "polar"
    ],
    "summary": "점무늬 몸과 긴 앞지느러미로 남극 바다를 헤엄쳐요. 물고기부터 크릴까지 여러 먹이를 먹어요.",
    "identity": [
      "어두운 등과 밝은 배에 점무늬가 있어요.",
      "몸은 길쭉하고 앞지느러미가 길어요.",
      "머리와 턱이 크고, 바깥 귓바퀴와 등지느러미는 없어요."
    ],
    "ecology": "남극 주변 유빙에서 주로 혼자 지내요. 물에서 먹이를 찾고 얼음이나 해안에서 쉬며, 일부는 아남극 섬으로 이동해요.",
    "diet": "물고기·오징어·크릴 같은 갑각류·펭귄·다른 물범의 새끼 등. 개체마다 선호하는 먹이가 달라요. 특별한 어금니는 크릴을 거르는 데도 쓰여요.",
    "range": "남극 대륙 주변 유빙과 바다, 일부 아남극 섬. 남극보다 북쪽으로 멀리 이동한 기록도 있어요.",
    "size": "호주 남극기관 안내는 수컷 몸길이 약 2.8m·320kg, 암컷 3m·370kg을 제시해요. 큰 암컷은 3.5m·500kg를 넘기도 하며 모두의 보통 크기는 아니에요.",
    "depth": "2008–2014년 리빙스턴섬 여름 성체 암컷 21마리 연구에서는 기록된 잠수의 90.1%가 30m 이내였어요. 햇빛 구간은 이 연구와 이번 상층 장면을 나타내며 종 전체의 수심 한계는 아니에요.",
    "depthZoneIds": [
      "sunlight"
    ],
    "sources": [
      {
        "title": "Australian Antarctic Program — Leopard seal",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/seals/leopard-seal/"
      },
      {
        "title": "Krause et al. 2016 — Summer diving and haul-out behavior of leopard seals, NOAA repository",
        "url": "https://repository.library.noaa.gov/view/noaa/53704/noaa_53704_DS1.pdf"
      }
    ],
    "aliases": [
      "leopard seal"
    ],
    "featured": false,
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "leopard-seal",
        "src": "assets/images/leopard-seal-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "길고 날씬한 몸과 옅은 옆구리의 얼룩이 보이는 표범물범.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 길고 가는 얼룩 몸·큰 머리·수염·앞핀2·뒤쪽 패들2와 전신을 확인. 꼬리/뒤핀 기부 일부는 몸과 핀이 겹침.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Leopard seal Hydrurga leptonyx: elongated slender streamlined gray body, darker charcoal back and pale underside with irregular dark leopard-like spots, long broad reptile-like but genuinely mammalian head with broad muzzle, small natural dark eyes, nostrils and short whiskers, no external ear flaps. Two relatively LONG foreflippers, two hindflippers at rear with short small central tail between them. No dorsal fin, no fish tail, no sea-lion ears or crocodile scales. Mouth closed or only slightly open, no monster teeth. Single whole leopard seal resting stretched horizontally on a broad Antarctic ice floe, slightly elevated three-quarter side view. Both foreflippers laid apart, hindflipper pair separated at body rear with small central tail visible. Large head lifted slightly, mouth closed, dark spots visible on pale flank. Calm Southern Ocean, distant sea ice. No other animal, no horror posture."
        ],
        "generatedAt": "2026-10-03T19:25:04.347Z",
        "checkedAt": "2026-10-04",
        "sha256": "df6ef08eab0d6cc5e5d631c9581273c28f74367aa817cfdeea90c21333702f96",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "leopard-seal",
        "src": "assets/images/leopard-seal-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "작은 물고기 무리에 접근하는 표범물범. 실제 포획 성공을 뜻하지 않음.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 긴 얼룩 몸·수염·앞핀2와 뒤핀2 윤곽 및 끝을 확인. 작은 꼬리와 뒤핀 기부는 자연 겹침으로 별도 확인 불가.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Leopard seal Hydrurga leptonyx: elongated slender streamlined gray body, darker charcoal back and pale underside with irregular dark leopard-like spots, long broad reptile-like but genuinely mammalian head with broad muzzle, small natural dark eyes, nostrils and short whiskers, no external ear flaps. Two relatively LONG foreflippers, two hindflippers at rear with short small central tail between them. No dorsal fin, no fish tail, no sea-lion ears or crocodile scales. Mouth closed or only slightly open, no monster teeth. Single whole leopard seal swimming in Antarctic upper-ocean water toward a small loose school of intact silver fish. Different side-three-quarter swimming view, two long foreflippers separated in a stroke, rear hindflippers distinct and small central tail, no contact, mouth only slightly open and teeth mostly concealed, no prey caught. Fish much smaller than the approximately3-meter seal, natural scale, no fish cutoffs required except distant background. Diffuse cold-water light and distant floating ice above, no reef/seafloor or exaggerated fangs."
        ],
        "generatedAt": "2026-10-03T19:26:04.077Z",
        "checkedAt": "2026-10-04",
        "sha256": "e81d2763e2607f2aee85f8767e7bc91bfa8099109fe08b370af1337ef465d37a",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "유빙 아래에서 온전한 작은 물고기 무리에 접근하는 교육 재구성. 물고기의 정확한 종·포획 성공을 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Leopard seal",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/seals/leopard-seal/"
          }
        ]
      },
      {
        "id": "leopard-seal",
        "src": "assets/images/leopard-seal-chatgpt-ecology-front-bank-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "표범물범 · 앞사선에서 본 얼음 아래 유영",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속된 회색 등/옅은 배와 불규칙 반점 몸, 수염/두 자연 눈, 두 앞핀과 뒤 두 발지느러미 확인. 외부 귓바퀴·고래 꼬리·등지느러미 없음.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Leopard seal Hydrurga leptonyx: elongated slender streamlined gray body, darker charcoal back and pale underside with irregular dark leopard-like spots, long broad reptile-like but genuinely mammalian head with broad muzzle, small natural dark eyes, nostrils and short whiskers, no external ear flaps. Two relatively LONG foreflippers, two hindflippers at rear with short small central tail between them. No dorsal fin, no fish tail, no sea-lion ears or crocodile scales. Mouth closed or only slightly open, no monster teeth. Different oblique overhead view of a SINGLE leopard seal swimming alone beneath an Antarctic floating ice edge. Body fully inside frame, mouth closed, two long foreflippers and paired hindflippers readable, short central tail. Pale mottled flank beneath a darker back. Natural upper-ocean water, diffuse cold light under thin ice, no direct intense sunbeams, no terrestrial walking, no baby or prey. Emphasize solitary swimming near pack ice, not hunting.",
          "Use case: scientific-educational. Create ONE original natural-history painted illustration for Sea Atlas, ages 5–12, landscape 3:2, realistic Hydrurga leptonyx leopard seal. The input is only an identity and painterly style reference; completely replace its broad side-on straight-swimming silhouette. NEW VIEW: nearly FRONT-ON from slightly below and to the seal's left, showing the elongated blunt reptile-like head nearest the viewer in the lower centre, both natural small lateral eyes and whiskered muzzle, slender spotted body receding toward upper-right depth. NEW POSE: the seal makes a modest natural bank with a gentle continuous curve of the torso, one LONG foreflipper extending diagonally outward/down to the left and the other angled back/up along the opposite side, each attached behind the head and ending in the normal rounded seal-flipper tip. A single tapered rear body connects to TWO hindflippers held close, slightly splayed and foreshortened at the far end. These are paired hind feet, NOT a horizontal dolphin tail, broad whale flukes or a separate third flipper. No dorsal fin, external ear flaps, extra eye, detached limb or eel-like body bend. Dark grey back, light silvery belly and sides covered with fine dark irregular leopard spots, not a lion's mane or striped coat. Mouth gently closed, quiet observation, no fangs, grin, prey or hunting claim. ONE animal swims below an Antarctic ice edge, blue-green cold water with restrained light reflected by ice overhead. Keep the whole animal and all visible fore/hindflipper tips within generous eight-percent margins. No other animals, people, text, diagram, watermark or successful capture. The foreshortened front head and differently stroked foreflippers must differ unmistakably from the reference's straight horizontal side pose."
        ],
        "generatedAt": "2026-10-10T15:41:01.410Z",
        "checkedAt": "2026-10-11",
        "sha256": "6961f551eaac567a854b4c3b7fa443e3cd395c529264c9f982f4eb2b212754e7",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Australian Antarctic Program의 남극 유빙 서식·가늘고 긴 몸·긴 앞지느러미에 맞춘 조용한 유영 관찰 재구성. 먹이·추적·포획 성공이나 특정 유영 속도·기법을 단정하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Leopard seal",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/seals/leopard-seal/"
          }
        ],
        "viewpoint": "머리를 마주 보는 앞사선; 몸은 오른위 뒤쪽으로 후퇴함",
        "pose": "몸을 완만하게 기울이고 가까운 앞지느러미는 아래옆, 먼쪽 앞지느러미는 뒤위로 펼친 모습",
        "poseVariationCheck": "기존 옆 수평 몸에서 머리가 매우 가까운 앞 사선 단축으로 바뀌고 몸/후방 발이 깊게 후퇴. 앞핀 한쪽은 내려가고 다른쪽은 옆 위로 올라가 두 축 변화 명료.",
        "visualLimitations": "정면 원근 때문에 긴 머리 옆 윤곽과 치열은 확인 불가. 전문 동정 미실시 정면 원근으로 주둥이가 짧게 보여 긴 두개골 옆윤곽은 이 컷에서 검증 못함. 반점만으로 전문 종동정을 뜻하지 않음. 모든 핀/뒤 발 끝 프레임 안."
      }
    ]
  },
  {
    "id": "emperor-penguin",
    "name": "황제펭귄",
    "scientificName": "Aptenodytes forsteri",
    "group": "조류",
    "habitatIds": [
      "pelagic",
      "polar"
    ],
    "summary": "남극의 해빙에서 번식하는 큰 펭귄이에요. 날개로 헤엄치고 가까이 모여 추위를 견뎌요.",
    "identity": [
      "검은 머리와 등, 흰 배를 보세요.",
      "귀 주변의 노란 반점과 옅은 노란 가슴이 특징이에요.",
      "두 날개는 헤엄치는 지느러미처럼 쓰고, 짧은 꼬리와 물갈퀴 발이 있어요."
    ],
    "ecology": "남극 겨울에 번식하고 해빙 위에서 가까이 모여 체온을 지켜요. 알을 품는 수컷과 바다에서 먹이를 찾는 암컷은 새끼가 깨어난 뒤 돌봄을 나누어요.",
    "diet": "남극은어(Pleuragramma antarcticum)를 비롯한 작은 물고기·남극크릴·오징어. 먹이 비중은 계절과 장소에 따라 달라요.",
    "range": "남극 대륙 주변 해빙에서 번식하고 주변 바다에서 먹이를 찾아요.",
    "size": "영국 남극조사단은 서 있는 높이 약 115cm를 소개해요. 성체는 번식 시작 때 약 40kg까지 나가며 몸무게는 계절에 따라 달라요.",
    "depth": "호주 남극기관은 먹이를 찾는 깊이를 주로 150–250m, 많은 잠수를 100–200m로 소개해요. 더 깊은 565m 관측도 있지만 종의 잠수 한계를 뜻하지 않아요.",
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "sources": [
      {
        "title": "Australian Antarctic Program — Emperor penguin",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
      },
      {
        "title": "Australian Antarctic Program — Emperor penguins diving and travelling",
        "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/how-deep-can-they-dive/"
      },
      {
        "title": "British Antarctic Survey — Penguins science briefing",
        "url": "https://www.bas.ac.uk/wp-content/uploads/2015/04/penguins_2008.pdf"
      }
    ],
    "aliases": [
      "emperor penguin"
    ],
    "featured": false,
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "emperor-penguin",
        "src": "assets/images/emperor-penguin-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "황제펭귄의 검은 머리와 옅은 노란 가슴.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 검은 머리·옅은 노란 귀반점과 가슴·분홍빛 아래부리 부분·날개2·발2·따로 보이는 짧은 꼬리와 전신 끝을 확인.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Emperor penguin Aptenodytes forsteri: tall robust adult-form black head and back, white belly, pale yellow upper chest fading into white, restrained yellow-orange EAR patches at the head/neck sides, long black beak with subtle pinkish-orange LOWER-mandible side stripe, dark eyes without white Adélie eye ring. Two flat flipper wings, two dark webbed feet, short stiff tail. NOT king penguin: no very large bright orange teardrop head patches or intense orange chest bib; emperor has broad pale-yellow blending chest. No yellow crest, no teeth, no external ears. Single whole adult-form emperor penguin standing naturally on Antarctic stable sea ice, full-body side-three-quarter view. Both flipper wings slightly away from torso, two separate dark webbed feet and stiff short tail readable, natural robust proportions. Soft Antarctic daylight, distant ice and sea, no pebble nest or eggs or another penguin species."
        ],
        "generatedAt": "2026-10-03T19:28:51.461Z",
        "checkedAt": "2026-10-04",
        "sha256": "5b7f1c1b46a3c98c574c2cba9e14a4339d0d1193fb8ba41fb3902cbe0c0f2f49",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "emperor-penguin",
        "src": "assets/images/emperor-penguin-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "작은 물고기에 접근하는 황제펭귄의 잠수 먹이 활동.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 검은 머리와 노란 반점·날개2·뒤의 겹친 두 발 윤곽 및 따로 보이는 짧은 꼬리·전신을 확인. 두 발 기부는 겹쳐 세부 전수 미인증.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Emperor penguin Aptenodytes forsteri: tall robust adult-form black head and back, white belly, pale yellow upper chest fading into white, restrained yellow-orange EAR patches at the head/neck sides, long black beak with subtle pinkish-orange LOWER-mandible side stripe, dark eyes without white Adélie eye ring. Two flat flipper wings, two dark webbed feet, short stiff tail. NOT king penguin: no very large bright orange teardrop head patches or intense orange chest bib; emperor has broad pale-yellow blending chest. No yellow crest, no teeth, no external ears. Single whole emperor penguin swimming horizontally through Antarctic open-ocean water in a new oblique side view, approaching a few small intact Antarctic silverfish Pleuragramma antarcticum. Wing-flippers spread, two dark webbed feet trailing separately and short tail complete. Beak slightly parted, no fish contact or capture, fish small compared with approximately1-meter penguin. Dim diffuse blue upper-ocean light consistent with a feeding dive, no direct bright sunbeams, no seafloor, no coral, no graphic depth scale. No oversized fish or monster teeth."
        ],
        "generatedAt": "2026-10-03T19:30:23.531Z",
        "checkedAt": "2026-10-04",
        "sha256": "fbace71a25783427b894d57429923e3c3a9f0ecd57a47ee5362b4f17165b3216",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "남극의 은빛 작은 물고기에 접근하는 교육 재구성. 남극은어가 주요 먹이라는 기관 원문에 근거하지만 그림 속 물고기를 Pleuragramma antarcticum으로 전문 동정하거나 포획 성공을 인증하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Emperor penguin",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
          }
        ]
      },
      {
        "id": "emperor-penguin",
        "src": "assets/images/emperor-penguin-chatgpt-ecology-rear-huddle-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "황제펭귄 · 뒤위에서 본 따뜻한 무리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "다섯 개체의 이어진 머리/몸, 검은 머리와 등·노란 귀무늬·옅은 가슴/부리 측색을 확인. 주개체의 짝 날개, 작은 뒤꼬리와 측면 발이 프레임 안. 분리 눈/여분 머리 없음.",
        "generationPrompts": [
          "Create ONE original landscape3:2 natural-history educational illustration for ages5–12, refined painterly realism with scientifically plausible anatomy, natural colors, calm non-anthropomorphic animal. No text, labels, borders, collage, human, cartoon eyes/face, horror, gore, wounds or blood. Entire main animal with complete appendage tips and generous margins. Natural occlusion allowed, no duplicated/fused limbs. Educational reconstruction, not photo. Emperor penguin Aptenodytes forsteri: tall robust adult-form black head and back, white belly, pale yellow upper chest fading into white, restrained yellow-orange EAR patches at the head/neck sides, long black beak with subtle pinkish-orange LOWER-mandible side stripe, dark eyes without white Adélie eye ring. Two flat flipper wings, two dark webbed feet, short stiff tail. NOT king penguin: no very large bright orange teardrop head patches or intense orange chest bib; emperor has broad pale-yellow blending chest. No yellow crest, no teeth, no external ears. Wide different composition of a small huddle of SIX emperor penguins on solid Antarctic winter sea ice. One near-front adult-form bird full body and feet inside frame, other birds close together but each separate body/head and natural overlapping wings; no fused bodies. Diffuse dim polar winter sky, restrained icy blues, gentle snow grains, no blizzard horror or injury. No pebble nest or exposed eggs: any incubation contents naturally concealed, do not display. Typical black heads, pale yellow blending upper chests/ear patches throughout, no Adélie eye rings or king-penguin orange bibs.",
          "Use case: scientific-educational. Create ONE original natural-history painted illustration for Sea Atlas, children 5–12, landscape 3:2, accurate adult Aptenodytes forsteri emperor penguins. Input supplies species identity and painterly style ONLY, not the old frontal upright group pose. Rebuild the 3D camera and main bird's body state. NEW CAMERA clearly HIGH ABOVE AND BEHIND a small compact huddle of FIVE adult emperor penguins on winter Antarctic sea ice, an oblique rear view looking down at their black backs and necks, not a flat eye-level row of white fronts. The main bird is nearest at lower centre seen from the BACK with its body gently leaning inward toward the huddle, neck modestly shortened and head LOWERED FORWARD toward its right shoulder. A small right-side head profile may reveal the normal yellow-orange ear patch, black head, slender bill with narrow pink-orange mandibular stripe and one small natural eye; never add eyes to the back of the head. The other four birds face inward at varying orientations and depths, naturally overlapping but each separate with one continuous head/body pair. Main bird's short dark FLIPPER WINGS lie CLOSE to the sides for warmth, not extended airplane wings; normal dark scaly webbed feet beneath the body grip the ice, modest small tail, no seal flippers or fused legs. White belly only glimpsed on side-facing neighbours, pale yellow upper chest, black back with tight fine feathers. Keep the entire main bird, bill, visible wings, feet and tail within generous eight-percent margins; none cropped. Show a real compact warm huddle with three-dimensional foreshortening and head/neck changes, not identical standing copies merely facing away. Snowy ice, restrained distant blue-white Antarctic horizon, cold subdued daylight, no chicks, visible eggs, feeding, other species, human equipment, text, labels, diagrams or watermark. This is an educational huddling reconstruction supported by Antarctic research, not a precise recorded huddle position, breeding date or individual identity."
        ],
        "generatedAt": "2026-10-10T15:43:06.164Z",
        "checkedAt": "2026-10-11",
        "sha256": "733f3dd4b4d52718bbdd033daa5ec88ea1c3e4b7fe33c670630442e570a84d38",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Australian Antarctic Program이 설명하는 가까이 모여 체온을 지키는 생활에 맞춘 교육 재구성. 특정 번식 시점·개체·알의 유무를 관측했다고 주장하지 않고 보이지 않는 부위를 추정하지 않음.",
        "behaviorSources": [
          {
            "title": "Australian Antarctic Program — Emperor penguin: huddling",
            "url": "https://www.antarctica.gov.au/about-antarctica/animals/penguins/emperor-penguin/"
          }
        ],
        "viewpoint": "가까운 펭귄의 검은 등을 내려다보는 뒤위 사선",
        "pose": "주요 펭귄이 목을 낮추고 무리 안쪽으로 조금 기울며 날개는 몸 옆에 붙인 모습",
        "poseVariationCheck": "기존 주개체 흰 배 정면·높게 든 목에서 등/꼬리를 보이는 뒤위 사선과 낮춘 머리로 바뀜. 무리 안을 바라보는 방향과 주개체 목 상태도 달라짐.",
        "visualLimitations": "앞 개체의 발 일부와 먼 개체 하체는 자연 가림. 꼬리 아래 여백 좁지만 원본 안쪽 무리 내측 원측 날개/발은 자연 겹침으로 전수 확인 못 함. 실제 중간 높이 뒤위 사선이며 꼬리 아래 여백 약4%로 요청보다 좁지만 잘리지는 않음."
      }
    ]
  },
  {
    "id": "giant-oarfish",
    "name": "큰산갈치",
    "scientificName": "Regalecus glesne",
    "group": "어류",
    "habitatIds": [
      "pelagic",
      "deep"
    ],
    "summary": "아주 긴 은빛 리본 몸과 붉은 지느러미를 가진 물고기예요. 큰산갈치는 이 도감의 설명용 이름이에요.",
    "identity": [
      "몸이 옆으로 납작하고 아주 길어요.",
      "머리 위의 붉은 지느러미 줄기가 길게 솟아요.",
      "붉은 등지느러미가 몸을 따라 길게 이어져요.",
      "긴 배지느러미가 한 쌍 있고 뒷지느러미는 없어요."
    ],
    "ecology": "넓은 바다의 물속에서 지내요. 긴 등지느러미를 움직여 헤엄쳐요. 국내 목록의 산갈치와는 학명이 다른 종이에요.",
    "diet": "크릴 같은 작은 갑각류. 기관마다 소개하는 먹이의 범위가 달라요.",
    "range": "세계 온대·아열대의 넓은 바다. 비슷한 산갈치 종류와 기록을 구분해야 해요.",
    "size": "호주박물관에서 전체 길이 8m의 확인 기록을 소개해요. 17m 보고도 있지만 확인된 값과 구분해야 해요.",
    "depth": "호주 어류 자료는 주로 200–1000m를 소개해요. 2013년 연구의 463–492m 관측은 그 연구의 확인 기록이에요.",
    "depthZoneIds": [
      "twilight"
    ],
    "aliases": [
      "Giant oarfish",
      "Oarfish",
      "큰산갈치(설명용 이름)",
      "대왕산갈치"
    ],
    "sources": [
      {
        "title": "Museums Victoria / Fishes of Australia — Regalecus glesne",
        "url": "https://fishesofaustralia.net.au/home/species/1506"
      },
      {
        "title": "Australian Museum — Oarfish",
        "url": "https://australian.museum/learn/animals/fishes/oarfish-regalecus-glesne/"
      },
      {
        "title": "Benfield et al. 2013 — ROV observations of Regalecus glesne (abstract)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23808690/"
      },
      {
        "title": "국립생물자원관 — 국가생물종목록 척추동물, p107 산갈치 Regalecus russelii",
        "url": "https://www.nibr.go.kr/aiibook/catImage/21/National%20Species%202.pdf"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "giant-oarfish",
        "src": "assets/images/giant-oarfish-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰산갈치 · 긴 리본 몸과 붉은 볏",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 은빛 납작한 리본 몸, 푸른 검정 파상 무늬, 머리 위 긴 붉은 볏과 머리부터 꼬리까지 이어지는 붉은 등핀, 배 아래 긴 두 줄과 가늘어지는 몸끝을 확인했다. 측면과 비스듬한 생태 구도 모두 전체 외곽이 화면 안이다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species is ONLY Regalecus glesne, not Regalecus russelii. Entire extremely long laterally compressed thin silver ribbon-shaped body with subtle blue-black irregular streaks and wavy markings. Concave head profile and small protrusible fish mouth. A crimson continuous long-based dorsal fin extends from the head to the tapered tail end; elongated crimson cranial crest rays in two connected crest groups, not horns. Two fine very long crimson pelvic-fin rays arise beneath the anterior body; tiny paired pectorals near gill cover. No anal fin, no repeated ventral fin fringe, no eel cylinder, dragon, whiskers, ordinary broad forked tail or extra dorsal fins. The body narrows gradually to a slender tapered tail ending; every body and fin ray end must remain visible in frame. Show length by a single broad gentle curve, not knots or coils. Broad side view of one whole animal swimming nearly horizontally through dim blue mesopelagic open water, head left, tail right, a shallow sweeping S curve. Sparse marine snow, no food. Keep the complete very long ribbon body and both long pelvic rays readily traceable with ample margins."
        ],
        "generatedAt": "2026-10-03T19:23:55.407Z",
        "checkedAt": "2026-10-04",
        "sha256": "e3f40a30828693606750e91c9a4550bef2b588587c41e0f0df009fd48e50d624",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "giant-oarfish",
        "src": "assets/images/giant-oarfish-chatgpt-feeding-second-pose-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰산갈치 · 위 사선에서 본 작은 먹이 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "v2 목 아래 짧은 잎 모양 추가 가지가 실제로 제거되어 각 뿌리에서 긴 붉은 배실 하나씩 총 두 개만 남는다. 앞/먼 배실은 각각 전신 연결이 이어지고 끝까지 화면 안. 은색 리본 몸·연속 붉은 등핀/앞crest·검은 무늬·연속 가는 꼬리·작은 관 입이 유지됐다. 뒷지느러미 없음.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species is ONLY Regalecus glesne, not Regalecus russelii. Entire extremely long laterally compressed thin silver ribbon-shaped body with subtle blue-black irregular streaks and wavy markings. Concave head profile and small protrusible fish mouth. A crimson continuous long-based dorsal fin extends from the head to the tapered tail end; elongated crimson cranial crest rays in two connected crest groups, not horns. Two fine very long crimson pelvic-fin rays arise beneath the anterior body; tiny paired pectorals near gill cover. No anal fin, no repeated ventral fin fringe, no eel cylinder, dragon, whiskers, ordinary broad forked tail or extra dorsal fins. The body narrows gradually to a slender tapered tail ending; every body and fin ray end must remain visible in frame. Show length by a single broad gentle curve, not knots or coils. One whole animal angled gently head-left and slightly upwards in dim open water approaching a loose sparse group of TINY krill-like crustaceans directly ahead of its slightly protruded small mouth. Prey are tiny specks compared with the animal, no giant foreground shrimp. The ribbon body follows one shallow curve across frame with tail ending clearly visible. Nothing enters the mouth: approaching plausible food, not confirmed successful capture.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE complete Regalecus glesne, very long laterally compressed silver ribbon body, narrow tapering terminal tail, no eel or big forked caudal fin. NEW CAMERA ABOVE FRONT three-quarter: small narrow head nearest lower LEFT, body recedes in depth toward upper RIGHT, long gentle shallow C/S curve with no tight loop. NOT vertical upright U pose. Continuous narrow RED dorsal fin along dorsal edge from head crest to taper, taller red anterior crest rays connected to head. Exactly TWO long slender RED pelvic rays, connected under front body, one toward near lower-right and one angled away, tiny terminal expansions not legs. Short narrow paired pectorals, no anal fin. Entire long tail and all crest/pelvic tips inside margins. Natural small eyes and small mouth with no fangs. A few small intact krill ahead of mouth, outside and separated, no capture. Blue dim open water. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo.",
          "Regalecus glesne giant oarfish scientific educational illustration. Use reference ONLY for correct identity, silver ribbon body with dark spots and red fins. REBUILD the camera and 3D body projection, no mere rotation or mirror. Camera is very CLOSE TO THE FACE looking obliquely ALONG its narrow ribbon body. A LARGE foreground head at LOWER LEFT occupies 25 percent image width, nose turns toward viewer in strong FRONT THREE-QUARTER projection with front of protrusible mouth, curve of forehead and both sides of face apparent (far eye naturally partly occluded). Head is not a flat left-profile disk. Entire long body extends AWAY INTO DEPTH toward UPPER RIGHT, becoming rapidly smaller; rear half overlaps and visibly shortens behind the broad near shoulder. Show a shallow sinuous S swimming sweep in depth, NOT a full side-on long diagonal ruler. Narrow continuous red dorsal fin all along the back, red head crest with long graceful rays swept BACK. Exactly TWO slender long red pelvic rays at throat, one arcs toward foreground below head and the far one streams backward away in a distinct foreshortened projection. No anal fin, forked fish tail, extra arms or tentacles. Small intact krill near mouth with gap, pre-capture educational reconstruction only. Keep WHOLE fish and every red filament tip inside 3:2 frame with 12 percent safe margin. Dark blue ocean, soft natural light. Need actual foreshortening at FACE and shoulder, plus different body sweep/paired pelvic ray projection from old side profile and new deep U ecology. No labels or text.",
          "Use case: precise minimal scientific anatomy correction. Keep this EXACT Regalecus glesne illustration's 3D camera, large near head, two visible eye projections, connected sinuous silver body, all dark markings, continuous red dorsal crest/fins, whole-frame margins, mouth, prey and background UNCHANGED. Only remove ONE erroneous short extra branch: at the near pelvic-fin root BELOW THE GILL, there is a thin short reddish leaf-shaped filament jutting RIGHTWARD just above the long downward-sweeping pelvic ray (approximately original 1536x1024 image x480,y718 to x630,y747). ERASE that entire short side branch cleanly, repaint its pixels as surrounding blue water where outside fish. Near pelvic fin must have exactly ONE long uninterrupted downward/rightward-sweeping ribbon ray with its broad terminal tip. Far pelvic fin must retain exactly ONE long thin ray streaming backward toward right with its tip. Exactly TWO pelvic rays total, one per side, NO branching or third pelvic filament, no tiny extra ray at throat. Preserve the normal near pectoral fan on the SIDE of gill, all long red HEAD CREST rays and continuous red DORSAL fin; those are different structures and must remain. Do not change body/pose, add elements, crop, mirror or recolor. No text. Same 3:2 frame."
        ],
        "generatedAt": "2026-10-10T16:11:17.014Z",
        "checkedAt": "2026-10-11",
        "sha256": "fd6d69ac0f3fe91c5678e40683c04a1fa1ee61d13dd6fc75c206c8ceba24daa0",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "Australian Museum/Florida Museum의 작은 갑각류·크릴 먹이와 등지느러미를 이용한 유영을 바탕으로 접근 상황만 재구성.",
        "behaviorSources": [
          {
            "title": "Museums Victoria / Fishes of Australia — Regalecus glesne",
            "url": "https://fishesofaustralia.net.au/home/species/1506"
          },
          {
            "title": "Australian Museum — Oarfish",
            "url": "https://australian.museum/learn/animals/fishes/oarfish-regalecus-glesne/"
          },
          {
            "title": "Benfield et al. 2013 — ROV observations of Regalecus glesne (abstract)",
            "url": "https://pubmed.ncbi.nlm.nih.gov/23808690/"
          }
        ],
        "viewpoint": "큰 머리가 왼쪽 아래 가까운 앞 사선, 리본형 몸이 오른쪽 위로 깊게 멀어짐",
        "pose": "깊이 방향의 완만한 S 굽힘과 서로 다르게 흐르는 두 긴 배지느러미",
        "poseVariationCheck": "큰 가까운 앞얼굴에서 부분 먼 눈과 입 앞면·머리 깊이가 보이며 몸은 오른쪽 위로 급히 작아져 겹치는 깊이 S굽힘이다. 두 배실은 전경 아래와 뒤 방향으로 서로 다른 투영을 보인다. 기존 긴 옆컷 및 first U굽힘 컷과 실제 시점·몸/부속지 두 축이 구별되고 v2의 교정은 이 새 pose를 유지했다.",
        "visualLimitations": "머리 및 뒤 끝의 일부 여백은 좁지만 잘리지 않음. 등핀 세부 ray 계수와 미세 조직은 전문검증 미실시 crest/꼬리 끝 여백은 넉넉한 요청보다 좁지만 잘리지는 않았다. 미세 등핀 ray·꼬리 구조 계수는 인증하지 않으며 작은 크릴은 입 밖에 온전하게 있어 접근 재구성으로만 설명한다. 배실을 노젓는 추진기관으로 설명하지 않는다."
      },
      {
        "id": "giant-oarfish",
        "src": "assets/images/giant-oarfish-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰산갈치 · 머리를 위로 세운 물속 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "은색 납작한 긴 리본 몸·불규칙 검은 무늬·앞 긴 붉은 crest와 몸을 따라 이어진 등핀·두 긴 붉은 배지느러미 실·연속 가느다란 꼬리끝을 확인했다. 별도 뒷지느러미 없음.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species is ONLY Regalecus glesne, not Regalecus russelii. Entire extremely long laterally compressed thin silver ribbon-shaped body with subtle blue-black irregular streaks and wavy markings. Concave head profile and small protrusible fish mouth. A crimson continuous long-based dorsal fin extends from the head to the tapered tail end; elongated crimson cranial crest rays in two connected crest groups, not horns. Two fine very long crimson pelvic-fin rays arise beneath the anterior body; tiny paired pectorals near gill cover. No anal fin, no repeated ventral fin fringe, no eel cylinder, dragon, whiskers, ordinary broad forked tail or extra dorsal fins. The body narrows gradually to a slender tapered tail ending; every body and fin ray end must remain visible in frame. Show length by a single broad gentle curve, not knots or coils. A different elevated three-quarter view of one entire fish suspended obliquely in spacious dark blue open water, head upper-right and tail lower-left in a relaxed broad arc. Make the long dorsal membrane and body tail fully visible, with clear water around every tip. No food, no bottom, no coral. Calm water-column life reconstruction; do not imply a measured observation, fixed vertical hunting or sensory function of pelvic rays.",
          "Use case: scientific-educational. Make ONE NEW 3:2 landscape natural-history illustration for Sea Atlas, ages5–12. Input image is REFERENCE ONLY for Regalecus glesne identity, silver-black markings, crimson fins and refined painterly style. Entirely redraw the fish in a new three-dimensional view and body gesture; do not retain, mirror, simply rotate or trace the old almost straight broadside silhouette. One COMPLETE giant oarfish hovering HEAD UP in dim mesopelagic open water, no prey, seabed, surface or sun rays. NEW CAMERA: three-quarter FRONT-oblique looking slightly upward toward the small head; a narrow strip of the belly/front edge and a foreshortened silver flank are simultaneously visible. Head sits at upper CENTER-RIGHT. NEW BODY: its extraordinarily long, laterally compressed ribbon descends in a broad gentle continuous S, from the upright shoulder down toward lower LEFT and then back to a tapering tail tip at lower CENTER-RIGHT. The head-up posture and clearly visible S-bend must be physically drawn, not a horizontal fish rotated 90 degrees; no tight coil, ring, knot, crossing or duplicate body. The body is slender throughout, not a thick eel, with a single continuous crimson dorsal membrane running along its entire dorsal edge, subtly waved as in dorsal-fin swimming. Concave head profile, small protrusible mouth CLOSED or barely parted, normal fish eyes. At the head, elongated crimson dorsal rays form the normal two connected crest groups and stream gently backwards; these are fin rays rooted on the head, not horns, feelers or detached ribbons. Exactly TWO long fine pelvic-fin rays originate together as a PAIR below the anterior body and spread gently apart into the open water; small paired pectorals attach behind the gill cover. There is NO anal fin, no repeated ventral fin fringe, no ordinary broad forked tail and no second dorsal fin. Continuous metallic-silver ribbon with irregular blue-black streaks/blotches, narrowing naturally to a very slender connected terminal tail. ALL body, crest and pelvic-ray tips traceable fully within generous 15 percent margins; scale the whole animal down enough to fit upright without cropping. Restrained scientific painterly realism, soft illustrative fill light, sparse marine snow. No prey or claimed hunting, other animals, text, labels, arrows, split panels, border, watermark, gore, damaged tail, dragon or anthropomorphism."
        ],
        "generatedAt": "2026-10-08T16:29:16.981Z",
        "checkedAt": "2026-10-11",
        "sha256": "e8d7f4bf962e27096f700ee9ea9efb2bacdecf466cd7a0693eaed4045cca3afc",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Florida Museum의 머리를 세운 수직 자세와 긴 등지느러미 유영 관측 설명에 근거한 교육 재구성. 몸 굽힘은 자세를 읽기 위한 삽화 재구성이며 특정 운동학·사냥/위장 목적을 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "Florida Museum — Oarfish",
            "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/oarfish/"
          },
          {
            "title": "Museums Victoria — Regalecus glesne",
            "url": "https://fishesofaustralia.net.au/home/species/1506"
          },
          {
            "title": "Australian Museum — Oarfish",
            "url": "https://australian.museum/learn/animals/fishes/oarfish-regalecus-glesne/"
          }
        ],
        "viewpoint": "위로 향한 머리의 약한 앞 사선",
        "pose": "앞몸은 위를 향하고 뒤의 긴 리본 몸은 넓게 U/S로 휘어 아래 오른쪽 꼬리로 이어짐. 두 배핀은 옆으로 벌어짐.",
        "poseVariationCheck": "기존 거의 곧은 옆면 몸과 달리 아래에서 되돌아오는 큰 연속 U굽힘이며 두 배지느러미 실이 서로 다른 곡선과 간격으로 갈라져 있다. 주로 몸곡선과 부속지 상태 두 축이 바뀌었다. second v1의 긴 기울어진 옆모습과도 구별된다.",
        "visualLimitations": "앞 시점 원근은 약함. 길이 축척과 실제 굽힘 운동학은 확인하지 않음. 카메라 자체는 강한 새 원근보다 여전히 옆 시점에 가깝다. 근거가 되는 변화는 몸굽힘과 실지느러미 상태이며, crest끝 위 여백은 좁지만 잘리지 않았다. 종별 미세 ray 계수는 인증하지 않는다."
      }
    ]
  },
  {
    "id": "west-indian-ocean-coelacanth",
    "name": "서인도양실러캔스",
    "scientificName": "Latimeria chalumnae",
    "group": "어류",
    "habitatIds": [
      "deep"
    ],
    "summary": "두툼한 지느러미 밑부분과 세 갈래 모양 꼬리를 가진 푸른 물고기예요. 이름은 사는 곳을 담은 설명용 이름이에요.",
    "identity": [
      "푸른 회색 몸에 밝은 얼룩이 있어요.",
      "가슴지느러미와 배지느러미 밑부분이 살처럼 두툼해요.",
      "꼬리는 위아래 큰 부분과 가운데 작은 부분이 이어진 세 갈래 모양이에요.",
      "몸의 등에는 서로 다른 두 등지느러미가 있어요."
    ],
    "ecology": "코모로에서는 낮에 바위 동굴에 머물고 밤에 먹이를 찾아요. 물고기와 두족류를 먹어요. 인도네시아 실러캔스의 기록은 섞지 않았어요.",
    "diet": "물고기와 오징어 같은 두족류",
    "range": "서부 인도양의 코모로와 아프리카 해역",
    "size": "호주박물관은 전체 길이 약 2m, 몸무게 약 100kg에 가까워질 수 있다고 소개해요. 모든 개체가 이 크기는 아니에요.",
    "depth": "코모로 관측 자료는 약 152–243m, 남아프리카 관측은 91–106m를 소개해요. 지역별 관측이며 종 전체의 최저·최고 수심은 아니에요.",
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "aliases": [
      "West Indian Ocean coelacanth",
      "African coelacanth",
      "서인도양실러캔스(설명용 이름)",
      "실러캔스(서인도양 대표종)"
    ],
    "sources": [
      {
        "title": "Smithsonian Ocean — Coelacanth; African/Comoros observations",
        "url": "https://ocean.si.edu/ocean-life/fish/coelacanth"
      },
      {
        "title": "Muséum national d’Histoire naturelle — Cœlacanthe, Latimeria chalumnae",
        "url": "https://www.mnhn.fr/fr/coelacanthe"
      },
      {
        "title": "Australian Museum — Coelacanth, Latimeria chalumnae",
        "url": "https://australian.museum/learn/animals/fishes/coelacanth-latimeria-chalumnae-smith-1939/"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "west-indian-ocean-coelacanth",
        "src": "assets/images/west-indian-ocean-coelacanth-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "서인도양실러캔스 · 두툼한 지느러미와 세 부분 꼬리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 청회색 비늘과 흰 얼룩, 등핀 두 개, 근측 가슴핀과 배핀의 두툼한 기부, 하나의 몸끝에서 이어지는 위·아래·중앙 꼬리엽을 확인했다. 근측 뒷핀과 전체 꼬리끝도 읽힌다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY Latimeria chalumnae of Comoros, not brown Indonesian Latimeria menadoensis. Thick blue-grey scaled fish with pale irregular white spots, broad stout head and natural fish eyes, fleshy lobe-fin bases on paired pectorals and pelvics, second dorsal and anal. TWO dorsal fins: anterior ray/spiny fan and posterior fleshy-lobed fan. Caudal fin is ONE connected three-lobed structure: broad upper and lower ray fans and a small narrow central epicaudal lobe projecting posteriorly between them, not three separate tails. Paired pectorals two, paired pelvics two; natural far-side occlusion only. No terrestrial legs/toes, no giant visible teeth, no luminous eye effect. One whole fish broad side view facing left above a dark rocky Comoros volcanic slope around twilight depths. All of its connected three-lobed caudal tail clearly separated from dark background and fully in frame. Calm posture, no food, no reef. Near pectoral and pelvic lobes clearly shown with correct bases; far-side fins can partly overlap naturally."
        ],
        "generatedAt": "2026-10-03T19:28:38.937Z",
        "checkedAt": "2026-10-04",
        "sha256": "aaf369d33cd55ca5846afce3ff700780174bf8d72f8ec82c4cb8da965eb6497f",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "west-indian-ocean-coelacanth",
        "src": "assets/images/west-indian-ocean-coelacanth-chatgpt-feeding-second-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "서인도양실러캔스 · 앞 사선에서 본 먹이 탐색",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "청색 흰 반점·큰 비늘·육질 가슴핀 연결, 두 등지느러미·몸과 연결된 세 부분 꼬리 및 가운데 보조엽을 확인했다. 작은 온전한 어류는 입 밖에 있다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY Latimeria chalumnae of Comoros, not brown Indonesian Latimeria menadoensis. Thick blue-grey scaled fish with pale irregular white spots, broad stout head and natural fish eyes, fleshy lobe-fin bases on paired pectorals and pelvics, second dorsal and anal. TWO dorsal fins: anterior ray/spiny fan and posterior fleshy-lobed fan. Caudal fin is ONE connected three-lobed structure: broad upper and lower ray fans and a small narrow central epicaudal lobe projecting posteriorly between them, not three separate tails. Paired pectorals two, paired pelvics two; natural far-side occlusion only. No terrestrial legs/toes, no giant visible teeth, no luminous eye effect. One whole fish facing right, drifting low over a dim rocky volcanic slope at night in Comoros waters. One much smaller plain fish swims well ahead of its barely open mouth; no contact, capture, suction jet or bite. Keep full coelacanth tail visible and its lobe fins anatomically attached. An educational prey-approach reconstruction.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE Latimeria chalumnae with cobalt/slate blue body and irregular white flecks, heavy large scales. NEW CAMERA LOW FRONT three-quarter: broad head closest lower LEFT, connected tail recedes upper RIGHT, see a little belly and differently foreshortened paired fins. Gentle C curve rather than rigid side profile. Near fleshy lobed pectoral extended down/out, far lobed pectoral turned upward; natural alternating lobe positions, not hands or feet. TWO separate dorsal fins, paired lobed pelvic fins and one anal; continuous three-part/trilobed caudal tail with a SMALL central supplementary lobe, do not detach it. Natural small lateral eyes and modest mouth. One tiny intact fish well ahead outside closed/slightly parted mouth. Dark rocky slope near a cave at night, no surface light. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo."
        ],
        "generatedAt": "2026-10-10T15:44:09.246Z",
        "checkedAt": "2026-10-11",
        "sha256": "c825190b06457bd0cb2b8beb671785634bc5b2fa678708e666e60cff4f99c40d",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "Smithsonian/MNHN의 동굴 휴식·밤 먹이 탐색과 어류 식성을 바탕으로 먹이 앞 접근을 재구성. 실제 포획·정확한 운동 주기를 단정하지 않음.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean — Coelacanth; African/Comoros observations",
            "url": "https://ocean.si.edu/ocean-life/fish/coelacanth"
          },
          {
            "title": "Muséum national d’Histoire naturelle — Cœlacanthe, Latimeria chalumnae",
            "url": "https://www.mnhn.fr/fr/coelacanthe"
          }
        ],
        "viewpoint": "머리가 가깝고 꼬리가 뒤로 멀어지는 앞 사선",
        "pose": "몸의 완만한 굽힘과 아래밖으로 펼친 근측·위로 올라간 원측 가슴지느러미",
        "poseVariationCheck": "머리가 가까워 커지고 꼬리가 뒤로 멀어진 낮은 앞 사선이며, 가까운 가슴핀이 아래밖으로 크게 펼쳐지고 반대 가슴핀은 위쪽으로 올라간다. 대표 옆면과 새 rear ecology 모두와 다른 시점+핀 상태다.",
        "visualLimitations": "몸의 C 굽힘은 약함. 핵심 차이는 원근과 가슴지느러미 상태. 꼬리 중앙엽과 핀의 정확한 비율은 전문가 동정으로 확정하지 않음. 가려진 배핀 일부와 실제 포획 동작은 확인하지 않는다. 몸 곡선은 요청한 큰 C자보다 완만하지만 시점과 가슴핀 변화는 보인다."
      },
      {
        "id": "west-indian-ocean-coelacanth",
        "src": "assets/images/west-indian-ocean-coelacanth-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "서인도양실러캔스 · 뒤쪽 위에서 본 동굴 속 유영",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "청회색 몸의 불규칙 흰 반점과 큰 비늘, 두 개 별도 등지느러미, 육질 기부의 paired fins, 하나로 이어진 3부분 꼬리와 작은 가운데 보조엽이 보인다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY Latimeria chalumnae of Comoros, not brown Indonesian Latimeria menadoensis. Thick blue-grey scaled fish with pale irregular white spots, broad stout head and natural fish eyes, fleshy lobe-fin bases on paired pectorals and pelvics, second dorsal and anal. TWO dorsal fins: anterior ray/spiny fan and posterior fleshy-lobed fan. Caudal fin is ONE connected three-lobed structure: broad upper and lower ray fans and a small narrow central epicaudal lobe projecting posteriorly between them, not three separate tails. Paired pectorals two, paired pelvics two; natural far-side occlusion only. No terrestrial legs/toes, no giant visible teeth, no luminous eye effect. One complete coelacanth resting calmly just inside a wide volcanic rock cave entrance in Comoros, daytime shelter context at twilight depths. Three-quarter view from slightly above, head left-front and full connected three-lobed tail right-back visibly clear of the rock. Cave opening remains large enough for the entire animal to be seen. No sun shaft, walking pose, food or other species.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape painterly natural-history illustration for Sea Atlas, ages 5–12. The supplied image is only an ANATOMY, COLOR and STYLE reference for Latimeria chalumnae. Redraw the whole fish with genuinely new 3D anatomy and perspective, not a mirror, in-plane rotation or tracing of the old pose. Scene: ONE West Indian Ocean coelacanth slowly swims inside a spacious dim Comoros lava-rock shelter, with deep blue water beyond; no prey, no sunlight, no shallow tropical coral. NEW VIEWPOINT: camera ABOVE AND BEHIND the fish on its left quarter. Its complete connected three-part tail is nearest the viewer at the LOWER LEFT, while the thick body recedes and curves gently toward the much smaller head pointing UPPER RIGHT into the shelter. Clearly show the back in perspective, the far and near flanks foreshortened differently. This is a rear-dorsal three-quarter view, NOT a straight sideways fish laid diagonally. NEW BODY/FIN POSE: a modest continuous S-bend from shoulder to caudal peduncle; one fleshy pectoral fin sweeps outward while the opposite is naturally foreshortened forward, with paired pelvic fins at differing modest angles. Fish swims freely and does not walk, stand or prop itself on fins. Species: blue-grey Latimeria chalumnae with irregular pale cream-white spots and thick overlapping scales, not brown Indonesian Latimeria menadoensis. Broad stout head with normal eyes and closed mouth, fleshy lobe bases to paired pectoral and pelvic fins and posterior dorsal and anal. Exactly TWO separated dorsal fins: anterior ray-supported fan and posterior fleshy-lobed fan. ONE continuous attached three-lobed tail: broad upper and lower fans around a small narrow central epicaudal lobe extending farther backward between them, not three detached tails and no fork-tail substitute. All full-body extremities remain clearly within frame, 15 percent clear margins, including the nearest tail. Natural occlusion is allowed; no extra fins or terrestrial toes. Soft restrained illustrative fill light reveals full fish and tail without glowing eyes or fish-generated light. Realistic scientific painterly texture, uncluttered composition. No other animals, labels, letters, text, frame, panels, watermark, gore, fantasy or anthropomorphism."
        ],
        "generatedAt": "2026-10-08T16:26:14.099Z",
        "checkedAt": "2026-10-11",
        "sha256": "34ec14a19c9a2978231317265829fcfc117217fb917593c1b188349c88c2e413",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Smithsonian의 코모로 용암 동굴 쉼터와 살집 있는 지느러미의 유영에 근거한 교육 재구성. 특정 동굴·정확 수심·지느러미 운동 위상은 실제 관측을 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "Smithsonian Ocean — Coelacanth",
            "url": "https://ocean.si.edu/ocean-life/fish/coelacanth"
          },
          {
            "title": "MNHN — Cœlacanthe",
            "url": "https://www.mnhn.fr/fr/coelacanthe"
          }
        ],
        "viewpoint": "꼬리가 가까운 뒤쪽 등 사선 원근",
        "pose": "꼬리 왼쪽 아래에서 몸이 오른쪽 위 머리로 멀어지고 몸통이 완만하게 휨, 근측 살집 가슴지느러미 바깥으로",
        "poseVariationCheck": "기존 세 옆면과 달리 등과 가까운 큰 꼬리·멀어진 머리가 보이는 뒤 사선이다. 가까운 가슴핀의 바깥 투영과 골반핀/몸곡선이 바뀌었다. 새 앞 사선 먹이 컷과 머리-꼬리 원근 방향/가슴핀 상태가 서로 다르다.",
        "visualLimitations": "원측 핀은 가려짐. 꼬리 미세비율과 핀살 전수계수 미확인. 원측 가슴/배핀 일부는 몸에 가려 전수를 확인하지 못하며 특정 운동 위상을 인증하지 않는다."
      }
    ]
  },
  {
    "id": "bluntnose-sixgill-shark",
    "name": "여섯아가미상어",
    "scientificName": "Hexanchus griseus",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "summary": "양쪽에 아가미틈이 여섯 개씩 있는 큰 상어예요. 국내 표준명은 확인하지 못해 특징을 담은 설명용 이름을 썼어요.",
    "identity": [
      "머리가 넓고 주둥이가 뭉툭해요.",
      "한쪽에 여섯 개씩 긴 아가미틈이 있어요.",
      "작은 등지느러미가 몸 뒤쪽에 한 개 있어요.",
      "회색·갈색 몸과 더 밝은 배를 가졌어요."
    ],
    "ecology": "깊은 바다의 비탈에서 지내요. 낮에 바닥 가까이 쉬고 밤에는 먹이를 찾아 더 얕은 곳으로 움직이기도 해요. 큰눈여섯아가미상어와 구분해야 해요.",
    "diet": "물고기와 오징어, 갑각류 등",
    "range": "세계의 온대·열대 바다 대륙붕 바깥과 바다 비탈",
    "size": "플로리다 박물관은 약 4.8m의 전체 길이 기록을 소개해요. 수컷의 보고값으로, 모든 개체의 길이나 종의 확정 최대값으로 삼지 않았어요.",
    "depth": "플로리다 박물관은 낮에 최대 2000m의 바닥 가까이 머문다고 소개해요. 밤에는 더 얕은 곳으로 오기도 해요.",
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "aliases": [
      "Bluntnose sixgill shark",
      "뭉툭코여섯아가미상어(설명용 이름)",
      "여섯아가미상어(설명용 이름)"
    ],
    "sources": [
      {
        "title": "Florida Museum — Bluntnose Sixgill Shark, Hexanchus griseus",
        "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/bluntnose-sixgill-shark/"
      }
    ],
    "featured": false,
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "bluntnose-sixgill-shark",
        "src": "assets/images/bluntnose-sixgill-shark-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "여섯아가미상어 · 여섯 틈과 하나의 등지느러미",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 근측 아가미틈 여섯 개를 앞부터 따로 세었고, 넓고 뭉툭한 머리, 녹색 눈, 뒤쪽 등핀 하나, 매끈한 위 꼬리자루, 비대칭 수직 꼬리 두 엽의 끝을 확인했다. 근측 가슴핀과 뒤쪽 복측 지느러미가 읽힌다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY adult Hexanchus griseus. Heavy fusiform grey-olive shark with paler underside, broad flattened head, blunt rounded short snout and naturally green eyes without glow. Exactly SIX separately visible long gill slits on the near side behind the head and before the pectoral base. Exactly ONE small low rounded dorsal fin far back, above or just behind the pelvic region; no anterior dorsal fin. Paired pectoral fins two, paired pelvic fins two, small single anal fin below rear body. Short stout caudal peduncle and vertical asymmetrical tail, long upper lobe and moderately small lower lobe, full tail tips within canvas. Wide ventral mouth closed or barely open, no exposed gore or dramatic tooth grin. Do not resemble narrow-pointed bigeye sixgill or frilled shark. Clean broad near-side profile, one whole shark facing left in dim blue water above a remote rocky slope. SIX gill slits separately readable, ONE rear dorsal fin silhouetted, whole vertical tail clearly included. Calm closed mouth. No prey or spectacle.",
          "Edit this self-created Sea Atlas Hexanchus griseus illustration with ONLY two anatomical corrections. The near-side head currently has SEVEN gill slits: replace that gill region with exactly SIX discrete long dark gill slits, evenly spaced, six openings total counted from head to pectoral fin. Not five, not seven, do not add a crease resembling another gill slit. Also remove the tiny extra upward fin-like nub on the TOP of the caudal peduncle immediately before the tall upper caudal lobe; that top peduncle contour must be smooth. Preserve the ONE existing larger rear dorsal fin at mid-rear back, the full broad blunt head, natural green eye, grey-olive body, pale underside, correctly attached paired fins, small anal fin, and ONE connected vertically asymmetric complete tail with long upper lobe. Preserve all tail/fin tips within frame, the body posture and composition, dim rocky slope background, painterly natural-history educational style for ages5–12, landscape3:2. No text, gore, crop, extra fins, glowing eyes or horror."
        ],
        "generatedAt": "2026-10-03T19:36:11.340Z",
        "checkedAt": "2026-10-04",
        "sha256": "554aa3bd8e4ddbe3c7eb9ead12aa2c7b13d3e8d337e05c59ece86622b531ffa0",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "bluntnose-sixgill-shark",
        "src": "assets/images/bluntnose-sixgill-shark-chatgpt-feeding-second-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "여섯아가미상어 · 뒤쪽 위에서 본 작은 물고기 접근",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "교정된 원본에서 근측 여섯 아가미틈을 각각 추적했다. 하나의 뒤 등지느러미·넓고 뭉툭한 머리·녹색 눈·몸에 이어진 큰 상엽 꼬리가 유지됐다. 작은 물고기는 입 밖에 있다.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY adult Hexanchus griseus. Heavy fusiform grey-olive shark with paler underside, broad flattened head, blunt rounded short snout and naturally green eyes without glow. Exactly SIX separately visible long gill slits on the near side behind the head and before the pectoral base. Exactly ONE small low rounded dorsal fin far back, above or just behind the pelvic region; no anterior dorsal fin. Paired pectoral fins two, paired pelvic fins two, small single anal fin below rear body. Short stout caudal peduncle and vertical asymmetrical tail, long upper lobe and moderately small lower lobe, full tail tips within canvas. Wide ventral mouth closed or barely open, no exposed gore or dramatic tooth grin. Do not resemble narrow-pointed bigeye sixgill or frilled shark. Clean broad near-side profile, one whole shark facing left in dim blue water above a remote rocky slope. SIX gill slits separately readable, ONE rear dorsal fin silhouetted, whole vertical tail clearly included. Calm closed mouth. No prey or spectacle.",
          "Edit this self-created Sea Atlas Hexanchus griseus illustration with ONLY two anatomical corrections. The near-side head currently has SEVEN gill slits: replace that gill region with exactly SIX discrete long dark gill slits, evenly spaced, six openings total counted from head to pectoral fin. Not five, not seven, do not add a crease resembling another gill slit. Also remove the tiny extra upward fin-like nub on the TOP of the caudal peduncle immediately before the tall upper caudal lobe; that top peduncle contour must be smooth. Preserve the ONE existing larger rear dorsal fin at mid-rear back, the full broad blunt head, natural green eye, grey-olive body, pale underside, correctly attached paired fins, small anal fin, and ONE connected vertically asymmetric complete tail with long upper lobe. Preserve all tail/fin tips within frame, the body posture and composition, dim rocky slope background, painterly natural-history educational style for ages5–12, landscape3:2. No text, gore, crop, extra fins, glowing eyes or horror.",
          "Using this self-created anatomically corrected Hexanchus griseus portrait as the sole identity reference, create ONE feeding-approach variant in landscape3:2 painterly natural-history style for ages5–12. Preserve exactly SIX near-side gill openings, the ONE small rear dorsal fin, smooth top caudal peduncle with no extra fin nub, the broad blunt head, natural non-glowing green eye, heavy grey-olive body, attached paired fins and small anal fin, complete vertical asymmetrical tail. Keep the shark facing LEFT in broad side view, but place the entire shark slightly smaller, about75% canvas width, center-right with generous tail/fin margins. Add one much smaller plain fish in the clear water ahead of the shark at left, separated well from its barely open mouth. Dim nocturnal blue water near a distant deep rocky slope. The prey is merely approached, never bitten, contacting or swallowed. No blood, damage, text, reef, surface sun shafts or frightening grin. Reference anatomy is the priority: SIX dark gill slits TOTAL, not seven, and ONE dorsal fin only.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE adult Hexanchus griseus. NEW CAMERA clearly HIGH REAR three-quarter: complete tail closest at lower LEFT, head far upper RIGHT, back visible, not a side profile. The thick fusiform body makes a gentle continuous C bend; near pectoral lifted outward/up, far pectoral held lower, tail bends obliquely into camera. Broad short blunt head, small natural greenish lateral eyes, SIX gill slits on the visible side, ONE and ONLY ONE dorsal fin placed far back above/behind pelvic fins, no extra anterior dorsal. Natural paired pectoral and pelvic fins, one small anal, complete heterocercal tail with longer upper lobe and modest lower lobe. Gray-brown above paler belly. One small intact bony fish far ahead of the shark, completely outside its mouth, no capture, biting or blood. Deep dark water near a gentle seabed slope, no sunbeams. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo.",
          "Use case: precise-object-edit. Correct ONLY the gill-slit count on the visible side of this Hexanchus griseus illustration. It currently reads as FIVE large dark gill openings; this sixgill shark must show exactly SIX independently recognizable dark gill slits on this exposed side between the head and the pectoral-fin root. Redraw this one gill-row region into SIX narrow separate anatomically natural gill slits, spaced clearly and similar in size, not a crease in the pectoral fin. Count six slit openings total, no seventh. Retain this new high rear-oblique camera, continuous curved thick body, broad blunt head, small green lateral eye, only ONE posterior dorsal fin, connected natural fins, long upper caudal lobe, prey outside mouth and current complete framing, color and painterly scientific style. Do not add any dorsal fin, reposition the shark, enlarge eyes, change pose, detach tail, add animals, text or labels."
        ],
        "generatedAt": "2026-10-10T15:43:23.893Z",
        "checkedAt": "2026-10-11",
        "sha256": "a472d882f4ad5bf5b68318baa31b52c25f66490a07e2d411321c226ecef49d56",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "Florida Museum의 어류 먹이와 느린 유영 설명을 바탕으로 작은 온전한 물고기에 접근하기 전 상황을 재구성. 실제 포획·섭식 성공을 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Florida Museum — Bluntnose Sixgill Shark, Hexanchus griseus",
            "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/bluntnose-sixgill-shark/"
          }
        ],
        "viewpoint": "높은 뒤 사선. 꼬리가 왼쪽 아래 가까움, 머리는 오른쪽 위 멀어짐",
        "pose": "완만한 C 모양 몸굽힘, 근측 가슴핀은 옆 위로 들리고 원측 핀은 낮게 접힘",
        "poseVariationCheck": "기존 평평한 세 옆모습과 달리 뒤쪽 위에서 보는 등면/가까운 꼬리 원근, 연속 몸곡선과 근측 가슴핀의 위옆 확장이 보인다. 첫 새 ecology의 가까운 앞머리와 펼친 낮은 양 가슴핀과도 다른 후방 시점·핀 상태다.",
        "visualLimitations": "먼쪽 작은 지느러미 기부는 자연스럽게 가림. 실제 유영 속도나 먹이 포획 성공은 확정하지 않음. 원측 아가미와 가려진 원측 작은 지느러미는 전수 계수하지 못한다. 먹이 접근 재구성으로 포획 성공을 주장하지 않는다."
      },
      {
        "id": "bluntnose-sixgill-shark",
        "src": "assets/images/bluntnose-sixgill-shark-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "여섯아가미상어 · 앞쪽에서 본 느린 방향 바꾸기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 근측 여섯 긴 아가미틈, 뭉툭하고 넓은 머리, 자연 녹색 눈, 뒤쪽 하나의 등지느러미, 연결된 비대칭 꼬리를 확인. 앞등은 매끈하며 추가등지느러미 없음.",
        "generationPrompts": [
          "Create exactly one original Sea Atlas natural-history educational illustration, landscape 3:2, painterly realism with accurate animal anatomy, for ages 5–12. One complete focal animal with ALL tail and fin tips inside the canvas and generous clear margins; no text, labels, watermark, collage, split panels, gore, wounds, horror, human faces or anthropomorphic smiles. Calm scientifically plausible marine scene. Subtle illustrative fill light to make anatomy legible is an artistic convention, not natural sunlight or bioluminescence. No tropical coral reef, surface waves, bubbles or sun shafts in deep water. Natural occlusion is acceptable but do not invent extra body parts. Species ONLY adult Hexanchus griseus. Heavy fusiform grey-olive shark with paler underside, broad flattened head, blunt rounded short snout and naturally green eyes without glow. Exactly SIX separately visible long gill slits on the near side behind the head and before the pectoral base. Exactly ONE small low rounded dorsal fin far back, above or just behind the pelvic region; no anterior dorsal fin. Paired pectoral fins two, paired pelvic fins two, small single anal fin below rear body. Short stout caudal peduncle and vertical asymmetrical tail, long upper lobe and moderately small lower lobe, full tail tips within canvas. Wide ventral mouth closed or barely open, no exposed gore or dramatic tooth grin. Do not resemble narrow-pointed bigeye sixgill or frilled shark. Clean broad near-side profile, one whole shark facing left in dim blue water above a remote rocky slope. SIX gill slits separately readable, ONE rear dorsal fin silhouetted, whole vertical tail clearly included. Calm closed mouth. No prey or spectacle.",
          "Edit this self-created Sea Atlas Hexanchus griseus illustration with ONLY two anatomical corrections. The near-side head currently has SEVEN gill slits: replace that gill region with exactly SIX discrete long dark gill slits, evenly spaced, six openings total counted from head to pectoral fin. Not five, not seven, do not add a crease resembling another gill slit. Also remove the tiny extra upward fin-like nub on the TOP of the caudal peduncle immediately before the tall upper caudal lobe; that top peduncle contour must be smooth. Preserve the ONE existing larger rear dorsal fin at mid-rear back, the full broad blunt head, natural green eye, grey-olive body, pale underside, correctly attached paired fins, small anal fin, and ONE connected vertically asymmetric complete tail with long upper lobe. Preserve all tail/fin tips within frame, the body posture and composition, dim rocky slope background, painterly natural-history educational style for ages5–12, landscape3:2. No text, gore, crop, extra fins, glowing eyes or horror.",
          "Using this self-created corrected Hexanchus griseus portrait as sole anatomy reference, create ONE different ecology composition, landscape3:2 painterly natural-history educational style for ages5–12. Mirror the entire animal to face RIGHT without changing its anatomical topology: exactly SIX near-side gill openings, ONE small rear dorsal fin, smooth upper caudal peduncle with no extra fin nub, wide blunt flattened head and natural non-glowing green eye, heavy grey-olive body with pale underside, two paired pectorals/pelvics with natural far-side occlusion, one small anal fin, full vertically asymmetric tail with long upper lobe and smaller lower lobe. The entire animal is about75% canvas width with clear generous margins. A slightly elevated mostly side camera, shark drifting just above a quiet dark rocky deep-sea slope in daytime-rest educational context, no food. Keep broad side visibility of all SIX gill slits and the single dorsal, not seven gills or extra dorsal. No contact/land-walking, no bright sun shafts, no tropical reef, no surface waves, no text, gore or horror.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape natural-history illustration for Sea Atlas, ages 5–12. Input image is a REFERENCE for species anatomy, muted colors and painterly style ONLY. Completely redraw the animal in a genuinely different 3D pose; do NOT retain, mirror or rotate the reference silhouette. Species: adult Hexanchus griseus, bluntnose sixgill shark. One complete heavy grey-olive shark calmly turns above a dim rocky continental slope, no prey. NEW CAMERA: low front three-quarter view, broad blunt head closest to camera at lower LEFT, body visibly receding diagonally to upper RIGHT. Show more of the pale underside and broad rounded snout than in a side portrait. NEW POSE: the muscular body makes a gentle continuous C-shaped turn; the caudal peduncle and entire asymmetrical tail bend toward the far RIGHT and slightly away in perspective. Near pectoral fin slopes downward and toward camera; far pectoral is foreshortened and extends laterally, different fin angles from the side portrait. Do not merely place a straight sideways shark diagonally on the page. Keep the full head, connected body, both pectoral fins, pelvic fins, small anal fin and connected entire tail inside generous 15 percent margins. ANATOMY: exactly SIX discrete long gill openings on the visible near side between head and pectoral base, not five or seven; far-side gills may be naturally hidden. Exactly ONE low rounded dorsal fin far back above or just behind pelvic region; smooth front back with NO anterior dorsal and NO extra caudal-peduncle nub. Broad flattened blunt head, natural green eyes, closed wide ventral mouth without tooth grin. Short stout caudal peduncle, vertically asymmetric tail with long upper lobe and modest lower lobe. No extra fins or disconnected tail, no glow eyes, fantasy parts, fish prey, people, corals, bubbles, surface, sun shafts, labels, letters, text, frames, panels, watermark, gore or horror. Calm restrained painterly realism with subtle illustrative fill light; deep blue water and sparse rocky slope low behind, animal silhouette fully readable."
        ],
        "generatedAt": "2026-10-08T16:24:08.536Z",
        "checkedAt": "2026-10-11",
        "sha256": "78899dfa116a27f231a101f99a8958d38c82e2c5f9758321add1eaf156204777",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Florida Museum의 깊은 비탈 서식과 느리지만 강한 유영 설명을 바탕으로 먹이 없는 방향 전환을 교육적으로 재구성. 실제 관측 시점·수심·정확한 지느러미 운동학은 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Florida Museum — Bluntnose Sixgill Shark",
            "url": "https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/bluntnose-sixgill-shark/"
          }
        ],
        "viewpoint": "낮은 앞쪽 사선에서 머리와 배가 가까운 원근",
        "pose": "머리 왼쪽 앞, 꼬리 오른쪽 뒤로 멀어지며 가까운 가슴지느러미는 아래, 먼 지느러미는 옆으로 펼침",
        "poseVariationCheck": "baseline 실제 대표·먹이·생태 원본과 비교. 새 후보는 머리가 가까이 커지고 몸통이 뒤로 멀어지는 강한 단축 원근, 배의 노출과 양 가슴지느러미의 서로 다른 각도가 생겼음. 예전 평평한 옆모습의 회전/미러 이상의 시점+부속지 변화.",
        "visualLimitations": "큰 C자 굽힘은 약함. 원측핀·아가미 일부는 가려진 한계 유지. 프롬프트의 큰 C자 몸굽힘은 충분히 구현되지 않았으나 시점과 가슴지느러미 상태 변화가 뚜렷함. 원측 아가미와 뒤쪽 지느러미 일부는 가려져 전부 계수하지 않음. 꼬리 여백은 좁으나 끝은 화면 안."
      }
    ]
  },
  {
    "id": "chambered-nautilus",
    "name": "황제앵무조개",
    "scientificName": "Nautilus pompilius",
    "aliases": [
      "앵무조개",
      "Chambered nautilus",
      "Emperor nautilus"
    ],
    "group": "연체동물",
    "habitatIds": [
      "reef",
      "deep"
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight"
    ],
    "summary": "소용돌이 모양의 단단한 껍질 안에 사는 두족류예요. 국립수산과학원 자료에는 황제앵무조개로 표기돼요.",
    "identity": [
      "흰 껍질에 갈색 줄무늬가 있고, 입구 위에는 몸을 보호하는 후드가 있어요.",
      "문어의 굵은 팔과 달리 빨판 없는 가는 촉수가 많고, 작은 눈이 머리 양옆에 있어요."
    ],
    "ecology": "깊은 암초와 바위 비탈 가까이에서 생활해요. 빈 껍질방은 부력을 유지하는 데 도움을 주고, 머리 아래 깔때기로 물을 내뿜어 움직여요. 이동 시간과 깊이는 지역과 환경에 따라 달라요.",
    "diet": "작은 갑각류와 물고기, 다른 동물의 남은 먹이를 찾아요. 냄새와 촉수로 먹이를 탐색해요.",
    "range": "서태평양과 인도양의 일부 연안·섬 주변. 서로 떨어진 지역 집단을 한 곳의 행동처럼 설명하지 않아요.",
    "size": "껍질 지름은 몬터레이 수족관에서 약 16–21cm로 소개해요. NOAA의 성숙 개체 자료는 약 13–23cm이며 지역에 따라 달라요.",
    "depth": "일부 지역에서 약 100m부터 700m가 넘는 깊이까지 움직이는 모습이 관측됐어요. 사는 곳과 환경에 따라 달라요.",
    "sources": [
      {
        "title": "NOAA Fisheries — Chambered Nautilus",
        "url": "https://www.fisheries.noaa.gov/species/chambered-nautilus"
      },
      {
        "title": "Monterey Bay Aquarium — Chambered nautilus",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/chambered-nautilus"
      },
      {
        "title": "NOAA 2018 status review — movement and feeding",
        "url": "https://media.fisheries.noaa.gov/dam-migration/final_nautilus_status_review_508_compliant.pdf"
      },
      {
        "title": "국립수산과학원 해외생물 자료 — 황제앵무조개",
        "url": "https://download.nifs.go.kr/ofiris/upload_file/ofiris/FR/osf/oceanic/list_01_33_01.pdf"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "chambered-nautilus",
        "src": "assets/images/chambered-nautilus-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "황제앵무조개 · 껍질과 가는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 저장 원본 크기에서 나선 패각·흰/갈색 무늬·제공의 덮인 중심·반점 후드·작은 근측 눈·다수 가는 무흡반 촉수와 머리 아래 깔때기를 확인. 껍질·촉수 끝이 화면 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Sea Atlas natural-history illustration for children age 5–12. One landscape 3:2 image, painterly realism with careful anatomy, calm natural animal behavior. All shell, hood, eye region and every visible tentacle tip fit inside the frame with generous margins. No text, letters, labels, arrows, collage, human objects, anthropomorphic face, blood, wounds, horror, cutaway or transparent shell. Soft explanatory illumination in deep dark blue water, NOT surface sunbeams.\nSubject: one adult Nautilus pompilius, with a smooth compressed planispiral ivory external shell, irregular narrow russet-brown radial stripes mostly on the older shell and a largely pale newest body-chamber near the opening. The spiral center is covered by a small ivory callus, NOT a deep open black hole. A broad mottled brown-and-cream leathery hood lies above the head at the shell opening. Below the hood and around the mouth region there are MANY slender flexible tapered pale-brown tentacles, without suckers; show natural layered bundles with some bases hidden, NOT eight thick octopus arms, NOT squids with suckers. A small natural pinhole eye on each side of the head; only the near eye need be visible when the other is naturally hidden. The soft body remains inside the final shell chamber; a small natural funnel below the head may be visible, not an extra tentacle. No exposed teeth or cartoon eyeballs.\nScene: a whole animal in true upright side view, shell to the left and head facing right, hovering immediately above a dark rocky deep reef slope. Tentacles gently extend ahead in a relaxed uneven fan; do not pretend every tentacle can be counted. A simple unobtrusive rocky background with no tropical brightly lit coral garden, no other animal and no food. Shell and soft head are unmistakably connected."
        ],
        "generatedAt": "2026-10-03T13:14:34.972Z",
        "checkedAt": "2026-10-04",
        "sha256": "4d50b9b7310aef4ace234b5c8cbfc8e207c49f75d068711e83a18975ee9c4fc9",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "chambered-nautilus",
        "src": "assets/images/chambered-nautilus-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "황제앵무조개 · 바닥의 작은 먹이 탐색",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 저장 원본 크기에서 나선 패각·흰/갈색 무늬·제공의 덮인 중심·반점 후드·작은 근측 눈·다수 가는 무흡반 촉수와 머리 아래 깔때기를 확인. 껍질·촉수 끝이 화면 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Sea Atlas natural-history illustration for children age 5–12. One landscape 3:2 image, painterly realism with careful anatomy, calm natural animal behavior. All shell, hood, eye region and every visible tentacle tip fit inside the frame with generous margins. No text, letters, labels, arrows, collage, human objects, anthropomorphic face, blood, wounds, horror, cutaway or transparent shell. Soft explanatory illumination in deep dark blue water, NOT surface sunbeams.\nSubject: one adult Nautilus pompilius, with a smooth compressed planispiral ivory external shell, irregular narrow russet-brown radial stripes mostly on the older shell and a largely pale newest body-chamber near the opening. The spiral center is covered by a small ivory callus, NOT a deep open black hole. A broad mottled brown-and-cream leathery hood lies above the head at the shell opening. Below the hood and around the mouth region there are MANY slender flexible tapered pale-brown tentacles, without suckers; show natural layered bundles with some bases hidden, NOT eight thick octopus arms, NOT squids with suckers. A small natural pinhole eye on each side of the head; only the near eye need be visible when the other is naturally hidden. The soft body remains inside the final shell chamber; a small natural funnel below the head may be visible, not an extra tentacle. No exposed teeth or cartoon eyeballs.\nScene: a whole animal in low three-quarter side view just above a dim rocky-sandy deep reef slope, approaching one SMALL intact pale shrimp-like scavenging food item resting on the substrate. The food is small compared with the shell, with no wound, blood or torn body. Several slender suckerless tentacles extend toward the sand and the item while remaining visibly separated from the food; other tentacles form natural bundles around the hidden mouth. Do not depict biting, capture success or a violent hunt. Keep the near pinhole eye, upper hood, whole spiral shell, bottom funnel if exposed, and all visible tentacle tips within generous margins. This is a careful educational reconstruction of food exploration, not an observed feeding photograph."
        ],
        "generatedAt": "2026-10-03T13:16:04.372Z",
        "checkedAt": "2026-10-04",
        "sha256": "51de2581b7d00fd52d0250ecffd5f9d790842179905d7414296067dc73974468",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "작은 갑각류형 먹이와 바닥 탐색 재구성. 먹이의 생사·정밀종동정·실제 접촉·포획·섭식 성공은 정지 그림으로 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Chambered Nautilus",
            "url": "https://www.fisheries.noaa.gov/species/chambered-nautilus"
          },
          {
            "title": "Monterey Bay Aquarium — Chambered nautilus",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/chambered-nautilus"
          },
          {
            "title": "NOAA 2018 status review — movement and feeding",
            "url": "https://media.fisheries.noaa.gov/dam-migration/final_nautilus_status_review_508_compliant.pdf"
          }
        ]
      },
      {
        "id": "chambered-nautilus",
        "src": "assets/images/chambered-nautilus-chatgpt-ecology-front-bundle-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "황제앵무조개 · 앞사선에서 본 눈과 모은 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "하나의 연속 나선 껍데기, 두건, 양쪽 작은 눈, 다수 가는 빨판 없는 촉수와 머리 연결 확인. 문어처럼 굵은 빨판팔이나 오징어 곤봉 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Sea Atlas natural-history illustration for children age 5–12. One landscape 3:2 image, painterly realism with careful anatomy, calm natural animal behavior. All shell, hood, eye region and every visible tentacle tip fit inside the frame with generous margins. No text, letters, labels, arrows, collage, human objects, anthropomorphic face, blood, wounds, horror, cutaway or transparent shell. Soft explanatory illumination in deep dark blue water, NOT surface sunbeams.\nSubject: one adult Nautilus pompilius, with a smooth compressed planispiral ivory external shell, irregular narrow russet-brown radial stripes mostly on the older shell and a largely pale newest body-chamber near the opening. The spiral center is covered by a small ivory callus, NOT a deep open black hole. A broad mottled brown-and-cream leathery hood lies above the head at the shell opening. Below the hood and around the mouth region there are MANY slender flexible tapered pale-brown tentacles, without suckers; show natural layered bundles with some bases hidden, NOT eight thick octopus arms, NOT squids with suckers. A small natural pinhole eye on each side of the head; only the near eye need be visible when the other is naturally hidden. The soft body remains inside the final shell chamber; a small natural funnel below the head may be visible, not an extra tentacle. No exposed teeth or cartoon eyeballs.\nScene: a whole upright animal in a wider, different slightly elevated front-three-quarter view, moving alongside a steep deep rocky reef wall in dim blue water. The shell is clearly in lateral three-dimensional profile behind the head rather than a flat disk pasted onto it. Many slender tentacles curl and touch one rock below, with some naturally hidden at their bases. Keep the broad hood, small natural eyes on their actual lateral head positions, and at least the near eye visible. The upper hood partially shelters the tentacle bases but the animal is not completely closed into its shell. Show the rocky slope receding into darkness, no ocean surface, sunshine, shallow colorful coral garden, eggs, fish or second nautilus. Depict local slope movement or temporary contact only, not proven nightly migration or a measured dive depth.",
          "Make ONE NEW original scientific natural-history illustration for Sea Atlas, children ages 5–12, landscape 3:2, realistic refined painterly style and full animal framing with generous margins. Subject: ONE adult Nautilus pompilius, chambered nautilus. Use the attached Sea Atlas image only for species identity, brown-and-cream striped shell, mottled brown protective hood, fine tentacles and painting quality. Create a genuinely new three-dimensional view and tentacle configuration. NEW CAMERA: almost straight in FRONT OF THE SHELL APERTURE, only 15 degrees to the animal's left, at head height. The thick vertically coiled shell is BEHIND the head, so its oval aperture and rounded outer WHORL thickness are prominent; its flat side-on spiral disc is mostly foreshortened and NOT presented as the dominant circular side face. The shell remains anatomically ONE continuous coiled shell, intact, not a clam, conch or cutaway. The mottled brown-and-cream hood covers the dorsal upper head and the upper aperture as a protective continuous flap. Show the two natural small pinhole-type eyes on the left and right sides of the head, not cartoon eyes on the hood. NEW POSE: many slender tapered beige tentacles gather quietly inward into a loose dense forward/downward bundle under the hood, with a few ends gently curled, rather than widely trailing right across the picture. All tentacles emerge connected from around the mouth region, with no octopus suction cups, clubs, fins or extra arms. A small plausible funnel below the head may be partly visible; no dramatic water jet or feeding claim. The animal is hovering just clear of a deep reef slope. Restrained dark-blue deep-water setting, low rock near the bottom corner, no prey, other animals, surface scene, bubbles for anatomy, text, labels or watermark. It must look like a front-aperture view with a rounded narrow shell silhouette behind a collected tentacle bundle, clearly different from the reference's broad lateral spiral shell and trailing spread tentacles. Preserve realistic proportions, shell stripes and species features, not the old pose."
        ],
        "generatedAt": "2026-10-08T16:33:08.715Z",
        "checkedAt": "2026-10-11",
        "sha256": "df005d9e4925e5c6b5f9bf9566ac83a13d2bf1d57d2f51a211d034037f4c1b5b",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "수족관 원문의 빨판 없는 많은 촉수, 눈과 두건, 물을 내보내는 깔때기 구조를 지키면서 촉수를 모은 관찰 자세로 재구성. 특정 자연 관측의 복제나 모든 지역에서 같은 일주 이동을 한다는 주장이 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Chambered nautilus",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/chambered-nautilus"
          },
          {
            "title": "NOAA Fisheries — Chambered nautilus",
            "url": "https://www.fisheries.noaa.gov/species/chambered-nautilus"
          }
        ],
        "viewpoint": "앞에서 왼쪽으로 비껴 본 사선; 껍데기의 일부 나선면이 뒤쪽 왼편에 보임",
        "pose": "머리 아래로 가는 촉수를 한데 모으고 끝을 부드럽게 말아 떠 있는 모습",
        "poseVariationCheck": "기존 한 눈의 옆모습/오른쪽으로 펼친 촉수에서 두 눈을 마주 보는 앞왼 사선과 아래로 모인 촉수로 바뀜. 시점과 촉수 굽힘/모임 두 축 변화 확인.",
        "visualLimitations": "정확한 촉수 전체 개수와 숨은 누두는 가림 때문에 확인하지 않음. 완전 정면은 아니며 정확 촉수 수와 깔때기 일부는 가림으로 확인 불가. 껍데기·두건·촉수 끝 전부 프레임 안."
      }
    ],
    "checkedAt": "2026-10-03",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "lions-mane-jellyfish",
    "name": "사자갈기해파리",
    "scientificName": "Cyanea capillata",
    "aliases": [
      "Lion's mane jellyfish",
      "Lion's mane jelly"
    ],
    "group": "자포동물",
    "habitatIds": [
      "coast",
      "pelagic",
      "polar"
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "summary": "우산 아래에 갈기처럼 보이는 주름진 구강팔과 길고 가는 촉수가 있어요. 한국어 이름은 모습을 풀어 쓴 설명용 표기예요.",
    "identity": [
      "누런 갈색이나 붉은빛 우산의 가장자리는 짝지은 갈래로 나뉘어요.",
      "중앙의 넓고 주름진 구강팔과 가장자리 부근에서 여러 묶음으로 늘어진 가는 촉수를 구분해요."
    ],
    "ecology": "차갑거나 온대인 바다의 수면 가까이에서 떠다니며 우산을 움직여요. 물살을 따라 이동하지만 스스로 위아래로 헤엄치기도 해요.",
    "diet": "작은 갑각류와 동물플랑크톤, 작은 물고기, 다른 해파리를 먹어요.",
    "range": "북대서양·북태평양과 북극 주변의 한랭·온대 해역. 지역에 따라 출현과 크기가 달라요.",
    "size": "우산 지름 기준으로 영국 MarLIN은 보통 30–50 cm, 큰 기록은 약 2 m를 소개해요. Monterey Bay Aquarium은 약 50 cm–1 m를 소개하므로 보통 크기와 큰 기록을 구분해요.",
    "depth": "수면 가까운 연안과 만에서 흔해요. 확인한 기관 자료에는 종 전체의 정확한 최대 수심이 없어서 깊이를 단정하지 않아요.",
    "sources": [
      {
        "title": "MarLIN — Cyanea capillata",
        "url": "https://www.marlin.ac.uk/species/detail/2090"
      },
      {
        "title": "Oregon Coast Aquarium — Lion's Mane Jellyfish",
        "url": "https://aquarium.org/animals/lions-mane-jellyfish/"
      },
      {
        "title": "Monterey Bay Aquarium — Lion's mane jelly",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/lions-mane-jelly"
      },
      {
        "title": "Naturalis — Cyanea capillata, morphology",
        "url": "https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&id=131585"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "lions-mane-jellyfish",
        "src": "assets/images/lions-mane-jellyfish-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "사자갈기해파리 · 구강팔과 가는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 붉은 갈색 우산·갈래진 엽상 가장자리·주변의 길고 가는 촉수 다발·중앙의 넓고 주름진 구강팔을 구분. 주된 끝은 프레임 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Exactly ONE landscape 3:2 natural-history painterly-realism illustration for Sea Atlas, friendly and accurate for children aged 5–12, not a photograph. Show one whole Cyanea capillata lion's mane jellyfish in calm cool coastal open water. A tawny amber-red shallow saucer-shaped translucent bell with a thicker center and much thinner scalloped rim, arranged as eight PAIRS of marginal lobes, 16 lobes in total. Many VERY FINE long hair-like pale amber tentacles originate in EIGHT clustered bands near the underside of the rim, not one uniform ring or eight thick octopus arms. FOUR broad heavily folded reddish-brown frilly oral arms form a central curtain beneath the bell, much broader and shorter than the thin marginal tentacles. Keep these two types of appendage visibly different; oral-arm bases and far-side tentacle clusters may be naturally hidden. Bell is not a smooth tall mushroom, no eyes, face, fins, teeth, moon-jelly four circles or neon glow. This is a moderate-size individual with naturally curved trailing tentacles, not a record-size specimen. Every visible tentacle tip and entire bell/central oral-arm curtain must remain inside the canvas, with generous empty margins. No cropping, text, arrows, labels, collage, cutaway, person, blood, injury, horror, tropical coral, ice, seafloor, aquarium or human props. Soft underwater daylight and subtle explanatory fill, amber against blue-green water.\nComposition: unobstructed whole-animal side-three-quarter portrait, bell upper left-of-center, frilly central oral arms immediately below. Long fine tentacles stream diagonally to the right and curve gently back beneath the bell, all ends visible in the frame. Several near-side paired lobes and distinct clustered fine tentacle roots are readable; do not falsely make every hidden root visible. No other animal or food."
        ],
        "generatedAt": "2026-10-03T19:26:03.193Z",
        "checkedAt": "2026-10-04",
        "sha256": "a14a9615b81c67965b40bf45efad0cbdfc621dfcb5ecfffdb13d99469560205d",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "lions-mane-jellyfish",
        "src": "assets/images/lions-mane-jellyfish-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "사자갈기해파리 · 작은 플랑크톤과의 만남",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 붉은 갈색 우산·갈래진 엽상 가장자리·주변의 길고 가는 촉수 다발·중앙의 넓고 주름진 구강팔을 구분. 주된 끝은 프레임 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Exactly ONE landscape 3:2 natural-history painterly-realism illustration for Sea Atlas, friendly and accurate for children aged 5–12, not a photograph. Show one whole Cyanea capillata lion's mane jellyfish in calm cool coastal open water. A tawny amber-red shallow saucer-shaped translucent bell with a thicker center and much thinner scalloped rim, arranged as eight PAIRS of marginal lobes, 16 lobes in total. Many VERY FINE long hair-like pale amber tentacles originate in EIGHT clustered bands near the underside of the rim, not one uniform ring or eight thick octopus arms. FOUR broad heavily folded reddish-brown frilly oral arms form a central curtain beneath the bell, much broader and shorter than the thin marginal tentacles. Keep these two types of appendage visibly different; oral-arm bases and far-side tentacle clusters may be naturally hidden. Bell is not a smooth tall mushroom, no eyes, face, fins, teeth, moon-jelly four circles or neon glow. This is a moderate-size individual with naturally curved trailing tentacles, not a record-size specimen. Every visible tentacle tip and entire bell/central oral-arm curtain must remain inside the canvas, with generous empty margins. No cropping, text, arrows, labels, collage, cutaway, person, blood, injury, horror, tropical coral, ice, seafloor, aquarium or human props. Soft underwater daylight and subtle explanatory fill, amber against blue-green water.\nComposition: whole-animal side view in blue-green near-surface water. The central folded oral arms are readable while long very fine clustered tentacles curve gently through the surrounding water, their complete tips inside the image. Place THREE tiny translucent copepod/amphipod-like planktonic crustaceans near but visibly separated from the fine tentacles, extremely small relative to the bell, with no magnified foreground shrimp. Show calm encounter/exploration only: no prey pierced, trapped, paralyzed, swallowed, bleeding or captured. Keep all fine tips and small prey bodies within generous margins. This is feeding-context reconstruction, not proof of a successful sting."
        ],
        "generatedAt": "2026-10-03T19:27:17.679Z",
        "checkedAt": "2026-10-04",
        "sha256": "c93ae53f8030cfb84599a623d9727695b7caaeae7eb3dcf54245638982fa0930",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "작은 동물플랑크톤을 만나는 먹이 맥락 재구성. 자포 발사·마비·촉수 접촉·먹이의 종·포획이나 삼킴 성공은 확인 불가.",
        "behaviorSources": [
          {
            "title": "MarLIN — Cyanea capillata",
            "url": "https://www.marlin.ac.uk/species/detail/2090"
          },
          {
            "title": "Oregon Coast Aquarium — Lion's Mane Jellyfish",
            "url": "https://aquarium.org/animals/lions-mane-jellyfish/"
          },
          {
            "title": "Monterey Bay Aquarium — Lion's mane jelly",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/lions-mane-jelly"
          },
          {
            "title": "Naturalis — Cyanea capillata, morphology",
            "url": "https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?cat=TAB_DESCRIPTION&id=131585"
          }
        ]
      },
      {
        "id": "lions-mane-jellyfish",
        "src": "assets/images/lions-mane-jellyfish-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "사자갈기해파리 · 옆에서 본 오므라드는 우산과 흐르는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "황갈색~붉은 단일 우산의 굴곡 가장자리, 기부가 이어진 두꺼운 주름 입팔과 매우 많은 가늘고 긴 촉수의 차이를 확인. 촉수 끝과 우산 전신은 모두 화면 안에 있음.",
        "generationPrompts": [
          "Use case: scientific-educational. Exactly ONE landscape 3:2 natural-history painterly-realism illustration for Sea Atlas, friendly and accurate for children aged 5–12, not a photograph. Show one whole Cyanea capillata lion's mane jellyfish in calm cool coastal open water. A tawny amber-red shallow saucer-shaped translucent bell with a thicker center and much thinner scalloped rim, arranged as eight PAIRS of marginal lobes, 16 lobes in total. Many VERY FINE long hair-like pale amber tentacles originate in EIGHT clustered bands near the underside of the rim, not one uniform ring or eight thick octopus arms. FOUR broad heavily folded reddish-brown frilly oral arms form a central curtain beneath the bell, much broader and shorter than the thin marginal tentacles. Keep these two types of appendage visibly different; oral-arm bases and far-side tentacle clusters may be naturally hidden. Bell is not a smooth tall mushroom, no eyes, face, fins, teeth, moon-jelly four circles or neon glow. This is a moderate-size individual with naturally curved trailing tentacles, not a record-size specimen. Every visible tentacle tip and entire bell/central oral-arm curtain must remain inside the canvas, with generous empty margins. No cropping, text, arrows, labels, collage, cutaway, person, blood, injury, horror, tropical coral, ice, seafloor, aquarium or human props. Soft underwater daylight and subtle explanatory fill, amber against blue-green water.\nComposition: unobstructed whole-animal side-three-quarter portrait, bell upper left-of-center, frilly central oral arms immediately below. Long fine tentacles stream diagonally to the right and curve gently back beneath the bell, all ends visible in the frame. Several near-side paired lobes and distinct clustered fine tentacle roots are readable; do not falsely make every hidden root visible. No other animal or food.",
          "Make a NEW single 3:2 landscape museum-quality natural-history illustration of a lion's mane jellyfish, Cyanea capillata. The attached image is identity and painterly underwater style reference only. Rebuild the camera and animal pose from scratch; do NOT preserve the reference's frontal umbrella and vertical oral-arm skirt. Do not mirror or merely rotate that image.\nGenuinely new camera: near SIDE PROFILE at the level of the bell rim, viewing the animal from 90 degrees around and slightly below. We see the bell as a narrow steep side cup, its circular underside strongly foreshortened rather than the wide front umbrella of the reference. The animal is in a clear contraction phase, rim curling inward into a deeper bell. Its main bell axis is angled upwards toward the left while soft appendages trail to the right in open cold coastal water.\nGenuinely new posture: a gentle cross-current has drawn the four thick folded FRILLY ORAL ARMS sideways into separate unequal S-shaped folds, not a straight hanging curtain. Many very thin hairlike tentacles arise in EIGHT anatomical groups at the bell margin, with the far-side groups naturally seen through the translucent bell; these are finer and far longer than the thick oral arms. Arrange their flexible lengths into broad nonparallel flowing curves and small loose curls, all endpoints contained within the frame. Do not replace tentacles with ribbons and do not replace the oral arms with thin tentacles. Warm muted amber/reddish bell, scalloped edge, translucent tissue, no purple fantasy glow. The complete connected jelly including every drawn tentacle end fits comfortably in the landscape with empty blue water around. No prey, no action effects, no extra animals, no text, no labels, no collage. This is an educational reconstructed swimming and drifting posture, not an exact photograph."
        ],
        "generatedAt": "2026-10-08T16:32:25.233Z",
        "checkedAt": "2026-10-11",
        "sha256": "d758c0c7da83cbde4b17b444f383b8fe227ff3bdf2129f3f4f53764d809d690c",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MarLIN의 부유성 서식, 여덟 촉수 묶음과 두껍고 주름진 입팔 원문에 따른 교육용 자세 재구성. 특정 유속·관측 순간은 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "MarLIN: Cyanea capillata",
            "url": "https://www.marlin.ac.uk/species/detail/2090"
          }
        ],
        "viewpoint": "우산 가장자리 높이의 가파른 옆 시점, 조금 아래",
        "pose": "우산 수축과 네 굵은 입팔·여덟 촉수 묶음의 서로 다른 S자 흐름",
        "poseVariationCheck": "기존 시트09의 넓게 보이는 앞 사선 우산과 아래로 내린 입팔에서 좁아진 가파른 측면 우산 원근으로 바뀜. 주름 입팔과 촉수 무리가 옆으로 서로 다른 S자 흐름을 이루어 시점과 몸 상태가 실제 달라짐.",
        "visualLimitations": "겹친 촉수의 여덟 뿌리와 네 구완 전수 대응은 불가능. 자연스러운 가림 한계를 유지함. 겹친 입팔의 네 기부와 촉수 여덟 묶음의 모든 뿌리는 전수 계수 불가. MarLIN의 여덟 촉수 묶음 기준을 읽었으나 그림에서 여덟 묶음 모두 검증했다고 쓰지 않음. 일부 촉수 끝은 오른쪽 여백이 좁지만 잘리지 않음."
      }
    ],
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "giant-clam",
    "name": "대왕조개",
    "scientificName": "Tridacna gigas",
    "aliases": [
      "True giant clam",
      "Giant clam"
    ],
    "group": "연체동물",
    "habitatIds": [
      "reef",
      "coast"
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "summary": "두꺼운 두 껍질 사이로 부드러운 외투막을 펼치는 큰 조개예요. 여기서는 한국어 설명용 이름과 정확한 학명을 함께 써요.",
    "identity": [
      "두 패각에는 깊은 방사형 주름이 있고, 누런 갈색이나 올리브색 외투막에 작은 청록색 고리가 보여요.",
      "낮은 입수 구멍과 조금 솟은 출수관을 구분해요. 이 종의 입수 구멍에는 촉수가 없어요."
    ],
    "ecology": "얕고 맑은 산호초의 단단한 바닥이나 모래 위에 살아요. 외투막 안의 미세한 공생 조류가 빛을 이용해 만든 영양을 받아요. 성체는 큰 무게로 자리를 지켜요.",
    "diet": "물에 떠 있는 작은 먹이를 입수 구멍으로 들여 아가미에서 걸러 먹어요. 공생 조류에게서 받는 영양도 중요해요. 여과 먹이와 공생 영양은 서로 다른 과정이에요.",
    "range": "인도태평양의 얕은 산호초. NOAA는 미얀마에서 키리바시, 류큐열도에서 호주 퀸즐랜드에 걸친 분포를 소개해요.",
    "size": "껍질 길이 기준으로 큰 기록은 약 137 cm, 무게는 225 kg를 넘기도 해요. 보통 모든 개체가 이만큼 자라는 것은 아니에요.",
    "depth": "NOAA가 소개하는 보통 발견 수심은 약 2–20 m예요. 이 범위를 모든 개체의 정확한 위치나 절대 최대 수심으로 단정하지 않아요.",
    "sources": [
      {
        "title": "NOAA Fisheries — True Giant Clam",
        "url": "https://www.fisheries.noaa.gov/species/true-giant-clam"
      },
      {
        "title": "NOAA 2024 source text — Tridacna gigas morphology",
        "url": "https://public-inspection.federalregister.gov/2024-14970.pdf"
      },
      {
        "title": "Hernawan 2012 — Taxonomy of Indonesian giant clams",
        "url": "https://smujo.id/biodiv/article/download/184/190"
      },
      {
        "title": "Soo & Todd 2014 — The behaviour of giant clams",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4231208/"
      }
    ],
    "featured": false,
    "gallery": [
      {
        "id": "giant-clam",
        "src": "assets/images/giant-clam-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕조개 · 두 패각과 외투막",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 두꺼운 깊은 방사 주름 패각의 앞/뒤 경계·황갈 외투막과 청록 작은 고리·매끈한 낮은 입수 구멍·높은 출수관을 확인. 주된 전신 끝이 화면 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Create exactly ONE original Sea Atlas landscape 3:2 illustration, natural-history painterly realism for children aged 5–12, calm and anatomically careful. Subject: one living adult Tridacna gigas TRUE giant clam, not T. derasa, T. squamosa, T. maxima or Hippopus. TWO thick heavy off-white matching shell valves stay physically connected at a single basal hinge, upright on a sandy coral-reef patch. Each valve has about FIVE broad deep radial folds (within the species' 4–6 range), giving the upper shell margins long rounded triangular projections. No leafy scutes, large scales or spikes on the adult shell, no predatory teeth. One continuous thick olive-yellow-brown fleshy mantle spreads over both upper margins, with small restrained blue-green rings, especially at the edge; natural fleshy undulating folds, not a pair of eyes. Show ONE elongated low incurrent opening in the mantle with a SMOOTH margin and NO guard tentacles, and ONE smaller gently raised conical round excurrent siphon, in their natural positions on the same connected mantle. They are two DIFFERENT openings, not mouths, noses or cartoon eyes. The hinge and shell bases may be partly hidden by sand but both shell halves and all outer margins are clearly traceable. Adult rests freely with its weight, not buried entirely in a coral boulder, not attached with visible ropes. No exposed internal gills, cartoon algae, cutaway or illustrated glowing cells. Clear shallow tropical reef water with gentle natural daylight. Entire clam and both valve tips inside canvas with generous margins. No person, text, labels, arrows, collage, bleeding, wound, horror, capture, giant teeth or anthropomorphic smile.\nComposition: whole animal in a slightly elevated front-three-quarter portrait, showing both thick matching valves, their five deep broad folds, continuous colored mantle, smooth incurrent slit and small separate excurrent cone. Uncluttered sandy patch with a few subdued coral shapes in the distant background. No plankton visualization or other animals. Shell and mantle connect naturally, not two detached shell bowls."
        ],
        "generatedAt": "2026-10-03T19:33:08.888Z",
        "checkedAt": "2026-10-04",
        "sha256": "442a9704e90ddc7eb9984b41913fb3d42d409c819cbfa57722334d4570f387a8",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존."
      },
      {
        "id": "giant-clam",
        "src": "assets/images/giant-clam-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕조개 · 물속의 작은 먹이를 거르기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 두꺼운 깊은 방사 주름 패각의 앞/뒤 경계·황갈 외투막과 청록 작은 고리·매끈한 낮은 입수 구멍·높은 출수관을 확인. 주된 전신 끝이 화면 안.",
        "generationPrompts": [
          "Use case: scientific-educational. Create exactly ONE original Sea Atlas landscape 3:2 illustration, natural-history painterly realism for children aged 5–12, calm and anatomically careful. Subject: one living adult Tridacna gigas TRUE giant clam, not T. derasa, T. squamosa, T. maxima or Hippopus. TWO thick heavy off-white matching shell valves stay physically connected at a single basal hinge, upright on a sandy coral-reef patch. Each valve has about FIVE broad deep radial folds (within the species' 4–6 range), giving the upper shell margins long rounded triangular projections. No leafy scutes, large scales or spikes on the adult shell, no predatory teeth. One continuous thick olive-yellow-brown fleshy mantle spreads over both upper margins, with small restrained blue-green rings, especially at the edge; natural fleshy undulating folds, not a pair of eyes. Show ONE elongated low incurrent opening in the mantle with a SMOOTH margin and NO guard tentacles, and ONE smaller gently raised conical round excurrent siphon, in their natural positions on the same connected mantle. They are two DIFFERENT openings, not mouths, noses or cartoon eyes. The hinge and shell bases may be partly hidden by sand but both shell halves and all outer margins are clearly traceable. Adult rests freely with its weight, not buried entirely in a coral boulder, not attached with visible ropes. No exposed internal gills, cartoon algae, cutaway or illustrated glowing cells. Clear shallow tropical reef water with gentle natural daylight. Entire clam and both valve tips inside canvas with generous margins. No person, text, labels, arrows, collage, bleeding, wound, horror, capture, giant teeth or anthropomorphic smile.\nComposition: full clam in a more elevated view while open in calm sunlit water. Very subtle tiny suspended natural particles near the smooth low incurrent opening establish a suspension-feeding context; particles are sparse specks, NOT oversized shrimp, fish or drawings of bacteria. Keep the distinct raised excurrent cone and two shell valves visible. No dramatic jet, glowing flow streak, mouth eating or swallowing. Do not show symbiotic algae as visible plants on top of the mantle: algae are microscopic within its tissues and their nutrition cannot be seen directly. Depict plausible feeding context only, not measured water direction, filtration or photosynthetic success."
        ],
        "generatedAt": "2026-10-03T19:34:20.004Z",
        "checkedAt": "2026-10-04",
        "sha256": "015a6e97e4f12a847af6ac240e319eacdd19b6d80bc73d5bf49c3a82582a2dc1",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "작은 부유 입자와 열린 조개의 여과 먹이 맥락 재구성. 실제 물 흐름 방향·입자의 종·여과율·공생 조류의 영양 생산은 외부 그림에서 확인 불가.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — True Giant Clam",
            "url": "https://www.fisheries.noaa.gov/species/true-giant-clam"
          },
          {
            "title": "NOAA 2024 source text — Tridacna gigas morphology",
            "url": "https://public-inspection.federalregister.gov/2024-14970.pdf"
          },
          {
            "title": "Hernawan 2012 — Taxonomy of Indonesian giant clams",
            "url": "https://smujo.id/biodiv/article/download/184/190"
          },
          {
            "title": "Soo & Todd 2014 — The behaviour of giant clams",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4231208/"
          }
        ]
      },
      {
        "id": "giant-clam",
        "src": "assets/images/giant-clam-chatgpt-ecology-top-retracted-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕조개 · 위에서 본 패각과 오므린 외투막",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두꺼운 방사 굴곡 패각2장과 좁은 이어진 물결 틈, 그 안 올리브 갈색/청록 반점 외투막 및 정상 수관 구멍 확인. 추가 패각·눈·촉수 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create exactly ONE original Sea Atlas landscape 3:2 illustration, natural-history painterly realism for children aged 5–12, calm and anatomically careful. Subject: one living adult Tridacna gigas TRUE giant clam, not T. derasa, T. squamosa, T. maxima or Hippopus. TWO thick heavy off-white matching shell valves stay physically connected at a single basal hinge, upright on a sandy coral-reef patch. Each valve has about FIVE broad deep radial folds (within the species' 4–6 range), giving the upper shell margins long rounded triangular projections. No leafy scutes, large scales or spikes on the adult shell, no predatory teeth. One continuous thick olive-yellow-brown fleshy mantle spreads over both upper margins, with small restrained blue-green rings, especially at the edge; natural fleshy undulating folds, not a pair of eyes. Show ONE elongated low incurrent opening in the mantle with a SMOOTH margin and NO guard tentacles, and ONE smaller gently raised conical round excurrent siphon, in their natural positions on the same connected mantle. They are two DIFFERENT openings, not mouths, noses or cartoon eyes. The hinge and shell bases may be partly hidden by sand but both shell halves and all outer margins are clearly traceable. Adult rests freely with its weight, not buried entirely in a coral boulder, not attached with visible ropes. No exposed internal gills, cartoon algae, cutaway or illustrated glowing cells. Clear shallow tropical reef water with gentle natural daylight. Entire clam and both valve tips inside canvas with generous margins. No person, text, labels, arrows, collage, bleeding, wound, horror, capture, giant teeth or anthropomorphic smile.\nComposition: a wider habitat scene in a different low side-three-quarter view, one full clam on a sand-and-hard-substrate patch among scattered natural shallow-reef coral heads. Entire matching valves and connected expanded olive-brown mantle are visible; the far shell base or one siphon may be naturally partially hidden by the perspective, but do not invent extra openings. Shallow clear water and soft sunlit caustics suit the light-dependent algal symbiosis. No fish, diver, multiple clams, aquarium or scale markers. This is a daytime mantle-exposure habitat reconstruction, not proof of a measured photosynthesis rate or precise reef location.",
          "Create ONE completely new original natural-history illustration for Sea Atlas, children ages 5–12, landscape 3:2, realistic painterly scientific style. Subject: one large adult TRUE GIANT CLAM, Tridacna gigas. Use the attached Sea Atlas image ONLY as a species and colour/style reference: two thick heavy cream-coloured valves with FOUR OR FIVE broad deep radial folds, weathered shell WITHOUT prominent rows of projecting scutes, golden-brown to olive mantle with many tiny blue-green rings. Rebuild its 3D composition, not the old broad open frontal shell pose, not a mirrored or rotated version. NEW CAMERA: high almost VERTICAL TOP-DOWN, 80 degrees above the reef, directly looking down at the clam so both left and right valve outlines and the long wavy gap between them are visible in strong foreshortening. Show the whole clam centered, long shell axis diagonally from lower left to upper right, generous clear margins. NEW STATE: mantle lobes are PARTLY RETRACTED and the valves are DRAWN CLOSER than in the reference. The adult MUST NOT shut or seal completely: retain a continuous clearly visible narrow irregular GAP between the valves with a restrained strip of folded olive/golden mantle and blue-green ring markings inside. The shell is still one living bivalve with two connected hinged valves and four to five broad wavy projections per valve, never extra shells, rows of spines, a fully closed cockle or an empty dead shell. The mantle should not spread over the shell edges like a wide flat carpet; only a smaller recessed band remains visible. Any partially visible inhalant slit must be smooth with NO guarding tentacles, and the modest exhalant siphon must not become a flower or giant tube. No exposed internal organs, no diagram, no cutaway. Set the animal normally and stably on a shallow Indo-Pacific coral-rubble and sand bottom, water above, soft daylight and uncluttered reef texture. No diver, predator, hand, prey, extra giant clams, text, labels or watermark. This is a quiet educational reconstruction of partial mantle withdrawal, not a claim of full adult valve closure or a specific disturbance. The major visible changes must be the genuine top-down viewpoint and smaller mantle exposure/narrower valve gap, not lighting/background."
        ],
        "generatedAt": "2026-10-08T16:34:22.229Z",
        "checkedAt": "2026-10-11",
        "sha256": "f08b3e3cd664c748d61af0ee379f079619f6ce6530890686d7aabe3f3ea95e77",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "외투막 수축과 부분적인 패각 닫힘을 설명하는 교육 재구성. 다 자란 Tridacna gigas는 껍데기를 완전히 닫지 못하므로 연결된 두 패각 사이에 틈을 남겼으며 완전 폐쇄로 표기하지 않음.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — True giant clam",
            "url": "https://www.fisheries.noaa.gov/species/true-giant-clam"
          },
          {
            "title": "Animal Diversity Web — Tridacna gigas",
            "url": "https://animaldiversity.org/accounts/Tridacna_gigas/"
          },
          {
            "title": "Soo & Todd2014 — The behaviour of giant clams",
            "url": "https://link.springer.com/article/10.1007/s00227-014-2545-0"
          }
        ],
        "viewpoint": "높은 위사선에서 두꺼운 두 패각과 좁은 물결 모양 틈을 내려다봄",
        "pose": "외투막을 안쪽으로 오므리고 두 패각 사이에 좁은 틈을 남긴 모습",
        "poseVariationCheck": "기존 낮은 앞 시점의 넓게 열린 외투막과 달리 높은 위 사선과 좁게 수축한 외투막/패각 개방 상태가 함께 다름.",
        "visualLimitations": "부분 수축으로 틈을 남김. 실제 출수 흐름과 정확한 입수구 돌기는 해상도 한계로 확정하지 않음. 완전 수직 위나 완전 닫힌 패각은 아님. 수축 유발 원인·실제 영양 상태 확인을 주장하지 않음. 패각 전체 프레임 안."
      }
    ],
    "checkedAt": "2026-10-04",
    "reviewStatus": "source-checked-expert-review-pending"
  },
  {
    "id": "scaly-foot-snail",
    "name": "비늘발고둥",
    "scientificName": "Chrysomallon squamiferum",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "발에 작은 비늘이 겹겹이 난 심해 고둥이에요. 뜨거운 물이 나오는 해저 열수구 곁에 살아요.",
    "identity": [
      "비늘발고둥은 이 학명에 붙인 설명용 이름이다. 나선형 껍데기와 넓은 발, 발 옆을 덮은 겹친 비늘을 함께 확인한다. 검은 비늘 개체와 철 성분이 적은 흰 비늘 개체가 있으며 모든 개체가 검거나 금속빛인 것은 아니다."
    ],
    "ecology": "몸속 식도샘에는 황 성분을 이용하는 공생 세균이 살아요. 세균이 만든 영양분을 얻으며 열수구 주변에서 살아가요.",
    "diet": "몸속 공생 세균이 만든 영양분. 물고기를 사냥하거나 풀을 뜯어 먹는 장면으로 표현하지 않아요.",
    "range": "인도양의 해저 열수구. 2026년 연구에는 세 해령의 최소8개 열수구에서 확보한 개체가 보고되어 있어요.",
    "size": "껍데기 길이 약5 cm 정도의 개체가 알려져 있어요. 껍데기 길이와 발을 포함한 전체 크기는 달라요.",
    "depth": "JAMSTEC 공개 관측자료의 개체는 약2,420–2,611 m. 이 숫자는 그 자료에 등록된 관측 범위이며 종의 전체 분포 한계를 뜻하지 않아요.",
    "sources": [
      {
        "title": "JAMSTEC BISMaL — Chrysomallon squamiferum",
        "url": "https://www.godac.jamstec.go.jp/bismal/e/view/9045026"
      },
      {
        "title": "JAMSTEC — 비늘발고둥의 비늘과 생물광물화 연구",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20200408/"
      },
      {
        "title": "JAMSTEC — 8개 열수구의 비늘발고둥 집단유전체 연구",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20260212/"
      },
      {
        "title": "JAMSTEC — 비늘발고둥 소개와 껍데기 크기",
        "url": "https://www.jamstec.go.jp/e/about/press_release/20190723/"
      }
    ],
    "depthZoneIds": [
      "midnight"
    ],
    "aliases": [
      "Scaly-foot snail",
      "Scaly-foot gastropod",
      "비늘발고둥(설명용 이름)"
    ],
    "featured": false,
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "scaly-foot-snail",
        "src": "assets/images/scaly-foot-snail-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "비늘발고둥 · 나선 껍데기와 발의 겹친 비늘",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "나선 껍데기·외투막·겹친 비늘발·두 머리 촉수의 연결을 원본 1536×1024에서 확인. 검은 비늘의 열수구 개체군 색상과 심해 환경이 자료와 맞는다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one detailed natural-history illustration for a Korean marine atlas for ages 5–12, landscape 3:2, one uncropped full-body living scaly-foot snail Chrysomallon squamiferum from the black-sclerite Kairei hydrothermal-vent population in the Indian Ocean. Low front-side three-quarter view on a small mineral-encrusted rock, animal fills about 65% of frame. Anatomically precise gastropod: low brown coiled spiral shell sitting continuously on the mantle and broad muscular foot; many overlapping small dark mineralized scales/sclerites covering the sides of the foot, which is visibly connected to the snail rather than detached plates. A natural head with two simple cephalic tentacles, no cartoon face, no antenna forest, no huge eyes. Show the whole shell, foot and tentacle tips in frame. Restrained gray-black sclerites and brown shell, no chrome-metal armor and no gold armor. Deep ocean background in navy-black, neutral soft expedition-style illumination for anatomical clarity, no sunlight, no lava, no red volcanic glow, no bubbles boiling around the animal. Realistic painted natural-history museum illustration, accessible but not toy-like, subtle skin and mineral texture. This is an educational reconstruction, not a photograph. No labels, text, arrows, watermark, scale bar or montage."
        ],
        "generatedAt": "2026-10-07T11:30:14.486Z",
        "checkedAt": "2026-10-07",
        "sha256": "1065d3d4156b1216624ad18c2b11c0e9e792bb0283cc4f393d63ec22b4f54dc4",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "scaly-foot-snail",
        "src": "assets/images/scaly-foot-snail-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "비늘발고둥 · 공생 세균 덕분에 살아가는 열수구 곁",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 연결된 전신과 두 촉수를 확인. 식물·먹이·사냥을 넣지 않고 공생 영양이 가능한 열수구 주변 서식환경을 표현했다. 세균은 외부에서 보이지 않는다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one detailed natural-history illustration for a Korean marine atlas for ages 5–12, landscape 3:2, one uncropped full-body living scaly-foot snail Chrysomallon squamiferum from the black-sclerite Kairei hydrothermal-vent population in the Indian Ocean. Low front-side three-quarter view on a small mineral-encrusted rock, animal fills about 65% of frame. Anatomically precise gastropod: low brown coiled spiral shell sitting continuously on the mantle and broad muscular foot; many overlapping small dark mineralized scales/sclerites covering the sides of the foot, which is visibly connected to the snail rather than detached plates. A natural head with two simple cephalic tentacles, no cartoon face, no antenna forest, no huge eyes. Show the whole shell, foot and tentacle tips in frame. Restrained gray-black sclerites and brown shell, no chrome-metal armor and no gold armor. Deep ocean background in navy-black, neutral soft expedition-style illumination for anatomical clarity, no sunlight, no lava, no red volcanic glow, no bubbles boiling around the animal. Realistic painted natural-history museum illustration, accessible but not toy-like, subtle skin and mineral texture. This is an educational reconstruction, not a photograph. No labels, text, arrows, watermark, scale bar or montage.",
          "Use case: scientific-educational. Generate a new single natural-history marine-atlas illustration, landscape 3:2, based on the supplied reference only for the anatomy and colors of the Kairei black-sclerite scaly-foot snail Chrysomallon squamiferum; it is a supporting identity reference, not an edit target. Scene: one full-body living snail seen in clear low lateral profile, moving slowly across mineral-encrusted rock beside a distant hydrothermal vent at about 2.5 km depth in the Indian Ocean. Its coiled brown shell, broad dark muscular foot covered on its sides by overlapping black sclerites, and two natural head tentacles must all be visible and continuously connected. Keep shell scale and sclerite shapes natural; no chrome fantasy armor. The mineral surface and diffuse distant warm-water plume provide the context for its sulfur-oxidizing bacterial symbiosis: the bacteria live internally, are invisible in this intact external view, and do not glow. The snail receives nutrition from its symbionts rather than hunting visible prey or grazing plants, so no fish, shrimp, leaves or food in its mouth. The plume is far behind the snail, no boiling bubbles, no lava, no searing direct plume contact. Neutral gentle expedition-style fill light in dark blue-black water; no sunlight. Zoom out enough to leave margin around the entire animal and retain the near rocks, with a different composition from the reference. Detailed realistic painted museum illustration suitable for ages 5–12, not a photograph. No text, labels, arrows, cutaways, diagram, watermark or collage."
        ],
        "generatedAt": "2026-10-07T11:31:34.718Z",
        "checkedAt": "2026-10-07",
        "sha256": "68cda2d9a22c635dec9b2e72201f449ab764cbfb0ba3f7fa72d5de4b412da599",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "공생 영양 방식의 서식환경 교육 재구성; 외부 먹이 섭식이나 사냥을 그리지 않음",
        "behaviorSources": [
          {
            "title": "JAMSTEC — 비늘발고둥의 열수구 공생 영양",
            "url": "https://www.jamstec.go.jp/e/about/press_release/20260212/"
          }
        ]
      },
      {
        "id": "scaly-foot-snail",
        "src": "assets/images/scaly-foot-snail-chatgpt-ecology-rear-climb-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "비늘발고둥 · 바위 위로 발을 뻗은 뒷모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "하나의 갈색 나선 껍데기와 이어진 넓은 발·발의 겹비늘, 먼 머리의 두 촉수를 실제 확인. 껍데기나 머리에 비늘 갑옷/네 눈자루 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one detailed natural-history illustration for a Korean marine atlas for ages 5–12, landscape 3:2, one uncropped full-body living scaly-foot snail Chrysomallon squamiferum from the black-sclerite Kairei hydrothermal-vent population in the Indian Ocean. Low front-side three-quarter view on a small mineral-encrusted rock, animal fills about 65% of frame. Anatomically precise gastropod: low brown coiled spiral shell sitting continuously on the mantle and broad muscular foot; many overlapping small dark mineralized scales/sclerites covering the sides of the foot, which is visibly connected to the snail rather than detached plates. A natural head with two simple cephalic tentacles, no cartoon face, no antenna forest, no huge eyes. Show the whole shell, foot and tentacle tips in frame. Restrained gray-black sclerites and brown shell, no chrome-metal armor and no gold armor. Deep ocean background in navy-black, neutral soft expedition-style illumination for anatomical clarity, no sunlight, no lava, no red volcanic glow, no bubbles boiling around the animal. Realistic painted natural-history museum illustration, accessible but not toy-like, subtle skin and mineral texture. This is an educational reconstruction, not a photograph. No labels, text, arrows, watermark, scale bar or montage.",
          "Use case: scientific-educational. Create one realistic natural-history illustration, landscape 3:2, an ecological scene for a children's Korean ocean atlas. Supporting identity reference: attached image shows Chrysomallon squamiferum, the Kairei black-sclerite scaly-foot snail; use only its anatomy and colors, not its composition. Show three small living snails of this same black-sclerite population scattered naturally across the sides of a mineral-encrusted hydrothermal-vent rock ledge in the Indian Ocean deep sea. Elevated oblique camera view looking down and slightly from behind, wide environmental composition; nearest snail remains large enough to see a coiled brown shell, a broad connected foot and rows of overlapping dark scaly sclerites. Leave the complete outlines of all shells and the nearest entire animal in frame. Their heads and body parts are attached naturally; natural occlusion in the two farther animals is okay. Do not mix a white-sclerite population from another vent in this scene. Dark blue-black deep water, faint distant hydrothermal plume above a far chimney, pale mineral crusts on basalt. Neutral documentary fill illumination, not sunlight, no sun rays, no lava, no glowing bacteria, no steam bubbles, no fantasy armor, no coral reef or vegetation. Snails remain beside the vent on cooler rock, not inside a hot jet. Museum-quality realistic painted texture suitable for ages 5–12. It is an educational reconstruction of vent habitat, not an assertion of an exact observed group size. No text, labels, arrows, watermark, scale bar, panels or collage.",
          "Create ONE original natural-history illustration for Sea Atlas, ages 5–12, landscape 3:2, refined realistic painterly rendering. Species Chrysomallon squamiferum, scaly-foot snail. The reference is only for the brown low-spired spiral shell, dark overlapping foot scales, and illustration style. DO NOT repeat the original right-facing side pose, and do not mirror or rotate it. Draw ONE snail in a genuinely NEW ABOVE-AND-BEHIND three-quarter camera view as it slowly moves AWAY from the viewer up a rough black volcanic rock incline near an Indian Ocean hydrothermal vent. The posterior shell and upper whorls face the camera; the wide muscular foot emerges under the shell and stretches FORWARD up the slope, with a small portion of the soft brown head and ONLY TWO slender non-eyed cephalic tentacles visible beyond the far upper rim. No tall garden-snail eyestalks or extra pair of feelers. The shell is a continuous natural brown spiral with fine growth bands, not glittering metal. Dense dark iron-sulfide dermal sclerites overlap around the exposed SIDES of the broad foot like small leaf-shaped scales, not covering the shell or head. A small bare sole at the front edge adheres to rock; show the real stretched-foot and shell-to-foot connection. Keep the entire snail, shell apex, foot and both tentacle tips within the frame with generous margins. The new camera should show the back and top of the shell with depth and foreshortening, and the head mostly pointing away; it must be unmistakably different from a side portrait. Deep dark blue water, modest mineral-encrusted black rock, one soft distant hydrothermal plume well away from the snail; no other snails, no bait, no external prey or imagined feeding, no glowing body, no lava, no text, labels, arrows or watermark. This is a quiet habitat observation; nutrition comes from internal sulfur-oxidising symbionts and is not drawn as an external food item."
        ],
        "generatedAt": "2026-10-08T16:42:49.814Z",
        "checkedAt": "2026-10-11",
        "sha256": "95bf227009aa6040ae256653fc18d15b4265b6f76f66e68b0d256a5d7c38305e",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "JAMSTEC가 확인한 발의 조밀한 비늘과 인도양 열수 분출구 서식에 맞춘 관찰 재구성. 발이 바위에 붙어 이동하는 자세를 쓰며 몸속 황 산화 공생 세균의 영양을 외부 먹이로 꾸미지 않음.",
        "behaviorSources": [
          {
            "title": "JAMSTEC2020 — The Scaly-foot Snail genome",
            "url": "https://www.jamstec.go.jp/e/about/press_release/20200408/"
          },
          {
            "title": "JAMSTEC2019 — Scaly-foot Snail iron scales",
            "url": "https://www.jamstec.go.jp/e/about/press_release/20190723/"
          }
        ],
        "viewpoint": "뒤위에서 머리의 진행 방향으로 비껴 본 사선",
        "pose": "넓은 발을 바위 경사면에 붙이고 작은 머리와 두 촉수를 위쪽 앞으로 내민 모습",
        "poseVariationCheck": "기존 오른쪽 머리/껍데기 입구를 보는 앞옆과 달리 머리가 오른위로 멀어지는 뒤위 시점. 경사면의 길게 늘어난 비늘발과 뒤쪽 맨발 가장자리로 몸 상태도 달라짐.",
        "visualLimitations": "정확한 껍데기 철 성분·서식처 색 변이를 사진 동정처럼 확정하지 않음. 내부 공생 영양을 외부 먹이로 묘사하지 않음. 머리/껍데기 입구 일부 가림. 앞쪽 발바닥이 아니라 뒤 가장자리가 노출된 것으로 기록. 모든 몸/촉수 끝 프레임 안. 공생 영양·실제 이동 계측 인증 아님."
      }
    ]
  },
  {
    "id": "japanese-bobtail-squid",
    "name": "투구귀꼴뚜기",
    "scientificName": "Sepiolina nipponensis",
    "group": "연체동물",
    "habitatIds": [
      "coast"
    ],
    "summary": "둥근 몸에 귀처럼 넓은 지느러미가 달린 작은 꼴뚜기예요. 몸 아래에는 은빛 띠가 있어요.",
    "identity": [
      "둥근 몸 양옆에 귀처럼 넓은 지느러미가 있어요. 짧은 팔 여덟 개와 먹이를 잡는 긴 촉수 두 개가 머리 앞에 모여 있어요.",
      "몸 아래쪽 가장자리에는 은빛 띠가 있어요. 하와이의 작은 발광오징어와는 다른 종이에요."
    ],
    "ecology": "대륙붕의 바다에 사는 작은 두족류예요. 몸속 발광기관에서 빛나는 분비물이 나오는 특징이 알려져 있어요.",
    "diet": "이 종이 정확히 어떤 먹이를 먹는지는 확인한 자료에 나와 있지 않아요. 먹이 그림 대신 헤엄치는 모습을 담았어요.",
    "range": "서태평양의 일본 남부·대만·필리핀 등에 보고돼요. 남호주 보고를 포함한 넓은 분포에는 유사종이 섞였을 가능성이 지적됐어요.",
    "size": "팔과 촉수를 뺀 몸통 길이가 약 2.5 cm까지예요. FAO 2005년 자료의 기준이에요.",
    "depth": "연안과 대륙붕에 살아요. 오래된 FAO 자료에서는 약 200 m까지 소개해요.",
    "sources": [
      {
        "title": "국립생물자원관 — 투구귀꼴뚜기와 학명 대조표",
        "url": "https://www.nibr.go.kr/aiibook/access/ecatalogt.jsp?Dir=479&callmode=admin&catimage=&eclang=ko&start=84&um=s"
      },
      {
        "title": "FAO2005 Cephalopods of the world — Sepiolina nipponensis pp201–202",
        "url": "https://www.fao.org/4/a0150e/a0150e24.pdf"
      },
      {
        "title": "WoRMS — Sepiolina nipponensis",
        "url": "https://www.marinespecies.org/aphia.php?id=342396&p=taxdetails"
      },
      {
        "title": "FAO1984 — 일본귀꼴뚜기의 대륙붕 수심",
        "url": "https://www.fao.org/4/ac479e/ac479e12.pdf"
      }
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "aliases": [
      "Japanese bobtail squid",
      "Japanese bobtail",
      "투구 귀꼴뚜기"
    ],
    "featured": false,
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "본종 식단을 확인한 FAO2005 및NIBR자료에서 찾지 못했으므로 먹이활동 장면 대신 서로 다른 생태 구도2장을 사용한다.",
    "gallery": [
      {
        "id": "japanese-bobtail-squid",
        "src": "assets/images/japanese-bobtail-squid-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투구귀꼴뚜기 · 둥근 지느러미와 은빛 띠",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 외투막, 외투막에 연결된 넓은 지느러미, 은빛 측면 띠, 두 긴 촉수와 자연스러운 눈·머리 연결을 실제 원본에서 확인. 후면 팔 일부는 가려져 개수를 추정으로 인증하지 않음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one finished natural-history illustration for a Korean marine atlas for children ages 5–12. Landscape 3:2. PORTRAIT of a single living Japanese bobtail squid Sepiolina nipponensis, Korean name 투구귀꼴뚜기, Japanese Ginobi-ika. Do not substitute Euprymna scolopes, Sepiolina petasus or an ordinary long-bodied squid. Whole uncropped animal suspended in clear dark-blue continental-shelf seawater, low front-side three-quarter angle revealing the lower mantle edge. Precise morphology: small short dome-shaped oval mantle, two broad rounded single-lobed lateral fins each about 60% of mantle length, a natural head with two prominent squid eyes, exactly eight short muscular arms arranged clearly in a relaxed loose fan and exactly two longer thin feeding tentacles with small narrow clubs, all arising continuously from the arm crown around the mouth. The two tentacles are distinct from the eight arms and remain attached all the way to their roots; no extra limbs, no cut-off tips, no detached strands. Speckled reddish-brown minute chromatophores on soft mantle, silvery iridescent broad belt along the ventrolateral mantle margin and a darker patch of ventral mantle pigment; show a readable silver belt, not a glowing stripe. Dorsal surface is rounded, not a high top-hat extension. Show fins joining smoothly along both sides of mantle, not ears on the head. Neutral soft underwater observation light for readable natural texture; no neon bioluminescent cloud, no giant black eyes, no anthropomorphic smile, no prey or claimed feeding activity. Body fills roughly60% of frame with comfortable margin for every appendage tip. Detailed realistic painted museum-style illustration, not a photograph, no text, labels, arrows, scale bar, watermark, border, collage or panels."
        ],
        "generatedAt": "2026-10-07T11:34:39.741Z",
        "checkedAt": "2026-10-07",
        "sha256": "e68b162470cea822b2dc0b450b244be1c0c12a145764c0d76f620ad16bc94a79",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "japanese-bobtail-squid",
        "src": "assets/images/japanese-bobtail-squid-chatgpt-ecology-swimming-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투구귀꼴뚜기 · 대륙붕 바다에서 본 옆모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "옆 구도에서 연결된 전신·두 긴 촉수·둥근 지느러미·은빛 측면 띠를 확인. 대륙붕 바닥 위 교육적 관찰 구도이며 먹이 성공·잠복을 주장하지 않음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one single landscape3:2 realistic painted natural-history illustration for an ocean atlas for ages5–12. A living Sepiolina nipponensis, Japanese bobtail squid, is viewed from below and nearly straight in front while suspended quietly in blue continental-shelf water. This is a new ecology/observation scene, no feeding or prey. Full uncropped body. Species morphology follows FAO2005: a short dome-shaped mantle, two broad round single-lobed fins attached to its lateral mantle, minute reddish-brown chromatophores, a DARK ventral mantle patch bordered along the lower mantle sides by a broad silvery iridescent belt. The silver is reflected observation light, never a neon glowing band. Readable ventral view of the arm crown: EXACTLY EIGHT short broad arms in four symmetrical pairs, clearly separated enough to count each from its root to its own intact tip, and EXACTLY TWO additional longer thin feeding tentacles with narrow small clubs arising separately from the same head. Small suckers in two rows on the eight arms, much tinier dense suckers on the narrow tentacle clubs; no large octopus-like club suckers. Do not confuse one curled arm with two, do not merge separate arm roots, and do not add any disconnected or ninth short arm. Keep every appendage tip within the frame with broad margins. Natural amber squid eyes, both on the head, realistic tissue rather than cartoon expression. The arms are softly open and relaxed; the two tentacles extend downward outside the arm fan to help show their distinct structure. No sand-burial behavior, no luminous secretion event, no predator and no prey because those actions are not confirmed in the checked species sources. Neutral soft underwater observation illumination, dark blue open-water background without sun beams, shell or vegetation. Clear fine realistic anatomy, museum illustration, no labels, text, arrows, scale bar, watermark, collage or border.",
          "Use case: scientific-educational. Generate a new single landscape3:2 natural-history marine atlas illustration. Supporting identity reference is the supplied Sepiolina nipponensis Japanese bobtail squid image, used for species anatomy only, not an edit target. Scene: a single complete squid seen in SIDE PROFILE swimming quietly a little above a dim continental-shelf seabed. Zoom out to show context and the entire animal, with its body occupying around half of the width. Domed short oval mantle with broad rounded single-lobed lateral fins joined to the mantle, a normal squid head with amber eyes, eight short arms and two much thinner longer tentacles with narrow small clubs. Total anatomy remains eight arms plus two tentacles; nearer short arms overlap naturally, the far side arms may be occluded by the head. Never add disconnected roots or extra limbs to show all arms in a profile view. The tentacle clubs carry minute dense suckers, not big octopus cups. Minute brown-red speckles, characteristic dark ventral pigment and a broad silvery iridescent belt at the ventrolateral mantle edge, reflecting light but not emitting neon. The body and fins form one continuous animal, not fin-ears on its head. Arms and tentacles rest loosely forward during slow movement, no prey, no attack or feeding success. Unobtrusive gravelly continental-shelf seabed below and blue water fading darker behind; this is an education reconstruction of a shelf habitat, not a measured observation. Use restrained soft underwater observation light without surface sun rays. Do not depict hiding in sand, luminous secretion, symbiotic bacteria, or any prey interaction not confirmed for this species. Detailed realistic painted museum illustration suited for ages5–12, no labels, text, arrows, scale bars, logos, watermarks, panels, border or collage."
        ],
        "generatedAt": "2026-10-07T11:37:17.956Z",
        "checkedAt": "2026-10-07",
        "sha256": "b630e2294e1f64d30f6ace7a00ebb0f4186ae4d72333797c601c6da65db184d2",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "공식자료의 대륙붕 분포에 따른 관찰구도 교육 재구성; 종별 먹이활동·모래잠복·발광분비를 단정하지 않음",
        "behaviorSources": [
          {
            "title": "FAO1984 — Sepiolina nipponensis 대륙붕",
            "url": "https://www.fao.org/4/ac479e/ac479e12.pdf"
          },
          {
            "title": "FAO2005 — Sepiolina nipponensis 형태",
            "url": "https://www.fao.org/4/a0150e/a0150e24.pdf"
          }
        ]
      },
      {
        "id": "japanese-bobtail-squid",
        "src": "assets/images/japanese-bobtail-squid-chatgpt-ecology-underside-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "투구귀꼴뚜기 · 아래에서 본 은빛 띠와 팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "정면 아래 구도에서 짧은 팔들의 연속된 뿌리와 두 긴 촉수, 외투막·지느러미 연결, 어두운 복면 색소 및 은빛 띠를 확인. 일부 팔 뿌리의 겹침 때문에 해부학적 개수를 전문가 인증하지 않음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one single landscape3:2 realistic painted natural-history illustration for an ocean atlas for ages5–12. A living Sepiolina nipponensis, Japanese bobtail squid, is viewed from below and nearly straight in front while suspended quietly in blue continental-shelf water. This is a new ecology/observation scene, no feeding or prey. Full uncropped body. Species morphology follows FAO2005: a short dome-shaped mantle, two broad round single-lobed fins attached to its lateral mantle, minute reddish-brown chromatophores, a DARK ventral mantle patch bordered along the lower mantle sides by a broad silvery iridescent belt. The silver is reflected observation light, never a neon glowing band. Readable ventral view of the arm crown: EXACTLY EIGHT short broad arms in four symmetrical pairs, clearly separated enough to count each from its root to its own intact tip, and EXACTLY TWO additional longer thin feeding tentacles with narrow small clubs arising separately from the same head. Small suckers in two rows on the eight arms, much tinier dense suckers on the narrow tentacle clubs; no large octopus-like club suckers. Do not confuse one curled arm with two, do not merge separate arm roots, and do not add any disconnected or ninth short arm. Keep every appendage tip within the frame with broad margins. Natural amber squid eyes, both on the head, realistic tissue rather than cartoon expression. The arms are softly open and relaxed; the two tentacles extend downward outside the arm fan to help show their distinct structure. No sand-burial behavior, no luminous secretion event, no predator and no prey because those actions are not confirmed in the checked species sources. Neutral soft underwater observation illumination, dark blue open-water background without sun beams, shell or vegetation. Clear fine realistic anatomy, museum illustration, no labels, text, arrows, scale bar, watermark, collage or border."
        ],
        "generatedAt": "2026-10-07T11:36:01.337Z",
        "checkedAt": "2026-10-07",
        "sha256": "b00ec893f98b931549ec11e6a22f20e34bfe777362ff3343b355f2e218cbd25f",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "몸의 구조와 바닷속 모습을 소개하는 교육 재구성; 먹이 섭식을 꾸미지 않음",
        "behaviorSources": [
          {
            "title": "FAO2005 — Sepiolina nipponensis",
            "url": "https://www.fao.org/4/a0150e/a0150e24.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "atlantic-footballfish",
    "name": "대서양초롱아귀",
    "scientificName": "Himantolophus groenlandicus",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "summary": "동그란 몸과 작은 뼈판 돌기를 가진 심해 물고기예요. 머리 위의 빛나는 미끼로 먹이를 불러요.",
    "identity": [
      "초롱아귀 무리의 한 종을 소개해요. 한국어 이름은 모습을 설명하기 위해 붙인 이름이에요.",
      "암컷은 몸이 둥글고 피부에 작은 뼈판과 돌기가 있어요. 머리 위에는 굵고 짧은 줄기와 여러 갈래 장식이 달린 미끼가 있어요."
    ],
    "ecology": "어둡고 먹이가 드문 바다의 물속에서 살아요. 암컷은 빛나는 미끼를 사용하고, 훨씬 작은 수컷은 따로 살아가요.",
    "diet": "작은 물고기, 갑각류, 오징어 등. 이 먹이 목록은 초롱아귀과의 자료이며 특정 먹이와의 만남을 직접 관측한 사진은 아니에요.",
    "range": "열대와 온대의 여러 바다에서 기록돼요. 이름과 달리 대서양에서만 사는 것은 아니에요.",
    "size": "FishBase 최대 기록: 암컷 표준길이 60 cm, 수컷 4 cm. 표준길이는 꼬리지느러미를 제외한 몸길이예요.",
    "depth": "어스름한 바다부터 더 깊은 물속까지 살아요. FishBase에는 약 1,830 m 깊이의 기록이 있어요.",
    "sources": [
      {
        "title": "FishBase — Himantolophus groenlandicus field guide",
        "url": "https://www.fishbase.se/Fieldguide/FieldGuideSummary.php?c_code=304&genusname=Himantolophus&speciesname=groenlandicus"
      },
      {
        "title": "U.S. Fish & Wildlife Service — Atlantic footballfish",
        "url": "https://www.fws.gov/species/atlantic-footballfish-himantolophus-groenlandicus"
      },
      {
        "title": "Museums Victoria, Fishes of Australia — Himantolophidae",
        "url": "https://fishesofaustralia.net.au/home/family/181"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "초롱아귀",
      "Atlantic footballfish",
      "대서양초롱아귀(설명용 이름)"
    ],
    "featured": false,
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "atlantic-footballfish",
        "src": "assets/images/atlantic-footballfish-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "짧고 굵은 낚싯대와 뼈판 돌기가 있는 대서양초롱아귀 암컷이에요.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본을 보고 구형 암컷 몸, 가시가 있는 뼈판, 굵은 앞머리 낚싯대, 연결된 미끼와 꼬리, 뒤쪽 등·뒷지느러미를 확인. Museums Victoria의 Himantolophidae 형태와 일치하는 교육 삽화.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE standalone 3:2 landscape natural-history marine illustration, no words, labels, watermark, border, panels or collage. Subject: adult female Atlantic footballfish Himantolophus groenlandicus, a REAL biological species, calm educational atlas for ages 5–12. Portrait scene in dim deep blue midwater, complete whole body lateral view facing left, generous 12 percent clear margins around all appendages. Almost spherical dark charcoal/brown body, small eyes, stout protruding lower jaw and many fine inward curved teeth; skin includes discrete bony plates each with a short conical spine, not a smooth Melanocetus anglerfish. A stout relatively short fishing stalk arises from the upper front of the head before the eye, ends in a fleshy luminous bulb with multiple delicate branching filaments and paired terminal appendages. Tiny dorsal and anal fins are far back on the body, small broad tail fin. Anatomical continuity is critical: all fins, caudal peduncle, tail fin and fishing stalk visibly connect seamlessly to the one fish body. Soft restrained blue-green luminous bait, only the lure emits light; body illuminated enough to inspect anatomy, sparse marine snow, dark unobtrusive background. Do not add attached parasitic males, extra fishing poles, horns, arms, paired pelvic fins, detached fins, huge monster teeth, human objects, violent action or gore. Beautiful realistic painted scientific illustration with fine organic texture, not a cartoon mascot."
        ],
        "generatedAt": "2026-10-07T11:29:24.862Z",
        "checkedAt": "2026-10-07",
        "sha256": "a68dc5e5e98fc6e2b8ba44e9ae7ba6b35b45063abd1b41d931910325021e2dd9",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "atlantic-footballfish",
        "src": "assets/images/atlantic-footballfish-chatgpt-feeding-second-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대서양초롱아귀 · 앞 아래에서 본 미끼와 작은 먹이",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연결된 굵은 미끼줄기 하나·가지 장식·작은 양쪽 눈·둥근 뼈판 돌기 몸·후방 등/뒷핀·꼬리·근측 가슴핀을 확인. 치아는 턱에 붙은 가는 형태, 배핀/기생 수컷 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. ONE 3:2 landscape realistic natural-history painted illustration, no writing, labels, panels, grid or watermark. Complete adult female Himantolophus groenlandicus Atlantic footballfish, round dark brown body with discrete short-spined bony plates, very small eyes, stout protruding lower jaw with modest thin inward teeth, small rear dorsal and anal fins, a small broad tail connected by a visible caudal peduncle. At upper-front head before eye, one stout short curving fishing stalk ends in a pale blue-green softly glowing fleshy lure bearing several branching filaments with paired end appendages. Whole fish angled gently toward a tiny red deep-water shrimp approaching the lure, shrimp outside mouth, no swallowing or contact. An educational reconstruction of family-level crustacean feeding and luminous lure use, not documentary observed prey. Fish is ten times larger than shrimp. Dim blue midwater and sparse marine snow, clear restrained lighting, generous margins around all fins and fishing filaments. Every appendage visibly connects to body. No parasitic attached males, pelvic fins, extra poles, monstrous teeth, violent attack, blood, detached tail or cropped lure.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE adult female Himantolophus groenlandicus. NEW LOW NEAR-FRONTAL three-quarter camera: broad modestly opened mouth is closest lower RIGHT, tail recedes far LEFT behind body; see both tiny lateral eyes unequally and rounded globular body foreshortened. Subtle bank, near pectoral opens down/right, far pectoral up/left, rear tail fan canted rather than the same side fan. Dark round body with bony plates each bearing a short central conical spine. ONE stout connected head illicium ending in ornate branched esca, NOT two stalks and not an enormous glowing globe. Only posterior dorsal and anal fins, natural paired pectorals and a short complete caudal fan; NO pelvic fins or attached parasitic male (Himantolophus males do not attach). Natural small eyes and slender moderate teeth, no monster exaggeration. One small shrimp well OUTSIDE mouth ahead of lure, no prey inside mouth or biting. Dim deep midwater. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo."
        ],
        "generatedAt": "2026-10-10T15:52:05.669Z",
        "checkedAt": "2026-10-11",
        "sha256": "7aa55a838b0413bd047387427d4d6313691e88eed607f0e423d1a1ee311cadc2",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "Fishes of Australia의 초롱아귀과 갑각류 식성·미끼 형태를 바탕으로 작은 갑각류 접근을 재구성. 종별 식단·포획 성공으로 확정하지 않음.",
        "behaviorSources": [
          {
            "title": "Museums Victoria — Himantolophidae",
            "url": "https://fishesofaustralia.net.au/home/family/181"
          }
        ],
        "viewpoint": "낮은 거의 정면 사선. 입이 오른쪽 아래 가까움, 꼬리는 뒤 왼쪽으로 작게 후퇴",
        "pose": "몸을 살짝 기울이고 양쪽 가슴핀을 다르게 펼침, 입은 중간 정도 벌림",
        "poseVariationCheck": "큰 입이 전경 오른쪽 아래에, 먼 꼬리는 작게 왼쪽 뒤에 놓이며 양눈이 서로 다르게 보여 실제 낮은 앞 사선이다. 몸 기울임과 아래로 펼친 가슴핀·열린 입이 기존보다 다른 상태이고 first 뒤 시점과 상호 구별된다.",
        "visualLimitations": "요청보다 입벌림이 커 실제 앞 사선의 입벌린 접근으로만 기록. 포획 성공이나 전문 동정은 확인하지 않음 먼 가슴핀과 일부 부속지는 몸에 가려 전체 쌍을 셀 수 없다. 종별 미세 esca 배열·ray 계수는 회화적 결 때문에 인증하지 않는다. 새우는 입 바깥에 있고 과의 갑각류 식성을 바탕으로 한 접근 재구성으로만 설명한다."
      },
      {
        "id": "atlantic-footballfish",
        "src": "assets/images/atlantic-footballfish-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대서양초롱아귀 · 뒤쪽 위에서 본 둥근 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 갈색 암컷·뼈판의 짧은 원뿔 돌기·작은 눈·머리 앞에 뿌리가 이어진 굵은 미끼줄기와 가지 장식·후방 등/뒷핀·연결 꼬리를 확인. 배지느러미나 붙은 수컷은 없다.",
        "generationPrompts": [
          "Use case: scientific-educational. ONE standalone 3:2 landscape realistic natural-history illustration, no words, labels, grid, collage, watermark or border. Show the complete adult female Himantolophus groenlandicus Atlantic footballfish from a slightly elevated three-quarter side view, drifting calmly alone in spacious deep-ocean midwater. Keep the subject smaller, occupying about 55 percent of frame so its whole tail and ornate lure have ample clear space. It is round and dark charcoal brown with small discrete short-spined bony skin plates, tiny natural eyes, strong protruding lower jaw and fine inward teeth, short narrow-based dorsal and anal fins set near the rear, small broad caudal fin with uninterrupted attachment. One stout comparatively short fishing stalk rises near front of head before eye and bears a gently blue-green glowing bulb with branching fine filaments and terminal paired appendages. Dim blue black water with only sparse marine snow, no seabed, plants, coral or sunbeams. Illuminate body softly so natural texture remains clear. Preserve anatomical connections of stalk, lure, paired pectoral fins, rear fins and tail. No attached parasitic males, additional rods, glowing skin, huge fangs, fantasy horns, extra fins or cropped body.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape natural-history illustration for a children's Sea Atlas, painterly realism matching the input. The supplied image is ONLY a species/color/style reference for an adult female Himantolophus groenlandicus, NOT a pose to preserve. Redraw the full fish in a strongly new three-dimensional camera view and fin gesture, not an old side silhouette mirrored or rotated. Scene: one Atlantic footballfish floating calmly in dark blue meso/bathypelagic midwater, no seabed and no prey. NEW CAMERA: HIGH REAR THREE-QUARTER view looking down at the back and one flank. The connected tail and stout caudal peduncle are nearest the camera at LOWER LEFT; the spherical body recedes toward the broad small-eyed head facing UPPER RIGHT, with the stout branched luminous fishing lure clearly rooted on the top/front of that distant head. Show a genuine receding top/back view rather than the old face-facing portrait. NEW POSE: the tail peduncle curves gently to the fish's left, with the tail fan tilted in perspective; the nearer pectoral fin spreads sideways as a small fan while the far fin is naturally foreshortened. The mouth is closed, not a gape demonstration. Dark charcoal/brown almost spherical female body with discrete embedded bony plates, each bearing a SHORT conical spine. Eyes SMALL. Lower jaw robust and protruding. One relatively short, thick fishing stalk arises before the eye on the upper front head and supports a fleshy luminous esca with delicate branching filaments and paired terminal appendages, connected continuously all the way to the head; soft pale blue-green lure light only. Small soft dorsal and anal fins posteriorly near the tail, small broad connected tail fin. NO pelvic fins and NO attached parasitic male, no long antennae, extra stalks, disconnected parts, exaggerated teeth or giant glowing eyes. Whole animal and every lure filament/fin/tail tip inside generous 15 percent margins, clear anatomy with subdued illustrative fill light. Do not add other animals, fantasy horns, humans, gore, text, labels, arrows, panels, frames or watermark. Calm refined scientific natural-history painting."
        ],
        "generatedAt": "2026-10-08T16:36:43.153Z",
        "checkedAt": "2026-10-11",
        "sha256": "34c6beac575dbe20ffd5ddcdf70e0897fd2eaab9d54c5162b5fee5125a96fc42",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Museums Victoria 초롱아귀과의 중층·심층 서식과 암컷 형태를 바탕으로 먹이 없는 유영을 재구성. 특정 운동학·시점 관측 사진 아님.",
        "behaviorSources": [
          {
            "title": "Museums Victoria — Himantolophidae",
            "url": "https://fishesofaustralia.net.au/home/family/181"
          }
        ],
        "viewpoint": "꼬리가 가까운 뒤쪽 위 사선",
        "pose": "근측 꼬리 왼쪽 아래, 둥근 몸과 머리 오른쪽 위로 멀어짐·근측 가슴핀 옆으로 펼침",
        "poseVariationCheck": "꼬리와 등 뒤쪽이 전경 왼쪽 아래에 커지고 입/머리는 멀어지는 실제 높은 뒤 사선. 꼬리자루가 연속 휘고 근측 가슴핀은 옆으로 펼쳐지며 먼 핀은 단축된다. 기존 세 앞/옆 컷 및 second 낮은 앞 컷과 카메라·핀 평면/입 상태가 다르다.",
        "visualLimitations": "작은 핀살 전체와 미끼 끝 모든 갈래 수는 전수 계수하지 않음. 먼 핀 뿌리는 몸 겹침에 일부 가려진다. FishBase의 종별 esca 부속지 길이·짝 배열과 등 5–6/뒷 4 연조의 정확 계수는 이 회화적 막결에서 인증하지 않는다. 과 형태에 부합하는 교육 재구성이며 전문 종 인증이 아니다."
      }
    ]
  },
  {
    "id": "red-paper-lantern-jelly",
    "name": "붉은종이초롱해파리",
    "scientificName": "Pandea rubra",
    "group": "자포동물",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "summary": "붉은 종이초롱처럼 생긴 작은 해파리예요. 우산을 접었다 펴며 물속을 헤엄쳐요.",
    "identity": [
      "높은 종 모양 우산 안쪽은 붉고, 아래 가장자리에는 가느다란 촉수가 나 있어요. 우산이 접힐 때 나타나는 근육 그물 모양도 특징이에요."
    ],
    "ecology": "차갑고 어두운 바다에서 우산을 오므렸다 펴며 움직여요. 깊은 바다에 사는 다른 작은 떠다니는 동물들과 함께 살아가요.",
    "diet": "크릴과 요각류 같은 작은 갑각류를 먹어요.",
    "range": "세계 여러 바다에 분포해요.",
    "size": "우산 크기가 약 7.5 cm까지예요. 촉수를 포함한 전체 길이와는 다른 기준이에요.",
    "depth": "수면 가까이부터 약 3,000 m까지 기록돼요.",
    "aliases": [
      "붉은종이초롱해파리",
      "Red paper lantern jelly"
    ],
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Red paper lantern jelly",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/red-paper-lantern-jelly"
      },
      {
        "title": "WoRMS — Pandea rubra, taxonomist-checked image from Lindsay et al. 2008",
        "url": "https://www.marinespecies.org/photogallery.php?album=674&pic=171295"
      },
      {
        "title": "Monterey Bay Aquarium — Taking seawater to the extreme",
        "url": "https://www.montereybayaquarium.org/about-us/stories/taking-seawater-extreme-deep-sea-exhibit"
      }
    ],
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "red-paper-lantern-jelly",
        "src": "assets/images/red-paper-lantern-jelly-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은종이초롱해파리 · 붉은 세로 주름과 가는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "Pandea rubra의 높은 붉은 반투명 우산과 세로 접힘, 가장자리에 연결된 가는 다수 촉수, 중앙 구병을 원본에서 확인. 빗판·네 리본 입팔·네온 발광 없으며 전신과 촉수 끝이 화면 안에 있다.",
        "generationPrompts": [
          "Create ONE landscape 3:2 finished image for a Korean children's marine natural-history atlas. A single complete red paper lantern jelly Pandea rubra in dark deep open seawater, realistic detailed painterly scientific illustration, clear anatomy, calm observation illumination, rich natural colors, suitable for ages 5–12. Show the animal in a clean slightly low three-quarter frontal portrait, entirely in frame. Its tall translucent deep-red bell resembles a paper lantern: a rounded upper dome narrows softly toward the opening below, with conspicuous VERTICAL folded ribs of red tissue and darker red muscle strands, not a flat saucer or ctenophore sphere. The bell is compact, approximately 7.5 centimeters at maximum, represented without any size labels. Numerous extremely fine naturally dark red tentacles attach continuously in a single ring around the bell margin and trail below and outward in orderly separate long curves; the entire tentacles and tips stay in frame, with a generous dark-water margin. Each tentacle is thin, not a giant thick oral ribbon. A simple central reddish mouth/manubrium remains anatomically attached inside the bell opening. No broad frilly oral arms, no comb rows, no eight neon rainbow stripes, no additional animal bell, no tentacles growing from the top, no disconnected floating filaments. The jelly does not emit neon red light; natural red tissue is softly lit from a neutral distant observation light. Deep navy-black water, few small suspended particles, no sunny shallow reef or sea floor. No text, labels, borders, split panels, collage, logos or watermarks."
        ],
        "generatedAt": "2026-10-07T11:34:57.283Z",
        "checkedAt": "2026-10-08",
        "sha256": "7769e6e5b7a87d2c573a58a729a30fc5f4cc2460baa46b0063c17971e2828e15",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "red-paper-lantern-jelly",
        "src": "assets/images/red-paper-lantern-jelly-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은종이초롱해파리 · 작은 갑각류 먹이와 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "높은 붉은 우산·가는 가장자리 촉수 연결과 전신이 유지됨. 몸 밖의 작은 크릴/요각류형 먹이와 촉수 끝의 근접/접촉은 수족관이 제시한 크릴·요각류 식단과 부합하며 조직 속 먹이 또는 고어 없음.",
        "generationPrompts": [
          "ONE landscape 3:2 finished realistic painterly scientific marine natural-history illustration, suitable for ages 5–12, no text, labels, frames, montage, split panels, logos or watermark. A single complete red paper lantern jelly Pandea rubra seen in a gentle diagonal SIDE view, its tall lantern-shaped natural deep-red bell placed at upper right and numerous THIN red marginal tentacles drifting toward the lower left. The entire jelly and every long tentacle tip are inside the frame with open-water margins. The translucent bell has strong vertical folded pleats and red internal muscle ribs, a rounded top and softly narrowed opening, with one simple small attached central mouth organ; no broad oral ribbon arms, no ctenophore comb rows, no neon patterns. A food encounter with only THREE much smaller realistic crustacean plankton: a tiny slender krill and two small copepods float close to the outward tentacle ends. The krill sits gently against ONE tentacle near its tip, with clear connected eye, antennae and tail; the other plankton are separate and freely floating. This reconstructs the jelly's known krill-and-copepod diet and is bloodless, calm, without injured prey or an open gory mouth. One thin tentacle touches a small prey naturally, not a tentacle knot or a net, and no object appears inside the bell. Deep dark navy midwater background with sparse particles, neutral soft observation light makes red tissue visible without self-emitted glow. Include the full tall red bell, all attached tentacles, intact curled tips and small prey."
        ],
        "generatedAt": "2026-10-07T11:36:23.674Z",
        "checkedAt": "2026-10-08",
        "sha256": "a0b1860dd360d209c6c3f8c3c14c2723a736a2d7102dfdd2867b2813af2d3240",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "기관에 적힌 krill/copepod 식단을 근거로 작은 먹이와 촉수 접촉을 재구성. 특정 야생 포획을 촬영한 장면이 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Red paper lantern jelly, krill and copepods diet",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/red-paper-lantern-jelly"
          }
        ]
      },
      {
        "id": "red-paper-lantern-jelly",
        "src": "assets/images/red-paper-lantern-jelly-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "붉은종이초롱해파리 · 우산을 접으며 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "높은 붉은 우산이 접혀 약간 기울고 모든 긴 가는 촉수가 가장자리에서 이어져 흐른다. 세로 접힘/근육 모양과 전신이 유지되어 수족관의 우산 수축 설명에 부합. 빗판 또는 다른종 입팔 없음.",
        "generationPrompts": [
          "Create ONE landscape 3:2 realistic painterly marine natural-history illustration for a Korean children's atlas, ages 5–12. Ecology scene of ONE complete red paper lantern jelly Pandea rubra swimming by gently pulsating its bell in cold deep pelagic water. A HIGH, slightly rear-oblique camera angle looks down toward the animal, which is diagonally oriented at the center-left, with spacious dark open water all around. The tall lantern-shaped bell is partly contracted: a rounded top and strongly VERTICAL red folds drawn inward near the opening, like soft organic pleated tissue, still translucent natural wine-red and with dark red muscle network. Many long, exceptionally thin dark red marginal tentacles attach continuously around the lower opening and drift back and down in separated curves, all intact tips fully INSIDE the frame. The central attached mouth organ is simple and mostly hidden by this angle. This is one moment of swimming, not a before-and-after chart. The tentacles and bell do not emit neon light. No huge broad oral ribbons, no detached tentacles, no ctenophore comb rows, no star-shaped crest or terrestrial lantern strings. Only a few distant tiny particles establish the deep-water setting; no fish swarm, coral, seabed, sunlight or aquarium equipment. Soft neutral illumination reveals delicate transparency and water movement subtly, without motion trails or lasers. The bell and all thin tentacles are one connected animal. No text, labels, frames, divided panels, logos or watermarks."
        ],
        "generatedAt": "2026-10-07T11:37:43.719Z",
        "checkedAt": "2026-10-08",
        "sha256": "7b1b35e0e40e6a185af2befe1c202b41ad609e45f70341264cbae4e95c9cea0e",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "수족관의 우산 주름과 수축·이완 관찰 설명을 근거로 한 생태 재구성. 한 순간의 삽화로 시간 순서 실측도가 아님.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Red paper lantern jelly, vertical folds and pulsation",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/red-paper-lantern-jelly"
          }
        ]
      }
    ]
  },
  {
    "id": "silky-jelly",
    "name": "무지개곤봉해파리",
    "scientificName": "Colobonema sericeum",
    "group": "자포동물",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "depthZoneIds": [
      "twilight"
    ],
    "summary": "투명한 우산 아래로 가느다란 촉수를 펼치는 해파리예요. 위험을 느끼면 우산을 힘차게 움직여 빠르게 도망칠 수 있어요.",
    "identity": [
      "투명한 높은 우산과 우산 가장자리에 이어지는 여러 촉수가 있어요. 빛을 비추면 촉수가 푸르게 보일 수 있지만 촉수 자체가 푸른빛을 내는 것은 아니에요."
    ],
    "ecology": "쉴 때에는 촉수를 펼쳐요. 놀라면 우산을 빠르게 오므려 달아나고, 끈적한 촉수를 떨어뜨려 포식자를 헷갈리게 할 수도 있어요.",
    "diet": "작은 갑각류와 해파리, 물고기를 먹어요.",
    "range": "태평양·대서양·인도양에 분포해요.",
    "size": "우산 지름이 약 4.5 cm까지예요.",
    "depth": "MBARI 소개에서는 약 200–700 m의 어스름한 물속에 살아요. 이 값은 소개된 관측 범위이며 모든 지역의 최대 수심을 뜻하지는 않아요.",
    "aliases": [
      "무지개곤봉해파리",
      "Silky jelly",
      "Silky medusa",
      "ニジクラゲ"
    ],
    "sources": [
      {
        "title": "MBARI — Silky jelly",
        "url": "https://www.mbari.org/animal/silky-jelly/"
      },
      {
        "title": "WoRMS — Colobonema sericeum, accepted species",
        "url": "https://www.marinespecies.org/aphia.php?id=117854&p=taxdetails"
      },
      {
        "title": "JAMSTEC BISMaL — Colobonema ニジクラゲ属 and C. sericeum observation",
        "url": "https://www.godac.jamstec.go.jp/bismal/j/view/0001184"
      }
    ],
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "silky-jelly",
        "src": "assets/images/silky-jelly-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "무지개곤봉해파리 · 투명한 우산과 빛을 반사하는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "Colobonema sericeum의 투명한 높은 우산·가느다란 방사관·중앙 구병과 가장자리에서 이어진 청색 반사 촉수가 보인다. 말린 촉수의 휴식 모습과 전신이 유지됨. 빗해파리 빗판이나 네온/자가발광 촉수로 표현되지 않았다.",
        "generationPrompts": [
          "Create ONE 3:2 landscape finished scientific natural-history marine illustration for children ages 5–12, detailed realistic painterly tissue, calm lighting and clear silhouette. PORTRAIT of a single complete silky jelly Colobonema sericeum in blue-black open midwater. Its SMALL translucent colorless bell is slightly conical, approximately as high as it is wide, with a gently rounded top, no pointed apex. Inside the clear bell are EIGHT thin simple radial canals and a slender attached central tubular manubrium with small plain lips, no elaborate oral ribbons. It naturally has 32 marginal tentacles: represent a single evenly spaced ring of numerous clear blue-tinted slender solid tentacles rooted continuously around the bell's lower edge, no other tentacle roots on the top or sides. At rest the tentacles spread radially out and down, with subtly paddle-shaped portions and loosely coiled intact tips. Show the entire bell and all these tentacle tips inside the frame, generous water margins. Tentacles can look softly blue only because neutral observation illumination is reflected; do NOT add self-emitted blue light, a luminous halo, glowing tentacle tips or eight neon comb stripes. This is a cnidarian medusa, not a rainbow comb jelly, not a large Aurelia saucer and not a reddish Crossota medusa. The animal occupies about 55 percent of frame width including its separated spread-out tentacles. Deep navy water with sparse marine snow and restrained neutral side illumination, no seafloor, coral, surface sunshine, equipment or other animals. No text, labels, border, collage, panels, logos, or watermark."
        ],
        "generatedAt": "2026-10-07T11:40:31.281Z",
        "checkedAt": "2026-10-08",
        "sha256": "cd051a14d2064348dea9354f2147c7cb4bb161b968a8136c976d4cadc52d54a8",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "silky-jelly",
        "src": "assets/images/silky-jelly-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "무지개곤봉해파리 · 작은 갑각류 먹이 가까이 촉수 펼치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "투명 우산·방사관·가장자리 촉수 연결이 유지되고 몸 바깥의 작은 요각류형 갑각류가 말린 촉수 가까이에 있다. MBARI의 작은 갑각류 식단/휴식 시 촉수로 먹이 포획 설명과 부합. 조직 속 먹이·확정된 삼킴 없음.",
        "generationPrompts": [
          "ONE 3:2 landscape scientific natural-history illustration for a Korean children's marine atlas, detailed realistic painterly style, no text, labels, frames, panels, collage, logo or watermark. Show ONE complete silky jelly Colobonema sericeum seen from a slightly low oblique SIDE view in dark blue open midwater. A small translucent colorless bell, slightly conical and approximately as high as wide, has no apical spike; inside are eight narrow plain radial canals and a slim central attached tubular mouth organ ending in short simple lips. A single ring of about 32 naturally blue-tinted, slender solid marginal tentacles attaches continuously to the lower bell edge and spreads outward and down, some tips gently coiled and some extended. Every tentacle tip stays INSIDE the frame with generous margins and visible attachment to the bell. Arrange the subject at center-right, gently tilted, leaving room for THREE much smaller copepod-like crustacean plankton in the surrounding water near the tentacle tips. One copepod is at a tentacle's tip while the others float nearby; no internal prey, gore, injured animals or fantasy net. The known crustacean diet supports this modest feeding reconstruction, which is not a documentary photograph of a witnessed hunt. Tentacles show only soft blue reflective coloration under neutral observation illumination, never self-generated blue light or a glowing halo. No ctenophore comb rows, rainbow neon stripes, broad frilly oral arms or detached filaments. Natural cold pelagic atmosphere and sparse suspended particles, without sea floor, shallow coral or surface rays. Anatomical clarity and whole-animal framing are essential."
        ],
        "generatedAt": "2026-10-07T11:41:34.849Z",
        "checkedAt": "2026-10-08",
        "sha256": "95201f12b284deaf8aeda97518d6aeddfaf0070dc8984c965ab9daa7610be976",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "MBARI의 small crustaceans 식단에 근거한 작은 갑각류와 촉수 근접 재구성. 직접 촬영한 성공 포식이 아님. 촉수의 파란색은 반사.",
        "behaviorSources": [
          {
            "title": "MBARI — Silky jelly diet and reflected tentacle color",
            "url": "https://www.mbari.org/animal/silky-jelly/"
          }
        ]
      },
      {
        "id": "silky-jelly",
        "src": "assets/images/silky-jelly-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "무지개곤봉해파리 · 우산을 좁히고 촉수를 뒤로 뻗어 헤엄치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "가늘고 길어진 투명 우산과 연결된 긴 청색 반사 촉수들이 진행 방향 뒤로 늘어진 모습. MBARI의 수축 시 우산이 관 모양이 되고 촉수가 길게 펴지는 관측 설명에 부합. 전신과 촉수 끝이 화면 안에 있다.",
        "generationPrompts": [
          "ONE finished landscape 3:2 realistic painterly scientific natural-history marine illustration for children ages 5–12, no text, labels, border, montage, panels, logos or watermark. A single complete silky jelly Colobonema sericeum moving quickly through dark pelagic seawater, the scientifically observed fast-swimming posture. View from the opposite high three-quarter SIDE angle: a small translucent COLORLESS bell has contracted from a rounded dome into a somewhat narrower tubular cone, still a soft jelly bell with rounded top, not a rigid rocket and no apex spike. Eight thin natural internal radial canals and one slender attached tubular mouth organ are visible through the bell, without decorative comb rows. About 32 slender solid blue-reflective marginal tentacles are continuously connected in one ring around the lower bell opening. In this swimming moment most tentacles straighten and trail behind the jelly toward the left in separate gentle long curves rather than evenly splaying all around; a few intact distal tips remain slightly curved. The entire bell and every tentacle tip are fully within the frame, with generous dark-water margins. Tentacles look softly blue under neutral observation lighting, NOT because of bioluminescence: absolutely no luminous tentacle dots, glowing halos, eight neon stripes, trailing lasers, electric arcs, or bright colored aura. No predator, no detached tentacles, no bloody attack, no self-amputation scene. Tiny sparse suspended marine particles are the only background elements; no coral, sea floor, aquarium equipment, surface sunshine or motion-line graphics. Emphasize transparent jelly tissue, connected bell-to-tentacle anatomy, and a quiet natural three-dimensional pose."
        ],
        "generatedAt": "2026-10-07T11:42:50.910Z",
        "checkedAt": "2026-10-08",
        "sha256": "f612b7b89d51b90b4d254c061c8a700a2b472131bcb3e254ece93b91fee8c034",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI 관찰과 swimming 연구의 좁아진 우산 및 길게 뻗은 촉수를 바탕으로 한 생태 재구성. 촉수는 푸른 반사를 보일 뿐 자체 발광하지 않음.",
        "behaviorSources": [
          {
            "title": "MBARI — Silky jelly, fast swimming and blue reflection",
            "url": "https://www.mbari.org/animal/silky-jelly/"
          },
          {
            "title": "Meech et al. — Two swimming modes in Trachymedusae",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8180259/"
          }
        ]
      }
    ]
  },
  {
    "id": "wolftrap-anglerfish",
    "name": "늑대덫아귀",
    "scientificName": "Thaumatichthys axeli",
    "group": "어류",
    "habitatIds": [
      "deep"
    ],
    "summary": "넓은 입 안에 미끼를 숨긴 심해 아귀예요. 턱과 이빨은 작은 덫처럼 생겼어요.",
    "identity": [
      "늑대덫아귀 무리에서 고른 대표종이에요.",
      "넓게 튀어나온 윗턱과 휘어진 긴 이빨이 있어요. 입천장 안쪽의 미끼는 한 뿌리에서 두 갈래로 나뉘어요. 머리 위에 긴 낚싯대는 없어요."
    ],
    "ecology": "아주 깊은 바다 바닥 가까이에서 살아요. 덫 같은 턱의 움직임과 먹이 유인 방식은 표본 연구를 바탕으로 알려졌고, 살아 있는 행동 자료는 적어요.",
    "diet": "작은 바다 동물을 입 안으로 유인할 것으로 추정해요. 정확한 먹이 종류와 살아 있는 사냥 모습은 아직 자료가 적어요.",
    "range": "동태평양의 깊은 바다에서 기록돼요. 캘리포니아 남부와 바하칼리포르니아 북부에도 기록이 있어요.",
    "size": "FishBase 기록: 암컷 표준길이 최대 36.5 cm, 수컷/성별 미상 3.6 cm. 꼬리지느러미를 제외한 길이예요.",
    "depth": "알려진 표본의 포획 수심은 3,570–3,695 m. 적은 표본의 기록 범위이며 종의 모든 생활 수심을 뜻하지는 않아요.",
    "sources": [
      {
        "title": "FishBase — Thaumatichthys axeli",
        "url": "https://www.fishbase.se/summary/52839"
      },
      {
        "title": "FishBase — Thaumatichthys axeli ecology, Bertelsen & Struhsaker 1977",
        "url": "https://fishbase.se/Ecology/Thaumatichthys_axeli"
      },
      {
        "title": "California Academy of Sciences — Eschmeyer’s Catalog, Thaumatichthys axeli",
        "url": "https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=13103"
      }
    ],
    "depthZoneIds": [
      "midnight"
    ],
    "aliases": [
      "Wolftrap anglerfish",
      "Prince Axel's wonderfish",
      "늑대덫아귀(Thaumatichthys axeli 대표종)"
    ],
    "featured": false,
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "wolftrap-anglerfish",
        "src": "assets/images/wolftrap-anglerfish-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "넓게 앞으로 나온 위턱과 입 안의 미끼를 가진 늑대덫아귀예요.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 낮고 넓게 앞으로 나온 위턱, 작은 뒤쪽 눈, 입천장 하나의 뿌리에 연결된 두 갈래 미끼, 몸과 꼬리·지느러미 연결을 확인.",
        "generationPrompts": [
          "Use case: scientific-educational. One standalone 3:2 landscape realistic natural-history painted illustration, no letters, labels, panels, watermark or collage. Subject is a real adult female wolftrap anglerfish Thaumatichthys axeli, NOT a generic anglerfish. Show complete body in a front-left three-quarter view above a dim deep-ocean mud floor, all tail and fins visible within generous 15 percent margins. Soft dark brown broad low head and relatively small posterior body; extremely broad flattened forward-projecting U-shaped upper jaw extending far in front of narrower lower jaw, rows of long slender inward-curving hooked teeth on the sides of both jaws. The broad projecting upper lip has small tactile papillae. Very small eyes set behind the projecting upper jaw. The lure is a small softly luminous fleshy two-lobed structure suspended from the ROOF INSIDE the large open mouth, with one paired set of lateral lobes and delicate end filaments. Do not put a fishing stalk, pole or light bulb on top of the head. Compact small posterior dorsal and anal fins, paired pectorals close to body, short tail attached seamlessly through a clear caudal peduncle. Calm educational body posture, mouth naturally partly open so internal lure is visible. Black blue deep water, muted brown sediment, enough scientific soft light to inspect body; only mouth lure faintly blue-green glowing. Every jaw, tail, fin and internal lure visibly continuous with the one animal. Avoid round footballfish body, huge eyeballs, head-top rod, extra limbs, detached tail, fantasy trap hardware, blood or prey."
        ],
        "generatedAt": "2026-10-07T11:35:28.467Z",
        "checkedAt": "2026-10-08",
        "sha256": "4432557c610744e1a93b64268f561db0ab7bf215077bc7326568a8e36da50041",
        "width": 1535,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "wolftrap-anglerfish",
        "src": "assets/images/wolftrap-anglerfish-chatgpt-ecology2-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "늑대덫아귀 · 앞에서 본 넓은 턱과 입 안의 미끼",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "넓고 낮은 앞으로 나온 윗턱·작은 양눈·턱뿌리에 이어진 곡선 치아·입천장 한 공통뿌리에서 두 엽으로 나뉜 미끼·연결 몸과 꼬리·짝 가슴핀을 확인했다. 머리 위 외부 낚싯대 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. One 3:2 landscape realistic natural-history painted illustration, no words, labels, watermark, grid, collage or border. Show complete adult female Thaumatichthys axeli wolftrap anglerfish waiting close above deep-ocean muddy seabed in side-left three-quarter view. Broad low dark brown head with very large flattened upper jaw jutting forward beyond the smaller lower jaw like a wide open U-shaped canopy; long slender curved needle teeth at jaw margins, tiny eyes set rearward. A pair of faintly blue-green luminous fleshy lateral lure lobes hang only from the roof INSIDE THE MOUTH with delicate filaments, clearly anatomically attached to the palate. NO external head-top fishing rod. The mouth remains moderately open as a possible tiny prey silhouette approaches but stays entirely OUTSIDE the mouth; do not show swallowing or assert a documented specific prey. This is an educational reconstruction of trap-like jaw morphology and waiting behavior, because live feeding evidence for this rare species is limited. Show whole posterior body and modest dorsal/anal/pectoral fins and short caudal fin connected visibly, 15 percent framing margins. Dim black blue water and sparse marine snow; no sunlight or reef. Natural proportions, restrained lure glow, no violence, blood, detached anatomy, machinery or monstrous oversized teeth.",
          "Use case: scientific-educational. Edit the supplied natural-history illustration only to correct the wolftrap anglerfish Thaumatichthys axeli mouth lure. Preserve the complete fish, connected tail and fins, pose, teeth, broad projecting upper jaw, small prey outside the mouth, seabed, light, natural textures and 3:2 framing. Inside the mouth, REMOVE the two separate long light stalks with separate attachment roots. Replace them with ONE clearly visible short common fleshy base attached centrally to the roof of the mouth; from this one base, the esca branches into TWO lateral soft lobes, each with delicate filaments and restrained pale blue-green glow. Both lobes must visibly join the same short single base, a compact bifurcated organ, not two rods hanging separately. Make the shared junction unambiguous and illuminated enough to inspect. Do not add any head-top fishing rod or any third lobe. This is a precise local anatomical correction; everything else stays consistent with the source illustration. No text, labels, arrows, panels or watermark.",
          "Use case: scientific-educational. Create ONE genuinely new 3:2 landscape natural-history illustration for Sea Atlas ages5–12, refined realistic painterly style. Female Thaumatichthys axeli. Input is ONLY identity/color/style reference, NEVER trace its side pose. NEW CAMERA is LOW ALMOST FRONTAL three-quarter, close to the broad jaws facing camera lower RIGHT, body and full tail recede behind toward upper LEFT. Strong 3D shortening: see BOTH small posterior eyes UNEQUALLY behind the wide upper jaw; mouth looks broad and shallow front-to-back, tail smaller in depth. Do not produce a left-facing or right-facing flat side fish. NEW POSE: gently bank body, near rounded pectoral out/down into camera, far pectoral higher/out and foreshortened, slightly curved connected caudal peduncle and oblique tail fan. Wide LOW FLATTENED upper jaw projects strongly forward over a narrower lower jaw. Long slender hooked natural teeth physically rooted along jaw edges, not detached spikes; moderate natural gape, not horror expression. Critical mouth lure: from ONE SHORT COMMON ROOT on the roof of mouth, a SINGLE little stalk immediately splits into TWO soft glowing fleshy lobes; visibly shared Y-shaped root, not two separate rods rooted separately and not four lobes. Tiny faint local pale glow only. NO external forehead fishing pole, no giant lantern. Dark brown natural soft skin, small eyes far behind upper jaw, natural paired pectoral, posterior dorsal/anal and complete connected caudal fan; no legs, feet, extra tail or pelvic fins. Dark very deep water close to seabed, gentle neutral fill light reveals anatomy. NO food, no shrimp, no prey, no swallowing: precise diet and live hunting remain unconfirmed, this is observation/ecology reconstruction. Whole fish and every fin/complete tail inside generous margins. No text, labels, panels, grid, arrows, watermark, gore, cartoon eyes or fantasy. Change the actual 3D viewpoint AND fin/body state, not a mirror or rotation."
        ],
        "generatedAt": "2026-10-10T15:44:01.932Z",
        "checkedAt": "2026-10-11",
        "sha256": "3e12357f010b182cd93d1a234fa9923bd11b5b202b83079e414650744a020869",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "FishBase의 Bertelsen & Struhsaker 턱/미끼 연구와 해저 수심 기록을 바탕으로 입 안 미끼 관찰을 재구성. 정확한 종 식단·실제 사냥 미확인이므로 먹이 없음.",
        "behaviorSources": [
          {
            "title": "FishBase — Thaumatichthys axeli ecology",
            "url": "https://fishbase.se/Ecology/Thaumatichthys_axeli"
          }
        ],
        "viewpoint": "넓은 턱이 가까운 앞 사선, 뒤몸과 꼬리가 왼쪽 위로 후퇴",
        "pose": "몸은 완만히 휘고 가까운 가슴핀은 옆 아래, 먼 핀은 뒤 위로 펼침",
        "poseVariationCheck": "낮은 앞쪽에서 입이 넓은 전경을 차지하고 양눈이 보이며 뒤 몸/꼬리가 왼쪽 위로 단축되는 새 원근. 가까운 가슴핀은 옆으로 펼치고 먼 것은 단축되어 실제 카메라와 핀/입 상태가 달라졌다. 기존 옆면과 second 등뒤 사선과 구별된다.",
        "visualLimitations": "정확한 치열 및 관망은 전문감수 필요. 실제 섭식 미확인으로 먹이 없음 입천장 미끼 공통뿌리와 두 엽은 확인했지만 가는 escal filament 계수·등 6/뒷 4 ray 미세계수는 인증하지 않는다. 바닥 가까운 먹이 없는 재구성이며 종별 포식 성공이나 활동 속도는 주장하지 않는다."
      },
      {
        "id": "wolftrap-anglerfish",
        "src": "assets/images/wolftrap-anglerfish-chatgpt-ecology-second-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "늑대덫아귀 · 뒤쪽 위에서 본 넓고 납작한 머리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "넓게 돌출한 윗턱의 윗면·작은 눈·턱에 붙은 치아·입천장 공통뿌리에서 두 빛 엽으로 분기하는 미끼·몸에서 꼬리까지 연속 연결과 가슴핀을 확인했다. 외부 낚싯대 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. Create ONE 3:2 landscape realistic natural-history educational illustration, no text, labels, watermark, border, collage or grid. Whole female Thaumatichthys axeli wolftrap anglerfish shown at modest scale 50 percent frame from an elevated oblique front-side view, quietly hovering centimeters above featureless muddy seabed near 3600 m. A distinct wide low flattened upper jaw extends forward far beyond the smaller lower jaw. Very small rearward eyes; dark brown broad head tapering to a compact smaller body. Mouth partly open, enough to glimpse a single central palate stalk ending in ONE paired set of two softly glowing fleshy lure lobes with fine filaments INSIDE mouth. Lure bases connect in the mouth roof; there is no external fishing pole on the head. Rows of inward hooked long slender teeth stay anatomically along jaw margins. Small back dorsal and anal fins, pectorals, short visible tail and connected caudal peduncle. Every body part connects, complete uncropped outline with wide margins. Muddy deep seafloor receding into black-blue water, no reef or surface light, subtle marine snow. Expedition-like gentle anatomical illumination; luminous lure remains restrained, no glowing skin. Calm nonviolent educational reconstruction of benthic habitat, no prey, injuries, robot trap jaws or detached parts.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE female Thaumatichthys axeli. NEW HIGH REAR three-quarter camera: complete tail nearest LOWER RIGHT, rear body recedes toward broad flattened head far UPPER LEFT. Look down on wide low upper jaw and back, not a normal side head and tail profile. Moderate continuous curve through rear body/caudal peduncle, near pectoral fan angled outward/up and far fan lower/foreshortened, tail fan in a new plane. Broad low upper jaw projects far forward over narrower lower jaw, small natural posterior eyes, hooked slender long teeth physically rooted in jaws. Mouth moderately parted. Intrabuccal lure is ONE SHORT SHARED STALK/ROOT from roof of mouth that bifurcates into TWO fleshy lobes; if this rear view hides it naturally, do NOT invent an external lure or show two separate roof roots. No upright forehead fishing pole or external lamp. Natural dark brown smooth soft body, connected caudal tail and posterior fins, no invented legs or armor. Very deep dark seafloor nearby, one animal only, no prey or fictional capture. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo."
        ],
        "generatedAt": "2026-10-10T15:58:36.580Z",
        "checkedAt": "2026-10-11",
        "sha256": "15667b002073888805e56de9638463e150803b07093b1599ef8401f641648c9d",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "FishBase의 Thaumatichthys axeli 깊은 해저 기록과 Bertelsen & Struhsaker 입 안 미끼 형태 연구를 바탕으로 관찰 재구성. 살아 있는 사냥·정확한 식단을 확정하지 않고 먹이 없음.",
        "behaviorSources": [
          {
            "title": "FishBase — Thaumatichthys axeli",
            "url": "https://www.fishbase.se/summary/52839"
          }
        ],
        "viewpoint": "높은 뒤 사선. 꼬리는 오른쪽 아래 가까움, 머리는 왼쪽 위 멀어짐",
        "pose": "뒤 몸통의 완만한 굽힘, 양 가슴핀 새 투영과 넓게 벌린 입",
        "poseVariationCheck": "가까운 꼬리를 오른쪽 아래에, 납작한 머리를 왼쪽 위 먼 곳에 놓아 등면과 머리 윗면을 보는 실제 높은 뒤 사선이다. 몸/꼬리자루가 휘고 가까운 가슴핀은 아래로 펼치며 먼 것은 단축된다. first 앞 시점과 기존의 옆/앞 시점에서 실제 두 축 변화가 보인다.",
        "visualLimitations": "입은 요청보다 넓게 벌려 실제 상태로 기록. 윗면 비율과 관망 미세형태는 전문검증 미실시 입이 주문보다 열렸지만 실제 메타데이터로 설명 가능하며 종 형태를 위반하지 않는다. 일부 등/먼 핀은 몸/시점에 겹쳐 ray 계수를 검증할 수 없다. 특정 관측 위치/운동학의 재현이라고 주장하지 않는다."
      }
    ],
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "종별 식단과 실제 사냥 자료가 부족해 미끼를 펼친 관찰 구도와 해저 생태 구도로 대체한다. 특정 갑각류 포획 성공으로 표시하지 않는다."
  },
  {
    "id": "phantom-anglerfish",
    "name": "심해투명아귀",
    "scientificName": "Haplophryne mollis",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "summary": "몸에 색소가 거의 없어 속이 비치는 작은 심해 아귀예요. 눈 위와 입 뒤에 뾰족한 돌기가 있어요.",
    "identity": [
      "몸이 반투명한 작은 아귀예요. 투명머리물고기와는 다른 종이에요.",
      "둥근 몸과 작은 이빨이 많은 입, 눈 위와 입 뒤의 가시가 특징이에요. 머리 앞에는 긴 낚싯대 대신 둥근 피부판이 붙어 있어요.",
      "몸 뒤쪽의 등지느러미와 뒷지느러미에는 각각 세 개의 줄기가 있어요."
    ],
    "ecology": "어둑한 바다에서 더 깊은 바다까지 물속을 떠다녀요. 아주 작은 수컷이 암컷에 붙어 지내며 한 암컷에 여러 수컷이 붙은 표본도 있어요.",
    "diet": "확인한 자료에는 이 종의 자세한 먹이 목록이 없어요. 특정 동물을 잡아먹는 그림 대신 입과 몸의 모습을 관찰해요.",
    "range": "열대와 아열대의 여러 바다 깊은 물속에서 기록돼요.",
    "size": "FishBase 최대 기록은 표준길이 15.9 cm. 암컷 8 cm에 길이 1.8 cm 수컷 세 마리가 붙은 표본도 기록돼요.",
    "depth": "어스름한 바다부터 빛이 닿지 않는 깊은 물속까지 살아요. FishBase의 최대 수심 기록은 약 2,250 m예요.",
    "sources": [
      {
        "title": "FishBase — Haplophryne mollis field guide",
        "url": "https://www.fishbase.se/FieldGuide/FieldGuideSummary.php?GenusName=Haplophryne&SpeciesName=mollis&print=&sps="
      },
      {
        "title": "Te Ara, Museum of New Zealand Te Papa Tongarewa — Phantom anglerfish",
        "url": "https://teara.govt.nz/en/photograph/5249/phantom-anglerfish"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "Phantom anglerfish",
      "Ghostly seadevil",
      "Soft leafvent angler",
      "심해투명아귀(설명용 이름)"
    ],
    "featured": false,
    "checkedAt": "2026-10-07",
    "reviewStatus": "source-checked-expert-review-pending",
    "gallery": [
      {
        "id": "phantom-anglerfish",
        "src": "assets/images/phantom-anglerfish-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "반투명한 몸과 둥근 피부판 미끼를 가진 심해투명아귀예요.",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "v2 원본을 실제 열어 창백하고 둥근 몸, 눈 위/입 뒤 가시, 낮고 둥근 납작 피부판 미끼, 연결 꼬리, 막이 각 3개의 주요 지지 줄기에 걸린 작은 후방 등·뒷지느러미를 확인.",
        "generationPrompts": [
          "Use case: scientific-educational. ONE standalone 3:2 landscape realistic natural-history painted marine illustration for ages 5–12, no letters, labels, panels, grid, collage, border or watermark. Subject is a real female Haplophryne mollis phantom anglerfish. Complete whole animal lateral three-quarter view facing left in dim deep blue midwater, occupying 60 percent frame with generous clear margins around every fin and tail. Body plump rounded, naturally pale creamy translucent gelatinous skin with faint internal shapes, not an entirely glass skeleton. Small dark natural eyes; short distinct bony spines above each eye and behind mouth corners, not spikes scattered over whole body. Large mouth with numerous modest fine needle teeth. Critically the illicium is a small ROUND FLESHY SKIN FLAP attached near the upper front of the head, lying against the forehead; no long upright fishing stalk, no branching luminous tentacles, no lightbulb lure. Small posterior dorsal fin with three simple soft rays and corresponding anal fin, small paired pectoral fins, clear caudal peduncle leading continuously to a small broad rounded tail fin. Preserve all body-fin-tail anatomical connections. No attached male in this portrait. Soft neutral lighting clarifies near-transparency against dark blue, no luminous eyes or luminous skin. No generic smooth black seadevil, frog legs, horns, huge monster teeth, detached anatomy, surface sunlight, plants or violence.",
          "Use case: scientific-educational. Edit the supplied Haplophryne mollis phantom anglerfish natural-history illustration with precise local anatomy corrections, preserving its 3:2 composition, complete connected body and tail, pale translucent skin, small eyes, bony spines above the eyes and behind the mouth, small teeth, original pose and dark midwater background. The small rear DORSAL fin must contain EXACTLY THREE simple distinct supporting soft rays. The small rear ANAL fin must likewise contain EXACTLY THREE simple distinct supporting soft rays. In each of these two fins, show one single thin membrane stretched between exactly three clearly countable unbranched main stems, with no extra strong radial lines, fine fan ribs or decorative striations that could be mistaken for additional rays. Reduce the existing fan fins accordingly. These are three-ray soft fins, not three bare spine horns. Leave pectoral and caudal fins natural and do not apply the three-ray rule to those fins. Also make the forehead lure a SMALL ROUNDED FLAT SKIN FLAP lying close against the front forehead, visibly joined to its skin along a short edge: no upright rod, no stem, no spherical glowing bulb. Preserve the skin spines and all whole-animal framing margins. Make no other compositional or behavioral change. No labels, numbers, text, arrows or watermarks."
        ],
        "generatedAt": "2026-10-07T18:03:33.737Z",
        "checkedAt": "2026-10-08",
        "sha256": "bf682119a8d07b91fc8109e58c61c3072ee97e140dc9e12de4f2508a9b091f36",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "phantom-anglerfish",
        "src": "assets/images/phantom-anglerfish-chatgpt-ecology2-second-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "심해투명아귀 · 앞 아래에서 본 피부판 미끼",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "무색 연한 둥근 반투명 암컷·작은 양눈·눈 위/입뒤 돌기·낮게 붙은 둥근 피부판 미끼·작은 많은 치아·짝 가슴핀·연속 꼬리를 확인했다. 뒤 등/뒷핀은 3개 주줄기가 보이며 외부 낚싯대/발광 구체 없음.",
        "generationPrompts": [
          "Use case: scientific-educational. One complete standalone 3:2 landscape realistic natural-history painted marine illustration, no text, labels, panels, grid, collage or watermark. A living female Haplophryne mollis phantom anglerfish floats calmly in dim blue midwater, mouth naturally ajar in a prey-search posture. No visible prey inside or outside mouth, because species-specific diet evidence is sparse; this educational scene shows searching rather than a documented successful hunt. Whole animal front-left three-quarter view occupying 60 percent of frame, generous clear margins. Rounded pale cream-pink nearly unpigmented translucent skin with subtle internal shapes; tiny dark eyes, short stiff bony spines ABOVE the eye and behind mouth corners. Large mouth with numerous small thin inward teeth. The head-top illicium is only a small round fleshy SKIN FLAP near front forehead, no rod, no luminous lightbulb. Smooth otherwise spineless body, two small pectoral fins; small far-back dorsal and anal fins each explicitly consist of THREE translucent supporting soft rays (not a dense fan), clear short caudal peduncle and small broad rounded caudal fin. Show uninterrupted connection of tail and all fins to body. Gentle neutral fill light, deep black-blue background, sparse particles; no glow from body or eyes, no bright surface beams. No attached males in this scene, generic black anglerfish, branched lure, huge fangs, detached parts, gore or cartoon face.",
          "Use case: scientific-educational. Edit the supplied Haplophryne mollis phantom anglerfish natural-history illustration with precise local anatomy corrections, preserving its 3:2 composition, complete connected body and tail, pale translucent skin, small eyes, bony spines above the eyes and behind the mouth, small teeth, original pose and dark midwater background. The small rear DORSAL fin must contain EXACTLY THREE simple distinct supporting soft rays. The small rear ANAL fin must likewise contain EXACTLY THREE simple distinct supporting soft rays. In each of these two fins, show one single thin membrane stretched between exactly three clearly countable unbranched main stems, with no extra strong radial lines, fine fan ribs or decorative striations that could be mistaken for additional rays. Reduce the existing fan fins accordingly. These are three-ray soft fins, not three bare spine horns. Leave pectoral and caudal fins natural and do not apply the three-ray rule to those fins. Also make the forehead lure a SMALL ROUNDED FLAT SKIN FLAP lying close against the front forehead, visibly joined to its skin along a short edge: no upright rod, no stem, no spherical glowing bulb. Preserve the skin spines and all whole-animal framing margins. Make no other compositional or behavioral change. No labels, numbers, text, arrows or watermarks.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE complete adult female Haplophryne mollis, no male needed in this scene. NEW LOW NEAR-FRONTAL camera: face/mouth closest at lower RIGHT, body slightly banked, tail recedes LEFT and behind; clearly see face with two tiny natural eyes at unequal perspective, not normal side profile. Near pectoral extended down/out and far pectoral angled up/out in another plane. Pale unpigmented translucent rounded body, no armor, no scales. Forehead lure is a small ROUNDED FLAT SKIN FLAP attached flush along short skin edge, NO stalk, rod, lamp or glowing bulb. Tiny numerous teeth in a modest small parted mouth, normal spines above eyes and behind mouth. Dorsal and anal soft fins EACH EXACTLY THREE main unbranched rays joined by ONE thin membrane, not extra repeated ribs or separated bare horns. Natural pectoral/caudal fan fins, no pelvic fins. Full connected caudal peduncle and complete tail in frame. No prey, no fictional hunting, dim deep open water. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo."
        ],
        "generatedAt": "2026-10-10T15:54:59.746Z",
        "checkedAt": "2026-10-11",
        "sha256": "e8209ab1c6cc1ae33bad1fe2e30c1aa7129f999e983cb45f29f12f5e32ad16fd",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "FishBase의 피부판 미끼·작은 치아·등3/뒷3연조 자료를 이용한 관찰 재구성. 미확인 식단·먹이 포획 없이 몸 구조만 표현.",
        "behaviorSources": [
          {
            "title": "FishBase — Haplophryne mollis field guide",
            "url": "https://www.fishbase.se/FieldGuide/FieldGuideSummary.php?GenusName=Haplophryne&SpeciesName=mollis&print=&sps="
          },
          {
            "title": "Te Ara / Te Papa — Phantom anglerfish",
            "url": "https://teara.govt.nz/en/photograph/5249/phantom-anglerfish"
          }
        ],
        "viewpoint": "낮은 거의 정면. 얼굴과 작은 입은 오른쪽 아래 앞, 꼬리는 왼쪽 뒤로 후퇴",
        "pose": "몸을 약간 기울이고 근측 가슴핀을 아래, 원측은 위로 펼친 서로 다른 핀 상태",
        "poseVariationCheck": "전경 오른쪽 아래의 앞얼굴과 양눈이 보이고 뒤 몸/꼬리는 왼쪽으로 단축된다. 근측 가슴핀은 아래로 펼치고 원측은 위로 단축되며 몸이 기울어 기존 옆컷·first 뒤 강한 원근과 실제 카메라 및 핀 상태가 다르다.",
        "visualLimitations": "배쪽이 완전히 보이지 않아 항문핀 광선 셋을 이 시점에서 확인 못함. 이마 피판의 미세 형태와 치열은 전문감수 필요 뒤 핀 일부 줄기는 몸 겹침에 가려 3개 주줄기의 막 세부를 전문 인증하지 않는다. 입이 주문의 작은 벌림보다 넓지만 먹이 없는 관찰 재구성으로 유지 가능하다. 미확인 먹이/포식 성공을 주장하지 않는다."
      },
      {
        "id": "phantom-anglerfish",
        "src": "assets/images/phantom-anglerfish-chatgpt-ecology-pose-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "심해투명아귀 · 뒤 사선에서 본 암컷과 붙은 수컷",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "무색 몸과 작은 먼 눈, 머리 위 낮은 판, 등지느러미의 세 지지줄기, 몸에서 이어진 짧은 꼬리자루와 꼬리부채, 배쪽에 입으로 붙은 작은 수컷을 확인했다. 별도 전구나 낚싯대는 없다.",
        "generationPrompts": [
          "Use case: scientific-educational. One 3:2 landscape realistic natural-history educational illustration, no words, labels, grids, panels, collage or watermark. Complete pale unpigmented translucent adult female Haplophryne mollis phantom anglerfish drifting in spacious dark deep-ocean midwater, seen from a slightly elevated clear left-side view, fish about 55 percent of canvas and all appendages inside generous margins. Rounded soft creamy body with subtly visible internal shapes, very small natural dark eyes, short bony spines above eyes and behind mouth corners. Fleshy small round skin-flap illicium rests at front forehead, NOT an upright fishing pole, no glowing lightbulb. Numerous fine small teeth in a partly closed mouth. Small rear dorsal and anal fins each with THREE distinct simple supporting soft rays, small paired pectorals, rounded tail continuously attached to short caudal peduncle. Include ONE very tiny naturally pale dwarf male (about one fifth female body length), anatomically attached by mouth to the female's lower abdominal skin, near but not obscuring posterior anal fin. The male has its own tiny body and tapered small tail, attachment unambiguous; no loose floating dismembered part, no male riding on top, no blood. The image is a biological educational reconstruction of parasitic attachment documented in museum specimens. Keep female and male whole, sufficiently illuminated for identification against dark blue-black water, sparse marine snow, no seabed, plants or surface sunlight. No glowing body or eyes, generic black seadevil, extra rods, giant spines, monster teeth, human objects or injury.",
          "Use case: scientific-educational. Edit the supplied Haplophryne mollis phantom anglerfish natural-history illustration with precise local anatomy corrections, preserving its 3:2 composition, complete connected body and tail, pale translucent skin, small eyes, bony spines above the eyes and behind the mouth, small teeth, original pose and dark midwater background, and the tiny male attached by his mouth to the female's underside. The small rear DORSAL fin must contain EXACTLY THREE simple distinct supporting soft rays. The small rear ANAL fin must likewise contain EXACTLY THREE simple distinct supporting soft rays. In each of these two fins, show one single thin membrane stretched between exactly three clearly countable unbranched main stems, with no extra strong radial lines, fine fan ribs or decorative striations that could be mistaken for additional rays. Reduce the existing fan fins accordingly. These are three-ray soft fins, not three bare spine horns. Leave pectoral and caudal fins natural and do not apply the three-ray rule to those fins. Also make the forehead lure a SMALL ROUNDED FLAT SKIN FLAP lying close against the front forehead, visibly joined to its skin along a short edge: no upright rod, no stem, no spherical glowing bulb. Preserve the skin spines and all whole-animal framing margins. Make no other compositional or behavioral change. No labels, numbers, text, arrows or watermarks.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape natural-history illustration for Sea Atlas, ages5–12, refined realistic painterly style. Input is only an IDENTITY, PALE COLOR and STYLE reference for Haplophryne mollis, NOT a pose or anatomy silhouette to trace. Redraw a genuinely different 3D camera and fin pose. One complete adult female phantom anglerfish and ONE tiny parasitic male attached by his mouth to her near ventral flank in dim dark-blue open midwater, no food or other animals. NEW CAMERA: rear three-quarter from slightly BELOW the female's right rear side. The entire connected caudal tail is nearest at lower LEFT; the pale rounded body recedes to the small-eyed head facing upper RIGHT. Show the near lower flank and a little belly, enough to see the male's mouth physically joined to the female skin. Clearly show a rear-looking view, NOT a broadside round fish just reversed. NEW POSE: modest continuous bend of the caudal peduncle toward the near left, tail fan oblique to camera, near pectoral fin extended outward/down and far pectoral naturally foreshortened. Mouth nearly closed with tiny teeth, not a gigantic gape. Adult female unpigmented, pale translucent pink-white skin and nearly round body, natural very small eyes, normal bony spines above eyes and behind mouth. Forehead lure is a SMALL ROUNDED FLAT SKIN FLAP lying close to the forehead and joined along a short skin edge, with NO upright stalk or pole, NO rod, NO glowing sphere. Crucial rear fin anatomy: dorsal soft fin and anal soft fin EACH have EXACTLY THREE clearly countable unbranched main supporting rays with ONE translucent membrane between those three stems. No extra strong fan ribs, decorative radiating lines, fine repeated striations, five-ray fan or three bare separated horns. Only dorsal and anal have this 3-ray rule; pectoral and caudal fins remain natural fans. NO pelvic fins, body armor, neon internal organs or giant eyes. Tiny male is colorless and far smaller than female, reduced features and small connected tail; not a large second fish or detached appendage. Every female and male tail, fin tip and skin spine completely within generous 15 percent margins. Subtle illustrative fill light reveals pale anatomy without sunlight or animal glow. Scientific educational reconstruction of attachment, no hunting claim. No text, labels, arrows, panels, frame, watermark, gore, fantasy or anthropomorphism.",
          "Use case: scientific-educational. Redraw ONE entirely new 3:2 natural-history illustration of female Haplophryne mollis with one tiny attached parasitic male. The input is IDENTITY AND PALE COLOR ONLY, do NOT preserve its side-view pose. Main request: a STRONG REAR THREE-QUARTER view with convincing extreme foreshortening; camera close behind the tail, looking forward toward the head far away. The small tail fan is in the FOREGROUND CENTER-LOWER, its continuous short caudal peduncle leads AWAY and UP into the pale rounded body. The head is BEHIND the body, far upper-right, only one tiny far-side eye and a small sliver of mouth visible around the far right rim. Most visible surface is the BACK and rear flank, not a side profile. Crucially do NOT put tail at the far left and head at the far right as a normal side fish. We see the near pectoral projected out to left-down; far pectoral foreshortened out upper-right; a gently turning peduncle with tail fan viewed obliquely. Entire fish and appendages inside generous margins. Pale translucent unpigmented female, tiny natural eye, nearly rounded body; small bony skin spines above eyes/behind mouth if those parts are visible. A small ROUNDED FLAT SKIN FLAP attached flush to forehead, NO stalk or bulb; rear angle may naturally partly hide it. Dorsal and anal soft fins EACH have EXACTLY THREE unbranched main support rays with continuous thin membrane; no extra repeated ribs, no bare isolated horns. Natural small pectoral fans and short caudal tail, NO pelvic fins. One tiny colorless male physically attached by mouth to the visible near ventral flank, dramatically smaller than female; do not make a second huge fish. Dim blue deep open water, no prey, no sunlight, gentle neutral illustrative fill light, refined realistic painterly style for children. Full connected anatomy, no text, labels, panels, arrows, gore or fantasy. This is a new 3D pose and viewpoint, not a flip, rotation or mirror of the input."
        ],
        "generatedAt": "2026-10-08T16:52:28.023Z",
        "checkedAt": "2026-10-11",
        "sha256": "1fd82e6edf54d1c7058aa38344440892f4ce2282ecb82518fd5ebf415e8a5dad",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "FishBase와 Te Ara/Te Papa의 작고 무색인 수컷이 암컷 배쪽에 입으로 붙는 자료를 바탕으로 재구성. 특정 표본/관측 사진 아님.",
        "behaviorSources": [
          {
            "title": "FishBase — Haplophryne mollis field guide",
            "url": "https://www.fishbase.se/FieldGuide/FieldGuideSummary.php?GenusName=Haplophryne&SpeciesName=mollis&print=&sps="
          },
          {
            "title": "Te Ara / Te Papa — Phantom anglerfish",
            "url": "https://teara.govt.nz/en/photograph/5249/phantom-anglerfish"
          }
        ],
        "viewpoint": "꼬리와 등/옆 몸이 가까운 뒤 사선, 머리 오른쪽 위",
        "pose": "꼬리의 큰 팬이 왼쪽 아래로 향하고 근측 가슴핀은 아래 바깥으로 펼침, 작은 수컷은 근측 배에 부착",
        "poseVariationCheck": "꼬리가 가까운 전경 중앙에 크게 오고 머리는 몸 뒤 오른쪽 위로 작게 멀어진다. 몸의 뒷면이 주가 되는 강한 후방 원근과 양 가슴핀의 서로 다른 투영 각도가 실제 달라졌다.",
        "visualLimitations": "뒷지느러미는 몸에 가려 세 줄기 계수 불가. 보이는 등지느러미 세 줄기 외 가린 구조를 확인한 것으로 주장하지 않음. 뒷지느러미는 이 후방 구도에서 가려져 3줄기 전수를 확인하지 못한다. 가려진 두부 가시 전수를 인증하지 않는다."
      }
    ],
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "확인한 FishBase 및 Te Papa 자료에 종별 상세 먹이 목록이 없어 입을 벌린 관찰 구도와 암수 관계 생태 구도로 대체한다."
  },
  {
    "id": "luminous-bobtail-squid",
    "name": "발광짧은꼬리오징어",
    "scientificName": "Heteroteuthis nordopacifica",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "몸속에 빛을 만드는 기관이 있는 아주 작은 꼴뚜기예요. 일본의 깊은 바다에서 처음 알려졌어요.",
    "identity": [
      "몸통은 둥근 타원 모양이고 양옆에 작은 지느러미가 있어요. 짧은 팔 여덟 개와 더 긴 촉수 두 개가 있어요.",
      "배쪽 몸통의 앞자락이 머리 밑으로 뻗어요. 머리 위를 덮은 모자와는 다른 부분이에요."
    ],
    "ecology": "몸통 안에 큰 발광기관이 있어요. 살아 있을 때 어떻게 움직이고 빛을 쓰는지는 아직 자료가 적어요.",
    "diet": "확인한 원기재에는 이 종이 먹는 먹이 종류가 나오지 않아요.",
    "range": "북서태평양 일본 혼슈의 조반 앞바다. 원기재는 한 암컷 표본을 바탕으로 하며 모든 바다에 산다고 넓혀 쓰지 않아요.",
    "size": "원기재 표본의 등쪽 몸통 길이 2.13 cm. 종의 최대 크기가 아니라 한 성숙 암컷의 측정값이에요.",
    "depth": "원기재 표본은 1,000 m에서 채집됐어요. 이 한 지점을 종의 전체 수심 범위로 쓰지 않아요.",
    "sources": [
      {
        "title": "일본패류학회2011 — Heteroteuthis nordopacifica 원기재",
        "url": "https://www.jstage.jst.go.jp/article/venus/69/3-4/69_145/_pdf/-char/ja"
      },
      {
        "title": "WoRMS — Heteroteuthis 수용 종 목록",
        "url": "https://www.marinespecies.org/aphia.php?p=taxlist&pid=1454580&rComp=%3E%3D&tRank=220"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "ヒカリダンゴイカ",
      "Luminous bobtail squid"
    ],
    "featured": false,
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "확인한 자료에는 이 종의 자세한 먹이 목록이나 직접 사냥하는 모습이 없어요. 먹이 장면 대신 두 가지 관찰 구도를 보여 줘요.",
    "gallery": [
      {
        "id": "luminous-bobtail-squid",
        "src": "assets/images/luminous-bobtail-squid-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "발광짧은꼬리오징어 · 작은 몸통과 두 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "타원 외투막·중간 옆면에 연결된 두 타원 지느러미·별도의 머리와 큰 눈·두 긴 곤봉 촉수의 연결을 실제 원본 1536×1024에서 확인. 머리 위에 덮개가 올라온 오류는 없다. 배쪽 외투막 앞 가장자리는 이 구도에서 가려져 정확한 shield 앞쪽 범위를 확인할 수 없다.",
        "generationPrompts": [
          "Create ONE new 3:2 landscape realistic painterly marine natural-history illustration, not a plate collage, based on the Heteroteuthis nordopacifica female holotype anatomy in attached 2011 scientific plate. Use only intact whole-animal panels A (dorsal) and B (ventral) for proportions; do NOT reproduce the dissected internal panels C-H, labels, ruler, specimen damage or photographic composition. Show a reconstructed intact small animal in a three-quarter view tilted slightly onto its back so the external VENTRAL MANTLE SHIELD is visible. Critical body anatomy: compact ovoid mantle about 1.4 times longer than wide with a blunt posterior, two oval fins on the middle sides attached continuously to the mantle. The strongly convex shield is the LOWER, belly-facing wall of the mantle; its anterior rim projects forward UNDER THE HEAD and covers half the base of the small funnel. That forward ventral rim is below and behind the arm roots, NEVER a hood on top of the eyes or mouth. A separate slightly narrower head with two natural lateral oval eyes remains visible above the belly rim. Dense dark purple-brown chromatophores on the intact mantle and head, pale translucent fins. Exactly EIGHT short arms come from one mouth crown, arranged as four bilateral pairs in a small open fan; and TWO separate slender tentacles, longer than the short arms, come from their proper head roots and curve outward to small narrow club tips. Arms small paired suckers, no huge circles; the second arm in each side has a smooth blunt suckerless distal quarter. Keep all eight arm tips, both clubs, both fins and the mantle within open water margins. Shallow arm webs only, no umbrella membrane. The intact animal must not reveal its internal luminescent organ. No emitted light, silver band, exposed organs, prey, feeding, ink, sunbeams, seabed, captions, text, borders or collage. Dark midnight-zone navy water, soft neutral observation light, detailed moist natural tissues, calm static observation."
        ],
        "generatedAt": "2026-10-07T18:08:38.952Z",
        "checkedAt": "2026-10-08",
        "sha256": "7f612ca7067a3fa450362ddcb26a3c20e2127b5294034929d2067f1e35c00b53",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "referenceSources": [
          {
            "title": "Kubodera & Okutani2011 Fig2",
            "url": "https://www.jstage.jst.go.jp/article/venus/69/3-4/69_145/_pdf/-char/ja",
            "referenceSha256": "dcf958739481f9d2e5b8a2b70dcfa320d4b2618e3c555673498ca5c9cffbfd4b"
          }
        ]
      },
      {
        "id": "luminous-bobtail-squid",
        "src": "assets/images/luminous-bobtail-squid-chatgpt-ecology-side-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "발광짧은꼬리오징어 · 옆에서 바라본 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본 1536×1024 옆 구도에서 타원 외투막과 연결된 지느러미, 짧은 팔과 두 긴 촉수, 몸통과 머리의 연속을 확인. 외투막 아랫쪽 앞 가장자리가 눈 뒤 아래에서 깔때기 위로 이어지므로 머리 위 덮개가 아닌 배쪽 shield의 위치와 맞는다.",
        "generationPrompts": [
          "Create ONE new 3:2 landscape realistic painterly marine natural-history illustration, not a plate collage, based on the Heteroteuthis nordopacifica female holotype anatomy in attached 2011 scientific plate. Use only intact whole-animal panels A (dorsal) and B (ventral) for proportions; do NOT reproduce the dissected internal panels C-H, labels, ruler, specimen damage or photographic composition. Show a reconstructed intact small animal in a three-quarter view tilted slightly onto its back so the external VENTRAL MANTLE SHIELD is visible. Critical body anatomy: compact ovoid mantle about 1.4 times longer than wide with a blunt posterior, two oval fins on the middle sides attached continuously to the mantle. The strongly convex shield is the LOWER, belly-facing wall of the mantle; its anterior rim projects forward UNDER THE HEAD and covers half the base of the small funnel. That forward ventral rim is below and behind the arm roots, NEVER a hood on top of the eyes or mouth. A separate slightly narrower head with two natural lateral oval eyes remains visible above the belly rim. Dense dark purple-brown chromatophores on the intact mantle and head, pale translucent fins. Exactly EIGHT short arms come from one mouth crown, arranged as four bilateral pairs in a small open fan; and TWO separate slender tentacles, longer than the short arms, come from their proper head roots and curve outward to small narrow club tips. Arms small paired suckers, no huge circles; the second arm in each side has a smooth blunt suckerless distal quarter. Keep all eight arm tips, both clubs, both fins and the mantle within open water margins. Shallow arm webs only, no umbrella membrane. The intact animal must not reveal its internal luminescent organ. No emitted light, silver band, exposed organs, prey, feeding, ink, sunbeams, seabed, captions, text, borders or collage. Dark midnight-zone navy water, soft neutral observation light, detailed moist natural tissues, calm static observation.",
          "Create ONE 3:2 landscape realistic painterly natural-history underwater illustration of a complete Heteroteuthis nordopacifica female luminous bobtail squid, using attached reconstructed portrait only to keep the same compact ovoid mantle, large lateral eyes, purple-brown chromatophores, pale oval mantle-side fins and short eight-arm/two-tentacle anatomy consistent. A wider quiet open-water observation, animal occupies only the middle half of the frame, from a true LEFT SIDE oblique view with the posterior to left, head and gently extended arms facing right. Show the mantle's forward convex VENTRAL shield below the head and covering part of the small funnel, not a head cap. Paired fins are on the mantle's sides, not ears on head. Exactly eight short muscular arms and two much thinner longer tentacles with tiny clubs extend gently toward the right, with all tips retained inside the frame and natural overlap of far-side arms explicitly acceptable. Arms/tentacles connect to actual head roots; no detached tail or branching tentacle. Deep navy midnight-zone ocean near the documented 1000m collection setting, sparse drifting marine particles and neutral observation lighting; no floor claims, prey, attack, ink, burial, active light organ, glow, silver belly band, neon, surface beams, text, panels, captions, logos or watermark. This is a peaceful alternative viewing angle, not evidence of an observed swimming or feeding behavior."
        ],
        "generatedAt": "2026-10-07T18:12:05.525Z",
        "checkedAt": "2026-10-08",
        "sha256": "87497f39f21853469c72291a9b165ab6d48d4aa1ecfc8d17bbc0051605e64261",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "원기재 Fig2의 전체 외부 형태를 바탕으로 한 교육 재구성. 한 표본의 형태를 참고했으며 실제 생체 자세/먹이활동 기록은 아니다. 내부 발광기관은 숨김.",
        "behaviorSources": [
          {
            "title": "Kubodera & Okutani2011 — Heteroteuthis nordopacifica Fig2",
            "url": "https://www.jstage.jst.go.jp/article/venus/69/3-4/69_145/_pdf/-char/ja"
          }
        ]
      },
      {
        "id": "luminous-bobtail-squid",
        "src": "assets/images/luminous-bobtail-squid-chatgpt-ecology-front-gathered-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "발광짧은꼬리오징어 · 모은 팔을 앞에서 관찰",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "연속 외투/머리와 눈2, 양옆 타원 fin2, 작은 배쪽 깔때기, 모인 짧은 팔 및 각각 곤봉으로 연결된 긴 촉완2 확인. 위 중앙 제3fin 엽 없음.",
        "generationPrompts": [
          "Create ONE new 3:2 landscape realistic painterly marine natural-history illustration, not a plate collage, based on the Heteroteuthis nordopacifica female holotype anatomy in attached 2011 scientific plate. Use only intact whole-animal panels A (dorsal) and B (ventral) for proportions; do NOT reproduce the dissected internal panels C-H, labels, ruler, specimen damage or photographic composition. Show a reconstructed intact small animal in a three-quarter view tilted slightly onto its back so the external VENTRAL MANTLE SHIELD is visible. Critical body anatomy: compact ovoid mantle about 1.4 times longer than wide with a blunt posterior, two oval fins on the middle sides attached continuously to the mantle. The strongly convex shield is the LOWER, belly-facing wall of the mantle; its anterior rim projects forward UNDER THE HEAD and covers half the base of the small funnel. That forward ventral rim is below and behind the arm roots, NEVER a hood on top of the eyes or mouth. A separate slightly narrower head with two natural lateral oval eyes remains visible above the belly rim. Dense dark purple-brown chromatophores on the intact mantle and head, pale translucent fins. Exactly EIGHT short arms come from one mouth crown, arranged as four bilateral pairs in a small open fan; and TWO separate slender tentacles, longer than the short arms, come from their proper head roots and curve outward to small narrow club tips. Arms small paired suckers, no huge circles; the second arm in each side has a smooth blunt suckerless distal quarter. Keep all eight arm tips, both clubs, both fins and the mantle within open water margins. Shallow arm webs only, no umbrella membrane. The intact animal must not reveal its internal luminescent organ. No emitted light, silver band, exposed organs, prey, feeding, ink, sunbeams, seabed, captions, text, borders or collage. Dark midnight-zone navy water, soft neutral observation light, detailed moist natural tissues, calm static observation.",
          "Create ONE new 3:2 landscape realistic natural-history illustration of Heteroteuthis nordopacifica, an intact female luminous bobtail squid, matching the reconstructed animal in reference 1 for chromatophore color, body proportions, oval mantle-side fins, eyes and ten appendages. Reference 2 is the original scientific plate; use ONLY intact ventral whole-animal panel B for external belly geometry, not any dissection panel. Show the whole living reconstruction from underneath at a low oblique ventral angle, animal's blunt posterior to left and head/arms to right. It is a quiet close observation in dark open water, not feeding or escape. Critical: the broad convex belly wall of the mantle continues forward into a ventral shield BELOW the head, covering approximately half the short funnel base. The head and the bases of the arms are in front of and above this rim, not under a cap on top of the eyes. Ovoid mantle longer than wide, dense dark purplish chromatophores on belly, paired oval lateral fins attached to middle sides of mantle. Exactly eight short arms originate from the same continuous head/mouth crown and two slender longer tentacles from proper roots, all appendage ends in frame, no additional arm or missing club. Keep natural partial overlap of far-side arms only; arm roots never detached. Short arms carry small paired suckers; two second arms have smooth blunt distal quarters; tentacles naked thin stems with tiny narrow clubs bearing densely packed microscopic suckers. Interior remains sealed and opaque: no externally visible light organ, open mantle, internal anatomy, transparent cutaway, glowing belly or luminous cloud. Neutral soft observation illumination, no prey, sand burial, silver belly band, sunbeams, surface, sea floor, text, label, border, panel or watermark. Plenty of calm dark water around the complete connected animal.",
          "Create ONE original, scientifically careful natural-history illustration for Sea Atlas, ages 5–12, landscape 3:2, refined realistic painterly rendering, full animal generously inside frame. Species Heteroteuthis nordopacifica, NOT Euprymna, Sepiola or Sepiolina. The attached prior illustration is ONLY a colour, identity and style reference, not a pose template. REBUILD the camera and limb pose: a genuine LOW ANTERIOR THREE-QUARTER VIEW looking gently UP at the ventral side, with the head and short arm crown nearest the viewer in the LOWER LEFT foreground, and the compact ovoid mantle receding toward the UPPER RIGHT. Show the ventral surface rather than the earlier broad dorsal back. The protruding strongly convex VENTRAL mantle shield continues forwards UNDER the head to the eye level and partly covers the funnel; its front edge is nearly blunt, and it must NOT become a dorsal hat, hood or projection over the head. Keep the single compact reddish-brown mantle, dense purple-brown chromatophores and pale amber edges, two large eyes attached to the head, and exactly TWO oval lateral fins, one on either side, with natural foreshortening (one broader near fin, narrower far fin). No round mushroom body or pointed giant-squid fins. NEW ARM STATE: all EIGHT short arms are gathered gently inward in a small loose crown toward the camera with differing mild curves, instead of a fully spread fan; each arm root is continuous at the head. Short-arm inner faces have two small sucker rows. Exactly TWO additional slender longer tentacles emerge from the crown, one curving out to the left and one down to the right, each with ONE narrow terminal club with tiny closely packed suckers; the bare thin stalks have no suckers. Keep the two tentacles distinct from the eight short arms, with full connected roots and all tips within margins. No extra appendages, glowing exterior jewels, dorsal shield, long cuttlefish skirt fin, prey or bottom sand-burying claim. Quiet dark blue midwater with a few fine particles, no other animals, text, labels, diagrams or watermark. This is an educational alternate-view reconstruction from the species description, not an invented feeding or observed swimming technique.",
          "Create a NEW VIEW of Heteroteuthis nordopacifica for a scientific children's Sea Atlas, landscape 3:2, realistic natural-history painterly illustration, one full squid with every appendage inside margins. The attached image supplies only the compact brown species anatomy and style. Its earlier dorsal diagonal camera and spread fan are REJECTED: do not preserve them, do not mirror or flat-rotate them. NEW CAMERA: almost DIRECTLY HEAD-ON from slightly BELOW the animal, viewing the two large eyes symmetrically from the front, and seeing the short arms as a compact FORESHORTENED bundle in front of the head. The body axis points directly away from the camera into depth, NOT across the image. Most of the reddish-brown ovoid mantle recedes behind the head; show its LOWER ventral convex shield extending forward UNDER the eyes, with a small partly hidden funnel below. No collar on top of the head, no dorsal hood. Exactly TWO oval side fins extend behind the eyes, the left gently raised and the right gently lowered in a mild undulation. NEW ARM CONFIGURATION: EIGHT short connected arms held close together, tips pointing forward toward the camera with modest inward curls; do not splay eight arms into a large star, do not turn them into four trunks. Modest two-row suckers on the exposed inner short-arm surfaces, far-side roots may be naturally hidden. TWO additional thin longer tentacles have been drawn back into soft unequal U-curves BELOW the short-arm bundle: the left club is close to the lower left head, the right club closer to the lower right front; each has one narrow tiny-suckered club, bare slender stalk, and a continuous root at the arm crown. The tentacles must not stretch as two broad wings toward the image corners. No extra limbs or clubs, no outer light bulbs or decorative glow. Keep natural amber edges and dense purple-brown chromatophores, not pale transparent glass. Dark blue midwater, fine particles, no prey, sand, other animals, text, labels, cutaway or watermark. This is a calm alternate-view educational anatomy reconstruction, not a known feeding behavior. The silhouette must be an unmistakable head-on foreshortened animal with a gathered arm bundle, not the old dorsal mantle-and-fanned-arms side silhouette.",
          "Precise anatomy correction ONLY. Keep the attached nearly head-on Heteroteuthis nordopacifica illustration, both eyes, gathered eight short arms, two U-curved long tentacles, small funnel, colour, head-on foreshortening, framing and dark water exactly as drawn. REMOVE the extra isolated pale triangular fin-shaped lobe visible ABOVE the uppermost middle of the brown mantle. Replace that single protruding lobe with the same dark blue water and finish the brown rounded mantle apex in a smooth continuous contour. The animal must have exactly TWO lateral oval fins, one at image left and one at image right behind the eyes; retain those two normal fins and their connections. Do not add any third fin, dorsal lobe, top horn or cuttlefish skirt. Do not alter the arm count, sucker rows, long clubs or body viewpoint. No text, labels, arrows, watermark or extra animals."
        ],
        "generatedAt": "2026-10-08T16:48:17.795Z",
        "checkedAt": "2026-10-11",
        "sha256": "28e1f78dc774d4d9301d71511272028a6b28c117bc30b4f0ef37136e52578a67",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "referenceSources": [
          {
            "title": "Kubodera & Okutani2011 Fig2",
            "url": "https://www.jstage.jst.go.jp/article/venus/69/3-4/69_145/_pdf/-char/ja",
            "referenceSha256": "dcf958739481f9d2e5b8a2b70dcfa320d4b2618e3c555673498ca5c9cffbfd4b"
          }
        ],
        "sceneType": "ecology",
        "behaviorCheck": "2011 원기재의 형태를 토대로 한 관찰 재구성. 식성 미확정이므로 먹이·모래 숨기·구체적인 유영 기법을 꾸미지 않음.",
        "behaviorSources": [
          {
            "title": "Kubodera & Okutani2011 — Heteroteuthis nordopacifica original description Fig2 and pp148–149",
            "url": "https://www.jstage.jst.go.jp/article/venus/69/3-4/69_145/_pdf/-char/ja"
          }
        ],
        "viewpoint": "머리를 마주 보는 거의 정면의 앞위 사선",
        "pose": "짧은 팔을 느슨하게 안으로 모으고 두 긴 촉완을 아래쪽 U자 곡선으로 굽힘",
        "poseVariationCheck": "기존 높게 내려다보는 뒤옆/평면 팬 배열과 달리 얼굴을 거의 정면으로 보고 외투가 뒤로 후퇴. 짧은 팔 모임과 아래 U자 촉완/핀 원근이 함께 바뀜.",
        "visualLimitations": "일부 짧은 팔 기부는 겹침. 배쪽 방패·전 팔 개수를 이 시점에서 확정했다고 하지 않음. 실제 앞위 시점이며 배쪽 방패는 관찰하지 못함. 접힌 뒷팔 기부 일부 가려8팔 전수 대응·정확 빨판 수를 동정으로 인증하지 않음. 부속지/곤봉 끝 모두 프레임 안."
      }
    ]
  },
  {
    "id": "giant-phantom-jelly",
    "name": "대왕심해해파리",
    "scientificName": "Stygiomedusa gigantea",
    "group": "자포동물",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "summary": "커다란 우산 아래로 넓은 리본 같은 입팔 네 개가 늘어져요. 아직 생활이 많이 알려지지 않은 깊은 바다의 해파리예요.",
    "identity": [
      "큰 둥근 우산과 그 아래에서 이어지는 네 개의 넓고 납작한 입팔이 특징이에요. 사자갈기해파리처럼 우산 둘레에 가느다란 촉수 술을 그리지 않아요."
    ],
    "ecology": "주로 빛이 닿지 않는 깊은 바다의 물속에서 떠다녀요. 작은 물고기가 우산 위나 입팔 사이에 머무는 모습도 관찰되었어요.",
    "diet": "플랑크톤과 작은 물고기를 먹을 것으로 추정해요. 무엇을 얼마나 먹는지는 아직 충분히 밝혀지지 않았어요.",
    "range": "북극해를 제외한 여러 바다에서 기록되었어요.",
    "size": "우산 너비가 1 m를 넘을 수 있고, 입팔은 길이가 10 m 넘게 자랄 수 있어요. 우산 너비와 입팔 길이는 서로 다른 기준이에요.",
    "depth": "표층부터 약 6,700 m까지 기록이 있지만, 보통 1,000 m 아래의 깊은 물속에서 만나게 돼요.",
    "aliases": [
      "대왕심해해파리",
      "Giant phantom jelly",
      "Stygiomedusa fabulosa"
    ],
    "sources": [
      {
        "title": "MBARI — Giant phantom jelly",
        "url": "https://www.mbari.org/animal/giant-phantom-jelly/"
      },
      {
        "title": "WoRMS — Stygiomedusa gigantea, accepted species",
        "url": "https://www.marinespecies.org/aphia.php?id=135311&p=taxdetails"
      }
    ],
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "giant-phantom-jelly",
        "src": "assets/images/giant-phantom-jelly-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕심해해파리 · 우산과 네 개의 긴 입팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "view_image(detail=original)로1536×1024 원본 확인. 단일 암적갈색 우산 아래 네 개의 넓고 납작한 리본형 입팔이 몸과 연속 연결되며 네 끝이 화면 안에 있음. 가장자리의 가는 촉수나 추가입팔 없고 발광하지 않음. MBARI Stygiomedusa gigantea의 단일우산·4입팔 설명과 대조.",
        "generationPrompts": [
          "Create ONE finished landscape image in a 3:2 aspect ratio for a Korean children's marine natural-history atlas for ages 5–12. Premium realistic painterly scientific natural-history illustration, detailed organic texture, calm cinematic underwater lighting, clear readable silhouette, no text, labels, border, collage, panel layout, logos, watermark, or fantastical decorations. PORTRAIT of the giant phantom jelly Stygiomedusa gigantea in dark midnight-zone open seawater. A single complete animal viewed slightly from below and to the side, with one large domed bell shaped like a soft translucent reddish-brown umbrella, subtly textured and softly scalloped around its lower edge. Exactly FOUR broad, long, flat, ribbon-like oral arms attach continuously underneath the central bell; each arm is a thick soft velvety ribbon with naturally rippled folded edges, not a round rope or fringe of thin strings. Show all four arms from their actual roots to their intact rounded tips, fully inside the frame with generous empty dark water margins; long arms drift in separate gentle arcs without tangling, visually countable and obviously connected to the bell. All arms are substantially longer than the bell diameter. No extra oral arms, no marginal thin tentacles, no comb rows, no fish inside the jelly, no detached ribbons, no broken anatomy, no surface sunbeams or seafloor. The animal itself does not emit luminous neon light. Soft neutral underwater observation illumination reveals rich burgundy brown coloration against deep navy-black water with only sparse small suspended particles. Choose a distant enough framing to include the entire animal while keeping its anatomy clear."
        ],
        "generatedAt": "2026-10-07T11:30:55.502Z",
        "checkedAt": "2026-10-07",
        "sha256": "49e77482c13c91a2984725bccee20d6771d5040a66835b2108041ccad3d861d0",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "giant-phantom-jelly",
        "src": "assets/images/giant-phantom-jelly-chatgpt-feeding-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕심해해파리 · 추정 먹이 가까이에 네 입팔 펼치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "단일 암적갈색 우산 아래 네 개 넓고 납작한 입팔이 각각 연결되고 네 끝 모두 화면 안에 있다. 가는 가장자리 촉수·추가 입팔·자가발광 없음. 작은 요각류형 갑각류 다섯은 조직 바깥에서 분리되어 있으며 포획/섭식 성공 표현 없음.",
        "generationPrompts": [
          "Create ONE 3:2 landscape realistic painterly scientific marine natural-history illustration for a Korean children's atlas. Anatomical accuracy is critical: show exactly FOUR clearly separate long broad flat burgundy-brown oral ribbons rooted separately under one giant phantom jelly Stygiomedusa gigantea bell. Countable four-arm arrangement: (1) one ribbon curves horizontally LEFT and ends near the left edge with a large margin; (2) one ribbon descends DOWN-LEFT and ends well above the bottom edge; (3) one ribbon descends DOWN-RIGHT with its rounded tip in open water; (4) one ribbon extends horizontally RIGHT, its entire distinct root and tip clearly visible. Keep the four ribbons separated by open water everywhere after their roots, no overlapping ribbons, merging, branching, hidden extra arm or shared roots. The bell sits near the upper middle in a slightly low frontal view so all four attachment points are visible underneath it. The bell is a large domed reddish-brown translucent umbrella with soft organic texture; its four arms are long, velvety, broad and flat with rippled edges, not strings, round ropes, comb rows or dozens of marginal tentacles. Each ribbon is substantially longer than the bell diameter. Include all of the bell, the four actual attachments and four rounded ribbon ends inside the frame with generous water margins. Near the surrounding open water ONLY, place five very small separate copepod-like plankton, all free floating, not touching any jelly arm or trapped inside it. This is a cautious possible-food proximity scene: this species' food is presumed, so no captured, entangled, swallowed or injured prey. No fish needed. Calm deep navy-black midnight-zone open water with sparse particles and neutral observation illumination, natural dark burgundy jelly color without neon or self-emitted light. No text, labels, borders, panels, collage, logos, watermark, sea floor or surface sunbeams."
        ],
        "generatedAt": "2026-10-07T11:44:36.463Z",
        "checkedAt": "2026-10-08",
        "sha256": "6bb99818a46d2ae1b15ddd3445b0ec30547f583aedf61b3582fe577a82e48c96",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "MBARI의 presumed diet에 근거해 작은 갑각류는 근처에만 두고, 포획·접촉·삼킴은 표현하지 않은 재구성.",
        "behaviorSources": [
          {
            "title": "MBARI — Giant phantom jelly, presumably plankton and small fish",
            "url": "https://www.mbari.org/animal/giant-phantom-jelly/"
          }
        ]
      },
      {
        "id": "giant-phantom-jelly",
        "src": "assets/images/giant-phantom-jelly-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕심해해파리 · 옆에서 본 우산과 흐르는 입팔",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "한 붉은 우산에서 시작하는 넓고 납작한 네 리본 입팔을 각 끝까지 추적함. 맨 위 가는 원측 팔, 오른가운데 팔, 앞쪽 넓은 아래 팔, 그 뒤 오른아래 팔 총 네 끝과 연결 확인. 별도 촉수·물고기·발광기관 없음.",
        "generationPrompts": [
          "ONE landscape 3:2 image, premium realistic painterly natural-history underwater illustration for a Korean children's marine atlas, no text, labels, borders, panels, collage, watermarks or logos. A complete giant phantom jelly Stygiomedusa gigantea drifts in dark midnight-zone pelagic water with one SMALL slender Thalassobathia pelagica fish swimming beside the bell, outside its tissues. This is the documented association of the fish seeking shelter near the jelly, not a prey capture or inside-body scene. Depict the jelly from a slightly higher side angle than a classic portrait: one large soft dark burgundy-brown domed bell placed near the upper center-left. Under the bell attach EXACTLY FOUR long broad flat velvety oral-arm ribbons, with each root and tip explicitly visible: ribbon ONE drifts leftward in a broad S-curve, ribbon TWO angles down-left, ribbon THREE angles down-right, ribbon FOUR drifts rightward. These four separated ribbons are distinct single strips and do not merge or bifurcate. All four rounded intact tips remain inside the landscape frame with generous dark-water margins. Arms are substantially longer than the bell width. No additional marginal tentacles, no comb rows, no detached ribbons, no glowing jelly, no exaggerated decorative fins on the fish. The small slender gray-silver fish has a natural fish silhouette with a clear eye, connected fins and tapered tail and is much smaller than the bell; it swims just above and alongside the umbrella. Calm cold open-water atmosphere, neutral soft observation illumination reveals jelly's natural tissue texture without neon. No sunlit surface or seabed.",
          "Edit only the small companion fish in the supplied giant phantom jelly educational illustration. Preserve the large Stygiomedusa gigantea exactly as an intact burgundy bell with FOUR broad oral ribbons, four connected roots and four visible tips, and preserve its pose, soft illumination, navy midwater background and 3:2 full-body framing. Replace the generic fork-tailed fish above the bell with a small natural Thalassobathia pelagica brotula consistent with FAO Bythitinae anatomy: elongated slender translucent gray-beige body, small natural eye, short rounded pectoral fins, and one CONTINUOUS soft fin margin running along the back, around a smoothly tapering rounded-pointed tail and along the belly. Dorsal, caudal and anal fins connect without gaps. NO separate short dorsal fin and NO forked fish tail. The fish stays near the outside of the upper bell as a calm shelter associate, never swallowed, injured, stuck inside the jelly or glowing. Include the fish's whole connected body and tail within the image. Change nothing else. No text, arrows, scale bar, labels, panels or watermark.",
          "Make a precise local edit to the supplied giant phantom jelly illustration: REMOVE THE ENTIRE SMALL FISH ABOVE THE JELLY BELL. Restore that small region to seamless dark navy open seawater and sparse background particles. There must be NO fish or other companion animal anywhere in the finished illustration. Preserve the giant phantom jelly exactly: one burgundy translucent bell, FOUR broad flat oral ribbons connected under it, FOUR visible full ribbon tips, the same whole-body pose, lighting, texture and 3:2 composition. Do not crop, add arms, duplicate ribbons, add thin tentacles, change the bell or alter the background outside the former fish region. This is a simple open-midwater habitat observation illustration, no feeding, prey, text, labels, panels or watermark.",
          "Create ONE genuinely NEW 3:2 landscape natural-history illustration of Stygiomedusa gigantea, the giant phantom jelly, swimming alone in dark deep midwater. Attached reference supplies ONLY the species identity, subdued dark crimson-brown tissue and refined painterly educational style. Do not copy, mirror, rotate or lightly rearrange its old broad front-view bell and four down-hanging arms.\nNEW CAMERA: a steep low side three-quarter view. Bell is in the left half, seen almost edge-on so its opening is a strongly foreshortened narrow ellipse and the far rim is visibly shorter than the near rim. Show a deeper domed contracted bell with the lower rim tucked gently inward. This is a real new perspective, not rotating the previous semicircle in the picture plane.\nNEW ARM STATE: exactly FOUR extremely long, broad, flat ribbon-like oral arms, each visibly attached beneath the same bell and each ending at ONE distinct soft rounded ribbon tip. Four continuous independent ribbons, not branches or splits. Arrange them streaming mostly to the right in different depth planes and different bends: one high distant arch, one long low S wave, one foreground broad ribbon with an inward curl, one flatter back ribbon ending farther right. Leave small gaps at roots and along paths so each of the FOUR bell attachments and FOUR tips can be traced. Ribbons may turn edge-on briefly but remain broad flat soft tissue, no narrow strings, fringe tentacles or rope-like arms. The foreground arm should be larger through perspective and the farther ribbon visibly narrower, without losing its complete connection. The bell and all four full arms remain entirely in frame with at least 7 percent breathing space around their tips; if necessary use flowing folds rather than shortening or cutting arms. Anatomy stays continuous, no detached tails, extra ribbons, eye, mouth teeth, neon glow or trailing marginal tentacles. Quiet black-blue midwater with sparse small particles, gentle neutral illustrative fill illumination, no fish or prey or seabed. No text, labels, arrows, border, panels or watermark."
        ],
        "generatedAt": "2026-10-10T15:40:59.654Z",
        "checkedAt": "2026-10-11",
        "sha256": "57caf25395e6227e00e9a0a3e030291a58f09d321507f24a413015c9bd385d97",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI가 설명한 중층 서식과 네 개 리본 입팔을 바탕으로 한 교육용 유영 재구성. 정확한 수축 운동 위상이나 관측 순간을 주장하지 않는다. 동반어·먹이를 넣지 않는다.",
        "behaviorSources": [
          {
            "title": "MBARI — Giant phantom jelly",
            "url": "https://www.mbari.org/animal/giant-phantom-jelly/"
          }
        ],
        "viewpoint": "매우 낮고 가파른 옆 사선에서 우산 개구면이 단축되어 보이는 시점",
        "pose": "우산 가장자리가 안으로 수축된 상태와 네 입팔이 서로 다른 깊이와 곡선으로 옆 물살을 따르는 재구성",
        "poseVariationCheck": "기존 시트11의 넓은 앞 우산 아래로 입팔이 내려오는 구도에서 옆 사선으로 좁아진 우산 개구면, 안으로 말린 가장자리와 옆으로 흐르는 서로 다른 네 곡선으로 변화. 단순 미러나 우산의 평면 회전만이 아님.",
        "visualLimitations": "구완 기부는 서로 겹쳐 연결 일부가 가림. 실제 박동 위상은 재구성 아래 두 입팔의 겹친 구간은 일부 기부를 가려 원근의 한계가 있음. 네 끝은 명료하나 팔 조직의 세부 구조·정확한 유속은 검증하지 않음. MBARI가 식성을 추정으로 표현하므로 먹이 관측/섭식 성공을 추가하지 않음."
      }
    ]
  },
  {
    "id": "giant-siphonophore",
    "name": "대왕관해파리",
    "scientificName": "Praya dubia",
    "group": "자포동물",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "summary": "작은 몸들이 한 줄로 이어져 함께 살아가는 관해파리예요. 앞의 두 헤엄 방울과 뒤로 길게 이어진 몸들이 서로 다른 일을 맡아요.",
    "identity": [
      "Praya dubia 한 종을 소개해요. 앞쪽의 큰 헤엄 방울 두 개와 뒤로 이어지는 가는 줄기, 먹이 잡는 작은 몸과 촉수가 연결돼요. 기체로 찬 부레나 하나의 큰 우산이 있는 해파리는 아니에요."
    ],
    "ecology": "붙어 있는 작은 몸들이 함께 헤엄치고 먹이를 잡아요. 모두 연결되어 하나의 군체로 살아가요.",
    "diet": "작은 갑각류와 말랑한 떠다니는 동물을 먹어요. 작은 물고기도 먹을 가능성이 있지만 확인이 더 필요해요.",
    "range": "일본 주변을 포함한 외해에서 기록돼요. 바닥에 붙어 살기보다 물속에 떠다녀요.",
    "size": "Monterey Bay Aquarium의 속 소개에서는 군체 길이가 약 40 m까지예요. 부드러운 몸이 늘어나거나 줄어들 수 있어요.",
    "depth": "중층과 깊은 바다의 물속에서 기록돼요. 이번에 읽은 종별 자료로는 전체 수심 범위의 양끝을 정하지 않아요.",
    "aliases": [
      "대왕관해파리",
      "Giant siphonophore",
      "Praya dubia",
      "マヨイアイオイクラゲ"
    ],
    "sources": [
      {
        "title": "Monterey Bay Aquarium — Giant siphonophore, Praya spp.",
        "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-siphonophore"
      },
      {
        "title": "MBARI Deep-Sea Guide — Praya genus and P. dubia / P. reticulata",
        "url": "https://dsg.mbari.org/dsg/images/concept/Praya"
      },
      {
        "title": "MBARI — 2012 Annual Report, Praya tentacle feeding",
        "url": "https://www.mbari.org/wp-content/uploads/2015/10/2012ann_rpt.pdf"
      },
      {
        "title": "JAMSTEC BISMaL — マヨイアイオイクラゲ, Praya dubia",
        "url": "https://www.godac.jamstec.go.jp/bismal/j/view/9000445"
      },
      {
        "title": "WoRMS — Praya dubia, accepted species",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=135466"
      }
    ],
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "giant-siphonophore",
        "src": "assets/images/giant-siphonophore-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관해파리 · 두 헤엄 방울과 이어진 작은 몸들",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두 큰 유영체가 한 연결부에 붙고 하나의 연속 줄기에 작은 반복 몸과 긴 먹이 촉수가 연결된다. 우산 여러 개가 흩어진 해파리 형태나 분리된 꼬리로 보이지 않고 줄기·촉수의 끝이 화면 안에 있다.",
        "generationPrompts": [
          "Create ONE 3:2 landscape premium natural-history illustration for a Korean children's sea atlas: a complete Praya dubia giant siphonophore colony in dim deep blue open water. Accurate calycophoran siphonophore anatomy: at one leading end show EXACTLY TWO adjacent large translucent rounded swimming bells (nectophores), one slightly overlapping the other, visibly joined to the same slender continuous colony stem. No gas float, no pneumatophore and no top air bubble. From the paired bells a thin transparent whitish stem runs continuously in one long gentle sweeping U-shaped curve across the frame; at regular intervals along the stem show modest small translucent individual feeding and protective zooids, attached directly to that same stem, with a small reddish digestive region in some feeding zooids. Fine fishing tentacles arise from the attached feeding zooids and hang at varied natural lengths into the water, each clearly connected and tapering to an intact visible tip. Depict a manageable full colony view, not a measured record-size 40m specimen. All ends of stem, both swimming bells and every tentacle tip must fit inside the frame with generous 10 percent dark-water margin. The two leading swimming bells are the largest zooids; do not add rows of equally huge detached bells or multiple colonies. Soft transparent jelly tissue, subdued pale reflections from external observation light, fine painterly realism, no artificial glowing rope, no fluorescent galaxy spiral, no solid colored beads or decorative electric bulbs. No fish or prey in this representative image. No seafloor, coral, surface, text, labels, arrows, panels, border or watermark."
        ],
        "generatedAt": "2026-10-07T18:18:58.713Z",
        "checkedAt": "2026-10-08",
        "sha256": "0793ce55dddbe7674d748449b3abe65097162fa8ad11ec7c597a73415da87861",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "giant-siphonophore",
        "src": "assets/images/giant-siphonophore-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관해파리 · 작은 플랑크톤 가까이에 촉수 펼치기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "두 유영체, 하나의 연결된 줄기, 반복 개충과 연결된 가는 촉수를 확인했다. 작은 갑각류는 군체의 입 속에 붙어 있거나 삼켜진 모습이 아니고 밖에 있어 식성 관계 재구성 범위에 맞는다. 본체와 가는 끝은 프레임 안이다.",
        "generationPrompts": [
          "ONE landscape 3:2 educational natural-history underwater illustration, realistic slightly painterly tissues and dark blue midwater, matching a children's Korean marine atlas. Show one COMPLETE Praya dubia giant siphonophore colony in a feeding-posture reconstruction: at the upper right leading end exactly TWO large translucent rounded swimming bells meet at a short common junction, connected directly to one slender continuous whitish colony stem that curves gently diagonally toward the lower left. Many small attached feeding and protective zooids along the same stem carry long very fine fishing tentacles spread into adjacent water. Show three tiny translucent copepod-like crustacean plankton much smaller than one zooid, free in water close to several tentacle tips, never inside a bell or zooid and with no swallowing or prey capture. This is based on documented genus-level small crustacean feeding, not an exact filmed species-level hunt. Entire colony, both bells, every stem end and every fine tentacle tip stays within the frame with a generous 12 percent empty margin. The pair of swimming bells is visibly attached to the leading end; no gas-filled float, pneumatophore, air bubble, other large bell, detached zooid or detached filament. Feeding zooids have modest reddish internal digestive tissue, protective zooids are clear. Tentacles are fine soft translucent fishing threads with tiny subtle natural stinging side structures, not strings of bright light bulbs, beads, flowers or feathers. Natural illumination is external and restrained; no glowing electric rope, no magic spiral, no fluorescent rainbow, no blood, no seabed, no coral, no surface, no text, no labels, no collage, no split panel, no border, no watermark."
        ],
        "generatedAt": "2026-10-07T18:20:30.893Z",
        "checkedAt": "2026-10-08",
        "sha256": "2dac0bd2d04b44434fbf8ed8b26b45bf36e4ff383d40e3b4594628f77d38c65f",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "기관의 Praya spp. 작은 갑각류 식단과 군체 먹이촉수 구조에 근거한 교육 재구성. 작은 요각류는 군체 밖에 있으며 특정 Praya dubia 개체의 실제 포획이나 삼킴 성공으로 설명하지 않는다.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Giant siphonophore, crustacean prey",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-siphonophore"
          },
          {
            "title": "MBARI — 2012 Annual Report, Praya fishing tentacles",
            "url": "https://www.mbari.org/wp-content/uploads/2015/10/2012ann_rpt.pdf"
          }
        ]
      },
      {
        "id": "giant-siphonophore",
        "src": "assets/images/giant-siphonophore-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "대왕관해파리 · 작은 몸들이 함께 움직이기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "서로 붙은 두 큰 유영체에서 하나의 줄기가 이어지고 반복 작은 몸과 촉수가 줄기에서 나온다. 군체 전체와 가는 끝이 화면 안에 있고 해저 바닥·큰 먹이·부유기체 주머니를 따로 꾸미지 않았다.",
        "generationPrompts": [
          "Generate a single 3:2 landscape natural-history illustration for a Korean children's marine animal atlas. A complete single Praya dubia calycophoran siphonophore colony drifts and swims in dim quiet open midwater, viewed from an oblique rear-above direction different from a front portrait. The paired leading swimming zooids are exactly TWO large clear rounded muscular bells, one slightly compressed to show a swimming pulse; the two bells meet at a short common junction. A single thin transparent stem extends continuously backward from this junction in a gentle loose S-curve across the frame. Along the stem a sequence of SMALL transparent protective and feeding zooids remain firmly attached, with modest reddish digestive regions in some feeding zooids. Fine fishing tentacles are naturally a little gathered close to the stem in this swimming view, with their individual roots and intact tapered ends still visible. This is an educational reconstruction of coordinated swimming, not a measurement or a rapid-action photograph. Keep the entire colony, both swimming bells and every tentacle end within the image with at least 10 percent empty space on every side. No gas-filled float, no pneumatophore, no single jelly umbrella, no third large bell, no detached tiny bodies, no severed string. Natural translucent tissue, clear body connections, soft external observation illumination with restrained pale blue-gray reflections, elegant slightly painterly scientific realism. Background is deep navy-blue water with very sparse marine snow, no surface or seabed, no prey or fish. Avoid neon light rope, galaxy spiral, firework bead chain, decorative glowing bulbs, text, captions, labels, arrows, panels, borders or watermark."
        ],
        "generatedAt": "2026-10-07T22:52:42.179Z",
        "checkedAt": "2026-10-08",
        "sha256": "b5eaacf30db1e0b0794f898d73a47ef8707a1bffbc4a2250f54145b083e88c77",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "두 유영 방울과 하나로 연결된 군체가 협력해 헤엄치는 구조를 설명하는 재구성. 수축 정도나 속도·기록 길이는 관측 측정값이 아님.",
        "behaviorSources": [
          {
            "title": "JAMSTEC — Praya dubia",
            "url": "https://www.godac.jamstec.go.jp/bismal/j/view/9000445"
          },
          {
            "title": "Monterey Bay Aquarium — Giant siphonophore, colony roles",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-siphonophore"
          }
        ]
      }
    ]
  },
  {
    "id": "dinner-plate-jelly",
    "name": "접시해파리류",
    "scientificName": "Solmissus spp.",
    "group": "자포동물",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "depthZoneIds": [
      "sunlight",
      "twilight",
      "midnight"
    ],
    "summary": "넓고 납작한 접시 같은 우산을 지닌 해파리 무리예요. 촉수를 앞으로 뻗어 다른 말랑한 동물을 잡아요.",
    "identity": [
      "Solmissus 속을 함께 소개하는 항목이에요. 납작한 우산의 윗면 바깥쪽에서 굵고 곧은 촉수가 뻗어요. 일본 원서의 이름은 S. incisa에 대응하지만, 이 카드는 특정 종을 동정한 항목은 아니에요."
    ],
    "ecology": "먹이를 찾을 때에는 촉수를 앞으로 향해 조용히 헤엄쳐요. 붙잡은 먹이를 우산 아래의 입으로 옮겨요.",
    "diet": "빗해파리, 다른 해파리, 관해파리, 살파, 화살벌레 등 말랑한 동물을 먹어요.",
    "range": "세계 여러 바다의 수면과 해저 사이 물속에 분포해요.",
    "size": "종에 따라 달라요. MBARI의 속 소개에서는 우산 지름 약 20 cm까지예요.",
    "depth": "MBARI의 속 소개 범위는 수면 가까이부터 약 2,000 m까지예요.",
    "aliases": [
      "접시해파리",
      "Dinner plate jelly",
      "Solmissus"
    ],
    "sources": [
      {
        "title": "MBARI — Dinner plate jelly, Solmissus spp.",
        "url": "https://www.mbari.org/animal/dinner-plate-jelly/"
      },
      {
        "title": "MBARI — Food web dynamics, Solmissus observations",
        "url": "https://www.mbari.org/project/food-web-dynamics/"
      },
      {
        "title": "WoRMS — Solmissus, accepted genus",
        "url": "https://www.marinespecies.org/aphia.php?p=taxdetails&id=117074"
      },
      {
        "title": "JAMSTEC BISMaL — カッパクラゲ, Solmissus incisa",
        "url": "https://www.godac.jamstec.go.jp/bismal/j/view/9000421"
      }
    ],
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "dinner-plate-jelly",
        "src": "assets/images/dinner-plate-jelly-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "접시해파리류 · 납작한 우산과 위쪽에서 이어지는 촉수",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 납작한 원반 우산, 위쪽 외측 우산에서 이어지는 굵은 촉수 뿌리/가늘어지는 비분지 촉수, 넓은 중앙 구부와 끝까지의 전신 확인. 긴 관상 구병/입팔/아래쪽 가는 촉수 프린지/빗판/네 말발굽 생식소/자가발광 없음.",
        "generationPrompts": [
          "Create ONE finished landscape 3:2 realistic painterly scientific marine natural-history illustration for children ages 5–12. Portrait of a complete dinner-plate jelly, Solmissus spp., using the transparent many-tentacled Solmissus incisa complex appearance as a genus-level educational example, not a species-identification plate. The animal is almost colorless and extremely transparent, with a broad FLATTENED round disc-like umbrella, thin flexible scalloped edge, thick lens-like central mesoglea and a broad flat central underside stomach with a simple circular mouth, NOT a long dangling tubular mouth. Natural stomach pouches form a subtle circle inside the disc; no four horseshoe gonads and no decorative radial neon lines. Around its umbrella are approximately 24 slender solid stiff tapering tentacles, each securely rooted ON THE OUTER UMBRELLA a short distance ABOVE the flexible marginal edge, with deeper root segments visible through the transparent tissue. These are separate simple unbranched tentacles, similar in length to the bell diameter, extending radially almost IN THE PLANE OF THE DISC in a clear adult resting posture. There is no second fringe of hairlike tentacles dangling from the lowest edge and no broad oral arms. View from a low three-quarter angle so the transparent disc, roots, underside mouth and spread of tentacles are readable. Show the full round umbrella and ALL tentacle tips inside generous dark-water margins, no crops or disconnected strings. Only reflected soft observation light illuminates faint blue-white transparent tissue; no glowing body or tentacle tips. Cold deep navy-black midwater with very sparse suspended particles, no seafloor, coral, sunlight or other animals. No text, labels, borders, montage, panels, logos or watermark."
        ],
        "generatedAt": "2026-10-07T17:58:59.827Z",
        "checkedAt": "2026-10-08",
        "sha256": "07dd5aa647450e06f8b3af30d3e341b935ebe2f86c74baec204db5e774e40b48",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "dinner-plate-jelly",
        "src": "assets/images/dinner-plate-jelly-chatgpt-feeding-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "접시해파리 · 촉수 가까이 있는 작은 살파",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 교정 원본에서 중앙에 길게 매달린 꽃잎 모양 기관이 없어지고, 우산 밑면의 넓고 얕은 원형 위와 단순한 입구로 바뀌었다. 하나의 납작한 우산, 윗면 바깥쪽에서 나오는 끝이 가는 촉수의 뿌리와 전체 끝, 밖의 작은 살파를 확인했다. 포획 성공을 보여 주지 않는 설명과 맞는다.",
        "generationPrompts": [
          "Create a single 3:2 landscape natural history illustration for a Korean marine animal atlas for ages 5–12. Depict one complete Solmissus spp. dinner-plate narcomedusa, appearance consistent with the Solmissus incisa complex, encountering one much smaller transparent barrel-shaped salp in dark blue midwater. This is a scientifically informed food encounter reconstruction, not a claim of observed capture. The salp is just beyond one leading tentacle tip and remains free, with no swallowing, no trapped prey and no impact effects. The jelly has a broad thin transparent flattened dinner-plate bell with a shallow central stomach visible through it. About 24 slender solid tapered tentacles arise visibly from the upper OUTER bell surface slightly ABOVE the margin, radiating outward and angled forward above the bell in the swimming direction; each root is continuously connected to the bell, not a fringe hanging from the underside. Stiff gently curving tentacles, not loose long hair or spiral coils. Simple broad central mouth on the underside, no elongated mouth tube and no four horseshoe moon-jelly organs. Oblique side view with the near underside and top attachment sites both readable. Whole jelly including EVERY tentacle end and the entire little salp fits comfortably within the frame with 10 percent empty margin. Accurate soft translucent tissue, restrained scientific realism with slightly painterly texture, clear subject, dim external lighting, subtle pale blue reflections, no self-luminous neon tentacles. No ctenophore comb rows, no fantasy organs, no other main animal, no reef or seabed, no text, no labels, no split panels, no diagram arrows, no watermark.",
          "Edit the supplied Solmissus spp. dinner-plate jelly illustration with ONE minimal anatomical correction: replace only the oversized dangling flower-like frilled central stomach/mouth with a broad, shallow, almost flat circular stomach spread along the underside of the transparent disc. Show a small simple central oral opening flush with that shallow stomach. The gastric tissue lies within the plate-like bell; it must not form petals, a cauliflower, a thick rosette, multiple hanging oral arms, or a long manubrial tube. In the genus Solmissus, gastric pouches belong around the outer margin of the large circular stomach between the tentacle-root septa, not as a protruding central blossom. Keep the existing complete flattened bell, all original solid tapering tentacles and their above-margin upper outer attachment points and all their visible ends unchanged. Preserve the free little salp outside the right tentacle, whole framing, subject angle, body transparency, dark blue water, particles, lighting, palette and original 3:2 landscape scientific painterly style. Change no other animal structures or scenery. No text, labels, arrows, split panels or watermark."
        ],
        "generatedAt": "2026-10-07T23:09:06.419Z",
        "checkedAt": "2026-10-08",
        "sha256": "e62179982cf4f87f759d5ac7abd4ca4d6574d935fd7664cb96883f68ffd22a26",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "MBARI의 젤라틴질 먹이 및 촉수를 우산 위로 펴는 자세를 재구성. 살파는 밖에 있으며 포획 성공은 주장하지 않는다. DFO Arai & Brinckmann-Voss 1980 인쇄141–142쪽 본문 및 Fig72를 실제 확인하여 중앙 주름을 넓고 얕은 원형 위로 교정.",
        "behaviorSources": [
          {
            "title": "MBARI — Dinner plate jelly",
            "url": "https://www.mbari.org/animal/dinner-plate-jelly/"
          },
          {
            "title": "DFO — Hydromedusae of British Columbia and Puget Sound, pp.141–142",
            "url": "https://waves-vagues.dfo-mpo.gc.ca/Library/922.pdf"
          }
        ]
      },
      {
        "id": "dinner-plate-jelly",
        "src": "assets/images/dinner-plate-jelly-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "접시해파리 · 앞으로 펼친 촉수로 유영하기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 기울어진 얕은 원반 우산과 우산 위 외측 뿌리에 연결돼 위/앞쪽으로 향하는 단순 촉수, 전체 끝/몸 연결 확인. 아래 중앙은 짧은 구멍이고 긴 구병/입팔 없음. MBARI의 앞쪽 촉수 유영 자세 설명과 부합.",
        "generationPrompts": [
          "A single 3:2 landscape natural history illustration for a children's marine atlas, scientifically restrained painterly realism. One entire Solmissus spp. dinner-plate narcomedusa of the Solmissus incisa appearance complex cruising slowly in quiet deep blue open midwater. Show a clear oblique side view from slightly above: a low thin transparent flattened saucer bell tilted gently, central broad shallow stomach visible through it, and roughly 24 evenly spaced stiff tapered solid tentacles visibly attached to the upper OUTER surface just ABOVE the bell rim. They sweep upward and forward ahead of the bell into clear water, forming a three-dimensional umbrella-like array with no prey. Tentacle roots and the full tapered tip of EVERY tentacle remain within frame, with generous 12 percent background space on all sides. Near and far tentacles can overlap naturally but remain attached; none floats detached. Keep the bell flattened with a simple underside central mouth opening, without a long downward manubrium or elaborate hanging oral frills. Pale transparent tissues and subtle subdued reflected light only; this jelly is not a glowing ctenophore. The scene explains hunting posture in open water, not a captured action photograph. Smooth dark blue background with sparse tiny marine snow, clear anatomical silhouette, no seabed, no coral, no fish, no extra jelly, no text, no label, no collage, no split panel, no arrows and no watermark."
        ],
        "generatedAt": "2026-10-07T18:08:39.632Z",
        "checkedAt": "2026-10-08",
        "sha256": "d289bed2f71999430489d9e17bbaac12d6ae53ce8ce3918482540317fd81b7e6",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI의 Solmissus spp.가 촉수를 우산 위쪽·진행 방향으로 내밀어 사냥하는 자세를 바탕으로 한 교육 재구성. 먹이 없는 유영 장면이며 실제 특정 종의 기록 사진 아님.",
        "behaviorSources": [
          {
            "title": "MBARI — Dinner plate jelly, forward tentacle hunting posture",
            "url": "https://www.mbari.org/animal/dinner-plate-jelly/"
          }
        ]
      }
    ]
  },
  {
    "id": "bigfin-squid",
    "name": "큰지느러미오징어류",
    "scientificName": "Magnapinna spp.",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "아주 큰 지느러미와 실처럼 긴 팔 끝이 눈에 띄는 심해 오징어 무리예요.",
    "identity": [
      "Magnapinna 속의 여러 종을 함께 소개해요. 살아 있는 성체의 영상만으로 정확한 종을 가려내기는 어려워요.",
      "몸통 양옆의 아주 큰 지느러미가 특징이에요. 팔 여덟 개와 촉수 두 개는 팔꿈치처럼 굽고 실 같은 긴 끝으로 이어져요."
    ],
    "ecology": "큰 지느러미를 물결처럼 움직이고 긴 팔 끝을 늘어뜨려요. 아주 드물게 잠수정 카메라에 보여요.",
    "diet": "먹이잡이에 긴 팔 끝을 쓸 가능성이 있지만 실제 먹이와 사냥 방법은 아직 확실하지 않아요.",
    "range": "여러 대양의 열대·온대 깊은 바다. 특정 한 종의 세계 분포로 단정하지 않아요.",
    "size": "MBARI는 속의 최대 알려진 전체 길이를 약 6.4 m로 소개해요. 긴 실 모양 팔 끝을 포함한 길이예요.",
    "depth": "MBARI의 속 소개는 약 1,600–6,200 m. 2026년 한 북동태평양 관측은 3,277 m였어요.",
    "sources": [
      {
        "title": "MBARI — Bigfin squid",
        "url": "https://www.mbari.org/animal/bigfin-squid/"
      },
      {
        "title": "MBARI2026 —3,277m 큰지느러미오징어 관측",
        "url": "https://www.mbari.org/news/mbari-researchers-film-chance-encounter-with-a-rare-deep-sea-bigfin-squid/"
      }
    ],
    "depthZoneIds": [
      "midnight"
    ],
    "aliases": [
      "Bigfin squid",
      "ミズヒキイカ",
      "큰지느러미오징어"
    ],
    "featured": false,
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "먹이 종류와 직접 사냥하는 모습은 아직 충분히 알려지지 않았어요. 서로 다른 두 관찰 구도로 모습을 살펴봐요.",
    "gallery": [
      {
        "id": "bigfin-squid",
        "src": "assets/images/bigfin-squid-chatgpt-portrait-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰지느러미오징어류 · 긴 실 모양 팔 끝",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본1536×1024에서 외투막에 연결된 큰 지느러미2개와 물방울형 몸, 머리에서 길게 이어진 필라멘트10끝(왼쪽5·오른쪽5)을 확인. 모든 끝이 화면 안이며 장식 꼬리나 끊긴 선은 없다. 중앙의 짧은 깔때기/구강부 윤곽은 긴 팔 끝으로 세지 않았다.",
        "generationPrompts": [
          "Generate ONE 3:2 landscape realistic painterly scientific natural-history underwater illustration of a COMPLETE adult bigfin squid Magnapinna spp., genus-level because filmed adults cannot be assigned confidently to an individual species. Calm upright hovering observation in deep navy abyssal water, no prey or invented hunting. Set the small connected body in the upper-center of a VERY WIDE shot so every extremely long filament tip stays inside the landscape frame with margins. The elongated translucent pale rose-beige teardrop mantle is pointed at the posterior top, its head is below with two small natural lateral dark eyes. Two truly enormous broad thin oval-diamond fins run along most of the mantle sides and are continuously fused to the mantle, forming a wide soft heart-like paired fin silhouette; no fins on head, no detached wings, no jelly bell. From the head mouth crown arise EXACTLY TEN appendages: eight arms plus two tentacles. Show their ten separate continuous proximal bases, short muscular proximal segments spread outward to left and right, then 90-degree elbow-like bends leading into ten extremely long THIN WHITE ADHESIVE FILAMENTS pointing downwards. Arrange five clearly separated elbow/filament traces on each side with open-water gaps, keeping each continuously rooted to the actual head; no branching or extra threads. Every filament several times longer than the entire mantle, thread-like with microscopic suckers too small to be huge suction discs; slender delicate ends all in the frame. Do not shorten the filaments into ordinary octopus arms. Use restrained side reflections from observation lighting, not glowing strings, lasers, symmetrical decorative light trails, bead chains or fantasy alien. Neutral translucent wet tissues, soft fin surface and gentle natural curves, sparse marine snow, entirely dark open water without a seabed to keep the full ten appendages readable. No feeding, prey, capture, eggs, ink, damaged arms, cut-off ends, text, label, border, diagrams, panels, collage, logos or watermark."
        ],
        "generatedAt": "2026-10-07T22:55:27.091Z",
        "checkedAt": "2026-10-08",
        "sha256": "bf007ddd2d87d7e31a5dafe5833719be17a1d898bc56b15a043390f2a5e18a4c",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "bigfin-squid",
        "src": "assets/images/bigfin-squid-chatgpt-ecology-side-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰지느러미오징어류 · 비스듬히 펼친 지느러미",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본1536×1024에서 두 큰 지느러미·물방울 외투막·작은 머리의 연결과 길게 뻗은 필라멘트10개의 말단을 대조. 가는 두 선은 가까이 지나고 몇 선은 교차하지만 경로는 팔에서 이어져 있다. 필라멘트가 몸보다 여러 배 길고 전신과 끝이 화면 안이다.",
        "generationPrompts": [
          "Generate ONE 3:2 landscape realistic painterly scientific natural-history underwater illustration of a COMPLETE adult bigfin squid Magnapinna spp., genus-level because filmed adults cannot be assigned confidently to an individual species. Calm upright hovering observation in deep navy abyssal water, no prey or invented hunting. Set the small connected body in the upper-center of a VERY WIDE shot so every extremely long filament tip stays inside the landscape frame with margins. The elongated translucent pale rose-beige teardrop mantle is pointed at the posterior top, its head is below with two small natural lateral dark eyes. Two truly enormous broad thin oval-diamond fins run along most of the mantle sides and are continuously fused to the mantle, forming a wide soft heart-like paired fin silhouette; no fins on head, no detached wings, no jelly bell. From the head mouth crown arise EXACTLY TEN appendages: eight arms plus two tentacles. Show their ten separate continuous proximal bases, short muscular proximal segments spread outward to left and right, then 90-degree elbow-like bends leading into ten extremely long THIN WHITE ADHESIVE FILAMENTS pointing downwards. Arrange five clearly separated elbow/filament traces on each side with open-water gaps, keeping each continuously rooted to the actual head; no branching or extra threads. Every filament several times longer than the entire mantle, thread-like with microscopic suckers too small to be huge suction discs; slender delicate ends all in the frame. Do not shorten the filaments into ordinary octopus arms. Use restrained side reflections from observation lighting, not glowing strings, lasers, symmetrical decorative light trails, bead chains or fantasy alien. Neutral translucent wet tissues, soft fin surface and gentle natural curves, sparse marine snow, entirely dark open water without a seabed to keep the full ten appendages readable. No feeding, prey, capture, eggs, ink, damaged arms, cut-off ends, text, label, border, diagrams, panels, collage, logos or watermark.",
          "Create ONE genuinely different 3:2 landscape realistic painterly natural-history underwater illustration of Magnapinna spp., using the attached portrait for anatomical identity only: whole elongated teardrop mantle, two huge connected mantle fins, small lateral head eyes and exactly eight arms plus two tentacles ending in extremely long thin filaments. A WIDE THREE-QUARTER LEFT SIDE observation of the complete animal, mantle/head in the upper-left third and ten connected thread-like filaments extending gently diagonally down and right through open navy water. Rotate the body and fins so the nearer broad oval-diamond fin is seen across its thin curved surface and the far fin edge is partly behind the mantle; do not reuse a symmetrical frontal composition. The short proximal arm/tentacle sections leave the actual head crown and have elbow-like bends where their very long narrow adhesive extensions continue. All TEN true filament ends fit inside the landscape frame with generous margins; no branching, merging, detached string, cropped tip or additional decorative line. Filaments several times mantle length with very small suckers, not normal fat octopus arms or chains of glowing beads. Fine neutral observation illumination on translucent pale rose-beige tissue; sparse marine snow in abyssal open water, no floor contact or prey, hunting, ink or speculation. This is alternative-angle anatomical observation of the genus, not identification of a particular Magnapinna species or a success capture. No luminous tissues, text, labels, panels, border, collage, watermark or sunbeams."
        ],
        "generatedAt": "2026-10-07T22:57:27.810Z",
        "checkedAt": "2026-10-08",
        "sha256": "710776ba6718734595f1fd2b1935007f84a8ff8e0e5c1ebe207ad3563e1e1fb7",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI의 두 큰 지느러미/물방울 몸/8팔2촉수/팔꿈치형 자세와 긴 실 끝 관측에 근거한 속 범위 교육 재구성. 먹이 종류/포획법은 Unknown으로 가상 사냥 없음.",
        "behaviorSources": [
          {
            "title": "MBARI — Bigfin squid",
            "url": "https://www.mbari.org/animal/bigfin-squid/"
          },
          {
            "title": "MBARI2026 — Bigfin squid hovering above seafloor",
            "url": "https://www.mbari.org/news/mbari-researchers-film-chance-encounter-with-a-rare-deep-sea-bigfin-squid/"
          }
        ]
      },
      {
        "id": "bigfin-squid",
        "src": "assets/images/bigfin-squid-chatgpt-ecology-oblique-fins-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰지느러미오징어류 · 지느러미를 물결치며 떠 있기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "이어진 길쭉한 외투와 큰 지느러미2, 자연스러운 머리/눈과 엘보를 거쳐 이어지는 긴10개 끝을 실제 원본에서 추적. 분리된 줄이나 여분 fin엽 없음.",
        "generationPrompts": [
          "Generate ONE 3:2 landscape realistic painterly scientific natural-history underwater illustration of a COMPLETE adult bigfin squid Magnapinna spp., genus-level because filmed adults cannot be assigned confidently to an individual species. Calm upright hovering observation in deep navy abyssal water, no prey or invented hunting. Set the small connected body in the upper-center of a VERY WIDE shot so every extremely long filament tip stays inside the landscape frame with margins. The elongated translucent pale rose-beige teardrop mantle is pointed at the posterior top, its head is below with two small natural lateral dark eyes. Two truly enormous broad thin oval-diamond fins run along most of the mantle sides and are continuously fused to the mantle, forming a wide soft heart-like paired fin silhouette; no fins on head, no detached wings, no jelly bell. From the head mouth crown arise EXACTLY TEN appendages: eight arms plus two tentacles. Show their ten separate continuous proximal bases, short muscular proximal segments spread outward to left and right, then 90-degree elbow-like bends leading into ten extremely long THIN WHITE ADHESIVE FILAMENTS pointing downwards. Arrange five clearly separated elbow/filament traces on each side with open-water gaps, keeping each continuously rooted to the actual head; no branching or extra threads. Every filament several times longer than the entire mantle, thread-like with microscopic suckers too small to be huge suction discs; slender delicate ends all in the frame. Do not shorten the filaments into ordinary octopus arms. Use restrained side reflections from observation lighting, not glowing strings, lasers, symmetrical decorative light trails, bead chains or fantasy alien. Neutral translucent wet tissues, soft fin surface and gentle natural curves, sparse marine snow, entirely dark open water without a seabed to keep the full ten appendages readable. No feeding, prey, capture, eggs, ink, damaged arms, cut-off ends, text, label, border, diagrams, panels, collage, logos or watermark.",
          "Generate ONE new 3:2 landscape realistic painterly marine natural-history illustration of a complete bigfin squid Magnapinna spp. softly hovering ABOVE a distant dark muddy abyssal seabed, using the attached portrait for consistent elongated teardrop mantle, broad paired mantle fins, small head eyes and eight arms/two tentacles that each continue into a long thin white adhesive filament. MBARI2026 observed hovering with fins undulating above the seafloor, but diet is unknown: show no prey, hunting, feeding, grabbing, walking on the bottom or touching organisms. A wide ecological observation view places the entire animal in the middle-left with generous dark water all around. Its connected mantle is near upper-left-center, paired giant fins are slightly asymmetrically curved in a natural undulating resting phase, and ten separate actual head-rooted proximal arms/tentacles bend at elbow-like angles into ten long delicate filaments. All ten continuous traces and slender free tips stay completely inside frame and hang ABOVE the seafloor without contact. Filaments several times longer than mantle; never decorative glowing trails, bead chains or extra detached threads. Show the unobtrusive seabed as a soft distant low band along bottom, no specific coral community or claimed feeding site. Neutral submersible-like observation light, restrained pale rose/beige translucent animal, pitch navy abyssal water and sparse marine snow. No exact size/depth numbers or species certainty implied. No surface, sun rays, neon, luminous body, egg clutch, text, labels, diagrams, panels, collage, border, logo or watermark. Anatomical count correction for this new composition: give five separate elbow-to-filament paths on the LEFT and five on the RIGHT, ten total, separated by water from root through free end. The centralmost LEFT filament and centralmost RIGHT filament must both remain separately visible all the way to two separate tips, do not overlap them or replace one with a short stub. No short central extra appendage beneath the mouth. Use a more frontal hovering view if necessary to ensure all ten are countable. Keep the entire squid and all ten endpoints comfortably ABOVE the ground line.",
          "Create ONE new full-animal natural-history illustration for Sea Atlas, children ages 5–12, landscape 3:2, realistic refined painterly scientific style. Species scope: Magnapinna spp., bigfin squid, adult-looking genus-level observational reconstruction, not a precisely identified species. The attached prior Sea Atlas image is ONLY a taxon, colour, anatomy and painting-style reference; completely REBUILD its viewpoint and appendage configuration. Do not preserve the flat symmetric frontal pose, do not rotate or mirror that silhouette. NEW VIEW is a genuine left-side three-quarter view: a slender translucent elongated teardrop mantle near the upper left, head directed down and slightly toward the viewer, long mantle axis gently oblique. Show TWO very large broad fins attached laterally along the mantle, in a natural undulation: the NEAR fin curves broadly toward the camera with its margin rolled in a gentle wave, the FAR fin is clearly present but foreshortened in perspective behind the mantle; the two fins must no longer look like a flat symmetric heart. Show eight arms plus two tentacles, exactly TEN connected appendages. Their proximal sections spread at different near/far depths and bend in the characteristic approximately 90-degree elbow posture, each continuing smoothly into ONE extremely long fine white filament with a separate visible tip. Draw ten continuous individually traceable root-to-tip paths, no branches, no detached strings, no extra filaments; let them hang in a distinctly ASYMMETRIC three-dimensional loose curtain, near threads extending farther into the foreground and far ones receding, with subtly different gentle natural curves and elbow heights. Not the reference's symmetric five-left/five-right flat fan, not all streaming together diagonally as in a fast swim. Fit ALL ten filament tips and both fin tips inside the picture with wide margins; the body and fins should occupy the upper quarter so the very long filaments remain plausible. The filaments remain above a very low distant abyssal floor, never used as walking legs or holding prey. A sparse dark blue deep-water observation with subdued neutral ROV-like illumination, no visible ROV, prey, companion animals, fantasy light, words, labels or watermark. Scientific constraints: tiny suckers need not be resolved, no thick octopus arms, no fins detached from mantle, no squid hooks, no prey capture claims; feeding is unconfirmed. The TWO required visible changes are real 3D camera/fin perspective and different ten-arm elbow/filament arrangement."
        ],
        "generatedAt": "2026-10-08T16:30:28.879Z",
        "checkedAt": "2026-10-11",
        "sha256": "c52442e4540dba58635aa8b753dcdd77d1c81251f2f16d71216c01d912409fcc",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "MBARI의 큰 두 지느러미 물결 운동, 팔꿈치형 자세와 긴 8팔/2촉수 끝 관찰에 근거한 교육 재구성. 먹이를 잡거나 바닥을 걷는 장면은 만들지 않음.",
        "behaviorSources": [
          {
            "title": "MBARI — Bigfin squid: fin undulation, eight arms and two tentacles, diet unknown",
            "url": "https://www.mbari.org/animal/bigfin-squid/"
          },
          {
            "title": "MBARI2026 — Bigfin squid encounter above abyssal seafloor",
            "url": "https://www.mbari.org/news/mbari-researchers-film-chance-encounter-with-a-rare-deep-sea-bigfin-squid/"
          }
        ],
        "viewpoint": "실제 왼쪽 앞사선; 가까운 큰 지느러미와 뒤에서 줄어든 반대 지느러미의 원근",
        "pose": "두 지느러미의 물결과 높이가 다른 팔꿈치, 비대칭으로 늘어진 긴 10개 끝",
        "poseVariationCheck": "기존 대칭 정면에서 한 눈이 보이는 앞옆 사선으로 바뀌고 지느러미 원근/각도가 달라짐. 긴 부속지의 엘보 높이와 끝 굽힘이 비대칭으로 달라져 두 축 변화를 확인.",
        "visualLimitations": "부속지의 겹침 때문에 여덟 팔과 두 촉완 각각의 기부 대응은 전수 확정하지 않음. 특정 사냥 행동으로 설명하지 않음. 후면 얇은 선의 교차로 각 기부8팔/2촉수 구별은 못함. 속 수준 삽화이며 미세 부속지 해부/실제 운동 계측 인증 아님. 외투 위쪽 여백이 좁지만 끝은 프레임 안."
      }
    ]
  },
  {
    "id": "needlebeard-anglerfish",
    "name": "바늘방석아귀",
    "scientificName": "Neoceratias spinifer",
    "group": "어류",
    "habitatIds": [
      "deep",
      "pelagic"
    ],
    "summary": "턱 바깥에 길고 구부러진 이빨이 있는 작은 심해 아귀예요. 머리 위에 낚싯대가 없어요.",
    "identity": [
      "머리 위에 낚싯대가 없는 아귀예요. 몸 전체에 가시가 있는 것은 아니에요.",
      "매끈하고 길쭉한 몸, 아주 작은 눈, 턱 바깥의 긴 갈고리 이빨을 함께 살펴봐요."
    ],
    "ecology": "세계 여러 바다의 깊은 물속에 살아요. 작은 수컷은 암컷의 몸에 붙어 지내요.",
    "diet": "무엇을 어떻게 먹는지는 아직 잘 알려지지 않았어요. 긴 이빨로 먹이를 붙잡을 가능성이 제안됐지만 실제 사냥 장면으로 단정하지 않아요.",
    "range": "세계 주요 대양의 깊은 물속.",
    "size": "암컷 표준길이 약 10.9 cm, 수컷 약 1.8 cm 기록. 표준길이는 꼬리지느러미를 뺀 몸길이예요.",
    "depth": "박물관 소개에는 최대 1200 m, 별도 표본에는 3000 m 기록이 있어요. 이 기록만으로 모든 생활 수심을 확정할 수는 없어요.",
    "sources": [
      {
        "title": "Museums Victoria — Neoceratiidae 형태·생식·미확정 식성",
        "url": "https://fishesofaustralia.net.au/Home/family/81"
      },
      {
        "title": "Museums Victoria — Neoceratias spinifer",
        "url": "https://fishesofaustralia.net.au/home/species/3382"
      },
      {
        "title": "FishBase — 표본 FISH1996862 수심 3000 m",
        "url": "https://fishbase.se/museum/SpecOccurrences.php?catnum2=90051"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "Neoceratias spinifer",
      "Needlebeard seadevil",
      "Spiny seadevil",
      "キバアンコウ"
    ],
    "featured": false,
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "이 아귀가 무엇을 먹는지는 아직 확인되지 않았어요. 긴 이빨로 먹이를 붙잡을 수 있다는 설명은 연구자의 추정이에요.",
    "gallery": [
      {
        "id": "needlebeard-anglerfish",
        "src": "assets/images/needlebeard-anglerfish-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "바늘방석아귀 · 턱 바깥의 갈고리 이빨",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 가늘고 긴 몸과 짧은 머리, 머리에 비해 아주 작은 눈, 턱의 바깥에서 이어진 긴 굽은 이빨, 등 낚싯대·미끼 없음, 연결된 꼬리지느러미를 확인했다. 전신과 지느러미 끝이 화면 안에 있다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one single finished landscape 3:2 realistic painted natural-history marine atlas illustration for ages 5–12. Whole uncropped animal, every tail tip and appendage connected visibly to its own body, comfortable margins of at least 12 percent. No text, labels, arrows, scale bars, grids, panels, collage, watermark or border. Educational reconstruction, not a photo. Neutral soft observation lighting permits reading anatomy against dark blue water, no theatrical neon, monsters, humans or machinery. Adult female Neoceratias spinifer, needlebeard seadevil: slender elongated moderately side-compressed soft dark brown-black body, short head, minute poorly developed eyes. Large mouth extends behind the eye; SHORT inner jaw teeth and TWO OR THREE rows of long slender hinged curved hook-tipped teeth along the OUTER margins of both jaws, arranged close to the jaw edge. The external teeth are anatomically attached to small jaw-edge protuberances; they are not loose whiskers. Smooth naked skin, absolutely no porcupine-like spines on body or fins. NO forehead fishing rod and NO lure or bioluminescent headlamp, no chin barbel, no pelvic fins. Modest dorsal and anal fins distinctly joined to body, small pectoral fins and a short intact caudal fin. Not a globular black seadevil. No prey or feeding action because this species' diet and hunting are not confirmed. Scene: single female in clear left side profile suspended quietly in deep open midwater. Body occupies about 70% of width, external hooked jaw teeth readable, mouth only slightly open. No seabed or surface sun rays.",
          "Use case: scientific-educational. Edit the supplied natural-history illustration of the adult female Neoceratias spinifer with precise anatomical proportion corrections only. Preserve its complete connected fish, smooth bare brown skin, original pose, background, 3:2 framing and every tail tip in frame. The original head and eye are far too big. Reconstruct the female as a LONG SLENDER SOFT-BODIED fish with a genuinely SHORT SMALL HEAD: noticeably lengthen and slim the trunk, shorten the entire head from snout to gill opening, reduce the mouth and jaws in the same proportion, and make the eye a MINUTE dark pinprick with no conspicuous iris or glossy eye sphere. The head must take distinctly less than one fifth of total fish length, rather than one third. Retain the short inner jaw teeth and TWO OR THREE closely spaced rows of slender long hinged hook-tipped teeth along the OUTER margins of the shortened jaws, visibly attached to jaw-edge nodules. Do not leave the giant fangtooth head unchanged. Moderate rear dorsal/anal fins, small pectoral fins and short connected caudal fin stay natural. No forehead rod, lure, headlamp, pelvic fins, chin barbel, body spines or prey. Do not add any male, prey or new animal. No text, labels, arrows, panels or watermark."
        ],
        "generatedAt": "2026-10-07T23:06:06.894Z",
        "checkedAt": "2026-10-08",
        "sha256": "b8f84a2c753b1e8ce41e969c7ae0adfed4fe2403d93cbc063dc333df3f652fbd",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "needlebeard-anglerfish",
        "src": "assets/images/needlebeard-anglerfish-chatgpt-ecology-pose-v4.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "바늘방석아귀 · 앞 사선에서 본 작은 머리와 긴 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 큰 다각형/마름모 반복 경계가 제거되고 몸통은 연속된 매끈한 갈색 음영으로 보인다. 짧은 머리·작은 눈·jaw에 붙은 갈고리 치아·연속 꼬리, 등/뒷/가슴핀과 낚싯대 없음을 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one single finished landscape 3:2 realistic painted natural-history marine atlas illustration for ages 5–12. Whole uncropped animal, every tail tip and appendage connected visibly to its own body, comfortable margins of at least 12 percent. No text, labels, arrows, scale bars, grids, panels, collage, watermark or border. Educational reconstruction, not a photo. Neutral soft observation lighting permits reading anatomy against dark blue water, no theatrical neon, monsters, humans or machinery. Adult female Neoceratias spinifer, needlebeard seadevil: slender elongated moderately side-compressed soft dark brown-black body, short head, minute poorly developed eyes. Large mouth extends behind the eye; SHORT inner jaw teeth and TWO OR THREE rows of long slender hinged curved hook-tipped teeth along the OUTER margins of both jaws, arranged close to the jaw edge. The external teeth are anatomically attached to small jaw-edge protuberances; they are not loose whiskers. Smooth naked skin, absolutely no porcupine-like spines on body or fins. NO forehead fishing rod and NO lure or bioluminescent headlamp, no chin barbel, no pelvic fins. Modest dorsal and anal fins distinctly joined to body, small pectoral fins and a short intact caudal fin. Not a globular black seadevil. No prey or feeding action because this species' diet and hunting are not confirmed. Scene: one complete female in a slightly elevated front-side three-quarter view, drifting in spacious deep-ocean midwater. Zoom out, fish about 50% of width, sparse marine-snow particles. Keep the slender posterior body and short tail unoccluded. No seabed, plants, sun rays or prey. Proportion priority: a short head clearly followed by a long slender trunk and tail; do not inflate the head into half the animal or turn the body into a stout globular anglerfish.",
          "Use case: scientific-educational. Edit the supplied natural-history illustration of the adult female Neoceratias spinifer with precise anatomical proportion corrections only. Preserve its complete connected fish, smooth bare brown skin, original pose, background, 3:2 framing and every tail tip in frame. The original head and eye are far too big. Reconstruct the female as a LONG SLENDER SOFT-BODIED fish with a genuinely SHORT SMALL HEAD: noticeably lengthen and slim the trunk, shorten the entire head from snout to gill opening, reduce the mouth and jaws in the same proportion, and make the eye a MINUTE dark pinprick with no conspicuous iris or glossy eye sphere. The head must take distinctly less than one fifth of total fish length, rather than one third. Retain the short inner jaw teeth and TWO OR THREE closely spaced rows of slender long hinged hook-tipped teeth along the OUTER margins of the shortened jaws, visibly attached to jaw-edge nodules. Do not leave the giant fangtooth head unchanged. Moderate rear dorsal/anal fins, small pectoral fins and short connected caudal fin stay natural. No forehead rod, lure, headlamp, pelvic fins, chin barbel, body spines or prey. Do not add any male, prey or new animal. No text, labels, arrows, panels or watermark.",
          "Use case: scientific-educational. Create ONE NEW 3:2 landscape painterly natural-history illustration for Sea Atlas, ages5–12. Supplied image is an IDENTITY/COLOR/STYLE reference only for the adult female Neoceratias spinifer. Completely redraw a different 3D pose, never mirror, rotate in the plane, trace or preserve the old almost straight side silhouette. One entire needlebeard anglerfish in dim open deep water, no prey, seabed, male or other animal. NEW VIEWPOINT: LOW FRONT THREE-QUARTER, its genuinely SHORT SMALL HEAD nearest the viewer at lower RIGHT, with the long slender trunk receding toward upper LEFT. Show a little of the underside and unequal near/far cheeks; remain oblique enough to read the long body and jaw margins, not a giant frontal head. NEW BODY GESTURE: a gentle continuous S-bend along the slender trunk and caudal peduncle, ending in the FULL connected short tail at far upper LEFT. A small near-side pectoral fin sweeps outward/down, the far pectoral is foreshortened and angled back; the moderate dorsal and anal fins are near the rear. The head MUST remain small: snout-to-gill length distinctly less than one fifth of visible total connected fish length even in perspective, with mouth and jaws scaled down proportionately, no balloon head. Smooth bare soft dark brown skin, long slim body, minute pinprick eyes with no conspicuous iris/glossy eyeball. Short inner jaw teeth plus TWO OR THREE closely spaced rows of slender hinged hook-tipped teeth along the OUTER jaw edges, rooted in small jaw-edge nodules, visibly attached continuously, not free floating whiskers. Mouth barely parted enough to read outer tooth rows, no enormous gape. No forehead stalk, lure, luminous bulb, chin barbel, body spines or pelvic fins. All tail, fin and curved tooth tips completely inside generous 15 percent margins. Low soft illustrative fill light reveals anatomy in dark blue water with sparse marine snow; no sunlight, surface or neon. Quiet realistic scientific illustration, no claimed feeding, fantasy monster, blood, humans, text, labels, arrows, panels, border or watermark.",
          "Use case: precise-object-edit. Edit ONLY the female needlebeard anglerfish SKIN TEXTURE in the input. Keep the genuinely new low front three-quarter camera, short head, extremely tiny natural eye, elongated slender gently bent body, unequal pectoral fin poses, no head lure, complete connected tail and entire frame/composition/color/light unchanged. This is Neoceratias spinifer with NAKED SCALELESS SKIN. Remove every overlapping diamond, mesh scale, lattice, hard plate or reptile pattern from the fish. Replace them with a smooth soft scaleless gray-brown surface, with at most sparse very faint irregular soft skin creases; not an evenly repeated pattern. Preserve the thin hooked oral teeth and the natural fin membranes. Do not add skin armor, scales, spikes, lure or pelvic fins. Natural-history painterly realism, 3:2, no text.",
          "Use case: precise-object-edit. Edit ONLY the female fish skin in this exact input image. Keep camera, new three-dimensional low front pose, body shape, short head, tiny eye, open mouth, all connected oral hook teeth, all fins, tail, frame, color palette and background unchanged. This is Neoceratias spinifer, a NAKED SCALELESS anglerfish. The entire female skin from nose and cheek through flank to caudal peduncle must be visibly SMOOTH, CONTINUOUS, SOFT DARK BROWN, like plain wet scaleless skin. Completely ERASE every existing diamond, polygon, cell mesh, lattice, net line, overlapping plate edge and scale-shaped patch on both HEAD AND FULL BODY. Do not merely soften those boundaries: remove them entirely and repaint a uniform continuous softly shaded surface. Use broad smooth highlights and natural shading, absolutely no repeating segmented pattern anywhere on skin. At most TWO OR THREE very faint short irregular soft wrinkles near gill/fin base only, not a grid and not all-body creases. Bright enough neutral fill light to clearly see smooth continuous skin. Do NOT change real slender fin-membrane rays or thin oral teeth; no new lure, pelvic fins, spines, armor or other fish. Whole fish stays intact inside the existing 3:2 frame. No text.",
          "Use case: precise-object-edit. REPAINT ONLY ALL FISH SKIN, absolutely replacing its existing texture, not preserving or smoothing it. Keep this full fish outline, face, eye, fin shape/rays, connected tail, oral hook teeth, three-dimensional pose and background exactly unchanged. The female Neoceratias spinifer is entirely SCALELESS. Paint the entire cheek, skull, trunk and tail peduncle as FEATURELESS SOFT SMOOTH BROWN SKIN, like smooth wet eel or dolphin skin (do NOT change fish anatomy). Use large broad blended color gradients and plain soft highlights only. Erase every tiny polygon, white vein, cracked line, fish scale, scale edge, diamond, network and mesh from the existing surface. No repeating cellular texture anywhere, NO hairline crack pattern. NO creases, NO wrinkles, NO random network, NO stippled raised cells. Skin is perfectly continuous plain soft leather, no pattern. Replace the whole existing skin texture with this new plain matte surface. Preserve fish eye, mouth and hooked jaw teeth; preserve delicate fin-membrane rays, which are not skin scales. No new features, no text. Show sufficiently bright broad diffuse illumination so it is obvious that the skin is plain smooth and naked. 3:2 same full frame."
        ],
        "generatedAt": "2026-10-10T15:40:23.881Z",
        "checkedAt": "2026-10-11",
        "sha256": "6b83a0ca5619b8b48ae0aa1223e23dc348bf956effb80e42c9c396d47b6c614f",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Museums Victoria의 중층·심층 서식과 작은 머리·미세 눈·낚싯대 없는 긴 암컷 형태를 바탕으로 먹이 없는 관찰 장면. 특정 운동학/수심은 주장하지 않음.",
        "behaviorSources": [
          {
            "title": "Museums Victoria — Neoceratiidae",
            "url": "https://fishesofaustralia.net.au/Home/family/81"
          },
          {
            "title": "Museums Victoria — Neoceratias spinifer",
            "url": "https://fishesofaustralia.net.au/home/species/3382"
          }
        ],
        "viewpoint": "머리가 오른쪽 아래로 가까운 앞 사선",
        "pose": "가늘고 긴 몸이 왼쪽 위로 멀어지며 굽고 가슴핀은 서로 다른 원근으로 펼침",
        "poseVariationCheck": "옆모습 세 원본과 달리 가까운 앞머리의 입면이 더 보이고 뒤꼬리로 이어지는 몸이 원근과 곡선을 가지며 두 가슴핀의 각도가 서로 다르다. v1–v3에서 얻은 실제 새 자세를 피부 교정 뒤 유지했다.",
        "visualLimitations": "눈과 치열의 정확한 비율·미세 배열은 확인하지 않음. 일부 먼쪽 지느러미는 자연스럽게 가림. 두부에 불규칙 짧은 주름과 희미한 선이 남지만 반복 비늘 윤곽은 보이지 않는다. 미세 피부 조직·치열 계수는 전문 동정으로 인증하지 않는다."
      },
      {
        "id": "needlebeard-anglerfish",
        "src": "assets/images/needlebeard-anglerfish-chatgpt-ecology2-second-pose-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "바늘방석아귀 · 뒤 사선에서 본 작은 수컷",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전신 반복 판경계가 없어지고 부드러운 갈색 피부와 약한 불규칙 결로 바뀌었다. 작은 눈·짧은 머리·턱 외부 원뿔돌기에 이어진 곡선 치아·낚싯대 없음·배쪽 연결 수컷·몸/꼬리의 연속성을 확인했다.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one single finished landscape 3:2 realistic painted natural-history marine atlas illustration for ages 5–12. Whole uncropped animal, every tail tip and appendage connected visibly to its own body, comfortable margins of at least 12 percent. No text, labels, arrows, scale bars, grids, panels, collage, watermark or border. Educational reconstruction, not a photo. Neutral soft observation lighting permits reading anatomy against dark blue water, no theatrical neon, monsters, humans or machinery. Adult female Neoceratias spinifer, needlebeard seadevil: slender elongated moderately side-compressed soft dark brown-black body, short head, minute poorly developed eyes. Large mouth extends behind the eye; SHORT inner jaw teeth and TWO OR THREE rows of long slender hinged curved hook-tipped teeth along the OUTER margins of both jaws, arranged close to the jaw edge. The external teeth are anatomically attached to small jaw-edge protuberances; they are not loose whiskers. Smooth naked skin, absolutely no porcupine-like spines on body or fins. NO forehead fishing rod and NO lure or bioluminescent headlamp, no chin barbel, no pelvic fins. Modest dorsal and anal fins distinctly joined to body, small pectoral fins and a short intact caudal fin. Not a globular black seadevil. No prey or feeding action because this species' diet and hunting are not confirmed. Scene: a complete female in clear left-side view with ONE much smaller dwarf male (roughly one sixth of her length) attached by his mouth to her lower abdominal skin. His small dark body and tail must be visible and continuously connected to the attachment site, never a detached fragment or a creature sitting on her back. This is an educational reconstruction of the documented parasitic male-female connection. Keep her anal fin distinguishable and both fish inside wide margins, spacious deep midwater. No prey or feeding.",
          "Use case: scientific-educational. Edit the supplied natural-history illustration of the adult female Neoceratias spinifer with precise anatomical proportion corrections only. Preserve its complete connected fish, smooth bare brown skin, original pose, background, 3:2 framing and every tail tip in frame. The original head and eye are far too big. Reconstruct the female as a LONG SLENDER SOFT-BODIED fish with a genuinely SHORT SMALL HEAD: noticeably lengthen and slim the trunk, shorten the entire head from snout to gill opening, reduce the mouth and jaws in the same proportion, and make the eye a MINUTE dark pinprick with no conspicuous iris or glossy eye sphere. The head must take distinctly less than one fifth of total fish length, rather than one third. Retain the short inner jaw teeth and TWO OR THREE closely spaced rows of slender long hinged hook-tipped teeth along the OUTER margins of the shortened jaws, visibly attached to jaw-edge nodules. Do not leave the giant fangtooth head unchanged. Moderate rear dorsal/anal fins, small pectoral fins and short connected caudal fin stay natural. No forehead rod, lure, headlamp, pelvic fins, chin barbel, body spines or prey. Keep the small parasitic male visibly attached to the female underside, with its existing whole connected body and fins; do not enlarge it or detach its attachment root. No text, labels, arrows, panels or watermark.",
          "Use case: scientific-educational. Asset type: Sea Atlas gallery replacement, 3:2 landscape natural-history illustration for children ages 5–12. The input is a SPECIES IDENTITY/COLOR/STYLE reference only. Redraw a genuinely new 3D camera and body/fin pose; do not preserve, trace, rotate or mirror the old silhouette. Refined realistic painterly style. Show ONE complete focal animal and ALL important appendages/tail tips inside generous 15 percent margins, attached continuously to body. ONE adult female Neoceratias spinifer and ONE tiny attached male. NEW LOW REAR three-quarter camera: tail nearest LOWER RIGHT foreground, elongated slender compressed body recedes toward SHORT head far UPPER LEFT. See near ventral flank and slight belly, unmistakable depth not reversed side profile. Gentle continuous body curve; near pectoral tilted into camera, far pectoral foreshortened, caudal fan oblique. NAKED SCALELESS smooth brown skin with NO diamond scales, polygon lattice, plate boundaries or reptile texture; only very faint short irregular soft creases. Head very short relative to long body and eyes extremely tiny. NO illicium or head lure, NO pelvic fins. Posterior-region moderate dorsal and anal fins at normal body positions, not extra front fin. Long outer hooked hinged oral teeth physically rooted in jaw edge, not detached spines. One very tiny slender male physically joined by mouth to female's near ventral flank; don't make it a large second fish. No food or fictional hunting, dark open midwater. No text, panels, grid, labels, arrows, watermark, gore, scary monster exaggeration or anthropomorphism. Neutral illustrative fill light to reveal anatomy, not sunlight or whole-body glow. Educational reconstruction, not a real observation photo.",
          "Use case: scientific educational illustration, major 3D pose and skin correction. Use the supplied female Neoceratias spinifer only for identity, color and attached male; REBUILD ITS PROJECTION. Do NOT rotate or mirror the same side-on fish. Camera is near the tail, viewing the animal from its LOW REAR quarter. Large connected tail fan is closest in LOWER RIGHT, with rear anal fin rays visible below. The thick body visibly SHORTENS IN DEPTH toward the small distant head at UPPER LEFT; tail peduncle and rear trunk overlap the headward body. Distant head is much smaller than near tail/trunk, cheek partly occluded by shoulder, no side-on full-length rectangular trunk. Smooth gentle lateral bend with near pectoral held outward and far pectoral partly hidden. Preserve one small attached male underneath as in reference, no extra detached animals, no pelvic fins, NO external lure, tiny eye and thin hooked oral teeth. Entire female and male skin is naked and SCALELESS: absolutely erase all inherited polygon, mesh, network, diamond, fish-scale, cracked white-line patterns. Repaint all skin as perfectly plain smooth wet soft brown skin, with only broad blended highlights and shadows, no repeated lines, no tiny creases or cells. Fin-membrane rays may remain. No food/prey or invented hunting. Dark blue midwater, natural diffuse light, whole fish including every fin/tail/tooth inside 3:2 frame with at least 10% margins. Required two genuine changes are low REAR depth foreshortening and asymmetric fins/body bend. Not merely background, lighting, flipping or diagonal rotation. No labels, borders, logos.",
          "Use case: precise-object-edit. REPAINT ONLY ALL FISH SKIN, absolutely replacing its existing texture, not preserving or smoothing it. Keep this full fish outline, face, eye, fin shape/rays, connected tail, oral hook teeth, three-dimensional pose, attached small male and background exactly unchanged. Female Neoceratias spinifer is entirely SCALELESS. Paint the entire cheek, skull, trunk and tail peduncle as FEATURELESS SOFT SMOOTH BROWN SKIN, like smooth wet eel or dolphin skin (do NOT change fish anatomy). Use large broad blended color gradients and plain soft highlights only. Erase every tiny polygon, white vein, cracked line, fish scale, scale edge, diamond, network and mesh from the existing surface. No repeating cellular texture anywhere, NO hairline crack pattern. NO creases, NO wrinkles, NO random network, NO stippled raised cells. Skin is perfectly continuous plain soft leather, no pattern. Replace the WHOLE existing skin texture with this new plain matte surface. Preserve fish eye, mouth and hooked jaw teeth; preserve delicate fin-membrane rays, which are not skin scales. No new features, no text. Show sufficiently bright broad diffuse illumination so it is obvious that the skin is plain smooth and naked. 3:2 same full frame."
        ],
        "generatedAt": "2026-10-10T15:57:04.522Z",
        "checkedAt": "2026-10-11",
        "sha256": "92d4efc6061eaf2e37211021ee9b8f242179aaf1aa4d8cb8cfa837e0dbab400f",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Fishes of Australia의 무비늘 피부·짧은 머리·아주 작은 눈·수컷 부착을 바탕으로 생태 재구성. 정확한 식단이 확인되지 않아 먹이를 그리지 않음.",
        "behaviorSources": [
          {
            "title": "Museums Victoria — Neoceratiidae 형태·생식·미확정 식성",
            "url": "https://fishesofaustralia.net.au/Home/family/81"
          }
        ],
        "viewpoint": "꼬리가 오른쪽 아래 가까운 낮은 뒤 사선, 머리는 왼쪽 위로 멀어짐",
        "pose": "뒤 몸통의 단축과 완만한 몸굽힘, 근측 가슴핀 밖으로 펼침·원측 가림",
        "poseVariationCheck": "꼬리 부채가 오른쪽 아래 가까이에 크고 머리는 왼쪽 위 먼 곳에 작아지는 실제 뒤 사선이다. 몸은 깊이 방향으로 휘고 가슴핀/후방 핀 평면과 열린 입 상태가 기존 옆컷과 다르다. first 앞 사선과도 상호 구별된다.",
        "visualLimitations": "하이라이트에 미세 잔주름은 남음. 원측 핀 기부와 모든 치아수는 확인 불가 약한 불규칙 피부결은 남으나 닫힌 반복 비늘판으로 읽히지는 않는다. 먼 가슴핀/수컷 접합 조직·미세 핀 ray 개수는 가림과 회화적 결 때문에 인증하지 않는다. 실제 교미 장면 관찰로 주장하지 않는다."
      }
    ]
  },
  {
    "id": "telescope-octopus",
    "name": "망원경문어",
    "scientificName": "Amphitretus pelagicus",
    "group": "연체동물",
    "habitatIds": [
      "deep"
    ],
    "summary": "망원경처럼 길쭉한 눈이 위를 향하는 투명한 문어예요. 팔 사이에 넓은 막이 있어요.",
    "identity": [
      "두 눈이 망원경처럼 길쭉하게 솟아 위를 향해요.",
      "투명한 몸과 여덟 팔 사이에 넓은 막이 있고, 빨판은 막 안쪽에서 한 줄로 이어지다가 팔 끝에서 두 줄이 돼요."
    ],
    "ecology": "바닥에 붙어 사는 문어와 달리 바다 중간층에서 살아요. 몸의 넓은 막과 투명한 모습이 눈에 띄어요.",
    "diet": "이번에 확인한 기관 자료에는 자세한 먹이 종류가 나오지 않아요.",
    "range": "열대와 아열대의 태평양·인도양 등. 정확한 분포의 빈틈은 남아 있어요.",
    "size": "몸통 길이는 최대 약 10 cm, 팔을 포함한 전체 길이는 약 30 cm로 소개돼요.",
    "depth": "바다 중간층과 더 깊은 물속에서 관찰돼요. 하와이에서 830 m 깊이에 있던 수컷 기록이 있어요.",
    "sources": [
      {
        "title": "JAMSTEC BISMaL — Amphitretus pelagicus",
        "url": "https://www.godac.jamstec.go.jp/bismal/j/view/9000325"
      },
      {
        "title": "FAO2014 — Family Amphitretidae pp217–219",
        "url": "https://www.fao.org/4/i3489e/i3489e.pdf"
      },
      {
        "title": "WoRMS — Telescope octopus",
        "url": "https://www.marinespecies.org/aphia.php?id=342272&p=taxdetails"
      },
      {
        "title": "Tree of Life — Amphitretus 형태와 관찰",
        "url": "https://tolweb.org/Amphitretus/20191"
      }
    ],
    "depthZoneIds": [
      "twilight",
      "midnight"
    ],
    "aliases": [
      "Telescope octopus",
      "クラゲダコ"
    ],
    "featured": false,
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "feedingUnconfirmed": true,
    "feedingUnconfirmedReason": "확인한 자료에서는 이 문어의 먹이와 사냥법을 자세히 알 수 없었어요. 먹이 장면 대신 몸의 모양과 헤엄치는 모습을 담았어요.",
    "gallery": [
      {
        "id": "telescope-octopus",
        "src": "assets/images/telescope-octopus-chatgpt-portrait-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "망원경문어 · 위를 향한 관 모양 눈",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "FAO 2014 인쇄217–218쪽 및 ToL 연구자 원문의 근부 한 줄·원위 두 줄 조건을 대조. v2에서 막 안쪽 팔의 중앙 빨판 한 줄이 드러나고, 기존 근부 가장자리의 두 번째 줄은 제거되었다. 짧은 말린 자유 말단에만 작은 빨판의 복수 배열이 있다. 관 모양 눈과 깊은 투명 막은 유지.",
        "generationPrompts": [
          "ONE 3:2 landscape realistic scientific natural-history illustration of an intact female telescope octopus Amphitretus pelagicus, based on attached FAO2014 Fig218 anatomy. Use the whole-body lateral/dorsal figures only; no labels, map, diagram layout or disembodied male hectocotylus. A nearly colorless transparent gelatinous oval mantle is at the lower center with its connected head above and eight arms fanning upward and sideways. Two clearly elongated TUBULAR eyes on the dorsal head point upward, bases close together in a V, optical axes diverging slightly; actual thick eye tubes, not round lateral eyes on thin stalks. Dark brown-red eye lenses are small and natural. Exactly eight attached arms, each root continuing through a very deep transparent inter-arm web to one short free curled tip. The web reaches over 60 percent of arm length. One fine sucker row within the web, two fine rows only near distal free tips. No extra tentacles, mantle fins, Dumbo ears, cirri, jellyfish ribbons or ordinary octopus side eyes. Transparent tissues with a faint enclosed slender vertical digestive gland, not an open dissection. Complete mantle, head, eye tubes and all eight tips inside generous dark-water margins. Quiet three-quarter frontal observation in dark navy midwater, neutral soft illumination, natural water particles. No feeding, prey, eggs, chase, crawling, seabed, neon, glowing tissues, sunbeams, text, captions, panels, border, collage, logos or watermark.",
          "Make a precise local anatomy correction to this supplied Amphitretus pelagicus telescope octopus illustration. Keep the entire image, eight connected arms, deep transparent web, tube eyes, mantle, pose, all arm tips, background and lighting unchanged. Correct ONLY the SUCKER ROWS. Along every arm from the mouth at the center to the edge of the transparent web, there must be EXACTLY ONE CENTERED longitudinal row of suckers. Remove every second row and every small cup that now lines a lateral edge along the WEBBED part of each arm; replace those deleted extra cups with smooth transparent arm tissue, not spots or bumps. Keep the single centered row in the webbed portion clearly visible. Two staggered rows of SMALL suckers are allowed ONLY on the SHORT FREE DISTAL ARM TIPS BEYOND where the web ends. The transition from one row to two happens precisely at the web boundary, never nearer the center. Do not add or delete an arm, tip, web lobe, eye or mantle. No labels, arrows, panels, other animal or prey. Preserve whole body within this 3:2 landscape image. This is a rare transparent octopus, not an ordinary two-row benthic octopus."
        ],
        "generatedAt": "2026-10-07T23:10:56.227Z",
        "checkedAt": "2026-10-08",
        "sha256": "5668c1b2e2049ad9a5c7520d252fe0accab9456cca1ad830d2af389b84d7e381",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "referenceSources": [
          {
            "title": "FAO2014 Amphitretus pelagicus Fig218",
            "url": "https://www.fao.org/4/i3489e/i3489e.pdf",
            "referenceSha256": "87a6379533a3ea2dec005f3f94226375c816e33322b1df8fed04d3e103c494c9"
          }
        ]
      },
      {
        "id": "telescope-octopus",
        "src": "assets/images/telescope-octopus-chatgpt-ecology-side-cupped-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "망원경문어 · 팔막을 오므린 옆모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "투명 외투 하나, 근접한 두 관형 눈의 위쪽 방향, 이어지는 깊은 팔막과 말린 팔 끝을 실제 원본에서 확인. 노출된 팔의 근부 큰 빨판 한 줄/짧은 끝 작은 빨판들이 보이며 지느러미·촉완 곤봉은 없음.",
        "generationPrompts": [
          "ONE 3:2 landscape realistic scientific natural-history illustration of an intact female telescope octopus Amphitretus pelagicus, based on attached FAO2014 Fig218 anatomy. Use the whole-body lateral/dorsal figures only; no labels, map, diagram layout or disembodied male hectocotylus. A nearly colorless transparent gelatinous oval mantle is at the lower center with its connected head above and eight arms fanning upward and sideways. Two clearly elongated TUBULAR eyes on the dorsal head point upward, bases close together in a V, optical axes diverging slightly; actual thick eye tubes, not round lateral eyes on thin stalks. Dark brown-red eye lenses are small and natural. Exactly eight attached arms, each root continuing through a very deep transparent inter-arm web to one short free curled tip. The web reaches over 60 percent of arm length. One fine sucker row within the web, two fine rows only near distal free tips. No extra tentacles, mantle fins, Dumbo ears, cirri, jellyfish ribbons or ordinary octopus side eyes. Transparent tissues with a faint enclosed slender vertical digestive gland, not an open dissection. Complete mantle, head, eye tubes and all eight tips inside generous dark-water margins. Quiet three-quarter frontal observation in dark navy midwater, neutral soft illumination, natural water particles. No feeding, prey, eggs, chase, crawling, seabed, neon, glowing tissues, sunbeams, text, captions, panels, border, collage, logos or watermark.",
          "Make a precise local anatomy correction to this supplied Amphitretus pelagicus telescope octopus illustration. Keep the entire image, eight connected arms, deep transparent web, tube eyes, mantle, pose, all arm tips, background and lighting unchanged. Correct ONLY the SUCKER ROWS. Along every arm from the mouth at the center to the edge of the transparent web, there must be EXACTLY ONE CENTERED longitudinal row of suckers. Remove every second row and every small cup that now lines a lateral edge along the WEBBED part of each arm; replace those deleted extra cups with smooth transparent arm tissue, not spots or bumps. Keep the single centered row in the webbed portion clearly visible. Two staggered rows of SMALL suckers are allowed ONLY on the SHORT FREE DISTAL ARM TIPS BEYOND where the web ends. The transition from one row to two happens precisely at the web boundary, never nearer the center. Do not add or delete an arm, tip, web lobe, eye or mantle. No labels, arrows, panels, other animal or prey. Preserve whole body within this 3:2 landscape image. This is a rare transparent octopus, not an ordinary two-row benthic octopus.",
          "Create ONE original natural-history illustration for Sea Atlas, for children ages 5–12, landscape 3:2, refined realistic painterly rendering, full animal with generous margins. Scientific subject: Amphitretus pelagicus, telescope octopus. Use the attached earlier Sea Atlas illustration ONLY to retain this species identity, transparent colourless gelatinous tissues, restrained brown internal viscera, upward tubular eyes and illustration style. REBUILD the viewpoint and limb pose from scratch; do not copy its flat star-shaped oral spread, do not merely rotate or mirror that spread. NEW VIEW: genuine near SIDE VIEW with a slight anterior angle, camera at the animal's eye level. The rounded translucent mantle extends toward the RIGHT, and the head and arm crown are to the LEFT, so the body axis is nearly horizontal. Two elongated tubular eyes arise together on the DORSAL top of the head and still point UPWARD, their optical axes gently diverging, never horns on the underside. NEW POSE: the EIGHT arms are gently curled INWARD below and ahead of the head, and their deep interarm web is partially gathered into a three-dimensional loose cup, not a flat wheel. Show the near and far sides of the cupped web with meaningful foreshortening, modest folds and natural transparency. Arrange the eight short free arm tips so their roots remain connected and the entire animal is inside the frame; avoid extra branches. On any exposed inner arm face show ONE central longitudinal sucker row throughout the web-covered proximal portion; ONLY the short free tips beyond the web may have TWO tiny rows. Avoid prominent excessive suckers or a second row within the web. This is an incirrate octopus: no lateral swimming fins, no long squid tentacles, no ten limbs, no spines, no decorative glow. A quiet midwater observational scene in dark blue water with sparse fine particles, no prey, seafloor, tanks, other animals, labels, diagrams, humans, text, marks or watermark. This pose is an educational reconstruction consistent with documented upward eyes and inward-curled arms, not a feeding claim. The silhouette must be unmistakably different from the reference: horizontal mantle-to-head axis, side-on 3D cup with gathered arms, not frontal radial star."
        ],
        "generatedAt": "2026-10-08T16:24:26.316Z",
        "checkedAt": "2026-10-11",
        "sha256": "a90f44a7ad0af298632a58600c46da10be80d37e8824579af977af0cc92141af",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "referenceSources": [
          {
            "title": "FAO2014 Amphitretus pelagicus Fig218",
            "url": "https://www.fao.org/4/i3489e/i3489e.pdf",
            "referenceSha256": "87a6379533a3ea2dec005f3f94226375c816e33322b1df8fed04d3e103c494c9"
          }
        ],
        "sceneType": "ecology",
        "behaviorCheck": "Tree of Life의 MBARI 830m 생체 관찰 설명에서 위를 향한 눈과 안쪽으로 말린 팔 자세를 확인한 교육 재구성. 미확인 섭식이나 특정 관측의 복제를 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "Young, Mangold & Vecchione — Amphitretus; MBARI in situ description and anatomy",
            "url": "https://tolweb.org/Amphitretus/20191"
          },
          {
            "title": "FAO2014 — Amphitretus pelagicus pp217–218 Fig218",
            "url": "https://www.fao.org/4/i3489e/i3489e.pdf"
          }
        ],
        "viewpoint": "눈높이에서 본 왼쪽 앞옆 사선; 외투는 오른쪽으로 이어짐",
        "pose": "여덟 팔을 안쪽으로 말고 깊은 팔막을 입체적인 컵처럼 모은 관찰 자세",
        "poseVariationCheck": "기존 정면의 방사형 별모양과 달리 외투가 오른쪽 수평으로 깊게 길어지고 팔막은 왼쪽에 접힌 컵이 됨. 카메라와 팔막/팔 굴곡이 함께 달라져 새 자세로 읽힘.",
        "visualLimitations": "가까운 팔 여섯 끝이 명료하고 후면 두 팔은 일부 가림. 여덟 전수판정 아님. 팔 끝 약6개는 명료하나 뒤쪽 팔/기부는 막에 겹쳐 전체8팔과 빨판 말단열을 전수 인증하지 않음. 전체 프레임 안이나 오른쪽 외투 여백이 좁음."
      },
      {
        "id": "telescope-octopus",
        "src": "assets/images/telescope-octopus-chatgpt-ecology-rear-web-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "망원경문어 · 뒤위에서 본 접힌 팔막",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "가까운 큰 투명 외투 하나와 연속 머리·위쪽 관형 눈2, 깊은 팔막/팔과 접힌 근측 막을 확인. 노출 빨판은 팔면을 따라 연결되며 오징어 촉완/fin 없음.",
        "generationPrompts": [
          "ONE 3:2 landscape realistic scientific natural-history illustration of an intact female telescope octopus Amphitretus pelagicus, based on attached FAO2014 Fig218 anatomy. Use the whole-body lateral/dorsal figures only; no labels, map, diagram layout or disembodied male hectocotylus. A nearly colorless transparent gelatinous oval mantle is at the lower center with its connected head above and eight arms fanning upward and sideways. Two clearly elongated TUBULAR eyes on the dorsal head point upward, bases close together in a V, optical axes diverging slightly; actual thick eye tubes, not round lateral eyes on thin stalks. Dark brown-red eye lenses are small and natural. Exactly eight attached arms, each root continuing through a very deep transparent inter-arm web to one short free curled tip. The web reaches over 60 percent of arm length. One fine sucker row within the web, two fine rows only near distal free tips. No extra tentacles, mantle fins, Dumbo ears, cirri, jellyfish ribbons or ordinary octopus side eyes. Transparent tissues with a faint enclosed slender vertical digestive gland, not an open dissection. Complete mantle, head, eye tubes and all eight tips inside generous dark-water margins. Quiet three-quarter frontal observation in dark navy midwater, neutral soft illumination, natural water particles. No feeding, prey, eggs, chase, crawling, seabed, neon, glowing tissues, sunbeams, text, captions, panels, border, collage, logos or watermark.",
          "Generate ONE new 3:2 landscape realistic painterly scientific marine natural-history image of an intact female telescope octopus Amphitretus pelagicus, using the attached portrait only for consistent transparent tissue and upward tubular-eye identity. A closer low oblique frontal observation looks across the underside of its deep web so eight arm roots and the eight short free curled tips can be clearly followed as separate radial arms. The oval transparent mantle remains fully visible behind and below the head. Both telescope eyes are long tubular organs rooted together in a V on the dorsal head and point upward, not two ordinary sideways eyes. Keep the transparent inter-arm web deep over 60 percent of arm length, eight arms only and no extra feeding tentacles, no ear fins, no squid fins or cirri. Put open water gaps between each free tip and never fuse or bifurcate any arm. Fine sucker rows are single along the webbed length and two rows only in free ends. Naturally enclosed slender digestive gland faintly visible, not an exposed cutaway. Full animal inside frame, whole connected web, mantle, eye tubes and all eight tips with margins. Dark navy midwater, neutral observation light, quiet marine particles, water-clear faint cream/pink tissue, no bioluminescence, feeding, captured prey, eggs, attack, shelter claim, ground, surface light, text, labels, diagrams, collage, border or watermark. For the new composition make EIGHT distinctly countable rays with free tips at these directions: left horizontal, upper-left, near-top-left, near-top-right, upper-right, right horizontal, lower-right and lower-left. All eight must have separate attached radial arm cores and visible separate curled free tips; do not omit either of the two adjacent near-top arms or merge their distal tips. Show this front view slightly wider than the reference so all roots and free tips are distinct.",
          "Make a precise local anatomy correction to this supplied Amphitretus pelagicus telescope octopus illustration. Keep the entire image, eight connected arms, deep transparent web, tube eyes, mantle, pose, all arm tips, background and lighting unchanged. Correct ONLY the SUCKER ROWS. Along every arm from the mouth at the center to the edge of the transparent web, there must be EXACTLY ONE CENTERED longitudinal row of suckers. Remove every second row and every small cup that now lines a lateral edge along the WEBBED part of each arm; replace those deleted extra cups with smooth transparent arm tissue, not spots or bumps. Keep the single centered row in the webbed portion clearly visible. Two staggered rows of SMALL suckers are allowed ONLY on the SHORT FREE DISTAL ARM TIPS BEYOND where the web ends. The transition from one row to two happens precisely at the web boundary, never nearer the center. Do not add or delete an arm, tip, web lobe, eye or mantle. No labels, arrows, panels, other animal or prey. Preserve whole body within this 3:2 landscape image. This is a rare transparent octopus, not an ordinary two-row benthic octopus.",
          "Create ONE original natural-history illustration of Amphitretus pelagicus, telescope octopus, for Sea Atlas, children 5–12, landscape 3:2. Refined realistic painterly transparent tissues, full animal with generous margins. The reference supplies ONLY the species anatomy and quiet dark-blue illustration style. REBUILD the viewpoint and eight-arm posture: do NOT keep, rotate or mirror the reference's flat frontal eight-spoked star. NEW VIEW is clearly ABOVE AND BEHIND THE MANTLE, a posterior dorsal three-quarter camera looking toward the head. The translucent rounded mantle lies nearest the viewer in the LOWER LEFT foreground, foreshortened as an oval dome; the head and arm crown recede toward the UPPER RIGHT. The two close-set elongated tubular eyes project from the DORSAL head and remain pointed upward toward the water above, with their backs/sides partly toward the camera; do not move the eyes onto the belly or turn them into sideways horns. NEW WEB STATE: the EIGHT arms and their deep connected interarm web form a softly folded, oblique three-dimensional umbrella-like pocket BEYOND the head, opening AWAY to the right, rather than a radial plate facing the camera. The near web margin is gathered low while the far margin opens higher; eight short free tips are gently curled outward with differing foreshortening, each continuously attached to its arm and shared web, no extra branches. The camera mostly sees the OUTER/DORSAL faces of the arms and web: do NOT draw sucker beads on outer skin. Any small exposed INNER proximal arm face has ONE central longitudinal sucker row; TWO tiny rows occur ONLY on the short free tips beyond the web. Keep restrained brown internal organs visible through one continuous gelatinous mantle, colourless flesh, no decorative glow, no lateral swimming fins, no squid tentacles, no cirri, no detached eye bulbs. Quiet midwater educational observational reconstruction, no prey or feeding, no ground, tanks, extra animals, text, labels, diagrams or watermark. The finished silhouette must show a close mantle dome and a receding cupped web viewed from its back, clearly different from both a flat oral star and a horizontal pure side view.",
          "Precisely redraw the ARM-WEB POSTURE of this Amphitretus pelagicus illustration, keeping its close mantle in the lower-left foreground, above-and-behind camera angle, two upward tubular eyes, colourless transparent tissues, brown internal organs, dark water and entire-animal margins. The current web is still too flat and spread. Make the web a DEEP THREE-DIMENSIONAL GATHERED CUP, with the nearer RIGHT-LOWER portion folded INWARD toward the head. Gently move the three rightmost short arm tips closer to the head and curl them naturally inward so they partially overlap at different depths; this pulls the near web margin upward and creates two soft translucent folds with restrained fold shading. Keep the farther top-left portion of the web more open, making an asymmetrical pocket opening away from the camera to the upper right. Not a flat seven/eight-spoked star, not mere canvas rotation. The animal has exactly EIGHT connected arms, deep continuous web between them, and only short free tips beyond it. Natural far-side occlusion is allowed, but no amputated tips or added branching arms. Keep ONE sucker row on any visible inner arm portion within the web; ONLY the short free distal tips may have TWO tiny rows. The outer web skin has no beads. The smooth mantle remains continuous to the head, with no second sac, fins, squid tentacles, cirri or decorative glow. Quiet natural midwater observation, no prey or feeding claim, no text, diagrams or watermark."
        ],
        "generatedAt": "2026-10-08T16:51:58.443Z",
        "checkedAt": "2026-10-11",
        "sha256": "d0338cdf71694f29ef6daa9ac28c92eef6eac409395abb812046fbe4d7603d80",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "referenceSources": [
          {
            "title": "FAO2014 Amphitretus pelagicus Fig218",
            "url": "https://www.fao.org/4/i3489e/i3489e.pdf",
            "referenceSha256": "87a6379533a3ea2dec005f3f94226375c816e33322b1df8fed04d3e103c494c9"
          }
        ],
        "sceneType": "ecology",
        "behaviorCheck": "Tree of Life의 MBARI 830m 생체 관찰 설명에서 위를 향한 눈과 안쪽으로 말린 팔 자세를 확인한 교육 재구성. 미확인 섭식이나 특정 관측의 복제를 뜻하지 않음.",
        "behaviorSources": [
          {
            "title": "Young, Mangold & Vecchione — Amphitretus; MBARI in situ description and anatomy",
            "url": "https://tolweb.org/Amphitretus/20191"
          },
          {
            "title": "FAO2014 — Amphitretus pelagicus pp217–218 Fig218",
            "url": "https://www.fao.org/4/i3489e/i3489e.pdf"
          }
        ],
        "viewpoint": "가까운 외투 너머로 팔막을 보는 뒤위 사선",
        "pose": "가까운 오른쪽 팔막과 팔 끝들을 안으로 모아 깊은 주름을 만들고 먼쪽 팔막은 넓게 둔 모습",
        "poseVariationCheck": "기존 정면 평면 방사형에서 외투가 가까운 뒤위 사선과 오른쪽으로 크게 접힌 비대칭 막으로 바뀜. 새 side-cupped의 수평 옆 컵과도 다른 카메라/막 상태가 확실함.",
        "visualLimitations": "팔 끝 일곱 개는 명료하나 원측 한 팔은 외투·팔막 겹침으로 전수 대응 불가. 여덟 팔 전체 검증으로 표시하지 않음. 명료한 팔끝7개, 나머지1개/기부는 가까운 몸과 막에 겹쳐8팔 전수계수 불가. 투명 외측에서 보이는 빨판의 배/등면 정밀 구별을 인증하지 않음. 전신/팔끝 프레임 안."
      }
    ]
  },
  {
    "id": "melon-comb-jelly",
    "name": "오이빗해파리",
    "scientificName": "Beroe cucumis",
    "group": "빗해파리류",
    "habitatIds": [
      "coast",
      "pelagic"
    ],
    "depthZoneIds": [
      "sunlight"
    ],
    "summary": "투명한 오이 같은 몸에 빗판 여덟 줄이 이어져요. 긴 촉수 대신 넓은 입으로 다른 빗해파리를 먹어요.",
    "identity": [
      "촉수가 없는 주머니 모양의 빗해파리예요. 몸 안에는 가지를 친 관이 보여요.",
      "길이가 비슷한 빗판 여덟 줄이 몸을 따라 이어져요. 입 가까운 부분에는 빗판이 없어요."
    ],
    "ecology": "물속에 떠서 빗판을 움직여 헤엄쳐요. 다른 빗해파리를 넓은 입으로 감싸 먹는 포식자예요.",
    "diet": "다른 빗해파리를 먹어요. 영국 자료에서는 Bolinopsis infundibulum을 먹이로 소개해요.",
    "range": "영국·아일랜드 근처 바다에 기록이 있어요. 국립수산과학원은 우리 바다의 오이빗해파리를 이 학명으로 소개해요.",
    "size": "영국 MarLIN 자료에서는 몸길이 약 15 cm까지예요.",
    "depth": "떠다니는 생활을 해요. 사용한 기관 자료는 종 전체의 정확한 최소·최대 수심을 제시하지 않아요.",
    "aliases": [
      "오이빗해파리",
      "Melon comb jelly",
      "Beroe cucumis"
    ],
    "sources": [
      {
        "title": "국립수산과학원 — 오이빗해파리 Beroe cucumis 종정보",
        "url": "https://www.nifs.go.kr/portal/me/jelyC/actionJelyFishInfo.do"
      },
      {
        "title": "Marine Biological Association / MarLIN — Beroe cucumis",
        "url": "https://www.marlin.ac.uk/species/detail/87"
      },
      {
        "title": "Naturalis — Beroe cucumis 빗판줄 길이",
        "url": "https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?epi=210&id=131868"
      }
    ],
    "checkedAt": "2026-10-08",
    "reviewStatus": "source-checked-expert-review-pending",
    "featured": false,
    "gallery": [
      {
        "id": "melon-comb-jelly",
        "src": "assets/images/melon-comb-jelly-chatgpt-portrait-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "오이빗해파리 · 투명한 자루 모양 몸",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "실제 원본에서 입쪽 앞 약1/4의 중앙과 위·아래 가장자리 빗판들이 모두 제거되어 입 이전에서 행들이 멈춘다. 투명한 주머니 몸·가지친 내부 관·촉수 없는 전신 연결은 유지됐다.",
        "generationPrompts": [
          "Create ONE 3:2 landscape natural-history illustration for a Korean children's marine atlas, restrained realistic painterly underwater style. A single whole Beroe cucumis melon comb jelly, accurately a medium transparent slightly compressed oval elongated SACK with a broad blunt oral end and a rounded narrower closed aboral end. No tentacles at all, no trailing strands, no oral wings or lobes, no jellyfish bell or hanging arms. The large simple mouth is gently closed at the broad end. Exactly EIGHT longitudinal ciliary comb rows of similar length run over the sac from near one end to near the other, spaced regularly around the transparent body; near-side and far-side rows can be visible through transparent tissue but should not produce extra decorative stripes. Comb plates are small close-set transverse ridges, not huge spikes or fish fins. Inside the transparent body depict fine branching gastrovascular canals delicately, without invented eyes, teeth, heart or central giant red stomach. Three-quarter lateral oblique view with the whole cucumber-like sac diagonally across the center and 15 percent surrounding empty space. Extremely subtle pale iridescent reflections along comb plates caused by soft EXTERNAL underwater light, not brilliant self-emitted neon tubes or an electric rainbow. Blue coastal open water with a softly shaded background and sparse fine particles, no bottom or coral. Natural translucent clear tissue with restrained faint warm tint allowed. No prey, other main animal, text, labels, arrows, split panel, border or watermark.",
          "Make a minimal precise anatomical edit to the supplied Beroe cucumis melon comb jelly illustration. The mouth is the broader OPEN end at the LEFT of this horizontal diagonal animal; the aboral pole is the closed narrower rounded end at the LOWER RIGHT. In Beroe cucumis, all eight equal-length ciliary comb rows extend from the aboral pole only about THREE QUARTERS of the way toward the mouth. Remove only the tiny transverse comb plates from the mouthward LEFT QUARTER of each existing longitudinal row. Keep that mouthward quarter smooth, transparent and free of comb plates. Let each comb row end softly at about 75 percent of the pole-to-mouth body distance, with the complete remaining 25 percent adjacent to the mouth plate-free. Keep the underlying smooth canals and branching canal network visible in that area; these canals are not comb plates and should not be erased. Preserve original mouth, body outline, transparency, all other anatomy, closed right pole, row positions in the other three quarters, background, particles, composition and lighting unchanged. Do not add tentacles, petals, fins, oral wings or new organs. Preserve original 3:2 landscape scientific painterly illustration. No text, labels, arrows, panels or watermark.",
          "Precisely clean up the supplied Beroe cucumis illustration. The broader open MOUTH is at LEFT and the closed aboral pole at LOWER RIGHT. Shorten ALL eight comb rows so they run from the right pole only three quarters of the distance to the left mouth. The entire mouthward LEFT QUARTER of this body must be smooth and free of transverse plates. In particular, REMOVE the tiny comb-plate ladders still present along the TOP and BOTTOM OUTLINE rows close to the left mouth, as well as any faint far-side ladder marks in that oral quarter. Do not merely dim or shrink them. Replace all regularly repeated rectangular, toothlike or beaded marks in that left oral quarter with unmarked transparent tissue and smooth continuous canals. No row of teeth or squares may extend to the left mouth area. Keep the irregular branching canal network, original mouth, body outline, transparency, row locations and remaining plates in the right three quarters, water, lighting, particles and full 3:2 landscape framing unchanged. No added tentacles or other structures. Scientific painterly style, no text, labels, arrows or panels."
        ],
        "generatedAt": "2026-10-07T23:23:36.995Z",
        "checkedAt": "2026-10-08",
        "sha256": "cf5a59746080af6baa70eef209b32c443c20ea8464feda9a76a58992ff1d0deb",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존."
      },
      {
        "id": "melon-comb-jelly",
        "src": "assets/images/melon-comb-jelly-chatgpt-feeding-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "오이빗해파리 · 입 가까이 있는 작은 빗해파리",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원본에서 입쪽 약1/4의 면에 뚜렷한 빗판이 제거되고 반구극 쪽에서 시작하는 빗판 행들이 입 이전에 멈춘다. 투명한 주머니 몸·가지친 내부 관·촉수 없는 연결된 전신이 유지됐다. 큰 단순 입과 바깥의 작은 두 엽 빗해파리는 알려진 먹이 관계 재구성 범위에 맞는다.",
        "generationPrompts": [
          "Create ONE landscape 3:2 natural-history underwater illustration for a children's Korean marine atlas. A complete Beroe cucumis melon comb jelly approaches a much smaller Bolinopsis infundibulum comb jelly as a scientifically informed food encounter. Keep the smaller prey still fully OUTSIDE the mouth, just in front of it, no captured or swallowed prey. Beroe is a transparent slightly compressed oval elongated sack with a broad blunt oral end at the left. Its one LARGE simple mouth is gently open as a wide soft oval opening, not human lips, a toothed jaw, a protruding tube or a jellyfish bell. No tentacles, no trailing ribbons, no oral lobes on Beroe. Exactly eight longitudinal comb rows of similar length are spaced regularly around the Beroe body; tiny closely set transverse ciliary plates with gentle external-light iridescence. Fine branching gastrovascular canals visible inside the clear tissues, no invented eyes or giant red stomach. The far end is rounded closed and smaller. The prey is one very small clear oval lobate Bolinopsis infundibulum with TWO broad shallow soft oral lobes, subtle comb rows, no giant trailing tentacles, about one-quarter of the Beroe body length. The scene reconstructs the known prey relation but not observed successful capture. Oblique side view, all of both animals within frame with generous 15 percent margins, Beroe clearly the main subject. Calm soft blue open coastal water, restrained realistic slightly painterly textures. Pale clear body with no brilliant pink or fluorescent neon, the colors of comb plates are subtle reflections not laser beams. No blood, injuries, scary teeth, fish, other large animals, seabed, coral, text, labels, arrows, split panels, borders or watermark.",
          "Edit only the comb-plate length on the LARGE Beroe cucumis at the right of the supplied natural-history illustration. Its wide open MOUTH is at the LEFT facing the little prey; its closed aboral pole is at the RIGHT. In Beroe cucumis, the eight equal-length ciliary comb rows run from the aboral pole only about THREE QUARTERS of the distance toward the mouth. Remove the transverse rectangular comb plates from the entire mouthward LEFT QUARTER of every longitudinal row of the large animal. All comb rows must stop at about 75 percent of the right-pole-to-left-mouth body length, leaving a broad smooth transparent plate-free collar covering the remaining 25 percent of body length beside the left mouth. Keep smooth canals and the branched internal canal network in the plate-free area. Do not erase these canals or replace plates with dots. Preserve the large animal's original open mouth and full body outline, row positions in the other three quarters, translucency, water and lighting. Preserve the complete small Bolinopsis prey on the far LEFT unchanged, safely outside the mouth, with no swallowing or injury. Change only the large Beroe's mouthward comb plates; no new organs or tentacles. Keep original full framing, 3:2 landscape and scientific painterly style. No text, labels, arrows, panels or watermark.",
          "Precise local cleanup of the supplied Beroe cucumis image. On the LARGE jelly only, completely ERASE every regular transverse comb-plate mark, tiny rectangular tooth, ladder rung and regularly beaded bump in its LEFT oral 25 percent. This is the area from the large open left mouth rim through the first quarter of its long body, ending roughly at the curved boundary a little to the right of the mouth. Replace those repeated marks with continuous smooth clear jelly tissue. The upper, middle and lower rows, including the bottom body-edge row, must have no tiny teeth or plate shadows in that whole left quarter. Do not merely dim or shrink the marks. The eight rows of real rectangular comb plates must begin only AFTER that smooth left quarter and continue unchanged toward the closed far RIGHT pole. Retain delicate irregular branching canals in the smooth oral area, but no repeated regular ladder texture. Preserve every other feature: original large mouth opening and body, the small complete prey at far left outside the mouth, row layout in the right three quarters, colors, water, particles, composition and lighting. No additional body structures. 3:2 landscape, no text or arrows."
        ],
        "generatedAt": "2026-10-07T23:15:48.752Z",
        "checkedAt": "2026-10-08",
        "sha256": "baa9ab5e690a29166f0eb86dcf1e33f4600e25675deb2371181eeed190395654",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 프롬프트와 부모·독립 판정을 제작 기록에 보존.",
        "sceneType": "feeding",
        "behaviorCheck": "MarLIN의 Beroe cucumis 먹이관계 재구성, 먹이는 입 밖. Naturalis 실제 원문 빗판줄 3/4 조건에 따라 v2 잔여 횡판을 추가 제거.",
        "behaviorSources": [
          {
            "title": "Naturalis — Beroe cucumis, comb-row extent",
            "url": "https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?epi=210&id=131868"
          },
          {
            "title": "MarLIN — Beroe cucumis feeding",
            "url": "https://www.marlin.ac.uk/species/detail/87"
          }
        ]
      },
      {
        "id": "melon-comb-jelly",
        "src": "assets/images/melon-comb-jelly-chatgpt-ecology-pose-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "오이빗해파리 · 입쪽에서 본 둥근 몸과 빗판",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "하나의 단순한 투명 주머니 몸, 가까운 좁은 타원 입과 뒤쪽에서 시작하는 빗판 열 확인. 입 가까운 앞 1/4 윤곽/몸에 빗판 없고 외부 촉수·두 엽·분리 몸 없음.",
        "generationPrompts": [
          "Create ONE 3:2 landscape realistic slightly painterly natural-history illustration for a Korean children's marine atlas. One complete Beroe cucumis melon comb jelly swims freely in soft blue coastal open water, a gentle upward three-quarter view from the CLOSED aboral end, different from a mouth-facing portrait. The body is a transparent slightly compressed elongated oval SACK with a rounded narrower closed end nearest the viewer and a wider blunt oral end pointing diagonally up-left. The mouth at the far wide end is closed and simple, no protruding tube or elaborate frill. The animal has NO tentacles, no trailing filaments, no oral wings or lobes, no jellyfish umbrella. Exactly EIGHT longitudinal comb rows of similar length are regularly spaced around the sac, visible as tiny close-set transverse ciliary comb plates continuing along the body; the transparent far side can show subdued rows behind. Faint branching gastrovascular canals are visible inside with no invented eyes, teeth, giant red stomach or other cartoon organs. Show the gentle coordinated comb-plate swimming structure, not motion streaks or repeated bodies. Subtle iridescent pale blue, lavender and warm reflections from external light on some comb plates, not brilliant neon rods or fantasy self-lighting. The whole animal occupies at most 65 percent of frame width, with very generous 18 percent blue-water margins on all sides. Sparse fine particles and diffuse light in surrounding water, no seabed, no coral, no surface line, no prey or other main animal. Clear connected anatomical silhouette and natural soft transparent tissue. No text, labels, arrows, split panels, border or watermark.",
          "Make a minimal anatomical correction to the supplied Beroe cucumis natural-history illustration. The BROADER oral end and its closed mouth are at the UPPER LEFT; the narrower CLOSED ABORAL pole is nearest the viewer at the LOWER RIGHT. Ciliary comb rows in Beroe cucumis extend from the aboral pole only about THREE QUARTERS of the pole-to-mouth distance. Remove every small transverse comb plate from the broad mouthward UPPER LEFT QUARTER of the body. Each of the eight existing rows should now end at approximately 75 percent of the distance from the lower-right aboral pole toward the upper-left mouth, leaving the entire last 25 percent adjacent to the mouth smooth, transparent and visibly plate-free. Keep only smooth canals and their delicate branching network in this oral area. Do not leave shrunken tiny plates or beaded dots there. Preserve the original body outline, closed simple mouth, lower-right aboral pole, no-tentacle anatomy, row locations in the other three quarters, branching canals, transparency, perspective, full framing, blue water, particles and diffuse light unchanged. This is solely shortening the ciliary comb rows at the oral end. Keep 3:2 landscape and original scientific painterly style. No labels, text, arrows, panels or watermark.",
          "Precise local cleanup of the supplied Beroe cucumis illustration. The wide oral end is at UPPER LEFT and the narrow aboral pole is at LOWER RIGHT. COMPLETELY ERASE the residual faint ladder texture, every transverse rectangular comb plate, repeated tiny tooth or regularly beaded dot in the UPPER LEFT mouthward QUARTER of the body. Do not merely dim or miniaturize these marks. Replace them with uninterrupted smooth clear jelly tissue and only irregular branching internal canals. The cleared region includes all rows on both visible and transparent far sides between the upper-left mouth and the first quarter of the pole-to-mouth length. The eight rows of actual comb plates must end BEFORE this broad smooth oral collar, about 75 percent of the way from the lower-right pole toward the upper-left mouth. Preserve everything else: unchanged body outline, mouth, transparency, branches of canals, row positions and colors in the lower-right three quarters, original perspective, water, particles and diffuse light. No new organs or tentacles. Original 3:2 landscape, scientific painterly style, no text or arrows.",
          "Create ONE truly new 3:2 landscape natural-history underwater illustration of Beroe cucumis melon comb jelly. Attached image gives only this species identity, subtle branched canals and painterly educational style. Do not retain, mirror or rotate its long side-on sack pose.\nNEW VIEW: look almost straight INTO THE ORAL END from a 15 degree oral three-quarter offset, along the long body axis. Strong foreshortening is essential: the nearest mouth rim forms a broad clear oval facing the viewer, with the far rounded closed aboral pole receding behind it. The main animal projects as a compact oval circle, not the full elongated cucumber lying across the frame. Show the straight continuous unbent sack in deep perspective, wider nearer mouth, smaller farther pole visible through the transparent tissues.\nNEW MOUTH STATE: mouth slightly open as a narrow soft oval slit within the broad oral end, unlike the fully closed old ecology mouth and the very wide feeding mouth. No prey, no capture. The tissue has no eyes, teeth, lips, trailing ribbons, arms, tentacles or oral lobes. Fine irregular branching internal canals pass through the translucent body.\nExactly eight equal longitudinal ciliary comb rows lie around the body, distributed anatomically rather than a flat ornamental starburst. They extend FROM the far aboral pole only THREE QUARTERS toward the near mouth, then STOP. The NEAREST quarter of the entire body is a broad smooth transparent oral collar with ABSOLUTELY NO transverse comb plates, teeth, ladder marks, evenly beaded dots or regularly ridged outline. Each visible row must terminate visibly behind this smooth near oral collar. Foreshortened rows recede toward the far pole in perspective, tiny closely set transverse ciliary plates reflecting restrained external-light rainbow hints. No bright self-luminous neon lines. The canal network can continue through the smooth collar without regular plate texture. Pale transparent adult with restrained pinkish canal tint, soft natural blue coastal water and sparse small particles, neutral illustrative lighting. Entire body and mouth edge centered well inside 14 percent margins. No artificial body bending, seabed, coral, other animals, text, labels, arrows, borders, panels or watermark."
        ],
        "generatedAt": "2026-10-10T15:43:42.855Z",
        "checkedAt": "2026-10-11",
        "sha256": "2addb4ca95af502d5f5b2617ab263aea966c7bb1088b20700783437d6aa203b8",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 원본 PNG를 그대로 복사. 기존의 반복 자세를 새 시점과 몸·부속지 상태로 교체; 원본과 제작·독립 검토 기록은 비공개 작업 폴더에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "Naturalis의 주머니형 몸과 입쪽 1/4 빗판이 없는 구조를 따르는 관찰 유영 재구성. 정확한 섬모 위상을 입증하지 않고 먹이는 넣지 않는다.",
        "behaviorSources": [
          {
            "title": "Naturalis — Beroe cucumis description",
            "url": "https://ns-zooplankton.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/nsr_taxon.php?epi=210&id=131868"
          }
        ],
        "viewpoint": "입축 거의 정면을 보는 입쪽 사선, 몸 전체 길이가 크게 단축된 원근",
        "pose": "곧은 주머니 몸의 입이 좁은 타원형으로 조금 벌어진 상태, 빗판 유영 재구성",
        "poseVariationCheck": "기존 시트12의 긴 옆몸과 넓은 먹이입/닫힌 입에서 입축 쪽 사선으로 입이 가까워지고 몸이 짧아지는 원근이 됨. 입은 작고 좁게 조금 열린 상태로 기존 두 입 상태와 구별.",
        "visualLimitations": "투명 몸의 겹침으로 여덟 빗판과 내부 관망 연결성은 전부 검증 못함 정확한 여덟 빗판 열은 투명 원근/겹침으로 모두 계수 못함. 미세 관망 연결성과 극판의 8자 유두는 전문 검증 불가. Naturalis32–33줄은 분지와 anastomoses를 명시하므로 이전 비연결관망 강제 조건을 확정 근거로 쓰지 않음. 프롬프트의 완전 입축 정면 대신 실제는 입쪽 사선."
      }
    ]
  }
];
