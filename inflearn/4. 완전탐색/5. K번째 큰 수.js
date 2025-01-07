function solution(n, k, card) {
  // n 카드 수, k 번째 큰 수, card
  let answer;
  let dic = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let l = j + 1; l < n; l++) {
        dic.add(card[i] + card[j] + card[l]);
      }
    }
  }
  let sort = [...dic].sort((a,b)=>b-a)  
  answer = sort[k]
  
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
