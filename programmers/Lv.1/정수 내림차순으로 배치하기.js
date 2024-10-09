function solution(n) {
    return +((n+'').split('').sort((a,b)=>{ return b-a })).join('');
}