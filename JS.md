javascript test
```javascript
//Destructuring assignment
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