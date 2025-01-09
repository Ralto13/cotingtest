function solution(s) {
  let answer;
  let hash = new Map();

  for (let x of s) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }

  let max = 0;

  for (let [key, val] of hash) {
    if (max < val) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
