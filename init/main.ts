import {fs, path} from "../deps.ts"
import resources from "./template/generated/mod.ts"

export async function initProject(folder: string, name: string) {
  const root = path.join(folder, name)
  if (await fs.exists(root)) {
    console.error(`directory exist, please delete it first: ${root}`)
    return null
  }
  console.log('generating...')
  await fs.ensureDir(root)
  for (const resource of resources) {
    const fp = path.join(root, resource.path)
    await fs.ensureFile(fp)
    await Deno.writeFile(fp, resource.content)
  }
  console.log('done.')
}