function solution(s){  
  return s.filter((v, i) => s.indexOf(v)===i);
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));