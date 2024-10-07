function getgcd(num1,num2){
  return num2==0?num1:getgcd(num2,num1%num2);
}

function solution(n, m) {
  var gcd=getgcd(n,m);
  var lcm=(n*m)/gcd;
  return [gcd,lcm];
}