import {path} from '../../deps.ts'

const filepath = path.fromFileUrl(import.meta.url)
const p = Deno.run({
  cmd: [
    'deno', 'run', '--allow-read', '--allow-write', '--unstable',
    'https://deno.land/x/deno_static@v1.1.0/mod.ts',
    '-o',
    'resources',
  ],
  stdout: "inherit",
  stderr: "inherit",
  cwd: path.dirname(filepath)
})

const status = await p.status()

if (status != 0) {
  Deno.exit(status)
}


