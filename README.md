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
- 스택
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the top
  push(element) {
    this.items.push(element);
  }

  // Pop element from the top
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // Peek at the top element
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());  // Output: 20
stack.pop();
console.log(stack.peek());  // Output: 10
```

- 큐
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Peek at the front element
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front());  // Output: 10
queue.dequeue();
console.log(queue.front());  // Output: 20
```

- 링크드리스트
```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Usage example
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();  // Output: 10 -> 20 -> 30 -> null
```

- 해시맵
```javascript
class HashMap {
  constructor() {
    this.map = {};
  }

  // Set a key-value pair
  set(key, value) {
    this.map[key] = value;
  }

  // Get a value by key
  get(key) {
    return this.map[key];
  }

  // Check if a key exists
  has(key) {
    return this.map.hasOwnProperty(key);
  }

  // Delete a key-value pair
  delete(key) {
    delete this.map[key];
  }
}

// Usage example
const hashMap = new HashMap();
hashMap.set('name', 'John');
hashMap.set('age', 30);
console.log(hashMap.get('name'));  // Output: John
hashMap.delete('age');
console.log(hashMap.has('age'));   // Output: false
```

- 트리
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Add a child to the node
  addChild(node) {
    this.children.push(node);
  }

  // Print the tree structure (DFS traversal)
  printTree(level = 0) {
    console.log(' '.repeat(level * 2) + this.value);
    this.children.forEach(child => child.printTree(level + 1));
  }
}

// Usage example
const root = new TreeNode('Root');
const child1 = new TreeNode('Child 1');
const child2 = new TreeNode('Child 2');
root.addChild(child1);
root.addChild(child2);
const grandChild = new TreeNode('Grandchild of Child 1');
child1.addChild(grandChild);

root.printTree();
// Output:
// Root
//   Child 1
//     Grandchild of Child 1
//   Child 2

```

#### 
### sort binary search
### DFS BFS
### DP
