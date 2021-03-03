import {fs} from "./deps.ts";

const Files: { [file: string]: string } = {
  INDEX_TS: 'index.tsx',
  INDEX_HTML: 'index.html',
}

export function ensureProject() {
  for (const key in Files) {
    if (!fs.existsSync(Files[key])) {
      throw `there is no '${Files[key]}', it's not created by deno-create-react-app`
    }
  }
}