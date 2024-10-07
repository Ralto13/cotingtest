function substitution(s){
    var test=s.toLowerCase()
            .replace(/[^0-9a-z\-\_\.]/g,'')
            .replace(/\.{2,}/g,'.')
            .replace(/^\.|\.$/g,'');
    if(test.length==0) test+='a';
    test=test.slice(0,15).replace(/\.$/,'');
    while(test.length<3){
        test=test+test.slice(-1);
    }
    console.log(`${test} ${test.length}`);
    return test;
}
function solution(new_id) {
    var answer = substitution(new_id);
    
    return answer;
}