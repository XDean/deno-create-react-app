import {cli} from "../deps.ts";
import {run} from "./main.ts";

export const Command = new cli.Command()
  .description("run deno-create-react-app project")
  .allowEmpty()
  .option('-p, --port <port:number>', 'server port number', {default: 8000})
  .option('-w, --watch [watch:boolean]', 'watch file change to reload', {default: false})
  .action(async (options: any, name: string) => {
    await run(options)
  });


