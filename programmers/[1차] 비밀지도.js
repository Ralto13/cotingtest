function solution(n, arr1, arr2) {
    var acc=[];
    for(let i=0;i<n;i++){
        acc.push((arr1[i]|arr2[i]).toString(2).padStart(n));
    }

    return acc.map( x => {
        return x.replace(/1/g,'#').replace(/0/g,' ');;
    });
}