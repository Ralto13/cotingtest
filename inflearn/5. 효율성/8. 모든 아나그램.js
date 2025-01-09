function compareMap(sH, tH) {
  if (sH.size !== tH.size) return false;
  for ([key, value] of tH) {
    if (tH.get(key) !== sH.get(key)) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  for (x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = tH.size - 1;

  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(x, sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;

  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    if (compareMap(sH, tH)) {
      answer++;
    }

    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer++;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
