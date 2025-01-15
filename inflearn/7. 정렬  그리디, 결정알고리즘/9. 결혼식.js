function solution(timeArr) {
  let answer;

  timeArr.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));

  let endT = Number.MAX_SAFE_INTEGER;
  let count = 0;
  for (let i of timeArr) {
    if (i[0] < endT) {
      count++;
      endT = Math.min(i[1], endT);
    }
  }
  answer = count;
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
