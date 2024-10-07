function solution(priorities, location) {
    var answer = 0;
    var max=0,temp=0;
    let i=0;
    while(i<100){
        max=Math.max(...priorities);
        //회전
        if(priorities[0]<max){
            temp=priorities[0];
            priorities.shift();
            priorities.push(temp);
            if(location>0)
                location-=1;
            else
                location=priorities.length-1;
            continue;
        } else if(priorities[0]==max){
            if(location==0) return answer+=1;
            else{
                priorities.shift();
                location-=1;
                answer+=1;
            }
        }
        i++;//무한루프 방지
    }

    return answer;
}