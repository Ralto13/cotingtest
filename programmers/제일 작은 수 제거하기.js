function solution(arr) {
    
    var min=Number.MAX_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]) min=arr[i];
    }
    arr.splice(arr.indexOf(min),1)
    return arr.length===0?[-1]:arr;
}