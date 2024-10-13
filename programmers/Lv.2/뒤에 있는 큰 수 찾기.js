function solution(numbers) {
  var stack = [];
  var answer = [];
  var max = 0;

  //9,1,5,3,6,2
  for (let i = numbers.length - 1; i >= 0; i--) {

    if (max <= numbers[i]) {
      max = numbers[i];
      stack = [numbers[i]];
      answer.push(-1)
    } else {

      while (1) {

        if (numbers[i] < stack[0]) {
          answer.push(stack[0]);
          stack.unshift(numbers[i]);
          break
        } else {
          stack.shift();
        }

      }

    }

  }

  answer.reverse();
  return answer;
}