#!/usr/bin/env node
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const UA = "ValenciaShoreExcursions/1.0 (localhost; info@wowatour.com)";

const IMAGE_FILES = {
  "city-of-arts.jpg": [
    "File:Ciudad de las Artes y las Ciencias, Valencia, España, 2014-06-29, DD 156.JPG",
    "File:Ciudad de las Artes y las Ciencias 02.jpg",
    "File:Hemisferic Valencia.jpg",
  ],
  "old-town.jpg": [
    "File:Plaza de la Virgen, Valencia, España, 2014-06-30, DD 146.JPG",
    "File:Plaza de la Virgen Valencia.jpg",
  ],
  "cathedral.jpg": [
    "File:Catedral de Valencia 01.JPG",
    "File:Valencia Cathedral facade.jpg",
    "File:Catedral de Valencia desde la Plaza de la Reina.jpg",
  ],
  "la-lonja.jpg": [
    "File:Lonja de la Seda, Valencia, España, 2014-06-29, DD 48.jpg",
    "File:Llotja de la Seda Valencia.jpg",
  ],
  "central-market.jpg": [
    "File:Mercado Central, Valencia, España, 2014-06-30, DD 111.JPG",
    "File:Mercado Central de Valencia - Interior.jpg",
    "File:Mercat Central de València.jpg",
  ],
  "turia-gardens.jpg": [
    "File:Jardín del Turia, Valencia, España, 2014-06-30, DD 61.JPG",
    "File:Jardines del Turia.jpg",
    "File:Puente de la Exposición, Valencia.jpg",
  ],
  "plaza-ayuntamiento.jpg": [
    "File:Ayuntamiento de Valencia, España, 2014-06-30, DD 91.JPG",
    "File:Ajuntament de València.jpg",
    "File:Plaza del Ayuntamiento de Valencia.jpg",
  ],
  "cruise-port.jpg": [
    "File:Puerto de Valencia, España, 2014-06-29, DD 14.JPG",
    "File:Port of Valencia.jpg",
    "File:Puerto de Valencia.jpg",
  ],
  "coastal.jpg": [
    "File:Playa de la Malvarrosa, Valencia, España, 2014-06-30, DD 05.JPG",
    "File:Malvarrosa Beach Valencia.jpg",
    "File:Playa de la Malvarrosa.jpg",
  ],
  "historic.jpg": [
    "File:Barrio del Carmen, Valencia, España, 2014-06-30, DD 155.JPG",
    "File:Torres de Serranos Valencia.jpg",
    "File:Torres de Quart Valencia.jpg",
  ],
  "walking.jpg": [
    "File:Calle de Caballeros, Valencia, España, 2014-06-30, DD 163.JPG",
    "File:Carrer dels Cavallers Valencia.jpg",
    "File:Barrio del Carmen Valencia.jpg",
  ],
};

const ALIASES = {
  "hero.jpg": "city-of-arts.jpg",
  "hero-home.jpg": "city-of-arts.jpg",
  "og-default.jpg": "city-of-arts.jpg",
  "coast.jpg": "coastal.jpg",
  "nature.jpg": "turia-gardens.jpg",
  "food-and-wine.jpg": "central-market.jpg",
  "food.jpg": "central-market.jpg",
  "wine.jpg": "central-market.jpg",
  "compare.jpg": "old-town.jpg",
  "private.jpg": "city-of-arts.jpg",
  "photography.jpg": "city-of-arts.jpg",
  "family.jpg": "turia-gardens.jpg",
  "viewpoints.jpg": "city-of-arts.jpg",
  "highlights.jpg": "city-of-arts.jpg",
};

async function commonsThumbUrl(title, width = 2400) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", title);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", String(width));
  api.searchParams.set("format", "json");
  api.searchParams.set("origin", "*");

  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status} for ${title}`);
  const data = await res.json();
  const pages = data.query?.pages || {};
  const page = Object.values(pages)[0];
  if (!page || page.missing != null) return null;
  const info = page.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const record = {
    destination: "valencia",
    generated: new Date().toISOString(),
    note: "Temporary Wikimedia Commons stand-ins for localhost development only. Replace with licensed production assets before launch.",
    images: [],
  };

  for (const [file, candidates] of Object.entries(IMAGE_FILES)) {
    const dest = join(OUT, file);
    process.stdout.write(`  ${file}… `);
    let ok = false;
    let used = null;
    for (const title of candidates) {
      try {
        const url = await commonsThumbUrl(title);
        if (!url) continue;
        await download(url, dest);
        used = title;
        ok = true;
        break;
      } catch {
        /* try next */
      }
    }
    if (ok) {
      console.log(`✓ (${used})`);
      record.images.push({ file, source: "Wikimedia Commons", commons: used, note: "Temporary localhost stand-in" });
    } else {
      console.log("✗ all candidates failed");
      record.images.push({ file, source: "Wikimedia Commons", error: "all candidates failed" });
    }
  }

  for (const [alias, target] of Object.entries(ALIASES)) {
    const src = join(OUT, target);
    const dest = join(OUT, alias);
    if (existsSync(src)) {
      copyFileSync(src, dest);
      record.images.push({ file: alias, source: `Alias of ${target}`, note: "Temporary localhost stand-in" });
      console.log(`  ${alias} ← ${target}`);
    } else {
      console.log(`  ${alias} ✗ missing ${target}`);
    }
  }

  writeFileSync(join(OUT, "sources.json"), JSON.stringify(record, null, 2));
  console.log("\nWrote sources.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
