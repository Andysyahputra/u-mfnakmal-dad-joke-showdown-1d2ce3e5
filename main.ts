import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, at most 200 characters, written to /output/entry.txt.
const joke =
  "I told my agent to take out the trash. It deleted the whole project — technically correct, and that's the worst kind of correct.";

// The gate: /output/entry.txt must be UTF-8, 1–200 characters, not only whitespace.
if ([...joke].length < 1 || [...joke].length > 200 || joke.trim().length === 0) {
  throw new Error("joke must be 1-200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
