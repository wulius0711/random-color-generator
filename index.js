import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomColor = randomColor();

const hue = argv[2];
const lumi = argv[3];

const userColor = randomColor({
  hue: hue,
  luminosity: lumi,
});

if (argv.length < 3) {
  console.log(
    chalk.hex(randomColor).bold(`
##############################
##############################
##############################
#####                    #####
#####      ${randomColor}       #####
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
