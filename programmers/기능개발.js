function solution(progresses, speeds) {
    let answer = [];
    let done=0;
    while(progresses.length!=0){

        progresses=progresses.map((v,i)=>v+=speeds[i]);

        if(progresses[0]>=100){
            for(let i=0;i<progresses.length;i++){        
                if(progresses[i]>=100) done+=1;
                else  break;
            }
            answer.push(done);
            progresses=progresses.slice(done);
            speeds=speeds.slice(done);
            done=0;
        }
    }
    console.log(answer);
    return answer;
}