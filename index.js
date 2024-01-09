import randomColor from 'randomcolor';
import chalk from 'chalk';
import { argv } from 'node:process';

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
#########  #db6989  ##########
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
