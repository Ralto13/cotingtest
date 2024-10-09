function solution(nums) {
        var a=Array.from({length:3001},()=>true);
        var result=0;

        for(let i=2;i<a.length;i++){
            if(a[i]){
                for(let j=i*2;j<a.length;j=j+i){
                    a[j]=false;
                }
            }
        }
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                var sum=nums[i]+nums[j]+nums[k];
                if(a[sum]){
                    result++;
                }
            }
        }
    }
    return result;
}