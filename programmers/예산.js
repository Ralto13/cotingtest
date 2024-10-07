function solution(d, budget) {
    var answer = 0;
    d=d.sort((x,y)=>x-y);
    for(let i=0;i<d.length;i++){
        budget-=d[i];
        if(budget>=0) answer++;
        else break;
    }
    return answer;
}