var solution = (n) => {
  let answer=0;
  for(let i=1; i<=n; i++){
      answer=answer+i;
  }
  
  return answer;
}

console.log(solution(10));

//등차수열 합의 공식 항의개수(시작항+마지막항)/2
var solution = (n) => {  
  return n*(1+n)/2;
}

console.log(solution(20))