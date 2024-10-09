function solution(s, n) {
  var answer=s.split('').map( x => x.charCodeAt())
              .map( x => {
                  if(x==32) return x;
                  else if( x < 91 && x+n > 90 ) return x-26+n;
                  else if( x > 96 && x+n > 122) return x-26+n;
                  else return x+n;
              })
              .map( x => String.fromCharCode(x))
              .join('');
  console.log(answer); // confirm the code
  return answer;
}