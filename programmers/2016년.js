function solution(a, b) {
  return ['SUN','MON','TUE','WED','THU','FRI','SAT'].filter((x,i)=>i==new Date(2016,a-1,b).getDay()).toString();
}