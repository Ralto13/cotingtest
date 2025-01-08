//O(NlogN)
function solution(arr1, arr2) {
  let answer=[...arr1, ...arr2];
  return answer.sort((a,b)=>a-b);
}

//O(N)
function solution2(arr1, arr2){
  const answer = [];
  let p1 = 0, p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  if (p1 < arr1.length) {
    answer.push(...arr1.slice(p1));
  }
  if (p2 < arr2.length) {
    answer.push(...arr2.slice(p2));
  }

  return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution2(a, b));