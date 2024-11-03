/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 */

//숫자
function solution(arr){
  let answer, max = 0;

  for(let i of arr){
    let sum = 0, tmp = i;

    while(tmp){
      sum += (tmp%10)
      tmp = Math.floor(tmp/10)
    }

    if(sum > max){
      max = sum
      answer = i
    } else if (max === sum && answer < i){
      answer = i
    }

  }
  return answer;
}

//문자열
function solution(arr){
  let answer, max = 0;

  for(let i of arr){
    let sum = 0, tmp = i;

    while(tmp){
      sum += (tmp%10)
      tmp = Math.floor(tmp/10)
    }

    if(sum > max){
      max = sum
      answer = i
    } else if (max === sum && answer < i){
      answer = i
    }

  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));