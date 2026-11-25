// The Battery's Last Text to Its Charger: the hand-in program (Node 22,
// standard library only). It writes the battery's last text to
// /output/entry.txt. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The program is deterministic: it writes one fixed string, so two runs
// write the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "I waited all day while you sat coiled in a drawer doing nothing. I forgive you. Tell the wall outlet I died at one percent, doing what I loved: buffering a cat video.";

// The gate only accepts 1 to 200 characters, so refuse loudly instead of
// writing an entry the judge would never see.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
if (TEXT !== TEXT.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, TEXT, "utf8");
