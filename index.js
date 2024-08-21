var commander_1 = require("commander");
var program = new commander_1.Command();
program.option(
  "-c, --cheese <type>",
  "add the specified type of cheese",
  "blue"
);
program.parse();
console.log("cheese: ".concat(program.opts().cheese));
