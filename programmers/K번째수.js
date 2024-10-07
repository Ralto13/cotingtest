function solution(array, commands) {
    var answer = [];
    for(let i of commands){
        var num=i[2]-1
        var temp=array.slice(i[0]-1,i[1]).sort((a,b)=>a-b)[num]
        answer.push(temp);
    }
    return answer;
}