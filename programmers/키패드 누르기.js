function solution(numbers, hand) {
    var answer = '';
    var loc={1:[1,1],2:[2,1],3:[3,1],4:[1,2],5:[2,2],6:[3,2],7:[1,3],8:[2,3],9:[3,3],'*':[1,4],0:[2,4],'#':[3,4]};
    var l_loc=loc['*'],r_loc=loc['#'];
    var l_dst=5,r_dst=5;

    for(let i=0;i<numbers.length;i++){
        if([1,4,7].includes(numbers[i])){
            answer+='L';
            l_loc=loc[numbers[i]];
            continue
        } else if([3,6,9].includes(numbers[i])){
            answer+='R';
            r_loc=loc[numbers[i]];
            continue
        }
        l_dst=Math.abs(loc[numbers[i]][0]-l_loc[0])+Math.abs(loc[numbers[i]][1]-l_loc[1])
        r_dst=Math.abs(loc[numbers[i]][0]-r_loc[0])+Math.abs(loc[numbers[i]][1]-r_loc[1])
        if(l_dst<r_dst){
            l_loc=loc[numbers[i]];
            answer+='L';
        } else if(r_dst<l_dst){
            r_loc=loc[numbers[i]];
            answer+='R';            
        } else {
            if(hand=='left'){
                l_loc=loc[numbers[i]];
                answer+='L';                
            } else {
                r_loc=loc[numbers[i]];
                answer+='R';                
            }
        }
    }

    return answer;
}
