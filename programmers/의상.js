function solution(clothes) {
    var answer = 1;
    var type={};
    for(let i=0;i<clothes.length;i++){
        type[clothes[i][1]]=[];
    }

    for(let i=0;i<clothes.length;i++){
        type[clothes[i][1]].push(clothes[i][0]);
    }

    var keys=Object.keys(type);

    for(let i=0;i<keys.length;i++){
        answer=answer*(type[keys[i]].length+1)
    }
    console.log(answer-1);
    return answer-=1;
}