// main.ts — The Word You'd Delete From the Dictionary
// A tiny deterministic Node program (stdlib only). It writes the single
// word that should be erased from the dictionary forever into
// $MAKEFUN_OUTPUT_DIR/entry.txt.
//
//   MAKEFUN_OUTPUT_DIR=./output node main.ts
//
// The word: irregardless. Deleting it costs the dictionary nothing —
// it was never a real word in the first place, only a mistake that
// got repeated often enough to earn its own entry. Erasing it is
// the one deletion that makes the dictionary more correct.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'irregardless';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || './output';

function main(): void {
  // Gate: exactly one word, no whitespace.
  if (!WORD || /\s/.test(WORD)) {
    throw new Error('main.ts: the entry must be a single word');
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), WORD + '\n', 'utf8');
}

main();
