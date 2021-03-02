import {cli} from "../deps.ts";
import {runServer} from "./main.ts";

export const Command = new cli.Command()
  .description("run deno-create-react-app project")
  .arguments('<name:string>')
  .option('-p, --port <port:number>', 'Server Port Number', {default: 8000})
  .action(async (options: any, name: string) => {
    await runServer(options.port)
  });


