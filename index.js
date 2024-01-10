import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const rColor = randomColor();

const hue = argv[2];
const lumi = argv[3];

const uColor = randomColor({
  hue: hue,
  luminosity: lumi,
});

const allText = `
##############################
##############################
##############################
#########           ##########
#########  ${rColor}  ##########
#########           ##########
##############################
##############################
##############################
`;

if (argv.length < 3) {
  console.log(chalk.hex(rColor).bold(allText));
} else {
  console.log(chalk.hex(uColor).bold(allText));
}

// console.log(chalk.hex(rColor).bold(allText));
