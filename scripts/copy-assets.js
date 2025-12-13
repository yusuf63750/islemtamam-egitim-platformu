#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const items = [
  {
    name: 'kurucu.jpg',
    src: path.join(repoRoot, 'kurucu.jpg'),
    dest: path.join(publicDir, 'kurucu.jpg'),
    placeholder: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="100%" height="100%" fill="#e9ecef"/>
  <g fill="#868e96" font-family="Arial, Helvetica, sans-serif" font-size="36">
    <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle">Kurucu</text>
    <text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" font-size="18">Placeholder Image</text>
  </g>
</svg>`
  },
  {
    name: 'LOGO.png',
    src: path.join(repoRoot, 'LOGO.png'),
    dest: path.join(publicDir, 'LOGO.png'),
    placeholder: `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <circle cx="256" cy="200" r="120" fill="#fff" />
  <text x="50%" y="88%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="48">LOGO</text>
</svg>`
  }
];

items.forEach(item => {
  try {
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, item.dest);
      console.log('Copied:', item.name);
    } else {
      // write placeholder SVG
      fs.writeFileSync(item.dest, item.placeholder, 'utf8');
      console.log('Wrote placeholder for:', item.name);
    }
  } catch (err) {
    console.error('Error handling', item.name, err);
    process.exitCode = 1;
  }
});

// exit with success
process.exitCode = 0;
