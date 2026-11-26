// Deadpan forecast for Blundermere: one absurd but believable weather line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In Blundermere today: light rain, heavy regret, and a 90% chance the sun files a formal complaint.";

// writeEntry: writes the single forecast line to /output/entry.txt (UTF-8).
function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ENTRY + "\n", "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir);
