function solution(n) {
    var answer = 1;
    var fibo = 1;
    var temp= 0;
    for(let i=3;i<=n;i++){
        temp=answer;
        answer=(answer%1234567)+(fibo%1234567);
        fibo=temp;
    }
    
    return n==0?0:answer%1234567;
}