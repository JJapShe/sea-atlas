// 자료 확인 및 자체 제작 삽화 육안 대조: 2026-10-03. 전문가 감수 전입니다.
export const groups = [
  "어류",
  "포유류",
  "연체동물",
  "절지동물",
  "자포동물",
  "극피동물",
  "파충류"
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
      "Giant squid"
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
        "src": "assets/images/giant-squid-chatgpt-feeding-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "대왕오징어 · 긴 촉완으로 물고기에 다가가기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "짧은 팔 위쪽 4끝·아래쪽 4끝과 같은 머리 기부 연결, 별도의 가는 긴 촉수 2개·club 2개·후방 지느러미 2개·큰 근측 눈 확인. 반대 눈은 가림.",
        "behaviorCheck": "긴 두 촉완으로 먹이를 붙잡아요. 물고기에 다가가는 모습을 구성한 그림이며 실제 사냥을 찍은 사진은 아니에요.",
        "behaviorSources": [
          {
            "title": "Smithsonian · Giant Squid",
            "url": "https://ocean.si.edu/ocean-life/invertebrates/giant-squid"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original realistic natural-history illustration for Sea Atlas, a marine animal encyclopedia for children ages 5–12. Refined painterly realism with clear silhouettes, accurate adult anatomy and restrained texture; no anthropomorphism. Landscape 3:2. Show ONE whole animal (one connected colony for coral), centered with generous 8–10% margins so all extremities fit. Simple uncluttered blue aquatic background appropriate to this species, soft neutral illumination that clearly reveals the body. No other animals, humans, boats, text, letters, labels, logos, borders, signatures, watermark, smile, fantasy features, plastic or toy style. Subject: ONE giant squid, Architeuthis dux. Slightly oblique lateral view with elongated reddish-brown mantle on LEFT, head in center, appendages extending RIGHT. Exactly TWO SMALL posterior fins at far-left end of mantle, one large lateral eye visible. Exactly EIGHT shorter muscular sucker-lined arms: fan FOUR distinct arms upward and FOUR distinct arms downward from around mouth, with each of the eight tips individually traceable and separated, avoiding tangles. Separately, exactly TWO very long slender feeding tentacles extend between the upper and lower arm fans to far right. They extend at least twice as far as the short arms, each ends in one widened sucker-bearing club; clubs and all eight arm tips must be fully visible with margins. All eight arms and two tentacles attach to the same head, not to mantle or fins. Closed beak mostly concealed at center of arm crown. Long slender tapering mantle occupies roughly the left third of the picture; thin long feeding tentacles fill right half. Blue open-water gradient only. No hooks, no extra arms, no missing arm, no third feeding tentacle, no octopus body, no colossal squid, no exposed teeth. Natural scientifically plausible educational pose.",
          "Edit this own Sea Atlas illustration into an educational feeding scene for ages 5–12. Preserve the exact giant squid anatomy and every separate appendage from the reference: FOUR short arms in the upper fan and FOUR short arms in the lower fan, eight short arms total, plus TWO separate very long thin feeding tentacles ending in sucker clubs. Keep all EIGHT short arm tips visibly separated, exactly as in the reference; do not erase or merge any arm. Preserve the two small posterior mantle fins, huge natural eye and reddish elongated mantle. Add one small intact silver deep-sea fish in the open space BETWEEN the two long tentacle clubs near the right edge, with a visible gap to both clubs: the squid is approaching prey before capture. Slightly angle the mantle upward while keeping all eight arms readable. Dark blue deep midwater with a few restrained floating particles, no seabed plants or shallow sun rays. Same refined realistic natural-history painting style. Landscape 3:2, whole squid and fish with margins, no cropped appendages, no text, labels, logos, people, blood or injury. This is an inferred explanatory reconstruction of its fish diet, not a claim of an observed hunt."
        ],
        "generatedAt": "2026-10-03T01:01:28.792Z",
        "checkedAt": "2026-10-03",
        "sha256": "46424f95fdcd17769caad7f3571c5405af4036ac744a6bac9afd9ff8b7843c24",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 내장 생성 도구의 참조/교정 이력은 generationPrompts에 보존."
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
        "src": "assets/images/sperm-whale-chatgpt-v3.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "향유고래 · 물속에서 헤엄치는 온몸 모습",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "큰 직사각형 머리·가느다란 아래턱·작은 가슴지느러미 한 쌍·낮은 등 돌기·좌우로 펼쳐진 수평 꼬리를 육안 대조. 분기공의 위치는 이 각도로 확인하기 어려움.",
        "generationPrompts": [
          "Use case: scientific-educational. Create one original natural-history illustration for a marine animal atlas for children ages 5–12. Subject: ONE sperm whale, Physeter macrocephalus. Realistic painterly scientific illustration, anatomically accurate, friendly but not anthropomorphic. Entire animal in unobstructed left-facing side view, centered, pale blue underwater background with subtle depth gradient, no other animals. Enormous rectangular blunt head occupying about one third of body length, very narrow underslung lower jaw, small eye near corner of mouth, wrinkled dark gray skin, two short paddle-shaped pectoral flippers (far one may be occluded), low rounded dorsal hump followed by small knuckles, broad horizontal tail flukes. Long tapered body, no sharp dolphin-like dorsal fin. Keep the outline easy to read at thumbnail size, generous margin around every extremity. Landscape 3:2 composition. No text, labels, logos, watermark, border, human, boat, blood, giant round eyes, smiling face, fantasy features, or extra fins.",
          "Edit this sperm whale natural-history illustration with ONE targeted anatomical correction: replace the tail flukes on the right with a clearly horizontal cetacean tail, rather than a vertical fish-like tail. Keep the head, body, dorsal hump, skin, pectoral flippers, scale, lighting, entire blue background, and composition unchanged. Show the corrected tail in a slight three-quarter view so we can see that its two symmetrical flukes extend to either side of the body in the horizontal plane, with a single central notch and thin trailing edges. There must not be an upward-and-downward pair of lobes or a caudal fish fin. No new fins, animals, text or labels. Preserve the natural-history illustration style. Keep every tail tip inside the image.",
          "Use case: precise-object-edit. Edit this self-generated sperm whale illustration for our children's marine atlas. Preserve the same whale identity, rectangular large head, narrow underslung jaw, small eyes, wrinkled charcoal skin, small paddle pectoral flippers and low dorsal hump/knuckles. Improve the tail and framing: show a anatomically plausible narrow caudal peduncle smoothly connecting to one broad horizontal pair of whale flukes, seen slightly from above with a clear central notch. The tail must spread left-right in the horizontal plane, never up-down as a fish tail. Make the whole whale about 85% of current displayed size so BOTH head and tail tip have at least 8% image-width clear blue-water margin. Keep entire animal visible, no cut-off tips. Same natural-history painterly realism and blue underwater gradient, landscape 3:2. No other animal, no text, labels, logo or watermark. Do not change any other anatomy."
        ],
        "generatedAt": "2026-10-02T17:45:07.022Z",
        "checkedAt": "2026-10-03",
        "sha256": "895a16ed0a36dd45a30549752290434ca25d3162f2e88e0cf84d784f75549160",
        "width": 1536,
        "height": 1024,
        "changes": "ChatGPT 생성 및 명시된 형태 교정. 최종 PNG의 픽셀 수정 없음; 화면에서는 전체 그림을 맞춰 표시."
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
        "src": "assets/images/orca-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "범고래 · 물고기를 뒤쫓기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "흰 눈반점과 별도의 작은 눈·검은 등과 흰 배·회색 안장·가슴지느러미 2개·등지느러미 1개·수평 2엽 꼬리 확인. 반대 눈·분수공은 가림.",
        "behaviorCheck": "북동태평양의 정주형 범고래는 연어 같은 물고기를 먹어요. 범고래 무리마다 먹이가 달라요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Killer Whale: Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/killer-whale"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: Underwater in cool northeast Pacific coastal blue water, one adult resident-type killer whale Orcinus orca turning slightly in pursuit of a small intact silver salmon immediately ahead of its slightly open mouth. The salmon is small relative to the whale; this is a calm moment just before fish capture, no biting damage. Do not show seals or mammals as prey. Side three-quarter view, whale swimming diagonally left, full body visible.\nAnatomy: black back, white underside, natural small eye separate from the white eye patch behind it, gray saddle behind one upright dorsal fin, exactly two rounded pectoral flippers, horizontal left-right whale tail flukes perpendicular to the upright dorsal fin, not a fish tail. Tail flukes both visibly spread in a horizontal plane. Mouth subtly open with modest conical teeth, not a frightening grin. Quiet distant coastal water without invented sound beams."
        ],
        "generatedAt": "2026-10-02T18:30:27.990Z",
        "checkedAt": "2026-10-03",
        "sha256": "0ae77e0ab8de86db99ce62e618577226df0519760de672a88ccaddec4b38adc0",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
        "src": "assets/images/great-white-shark-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "백상아리 · 작은 물고기 무리 따라가기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "원추형 주둥이·작은 눈·근측 아가미 5틈·회색 등/흰 배·등지느러미 2개·가슴지느러미 2개·수직 초승달 꼬리 확인. 반대 눈/아가미·작은 짝지느러미 전수는 가림.",
        "behaviorCheck": "어린 백상아리는 물고기 같은 먹이를 먹어요. 작은 물고기 무리에 다가가는 장면을 구성했어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — White Shark: juvenile diet and habitat",
            "url": "https://www.fisheries.noaa.gov/species/white-shark"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas ecology gallery, one standalone horizontal 3:2 image.\nStyle: exquisitely detailed naturalistic painted educational illustration for children ages 5–12, realistic natural anatomy and proportions, natural eyes, gentle documentary mood, quiet habitat background, not a photo.\nConstraints: whole principal animal and important appendages inside frame with margin; no text, labels, arrows, border, watermark, logos, people, boats, fishing gear, blood, injury, horror, anthropomorphism, glowing eyes, plastic or cartoon look.\nScene: One juvenile great white shark Carcharodon carcharias in shallow temperate coastal water above a sandy continental-shelf seabed, calmly pursuing a small group of intact small silver schooling fish ahead of it. The shark is a lean young animal, not a huge bulky adult; fishes individually much smaller than shark. Side three-quarter view, entire shark and tail framed with margin, fish group separated from the shark's mouth. A moment before capture, no fish being bitten, no injury and no dramatic attack. Mouth almost closed or very slightly parted, no giant display of teeth.\nAnatomy: natural conical snout and compact round dark lateral eye; gray dorsal body and white belly, exactly five distinct near-side gill slits, large triangular first dorsal fin and much smaller second dorsal fin, exactly two pectoral fins with proper roots, paired pelvic fins, small anal fin, strong narrow caudal peduncle with keel, vertical crescent-shaped tail, no horizontal whale tail. Young white shark body proportions, not an adult seal-hunting monster. Quiet blue-green water, subtle sand and distant reef rock, no seals, people or gear."
        ],
        "generatedAt": "2026-10-03T00:53:27.231Z",
        "checkedAt": "2026-10-03",
        "sha256": "1167b9947cad4909cd7b064f426201c7f01b0dd41239c1c56c5fd910f95ac5d6",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
        "src": "assets/images/clownfish-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "퍼큘라 흰동가리 · 말미잘 곁에서 작은 먹이 찾기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "주황 몸·흰 3띠와 중앙 앞방향 볼록·검은 테두리·연속 등지느러미·온전한 꼬리 확인. 등가시 수·닮은 종 정밀 구별은 확인 불가.",
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
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One wild-type Amphiprion percula beside its host anemone Heteractis magnifica on a shallow tropical reef, clear lateral view looking left, fish mouth slightly open picking a tiny transparent zooplankton crustacean just above the tentacle tips. Show precisely three vertical white bars behind eye, at midbody with a forward round bulge, and on tail base; distinctly black-bordered white bars and fins, orange body, natural small eye, continuous dorsal fin, entire tail visible. A few very small plankton specks, not oversized shrimp or a swarm; anemone only in lower right, fish silhouette clear. Mild feeding event reconstruction without injury."
        ],
        "generatedAt": "2026-10-03T00:41:36.660Z",
        "checkedAt": "2026-10-03",
        "sha256": "180770ce7e859ebf0259e67ad314a1fccad5bca9eedf2c0ac2ab05efa7975424",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
      "Vampire squid"
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
      "Giant isopod"
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
        "src": "assets/images/giant-isopod-chatgpt-feeding-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "대왕등각류 · 바닥에 가라앉은 먹이 찾기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "겹친 회색 갑옷·근측 눈·걷는다리 7개·긴 더듬이 2개·짧은 머리 부속지 2개·꼬리부채 확인. 원측 7다리와 짧은 더듬이 미세 구조는 확인 불가.",
        "behaviorCheck": "바닷바닥에 가라앉은 동물의 사체를 먹기도 해요. 작은 물고기 먹이를 탐색하는 모습을 그렸어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Giant isopod, Diet",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-isopod"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style, accurate adult anatomy, natural colors and eyes, restrained texture, no anthropomorphism. Landscape 3:2. Show a whole focal animal with important appendages and margins. A meaningful behavior in its actual habitat with uncluttered background; tiny prey if required. No text, labels, arrows, borders, logos, watermark, people, boats, toys, fantasy, horror, blood or injuries. This is an explanatory reconstruction, not documentary photography. Subject: ONE giant isopod Bathynomus giganteus exploring a much smaller intact dead fish resting on the deep Atlantic seabed as scavenger food. Low three-quarter side view, isopod facing RIGHT, broad armored tail fan at LEFT. Entire animal and all antenna tips in frame. Natural pale beige-gray elongated oval body with overlapping segmented dorsal armor; exactly SEVEN pairs of jointed walking legs attach under the thorax, seven near-side legs clearly spaced, far-side ones naturally partly hidden. Head has small dark compound eyes and EXACTLY TWO PAIRS of antenna-like structures: two long segmented antennae and two noticeably shorter antennules, all with separate bases, no extra branches. Large rear tail fan made of central tail plate and lateral uropods, no scorpion tail. Tiny natural mouthparts under head near the fish, no enormous lobster pincers, hands, teeth or dorsal mouth. Fish lies on its side at the front-right, intact skin and fins, no blood, injury, exposed flesh, decomposition or eerie glowing eyes. Fine dark sand and a few pebbles, softly illuminated blue-black water appropriate to depth. Show close exploration of fallen food, not a chase after a living fish."
        ],
        "generatedAt": "2026-10-03T00:52:50.099Z",
        "checkedAt": "2026-10-03",
        "sha256": "376a388e40af4f3219e216d99f5b8341b10a134467e76be7841fb376a89427d7",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
      },
      {
        "id": "giant-isopod",
        "src": "assets/images/giant-isopod-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "대왕등각류 · 깊은 바다의 바닥 걷기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "갑옷·근측 눈·근측 다리 7끝·긴 더듬이 2개·짧은 안쪽 부속지 2개·넓은 꼬리부채 확인. 원측 다리·antennule 세부는 자연가림으로 확인 불가.",
        "behaviorCheck": "깊은 바다의 모래와 바위 바닥을 걷는 모습이에요. 반대쪽 다리는 등껍질 뒤에 가려져 있어요.",
        "behaviorSources": [
          {
            "title": "NOAA Ocean Exploration — Giant isopod observed on deep seafloor",
            "url": "https://oceanexplorer.noaa.gov/multimedia/okeanos-explorations-ex2107-gallery-media-dive09-isopod/"
          },
          {
            "title": "Monterey Bay Aquarium — Giant isopod, Habitat",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/giant-isopod"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One original natural-history illustration for Sea Atlas, a marine encyclopedia for children ages 5–12. Refined realistic painterly style, accurate adult anatomy, natural colors and eyes, restrained texture, no anthropomorphism. Landscape 3:2. Show a whole focal animal with important appendages and margins. A meaningful behavior in its actual habitat with uncluttered background; tiny prey if required. No text, labels, arrows, borders, logos, watermark, people, boats, toys, fantasy, horror, blood or injuries. This is an explanatory reconstruction, not documentary photography. Subject: ONE giant isopod Bathynomus giganteus walking over a low flat sediment-dusted rock on the deep western Atlantic seabed, NO prey. High overhead front-three-quarter camera, elongated gray-beige armored body running diagonally from head at lower-left to the broad tail fan at upper-right. Entire body and antenna tips inside the image with generous margins. Clearly overlapping dorsal plates in a natural segmented oval contour, a distinct head with small dark compound eyes. Exactly seven pairs of jointed walking legs attach below the thoracic armor, seven near-side leg ends spaced along the lower side with the far-side legs partly visible around the upper side, no legs sprouting from the back, no eighth pair. Exactly two pairs of head appendages: two long segmented antennae sweeping toward lower-left and two shorter separate antennules between them, all distinct, not branching. Rear fan is the central telson and lateral uropods, no long stinger. Natural beige-gray texture, restrained neutral scientific lighting, dark blue water with a few fine drifting particles, surrounding sparse sand and rock only, no green underwater plants, no extra animals, no big claws or humanlike hands."
        ],
        "generatedAt": "2026-10-03T00:54:21.619Z",
        "checkedAt": "2026-10-03",
        "sha256": "31bd28057251ef59b3b28d147efe3027dff78ea98fb2317cfe91953687f1dabb",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
        "src": "assets/images/moon-jelly-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "북동태평양 달해파리 · 우산을 오므려 움직이기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥글게 굽은 투명 우산·짧은 촉수·4연분홍 내부 구조·주름 구완 확인. 일부 구완 연결과 종 정밀 동정은 확인 불가.",
        "behaviorCheck": "우산 모양 몸을 오므렸다 펴며 움직여요. 오므린 모습을 옆쪽에서 그렸어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Moon jelly",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/moon-jelly"
          },
          {
            "title": "Monterey Bay Aquarium — Moon Jelly Cam",
            "url": "https://www.montereybayaquarium.org/cams-videos/live-cams/moon-jelly-cam"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One Aurelia labiata moon jelly in a distinctly lateral underwater view as its shallow translucent bell gently contracts for pulsating swimming in northeast Pacific coastal water. Whole jelly centered with clear silhouette; softly domed contracted bell, short fine rim-tentacle fringe, four compact frilly oral arms under central mouth, faint soft pink petal-like gonads inside. Keep the species' shallow moon-jelly bell and short delicate appendages, no long sea-nettle tentacles, no eyes, face, spine, rainbow comb bands or other jellyfish. No motion arrows or trails. Sparse marine snow and a faint distant kelp silhouette, cool blue-green natural ambient light. The subject is not luminous, natural transparency shows the water through the bell."
        ],
        "generatedAt": "2026-10-03T00:46:48.237Z",
        "checkedAt": "2026-10-03",
        "sha256": "5774a264e7c0b30380f65dd8a55e66b3d75e7188dfaf20ceccf3afabf22477d4",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
        "src": "assets/images/elkhorn-coral-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "ecology",
        "caption": "엘크뿔산호 · 햇빛 드는 암초의 산호 군체",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "전체 밑동과 바깥 끝, 중앙에서 이어지는 넓고 납작한 황갈색 가지·밝은 끝 확인. 가는 원통 staghorn 형태 아님; 미세 개체 전수는 확인 불가.",
        "behaviorCheck": "카리브해의 얕은 암초에서 자라는 모습을 그렸어요. 넓고 납작한 가지들이 한 군체로 이어져 있어요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Elkhorn coral",
            "url": "https://www.fisheries.noaa.gov/species/elkhorn-coral"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One full healthy Acropora palmata colony growing on a very shallow Caribbean reef crest in clear daytime water. Elevated oblique side view from slightly above shows the full colony from base to outer tips, broad flattened golden-tan frond-like branches with a few gently rounded sections radiating outward and upward from a common central trunk, pale cream growing tips, fine rough corallite texture. Include realistic quiet sandy rubble substrate and sunlit turquoise water, faint surface shimmer, a subtle distant reef only. Ensure broad palm-like elk-antler fronds with substantial width, not thin cylindrical Acropora cervicornis staghorn branches, not purple plastic tree or fleshy petals, no eyes. All branch tips and colony base within frame. Sparse small understated reef fish can be excluded; focal colony alone clearly readable."
        ],
        "generatedAt": "2026-10-03T00:48:47.583Z",
        "checkedAt": "2026-10-03",
        "sha256": "239473853bc7d6f6ad84bced96b18b8a7acaa3ccf39b07ef15fa07ace06f60ab",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 외부 참조 이미지 없이 자체 생성."
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
        "src": "assets/images/purple-sea-urchin-chatgpt-feeding-v2.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "sceneType": "feeding",
        "caption": "자주성게 · 다시마를 아래쪽 입으로 옮기기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "둥근 몸·짧고 굵은 자주색 가시·관족·다시마 확인. v1 과장된 꽃잎형 입이 사라지고 아랫면 그늘에 작은 치아 2끝 정도만 보여 5치 전수는 확인 불가.",
        "behaviorCheck": "가는 관족으로 다시마 조각을 몸 아래의 입으로 옮겨요. 입 대부분은 그늘과 먹이 뒤에 가려져 있어요.",
        "behaviorSources": [
          {
            "title": "Monterey Bay Aquarium — Purple sea urchin",
            "url": "https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/purple-sea-urchin"
          }
        ],
        "generationPrompts": [
          "Use case: scientific-educational. One independent Sea Atlas gallery illustration for children ages 5–12, landscape 3:2. Refined naturalistic painterly illustration, believable anatomy, subtle visible brushwork, natural colors and proportions, quiet informative underwater habitat. Entire focal animal and important appendages inside frame with breathing room. No text, labels, arrows, border, logo, watermark, humans, boats, blood, injuries, horror, anthropomorphism, glowing eyes or plastic rendering. Scene: One adult Strongylocentrotus purpuratus eating a small naturally torn brown kelp blade on a northeast Pacific shallow rocky shore. Low oblique view across a small rock ledge permits a discreet glimpse of the normal central mouth on the UNDERSIDE as the urchin straddles the edge, without flipping it upside down or exposing internal organs. Compact rounded somewhat flattened test densely covered in relatively short stout purple spines, finer translucent tube feet emerge between spines and pass kelp toward underside mouth. Keep tiny five toothlike lantern tips subtle at mouth, not a huge smile, large human teeth, shell hole or face. Kelp rests partly beneath and alongside body, natural feeding posture, entire urchin including spine tips in frame, no Diadema long black spines, no starfish arms, red wounds or giant suction-cup tube feet. Quiet seawater, coralline-covered rock, warm brown kelp contrasted with natural violet spines.",
          "Use case: precise-object-edit, scientific-educational. Correct only the feeding mouth anatomy and local posture in this naturalistic Strongylocentrotus purpuratus illustration. Keep the purple short stout spines, round body, kelp, rock, water, lighting, landscape 3:2, overall realistic painterly style and all other features. The present frontal flower-like mouth and numerous pale teeth are incorrect. Remove that entire conspicuous flower mouth. The normal very small mouth belongs on the UNDERSIDE center of the test, facing DOWN toward the kelp and rock, not on the vertical front side. Put the kelp slightly beneath the urchin, occluding most of the tiny underside mouth so at most one or two very small pale tips of its five-toothed Aristotle's lantern may be glimpsed deep in shadow. Do NOT show a circle of ten petals, a large hole, face or smile. Natural low resting posture on rock, a few fine translucent tube feet transport kelp down to that underside opening. Do not expose internal tissue. No text, arrows, labels, humans, wounds, horror or enlarged teeth. The mouth is naturally obscured in this ecology scene, and it is acceptable that five individual teeth cannot be counted in the picture."
        ],
        "generatedAt": "2026-10-03T00:51:21.835Z",
        "checkedAt": "2026-10-03",
        "sha256": "1ee1ea3fc55b22cc77f07e7086a5f7ef29e3c3310ffa38b19881acc325f6eb2b",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 내장 생성 도구의 참조/교정 이력은 generationPrompts에 보존."
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
        "src": "assets/images/bottlenose-dolphin-chatgpt-ecology-v1.png",
        "role": "illustration",
        "reviewStatus": "visual-checked",
        "caption": "큰돌고래 · 무리와 함께 이동하기",
        "credit": "Sea Atlas · ChatGPT로 제작",
        "generator": "ChatGPT image_gen",
        "modelDisclosure": "서비스가 세부 모델명을 제공하지 않음",
        "provenanceUrl": "https://openai.com/policies/terms-of-use/",
        "expertReviewed": false,
        "identityCheck": "서로 겹쳐 붙지 않는 전신 3개체를 확인. 각 개체는 둥근 이마와 짧고 두꺼운 부리, 회색 등과 밝은 배, 가슴지느러미 2개, 낫 모양 등지느러미 1개 및 하나의 꼬리자루에 연결된 좌우 꼬리 2엽을 보인다. 팔다리나 아가미 틈이 추가되지 않았다.",
        "generationPrompts": [
          "Use case: scientific-educational\nAsset type: Sea Atlas species gallery, ONE standalone horizontal 3:2 image, not a collage.\nStyle: refined exquisitely detailed naturalistic educational painting for children ages 5–12, real natural anatomy and proportions, realistic subtle skin texture and natural eyes, gentle documentary feeling, quiet marine habitat background. No text, labels, arrows, logo, border, watermark, people, boats, fishing gear, blood, wounds, horror, anthropomorphism, exaggerated smiles, glowing eyes or toy/plastic/cartoon appearance.\nSubject identity: common bottlenose dolphin Tursiops truncatus, robust smooth gray torpedo body, darker gray back graduating to pale belly, rounded melon forehead separated by a subtle crease from a SHORT THICK beak-like rostrum. Do not use long narrow spinner/common dolphin snout, white-sided/hourglass body patterns, spotted dolphin markings or gray-whale body. Do not label as Indo-Pacific bottlenose dolphin Tursiops aduncus, no abdominal black spots as an identification motif. No region or subspecies should be claimed just from appearance.\nAnatomy invariants: exactly TWO pectoral flippers attached behind head on opposite body sides, ONE curved falcate dorsal fin, ONE tail peduncle ending in TWO horizontal left-right flukes with central notch. Whale tail plane must be perpendicular to upright dorsal fin, never fish-like vertical upper/lower lobes. No hindlimbs, pelvic fins or shark gill slits. Small natural lateral eyes, one subtle blowhole on top of head behind forehead if visible. Entire principal animal and all appendage ends comfortably inside frame, about 7% margin.\nScene/composition: THREE common bottlenose dolphins Tursiops truncatus traveling calmly together just below the surface of clear temperate Pacific ocean water, full bodies of all three framed. Elevated underwater three-quarter view from above and slightly behind their left shoulders, diagonally looking toward their heads as they swim toward the lower-left. One closer animal and two farther animals with clear open water spacing, not overlapping or fused bodies, no calf nursing or mating scene. Each retains short thick rostrum and robust gray body. Same-direction gentle social group travel, no prey. This is an educational reconstruction; do not suggest a permanent family trio or claim particular sex or age. Sunlight patterns restrained, quiet distant coast-free blue ocean backdrop. Emphasize the gray backs and curved upright dorsal fins while the two pectoral flippers and HORIZONTAL left-right tail flukes of each animal are anatomically coherent under perspective. Whales' horizontal tail flukes spread laterally like wings, not upright fish tails. No fourth dolphin, no synchronized jumping, no body-contact aggression, no arrows or imagined sound beams."
        ],
        "generatedAt": "2026-10-03T01:30:17.539Z",
        "checkedAt": "2026-10-03",
        "sha256": "2e68864bae8e1c541542f00df203b26e996e1f73269219f73de774344fb1b891",
        "width": 1536,
        "height": 1024,
        "changes": "생성 도구 원본 PNG를 그대로 복사. 참조·교정 요청은 generationPrompts에 보존.",
        "sceneType": "ecology",
        "behaviorCheck": "큰돌고래는 무리로 이동하기도 해요. 세 마리의 유영을 그렸으며 실제 가족 관계를 보여 주지는 않아요.",
        "behaviorSources": [
          {
            "title": "NOAA Fisheries — Common Bottlenose Dolphin: Behavior and Diet",
            "url": "https://www.fisheries.noaa.gov/species/common-bottlenose-dolphin"
          }
        ]
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
  }
];
