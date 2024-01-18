import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = argv[2];
const lumi = argv[3];

const userColor = randomColor({
  hue: hue,
  luminosity: lumi,
});

if (argv.length < 3) {
  const color = randomColor();
  console.log(
    chalk.hex(color).bold(`
##############################
##############################
##############################
#####                    #####
#####      ${color}       #####
#####                    #####
##############################
##############################
##############################
`),
  );
} else {
  console.log(
    chalk.hex(userColor).bold(`
    ##############################
    ##############################
    ##############################
    #####                    #####
    #####      ${userColor}       #####
    #####                    #####
    ##############################
    ##############################
    ##############################
`),
  );
}
