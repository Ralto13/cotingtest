function solution(n) {
    let arr=Array.from({length:n},(value=1,index)=>value+=index);
    
    for(let i=1;i*i<n;i++){
        if(arr[i]){
            let num=arr[i];
            for(let j=num*num;j<=n;j+=num){
                arr[j-1]=0;
            }
        }
    }
    let answer=arr.filter((number)=>number);
    answer.shift();
    return answer.length;
}