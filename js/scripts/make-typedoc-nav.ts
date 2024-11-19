import { readdir, writeFile } from 'fs/promises';

const docsRoot = `${__dirname}/../../docs/reference/js`;
const yamlOut = `${docsRoot}/_toc.yaml`;
const devsiteRoot = '/docs/genkit/reference/js';
const packages = [
  'genkit',
];

(async () => {
  let yaml = `toc:\n- title: Genkit\n  path: ${devsiteRoot}\n`;
  for (const pkg of packages) {
    yaml += `- title: "${pkg}"\n  path: ${devsiteRoot}/${pkg}\n`;
    const paths = await readdir(`${docsRoot}/${pkg}`, {withFileTypes: true});
    yaml += "  alternate_paths:\n";
    for (const p of paths) {
      if (p.isDirectory()) {
        const files = await readdir(`${docsRoot}/${pkg}/${p.name}`)
        for (const f of files) {
          yaml += `  - "${devsiteRoot}/${pkg}/${p.name}/${f}"\n`;
        }
      }
    }
  }
  await writeFile(yamlOut, yaml);
})();