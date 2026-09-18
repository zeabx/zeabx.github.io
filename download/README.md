# 粵語新聞閱讀室 · Cantonese News Reading Lab

An interactive daily reader for learning to read Cantonese news — one legal news
story per day, written in genuine written Cantonese (粵文), with tap-per-character
meanings, Jyutping, and **real Cantonese audio**.

## 🔊 About the audio (important fix)

All audio is now **native Cantonese (Hong Kong)**, never Mandarin:

- Every character, word, paragraph, vocab word and example sentence was
  pre-recorded with the Microsoft **zh-HK-HiuMaanNeural** voice — a real
  Hong Kong Cantonese neural voice.
- Clips are served as static mp3 files (instant playback, any device,
  no internet voice needed on your side).
- Anything not pre-generated is spoken by the on-demand server voice using
  the **same** zh-HK HiuMaan voice.
- Mandarin device voices are banned in the app. If no Cantonese source
  exists, the app stays silent rather than speaking Mandarin.

The voice chip in the header should read: **Cantonese voice: HiuMaan · Hong Kong**.

## How to use

1. **Tap any character or word** in the headline or article — a card opens with
   Jyutping, tone number, English meanings, combination meaning, and sound.
2. **Speaker buttons** next to the headline / paragraphs play the whole text.
3. **Character Combos 詞語** section deep-dives 6 legal terms + 3 grammar
   particles, each with fresh example sentences (tap to hear them too).
4. Use **Show Jyutping above the text** to toggle romanization inline.

## Daily workflow (new editions)

1. Add the story data: `src/data/edition-N.ts` + `src/data/vocab-N.ts`
   (follow the edition-1 pattern; vocab is imported by the edition file).
2. Point `src/app/page.tsx` at the new edition.
3. Regenerate audio (one command each):
   ```bash
   npx tsx scripts/collect-speakable.mts     # collects all speakable text
   python3 scripts/gen-cantonese-audio.py    # batch-generates HK-voice mp3s
   ```
   (Requires `pip install edge-tts`. 221 clips ≈ 3 MB, ~1 minute.)
4. Anything missed at generation time still speaks correctly via the
   on-demand `/api/tts` route (same Hong Kong voice, disk-cached).

## Tech notes

- Next.js 16 app; audio map at `src/data/audio-map.json` (text → mp3 filename).
- Server TTS route: `src/app/api/tts` using `msedge-tts` (zh-HK-HiuMaanNeural),
  disk cache in `.audio-cache/`.
- Playback slows to learner speed with pitch preserved (`preservesPitch`).
