function solution(test) {
  let answer = 0;
  m = test.length; // 테스트 수
  n = test[0].length; // 사람 수, 좌표형식

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let mentor = (mentee = cnt = 0);

      for (let k = 0; k < m; k++) {
        for (let l = 0; l < n; l++) {
          if (test[k][l] === i) mentor = l;
          if (test[k][l] === j) mentee = l;
        }
        if (mentor < mentee) cnt++;
      }

      if (cnt === m) {
        console.log(i, j);
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
