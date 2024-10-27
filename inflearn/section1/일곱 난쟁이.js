function solution(children) {
  let answer, sum = children.reduce((prev,curr)=>{
    return curr+prev
  })

  for(let i = 0; i < children.length - 1; i++){

    for(let j = i+1; j < children.length; j++){

        if(sum - children[i] - children[j] == 100){
          answer = children.filter((v,idx) => idx!=i && idx !=j )
          break
        }

    }

  }

  return answer
}

var result = solution([20,7, 23, 19, 10, 15, 25, 8, 13])
console.log(result)