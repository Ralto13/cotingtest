function solution(numbers) {
	var answer=numbers.map(String).sort((x,y)=>(y+x)-(x+y)).join('');
	
	return answer==0?'0':answer;
}