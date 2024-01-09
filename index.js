import randomColor from 'randomcolor';
const color = randomColor();

import chalk from 'chalk';

const hashes =
  '##############################\n##############################\n##############################\n';
const hashesColor =
  '########           ###########\n########  ' +
  color +
  '  ###########\n########           ###########\n';

//const textInColor = chalk.hex(color);

const allText = hashes + hashesColor + hashes;

console.log(chalk.hex(color).bold(allText));
