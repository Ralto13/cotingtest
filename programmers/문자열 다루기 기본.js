function solution(s) {
    var len=s.length;
    if( len == 4 || len == 6 ) {
        for(let i=0;i<s.length;i++){
            if(isNaN(+s[i])) return false;    
        }
    } else return false;
    
    return true;
}