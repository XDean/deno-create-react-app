import {cli} from "../deps.ts";
import {initProject} from "./main.ts";

export const Command = new cli.Command()
  .description("init deno-create-react-app project")
  .arguments('<name:string>')
  .action(async (options: any, name: string) => {
    await initProject(Deno.cwd(), name)
  });


