function solution(s){
    let ny=0,np=0;
    for(let i of s.toUpperCase()){
        if('P'==i) np+=1;
        else if('Y'==i) ny+=1;
    }
    if(ny==np) return true;
    else return false;
}