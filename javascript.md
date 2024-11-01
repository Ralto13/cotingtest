# javascript cheatsheet

## 연산자
```javascript
//falsy
false,null,undefined,0,NaN,'';

// 단축평가
console.log("aaa" || "bbb") // "aaa" 
console.log("aaa" && "bbb") // "bbb"

// &&연산자
console.log(true && "aaa") // "aaa" 
console.log(false && "aaa") // false
//앞선 값이 거짓이면 바로 반환, 참이면 뒤따른 값을 반환합니다.

// ||연산자
console.log(true || "aaa") // true 
console.log(false || "aaa") // "aaa"
// 앞선 값이 참이면 바로 반환, 거짓이면 뒤따른 값을 반환합니다.


```

## string
```javascript
const str = 'Hello';
str.length
// 5
str.charAt(0)
// H
str.indexOf('ll')
// 2
str.replace(/ll/,'tt')
// Hetto
str.split('')
// [ 'H', 'e', 'l', 'l', 'o' ]
str.repeat(2)
// HelloHello
str.padStart(10); //
'     Hello'
str.padEnd(10); //
'Hello     '
```

## array

```javascript
// 기본값 0, 
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0);  // 10

// 1값을 가진 5개의 인덱스 배열 리턴
Array(5).fill(1);

```

## Destructuring assignment
```javascript
const mockResponse = {
  data:'success'
}

//스위치 문을 안쓰고 이렇게 하면 어떨까
let {[mockResponse.data]: data = '기본값' } = {
    success:'성공했습니다.',
    already:'이미 존재합니다.',
    nothing:'없습니다.',
    error:'에러입니다.',
}

console.log(data) //성공했습니다
```

