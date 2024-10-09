function solution(arr1, arr2) {
    var answer = new Array();
    var rowlen=arr1.length;
    var collen=arr1[0].length;
    for(let i=0;i<rowlen;i++){
        var row=[];
        for(let j=0;j<collen;j++){
            row.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(row);
    }
    return answer;
}