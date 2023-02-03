// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

const convert = (s, numRows) => {

  const twoDMatrix = []
  for (let i = 0; i < numRows; i++) {
    twoDMatrix.push('');
  }
  
  if (numRows == 1) {
    return s;
  }

  let down = true;
  let ind = 0;
  for (let x of s) {
    twoDMatrix[ind] += x;
    if (ind === 0) {
      down = true;
    }
    if (ind === twoDMatrix.length - 1) {
      down = false;
    }
    ind = down ? ind + 1 : ind - 1;
  }

  return twoDMatrix.join('');
}

convert('Hello', 2);