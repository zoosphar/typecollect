import { Command } from 'commander';
import { collectTypeDefinitions } from './collectTypeDefinitions';

const program = new Command();
program
      .command('collect [typeDefitionsDirectory]')
      .description('Collect all type definitions from the specified directories, runs on the whole project if no definitions folder provided(Slower).')
      .action((typeDefitionsDirectory) => collectTypeDefinitions(typeDefitionsDirectory))

// program.option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');

program.parse();