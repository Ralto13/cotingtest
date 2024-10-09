function solution(left, right) {
    var answer = [];
    
    for(let i=left;i<=right;i++){
        var temp=[];
        
        for(let j=1;j<=i;j++) if(i%j==0) temp.push(j);
        
        if(temp.length%2) answer.push(-i);
        else answer.push(i);
        
    }

    return answer.reduce((arr,value,i)=>arr+=value);
}