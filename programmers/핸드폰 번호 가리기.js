function solution(phone_number) {
    var present_num=phone_number.slice(-4);
    var star='*'.repeat(phone_number.length-4)
    var answer = star+present_num;
    return answer;
}