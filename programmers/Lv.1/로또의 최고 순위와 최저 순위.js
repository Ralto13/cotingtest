function solution(lottos, win_nums) {
    var answer = [];
    var temp=7;
    var zero=lottos.filter((x)=>x==0).length;
    
    //min ranking
    for(let i=0;i<win_nums.length;i++){
        if(win_nums.indexOf(lottos[i])!=-1) temp--;
    }
    answer.push(temp-zero>5?6:temp-zero);
    answer.push(temp>5?6:temp);
    return answer;
}