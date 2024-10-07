function solution(board, moves) {
    var answer = 0;
    var stack=[];
    for(let i=0;i<moves.length;i++){
        for(let j=0;j<board[0].length;j++){
            var pick=board[j][moves[i]-1];
            if(pick!=0){
                stack.push(pick);
                board[j][moves[i]-1]=0;
                break;
            }
        }
        if(stack.length > 1 && stack[stack.length-2]==stack[stack.length-1]){
            stack.length=stack.length-2;
            answer+=2;
        }
    }
    return answer;
}