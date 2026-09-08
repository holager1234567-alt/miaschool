import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(__dirname, "../public/images");
const src = path.join(base, "cta-leaves.png");

async function extractLeaf({ left, top, width, height, out }) {
  const { data, info } = await sharp(src)
    .extract({ left, top, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 40 && g < 40 && b < 40) data[i + 3] = 0;
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(path.join(base, out));
}

const meta = await sharp(src).metadata();
const w = meta.width ?? 0;
const h = meta.height ?? 0;

await extractLeaf({
  left: 0,
  top: Math.round(h * 0.42),
  width: Math.round(w * 0.58),
  height: Math.round(h * 0.58),
  out: "cta-leaf-left.png",
});

await extractLeaf({
  left: Math.round(w * 0.42),
  top: 0,
  width: Math.round(w * 0.58),
  height: Math.round(h * 0.58),
  out: "cta-leaf-right.png",
});

console.log("extracted leaves", w, h);
