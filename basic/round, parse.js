let a = "124 7 +/-**";

function solution(data) {
    let ls = data.split(' ');
    let resultCalc = parseInt(ls[0]);
    let resultSum = 0;
    let result = '';
  
    for (i = 0; i <= ls[2].length - 1; i++) {
      if (ls[2][i] === '+') {
        resultCalc += parseInt(ls[1]);
      } else if (ls[2][i] === '/') {
        resultCalc = Math.floor(parseInt(resultCalc) / ls[1]);
      } else if (ls[2][i] === '-') {
        resultCalc -= parseInt(ls[1]);
      } else if (ls[2][i] === '*') {
        resultCalc = Math.floor(ls[1] * parseInt(resultCalc));
      }
      resultSum += resultCalc;
    }
    result = resultCalc + ' ' + resultSum;
  
    return result;
  }

console.log(solution(a));


