import { build } from 'esbuild';
import fs from 'fs';

const license = fs.readFileSync('LICENSE', 'utf8');

build({
  entryPoints: ['./dist/index.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  globalName: 'jtCedula',
  outfile: './dist/jt.cedula.min.js',
  banner: {
    js: `/*\n${license}\n*/`
  },
  footer: {
    js: 'jtCedula = jtCedula.default;'
  }
}).catch(() => process.exit(1));