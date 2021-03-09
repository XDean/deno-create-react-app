import {cli} from "./deps.ts";
import * as init from "./init/cmd.ts";
import * as run from "./run/cmd.ts";
import * as build from "./build/cmd.ts";

const {options} = await new cli.Command()
  .name("deno-create-react-app")
  .version("0.1.2")
  .description("Create React App with Deno")
  .command('init', init.Command)
  .command('run', run.Command)
  .command('build', build.Command)
  .parse(Deno.args);
