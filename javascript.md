# javascript cheatsheet

## 형변환
```javascript
parseInt('01230'); //1230
Number('01230'); //1230

parseInt(''); //NaN parseInt는 빈문자열 처리를 못함
Number(''); //0
```

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

## array

```javascript
Array(5).fill(1); // 1값을 가진 5개의 인덱스 배열 리턴
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

