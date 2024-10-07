function solution(strings, n) {
    return strings.sort((i,j)=>{
        if(i[n]<j[n]) return -1;
        else if(i[n]>j[n]) return 1;
        else {
            if(i<j) return -1;
            else if(i>j) return 1;
            else return 0;
        }
    });
}