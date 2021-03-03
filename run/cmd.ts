import {cli} from "../deps.ts";
import {run} from "./main.ts";

export const Command = new cli.Command()
  .description("run project")
  .allowEmpty()
  .option('-p, --port <port:number>', 'server port number', {default: 8000})
  .option('-w, --watch [watch:boolean]', 'watch file change to reload', {default: true})
  .action(async (options: any, name: string) => {
    await run(options)
  });
