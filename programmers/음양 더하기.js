function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0;i<absolutes.length;i++){
        switch(signs[i]){
            case true:
                answer+=absolutes[i];
                break;
            case false:
                answer-=absolutes[i];
                break;
        }
    }
    return answer;
}