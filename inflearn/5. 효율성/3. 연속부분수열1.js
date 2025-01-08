//슬라이딩 윈도우 사용용
function solution(m, arr) {
  let answer = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > m) {
      sum -= arr[left++];
    }

    if (sum === m) {
      answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
