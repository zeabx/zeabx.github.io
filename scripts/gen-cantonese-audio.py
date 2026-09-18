#!/usr/bin/env python3
"""
Batch-generate REAL Cantonese audio (Microsoft zh-HK neural voice "HiuMaan")
for every string in scripts/speakable-manifest.json.

Output:
  /home/z/my-project/public/audio/<md5>.mp3        one clip per string
  /home/z/my-project/src/data/audio-map.json       { text: "<md5>.mp3" }

Run: python3 scripts/gen-cantonese-audio.py
"""

import asyncio
import hashlib
import json
import sys
from pathlib import Path

import edge_tts

PROJECT = Path("/home/z/my-project")
MANIFEST = PROJECT / "scripts" / "speakable-manifest.json"
AUDIO_DIR = PROJECT / "public" / "audio"
MAP_OUT = PROJECT / "src" / "data" / "audio-map.json"

VOICE = "zh-HK-HiuMaanNeural"  # native Hong Kong Cantonese, female
CONCURRENCY = 6
RETRIES = 4

AUDIO_DIR.mkdir(parents=True, exist_ok=True)


def fname(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest() + ".mp3"


async def gen_one(sem: asyncio.Semaphore, text: str) -> tuple[str, bool, str]:
    """Generate one clip. Returns (text, ok, msg)."""
    out = AUDIO_DIR / fname(text)
    if out.exists() and out.stat().st_size > 1000:
        return text, True, "cached"
    async with sem:
        for attempt in range(1, RETRIES + 1):
            try:
                com = edge_tts.Communicate(text, VOICE)
                await com.save(str(out))
                if out.exists() and out.stat().st_size > 200:
                    return text, True, "ok"
                raise RuntimeError("file too small / missing")
            except Exception as e:  # noqa: BLE001
                if out.exists():
                    out.unlink(missing_ok=True)
                if attempt == RETRIES:
                    return text, False, f"{type(e).__name__}: {e}"
                await asyncio.sleep(1.5 * attempt)
    return text, False, "unreachable"


async def main() -> None:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    print(f"Generating {len(manifest)} Cantonese clips with {VOICE} ...")
    sem = asyncio.Semaphore(CONCURRENCY)
    results = await asyncio.gather(*(gen_one(sem, t) for t in manifest))

    audio_map: dict[str, str] = {}
    failures: list[tuple[str, str]] = []
    for text, ok, msg in results:
        if ok:
            audio_map[text] = fname(text)
        else:
            failures.append((text, msg))

    MAP_OUT.write_text(
        json.dumps(audio_map, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    ok_n = len(audio_map)
    print(f"Done: {ok_n}/{len(manifest)} clips -> {AUDIO_DIR}")
    if failures:
        print(f"FAILED ({len(failures)}):")
        for t, msg in failures:
            print(f"  - {t!r}: {msg}")
        sys.exit(1)


if __name__ == "__main__":
    asyncio.run(main())
