function solution1(a, b, c){
  return Math.min(a,b,c)
}

function solution2(a, b, c){
  let answer;

  if( a < b ) answer = a
  else answer = b
  if( c < answer ) answer = c

  return answer;
}

console.log(solution1(2,5,1))
console.log(solution2(6,5,11))
