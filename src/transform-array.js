const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) { throw Error('Not array')};

  let newArr = arr.slice();
   
  
  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case '--discard-next':
              if (i < newArr.length - 1) {
                newArr[i + 1] = 'del';
              }
              newArr[i] = 'del';
              break;
          case '--discard-prev':
              if (i > 0) {
                newArr[i - 1] = 'del';
              }
              newArr[i] = 'del';
              break;
          case '--double-next':
              if (i < newArr.length - 1) {
                newArr[i] = newArr[i + 1];
              } else {
                newArr[i] = 'del';
              }
              break;
          case '--double-prev':
              if (i > 0) {
                newArr[i] = newArr[i - 1];
              } else {
                newArr[i] = 'del';
              }
      }
  }

  return newArr.filter(item => item !== 'del');
};
