function solution(N, stages) {
    var answer = [];
    for(let i=1;i<=N+1;i++){
        var temp=stages.filter((x,y)=>x==i);
        var failure=temp.length!=0?temp.length/stages.length:0;
        answer.push(failure);
        stages=stages.filter((x,y)=>x!=i);
    }

    //접근해보지도 않은 스테이지 필터
    answer=answer.filter((value,i)=>i<N);
    //스테이지 번호삽입
    answer=answer.map((value,i)=>[i+1,value]);
    //내림차순
    answer.sort((x,y)=>y[1]-x[1]);
    //클리어한 스테이지가 있으면 유저 제거
    if(answer[0][0]==N+1){
        answer=answer.slice(1);
    }
    
    return answer.map(x=>x[0]);
}