const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  throw new CustomError('Not implemented');
  let number = 0;
  if (backyard.length < 1) {
    return 0};
  
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      
      if (backyard[i][j] === '^^') {
        number++;
      }
      
    }
  }
  return number;
};
