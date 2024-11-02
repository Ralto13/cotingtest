/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
알파벳 이외의 문자들의 무시합니다.
 */
function solution(s) {
  s = s.replace(/[^A-Za-z]/g, '').toLowerCase();
  let len = s.length
  let mid = Math.floor(s.length / 2)

  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[len - i - 1]) return 'NO'
  }

  return 'YES'
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));