# Worklog

---
Task ID: 1
Agent: Main agent (Super Z)
Task: Build "Cantonese News Reading Lab" — daily interactive HTML app where an English-only learner taps Cantonese characters in a real news story (legal news preferred) to see Jyutping, tone, English meanings, combined word meanings, hear pronunciation, plus a vocabulary deep-dive section with example sentences.

Work Log:
- Loaded skills: fullstack-dev, TTS, web-search, agent-browser.
- Initialized fullstack environment via init script (Next.js 16 + Tailwind 4 + shadcn/ui at /home/z/my-project).
- Searched web for current legal news (HK/China/Asia). Selected: CK Hutchison vs Panama ports dispute (Panama Supreme Court annulled 1997 port concession; latest development Aug 19-20 2026: CK Hutchison launched international arbitration seeking US$1.5B / HK$11.7B). Sources: Reuters, SCMP, AP, WSJ.
- Tested z-ai TTS with Cantonese text: mp3 format unsupported (error 1214), WAV works. Decision: audio engine prefers device-native Cantonese voice (yue/zh-HK Web Speech API), server TTS as fallback with disk cache.
- Composed news article in written Cantonese (粵文) — headline + 3 paragraphs, ~200 chars, 132 unique characters. Hand-authored dataset: every character has Jyutping + tone + English senses; every multi-char token has combined Jyutping + meaning + teaching note (Cantonese-only chars 喺咗嘅畀 highlighted).
- Built vocab deep-dive: 6 legal terms (追討 裁定 取消 仲裁 賠償 官司) + 3 grammar particles (咗 嘅 喺), each with meanings, intro, notes, 2 fresh example sentences with Jyutping + English.
- Files created:
  - src/data/types.ts, src/data/edition-1.ts, src/data/vocab-1.ts
  - src/lib/cantonese-audio.ts (voice detection: yue > zh-HK > zh-Hant > fallback; speak() with device voice or /api/tts)
  - src/app/api/tts/route.ts (server TTS, WAV, MD5 disk cache in .audio-cache/)
  - src/components/reader/cantonese-reader.tsx (main UI: header w/ voice status + progress, how-to + 6-tone legend, clickable headline/article, jyutping overlay toggle, per-paragraph listen, footer)
  - src/components/reader/char-popup.tsx (desktop anchored card / mobile bottom sheet; word meaning + per-char breakdown + note + play)
  - src/components/reader/vocab-section.tsx, src/components/reader/tone-legend.tsx
  - src/app/page.tsx (renders edition1), src/app/layout.tsx (Noto Serif HK via Google Fonts link), globals.css (.font-zh)
- Fixed 3 lint errors (react-hooks/set-state-in-effect): deferred localStorage reads via setTimeout, popup layout computed during render (client-only).
- Verified with agent-browser: desktop popup (single char 喺, 4-char word 最高法院), progress counter 0→7/132, explored-char highlighting, vocab cards + examples, mobile 390px bottom sheet, /api/tts 200 (1.2s generate, 8ms cached). No console/page errors.

Stage Summary:
- App live at / route (port 3000). Edition No. 1 (2026-09-16): CK Hutchison vs Panama arbitration story in written Cantonese.
- All requirements met: tap-per-character meanings incl. combined word meanings, Cantonese audio (native device voice priority + server fallback), vocab section with example sentences.
- Daily workflow: add future editions as new data files (edition-N.ts + vocab-N.ts following edition1 pattern) and switch the import in src/app/page.tsx.

---
Task ID: 2
Agent: Main agent (Super Z)
Task: Fix "characters are read in Mandarin, not Cantonese" — make ALL audio genuinely Cantonese.

Work Log:
- Root cause: cantonese-audio.ts used any Chinese device voice (quality "chinese" incl. Mandarin) before fallback, and /api/tts fallback used z-ai "tongtong" (Mandarin engine). User's device has no Cantonese voice → everything was Mandarin.
- Chose Microsoft Edge neural voices as the Cantonese source: tested zh-HK-HiuMaanNeural via Python edge-tts (works; HK voices available: HiuGaai, HiuMaan, WanLung). Installed msedge-tts npm package for Node runtime use.
- scripts/collect-speakable.mts (run with npx tsx): extracts every speakable string from edition-1 + vocab-1 (tokens, per-char, joined headline/paragraphs, vocab words, example sentences), cleaned with the same rule as speak(). 221 unique strings.
- scripts/gen-cantonese-audio.py: batch-generated 221 mp3 clips (public/audio/<md5>.mp3, 3.1 MB, 221/221 ok) with zh-HK-HiuMaanNeural; wrote src/data/audio-map.json (text → file).
- Rewrote src/lib/cantonese-audio.ts: guaranteed-Cantonese chain = static pre-generated clip → /api/tts (server HiuMaan voice) → device voice ONLY if genuinely Cantonese (yue/zh-HK). Mandarin voices banned; silent rather than wrong language. PlaybackRate with preservesPitch for learner speed.
- Rewrote src/app/api/tts/route.ts: msedge-tts + zh-HK-HiuMaanNeural, md5 mp3 disk cache (.audio-cache), xml-escape, serialized synthesis queue. Old z-ai Mandarin route and stale .wav cache removed.
- cantonese-reader.tsx: voice chip now "Cantonese voice: HiuMaan · Hong Kong", removed device detection effect, updated how-to copy ("always Cantonese, never Mandarin").
- Restarted dev server (port 3000). Verified: curl static clip 200 audio/mpeg; /api/tts 200 audio/mpeg (real Cantonese generated in Node); browser (agent-browser): char click fires /audio/*.mp3 media request, paragraph listen fires joined-text clip, 0 console/page errors; screenshot confirms chip text. npx tsc --noEmit: 0 errors under src/.
- Coverage check: headline, all 3 paragraphs, all 9 vocab words, all 18 example sentences → all present in map (0 missing).
- Updated download/README.md (audio explanation + daily edition workflow incl. audio regeneration commands).

Stage Summary:
- All audio on the page is now real Cantonese (Hong Kong HiuMaan voice), pre-generated for instant playback; Mandarin is impossible by design.
- Future editions: add data files → run collect + gen scripts → done; /api/tts covers any gaps with the same HK voice.
