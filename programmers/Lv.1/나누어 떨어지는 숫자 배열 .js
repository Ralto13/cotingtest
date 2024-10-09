function solution(arr, divisor) {
    var answer = arr.filter((x)=>x%divisor==0);
    return answer.length>0?answer.sort((x,y) => x-y):[-1];
}