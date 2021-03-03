import {cli} from "../deps.ts";
import {build} from "./main.ts";

export const Command = new cli.Command()
  .description("build project")
  .allowEmpty()
  .action(build);


