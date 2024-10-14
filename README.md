# JS 코딩연습
## 플랫폼
- 프로그래머스

## cheatsheet
### String
```javscript
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
### Array
```javascript
let arr = [1, 2, 3];
arr.push(4);  // [1, 2, 3, 4]
arr.pop();    // [1, 2, 3]

let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
arr.shift();     // [1, 2, 3]

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]

let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);  // [2, 3] (index 1부터 2까지)

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');  // [1, 'a', 'b', 4, 5]

let arr = [1, 2, 3];
arr.forEach(num => console.log(num));  // 1, 2, 3

let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2);  // [2, 4, 6]

let arr = [1, 2, 3, 4, 5];
let even = arr.filter(num => num % 2 === 0);  // [2, 4]

let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0);  // 10

let arr = [1, 2, 3, 4];
let found = arr.find(num => num > 2);  // 3
let foundIndex = arr.findIndex(num => num > 2);  // 2

let arr = [1, 2, 3];
let hasTwo = arr.includes(2);  // true

let arr = [3, 1, 4, 1, 2];
arr.sort();  // [1, 1, 2, 3, 4]
arr.sort((a, b) => b - a);  // [4, 3, 2, 1, 1] (내림차순 정렬)

let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]

let arr = ['Hello', 'World'];
let joined = arr.join(' ');  // 'Hello World'

let arr = [1, [2, [3]]];
arr.flat(2);  // [1, 2, 3]

let arr2 = [1, 2, 3];
arr2.flatMap(num => [num, num * 2]);  // [1, 2, 2, 4, 3, 6]

```
### Data Structure
### sort binary search
### DFS BFS
### DP
