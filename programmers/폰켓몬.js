function solution(nums) {
  var getmon=nums.length/2;
  var kinds=[...new Set(nums)].length;
  return getmon>kinds?kinds:getmon
}