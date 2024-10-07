function solution(dartResult) {
    var answer = 0;
    var num=dartResult.replace(/[^0-9]/g,' ').split(' ').filter((x)=>x!='').map(Number);
    var zone=dartResult.replace(/[0-9]/g,' ').split(' ').filter((x)=>x!='');
    var pre=0,next;
    for(let i=0;i<num.length;i++){
        switch(zone[i][0]){
            case 'S':
                next=num[i];
                break;
            case 'D':
                next=num[i]**2;
                break;
            case 'T':
                next=num[i]**3;
                break;
        }
        switch(zone[i][1]){
            case '*':
                next*=2;
                answer=answer+pre+next;
                break;
            case '#':
                next*=-1;
                answer+=next;
                break;
            default:
                answer+=next;
        }
        pre=next;
    }
    
    return answer;
}