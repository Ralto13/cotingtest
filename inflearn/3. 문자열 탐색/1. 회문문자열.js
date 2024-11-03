/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 * 
 */

//문자열탐색 방식
function solution(s) {
    s=s.toLowerCase()
    let len = s.length
    let mid = Math.floor(s.length/2)

    for(let i=0; i < mid; i++){
        if(s[i] !== s[len-i-1]) return 'NO'
    }
    
    return 'YES'
}

//array의 reverse 활용
function solution(s) {
    return s === s.toLowerCase().split('').reverse().join('')
    ? 'YES':'NO'
}

let str = "gooG";
console.log(solution(str));

//결론
//숏코드나 가독성 - array 탐색 
//성능을 중요시한 경우 - 탐색방식