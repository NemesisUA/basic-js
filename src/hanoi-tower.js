const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfTurns = 2 ** disksNumber - 1;
  let turnsSpeedPerSec = turnsSpeed / 60 / 60;

  return {
    turns: numberOfTurns,
    seconds: Math.floor(numberOfTurns / turnsSpeedPerSec)
  };
};
