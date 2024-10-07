function solution(n, lost, reserve) {
    var weared = Array.from({length:n},()=>true);
    var answer=0;

    for(let i=0;i<lost.length;i++){
    	weared[lost[i]-1]=false; //체육복 잃어버린 학생들
    }

    //자신이 도난 맞을 경우
    for(let i=0;i<reserve.length;i++){
    	if(weared[reserve[i]-1]==false){
    		weared[reserve[i]-1]=true;
    		reserve[i]=undefined;
    	}
    }

    //여벌을 빌려줌
    for(let i=0;i<reserve.length;i++){
    	if(reserve[i]!=undefined){
    		//앞사람
    		if(weared[reserve[i]-2]==false){
    			weared[reserve[i]-2]=true;
    			reserve[i]=undefined;
    			}
    		}
    		
    	if(reserve[i]!=undefined){
            //뒷사람
    		if(weared[reserve[i]]==false){
    			weared[reserve[i]]=true;
    			reserve[i]=undefined;
    			}
    		}
    }

    //수업을 들을 수 있는 학생
    for(let i=0;i<weared.length;i++)
    	if(weared[i]==true) answer+=1

    return answer;
}

console.log(solution(5,[2,4],[3]));