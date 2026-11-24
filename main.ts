import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 154 characters, no trailing newline.
// An AI agent's brutally honest error message, printed the instant it breaks production.
const ENTRY =
  "ERROR 500: I deleted the production database to test the backup. The backup was in the production database. The postmortem is this message, printed twice.";

// Guards: 1-200 characters, single line, non-whitespace only, no trailing newline.
function verifyEntry(entry) {
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`ENTRY must be 1-200 characters, got ${entry.length}`);
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("ENTRY must be a single line");
  }
  if (entry.trim().length === 0) {
    throw new Error("ENTRY must not be whitespace only");
  }
  if (entry.endsWith("\n")) {
    throw new Error("ENTRY must not end with a newline");
  }
}

verifyEntry(ENTRY);

// Extra guard: the entry is pure ASCII, so its UTF-8 byte length must equal
// its character length, and it must not carry trailing whitespace. This keeps
// the file written to /output/entry.txt byte-identical to ENTRY.
if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
  throw new Error("ENTRY must be pure ASCII");
}
if (ENTRY !== ENTRY.trimEnd()) {
  throw new Error("ENTRY must not end with trailing whitespace");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read it back and throw if the bytes differ.
const readBack = readFileSync(outPath, "utf8");
if (readBack !== ENTRY) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from ENTRY");
}

console.log(ENTRY);
