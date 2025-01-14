function solution(meeting) {
  let answer = 1;

  meeting.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = meeting[0][1];

  for (let i = 1; i < meeting.length - 1; i++) {    
    if (et <= meeting[i][0]) {
      et = meeting[i][0];
      answer++;
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
