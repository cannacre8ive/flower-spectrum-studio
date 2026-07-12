import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const required = [
  "<!DOCTYPE html>",
  "id=\"uploadDialog\"",
  "id=\"selStrain\"",
  "Object.assign(photos,BAKED)",
  "function renderUploadQueue()",
  "id=\"detailDialog\"",
  "id=\"view-labels\"",
  "function exportLabelSheet()",
  "id=\"exportAllTemplates\"",
];

const missing = required.filter((token) => !html.includes(token));
if (missing.length) {
  console.error("Missing required project markers:", missing.join(", "));
  process.exit(1);
}

console.log("Static project checks passed.");
