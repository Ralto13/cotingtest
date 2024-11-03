/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요. 
 */

function solution(s, t){
  let answer=[]
  let cnt = 0;
  let len = s.length;
  
  for(let i=0; i<len; i++){
    if(s[i]!==t) cnt++;
    else cnt = 0;
    answer.push(cnt);
  }

  cnt = 0

  for(let i=len-1;i>=0;i--){
    if(s[i]!==t) cnt++;
    else cnt = 0;
    answer[i] = Math.min(answer[i],cnt);
  }

  return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));