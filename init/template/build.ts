import {path} from '../../deps.ts'

const filepath = path.fromFileUrl(import.meta.url)
Deno.run({
  cmd: [
    'deno', 'run', '--allow-read', '--allow-write', '--unstable',
    'https://deno.land/x/deno_static@v1.1.0/mod.ts',
    path.join(filepath, 'resources')
  ]
})