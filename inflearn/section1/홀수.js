function solution(arr){
  let answer=[0,99];
  for(let i = 0; i<arr.length;i++){
    if(arr[i]%2 !== 0){
      answer[0] += arr[i]
      if(answer[1] > arr[i]){
        answer[1] = arr[i]
      }
    }
  }
  return answer;  
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));