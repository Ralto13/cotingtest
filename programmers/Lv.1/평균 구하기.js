function solution(arr) {
    return arr.reduce((pre,value) => {
        return pre+value
    })/arr.length;
}