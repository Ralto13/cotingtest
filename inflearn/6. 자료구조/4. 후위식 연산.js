function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (isNaN(x)) {
      let num2 = stack.pop();
      let num1 = stack.pop();
      if (x === "+") {
        stack.push(num1 + num2);
      } else if (x === "-") {
        stack.push(num1 - num2);
      } else if (x === "*") {
        stack.push(num1 * num2);
      } else if (x === "/") {
        stack.push(num1 / num2);
      }
    } else {
      stack.push(parseInt(x));
    }
  }

  answer = stack.pop();

  return answer;
}

let str = "352+*9-";
console.log(solution(str));
