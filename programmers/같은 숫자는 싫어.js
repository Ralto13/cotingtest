function solution(arr)
{
    var answer = [];
    var temp=arr[0];
    answer.push(arr[0]);
    for(let i=1;i<arr.length;i++){
        if(temp==arr[i]) continue;
        else {
            temp=arr[i];
            answer.push(arr[i]);
        }
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return answer;
}