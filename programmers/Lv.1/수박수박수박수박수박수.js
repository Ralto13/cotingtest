function solution(n) {
    var watermelon='수박';
    var answer='';
    for(let i=0;i<n;i++){
        answer+=watermelon[i%2];
    }
    return answer;
}
