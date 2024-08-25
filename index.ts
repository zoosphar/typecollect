import { Command } from "commander";
import { collectTypeDefinitions } from "./collectTypeDefinitions";

const program = new Command();
program
  .command("collect")
  .argument(
    "<entryDirectory>",
    "Project entry directory name(make sure it's in the root of project): ",
  )
  .argument("<typesDirectory>", "Directory containing type definitions: ")
  .description(
    "Collect all type definitions from the specified directories, runs on the whole project if no definitions folder provided(Slower).",
  )
  .action((entryDirectory, typesDirectory) =>
    collectTypeDefinitions(entryDirectory, typesDirectory),
  );
program.parse();
