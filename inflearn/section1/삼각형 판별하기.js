function solution(a, b, c) {
  //두변의 합이 가장 긴 변보다 커야함
  let answer='YES', max;
  let sum = a+b+c;
  if(a>b) max=a;
  else max =b;
  if(c>max) max=c;
  if(sum-max <= max) answer='NO';
  return answer;
}

console.log(solution(13, 33, 17))
console.log(solution(3, 4, 5))
console.log(solution(1, 2, 3))
console.log(solution(7, 10, 5))
console.log(solution(2, 3, 6))
console.log(solution(8, 15, 17))
console.log(solution(5, 5, 10))
console.log(solution(9, 12, 15))
console.log(solution(10, 1, 2))
console.log(solution(6, 8, 10))
console.log(solution(4, 4, 8))

// testCase
// (3, 4, 5) - 삼각형 가능
// (1, 2, 3) - 삼각형 불가능 (두 변의 합이 다른 한 변과 같음)
// (7, 10, 5) - 삼각형 가능
// (2, 3, 6) - 삼각형 불가능 (두 변의 합이 나머지 한 변보다 작음)
// (8, 15, 17) - 삼각형 가능
// (5, 5, 10) - 삼각형 불가능 (두 변의 합이 다른 한 변과 같음)
// (9, 12, 15) - 삼각형 가능
// (10, 1, 2) - 삼각형 불가능 (두 변의 합이 나머지 한 변보다 작음)
// (6, 8, 10) - 삼각형 가능
// (4, 4, 8) - 삼각형 불가능 (두 변의 합이 다른 한 변과 같음)