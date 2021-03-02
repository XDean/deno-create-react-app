import {path} from '../../deps.ts'

const templatePath = path.fromFileUrl(import.meta.url)
const p = Deno.run({
  cmd: [
    'deno', 'run', '--allow-read', '--allow-write', '--unstable',
    'https://deno.land/x/deno_static@v1.1.0/mod.ts',
    'resources', 'generated',
    '-o',
  ],
  stdout: "inherit",
  stderr: "inherit",
  cwd: path.dirname(templatePath)
})

const status = await p.status()

if (!status.success) {
  Deno.exit(status.code)
}



