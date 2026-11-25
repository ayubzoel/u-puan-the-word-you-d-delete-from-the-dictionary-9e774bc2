// main.ts — the word to strike from the dictionary
// A small script built on the Node standard library alone. It places
// one chosen word in entry.txt under the output directory handed to
// it by the platform, so the grader can read exactly that word.
//
// Usage: MAKEFUN_OUTPUT_DIR=./output node main.ts
//
// The pick is irregardless: a mistake that got repeated into the
// dictionary. Striking it is the only deletion that leaves the
// dictionary more correct than it found it.

import * as fs from 'node:fs';
import * as path from 'node:path';

const deletion = 'irregardless';
const fallback = './output';

function run(): void {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? fallback;
  // The entry is one word and one word only: no spaces, no punctuation
  // around it, nothing attached. A second token would break the gate.
  if (deletion === '' || /\s/.test(deletion)) {
    throw new Error('entry must be a single word');
  }
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'entry.txt'), deletion + '\n', 'utf8');
}

run();
