function solution(a, b) {
  var num = a < b ? [a,b]:[b,a];
  var answer = 0;
  console.log(num)
  for(let i=num[0];i<=num[1];i++){
      answer+=i;
  }
  
  return answer;;
}