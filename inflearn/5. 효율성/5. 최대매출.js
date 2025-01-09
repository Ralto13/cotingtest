function solution(k, arr) {
  let answer,sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  answer = sum;

  for (let lt = 0; lt < arr.length - k; lt++) {
    sum += arr[lt + k];
    sum -= arr[lt];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
