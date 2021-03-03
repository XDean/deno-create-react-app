import {fs, path} from "../deps.ts"
import {bundleIndexJs} from "./bundle.ts"
import {ensureProject} from "../util.ts";

const buildFolder = 'dist/build'
const mainJsOutput = 'dist/build/static/js/main.js'

export async function build() {
  ensureProject()

  console.log(`cleaning build dir: ${buildFolder}`)
  await fs.emptyDir(buildFolder)

  console.log(`bundling index.tsx`)
  await bundleIndexJs(mainJsOutput)

  const targetIndexHTML = path.join(buildFolder, 'index.html');
  console.log(`copying index.html -> ${targetIndexHTML}`)
  await fs.ensureFile(targetIndexHTML)
  await Deno.copyFile('index.html', targetIndexHTML)

  for await (const f of fs.walk('static', {includeDirs: false})) {
    const targetPath = path.join(buildFolder, f.path);
    console.log(`copying ${f.path} -> ${targetPath}`)
    await fs.ensureFile(targetPath)
    await Deno.copyFile(f.path, targetPath)
  }
  console.log(`build done. see '${buildFolder}'`)
}