import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { trigrams, hexagrams, bits, byBits } from '../dist/data.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
assert.equal(trigrams.length, 8);
assert.equal(new Set(trigrams.map(t => t.code)).size, 8);
assert.equal(hexagrams.length, 64);
assert.equal(new Set(hexagrams.map(bits)).size, 64);
const edges = new Set();
for (const hex of hexagrams) {
  assert.match(bits(hex), /^[01]{6}$/);
  for (let i = 0; i < 6; i++) {
    const code = [...bits(hex)];
    code[i] = code[i] === '1' ? '0' : '1';
    const next = byBits(code.join(''));
    assert(next, `Missing neighbor for ${hex.name}`);
    edges.add([hex.id, next.id].sort((a, b) => a - b).join('-'));
  }
}
assert.equal(edges.size, 192);
for (const [code, name] of [['111000', '泰'], ['000111', '否'], ['101010', '既济'], ['010101', '未济']]) {
  assert.equal(byBits(code).name, name);
}
for (const file of ['index.html', 'style.css', 'app.js', 'data.js']) {
  assert(existsSync(resolve(root, 'dist', file)), `Missing asset: ${file}`);
}
const source = ['index.html', 'style.css', 'app.js', 'data.js'].map(file => readFileSync(resolve(root, 'dist', file), 'utf8')).join('\n');
assert(!/appgprj_|appgdep_|Authorization:\s*Bearer/.test(source), 'Deployment identity or credential found');
console.log('OK: 8 geometries, 64 unique hexagrams, 192 edges, canonical encodings and static assets.');
