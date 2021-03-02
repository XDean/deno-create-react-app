import {cli} from "./deps.ts";
import * as init from "./init/cmd.ts";
import * as run from "./run/cmd.ts";

type Options = {}

const {options} = await new cli.Command<Options>()
  .name("deno-create-react-app")
  .version("0.1.0")
  .description("Create React App with Deno")
  .command('init', init.Command)
  .command('run', run.Command)
  .parse(Deno.args);
