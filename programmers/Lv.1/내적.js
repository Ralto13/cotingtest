function solution(a, b) {
    var answer = [];
    for(let i=0;i<a.length;i++)
        answer.push(a[i]*b[i]);
    
    return answer.reduce((acc,value)=>acc+value);;
}