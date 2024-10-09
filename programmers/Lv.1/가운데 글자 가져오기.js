function solution(s) {
    var answer = '';
    var mid=Math.floor(s.length/2);
    if(s.length%2) answer=s[mid];
    else answer=s[mid-1]+s[mid];
    return answer;
}