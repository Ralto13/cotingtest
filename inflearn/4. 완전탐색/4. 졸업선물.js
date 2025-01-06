function solution(m, product) {
  // n 학생수 m 예산
  let answer = 0;
  n = product.length; //학생수
  product = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(product);

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
); // 답 : 5
console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [12, 1],
    [4, 5],
    [4, 3],
  ])
); // 답 : 5
console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
); // 답 : 3
