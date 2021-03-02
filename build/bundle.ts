import {fs} from '../deps.ts'

export async function bundleIndex(output:string) {
  await fs.ensureFile(output)
  const res = await Deno.run({
    cmd: [
      'deno', 'bundle',
      '--config', 'tsconfig.json',
      'index.tsx', output
    ]
  })
  return (await res.status()).success
}