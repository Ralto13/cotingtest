function solution(answers) {
    var student_1=[1,2,3,4,5];
    var student_2=[2,1,2,3,2,4,2,5];
    var student_3=[3,3,1,1,2,2,4,4,5,5];
    var score = [0,0,0];
    var max = 0;
    
    for(let i=0;i<answers.length;i++){
        if(answers[i]==student_1[i%5])
            score[0]+=1;
        if(answers[i]==student_2[i%8])
            score[1]+=1;
        if(answers[i]==student_3[i%10])
            score[2]+=1;
    }
    max=Math.max(...score);
    score=score.map((x,i)=>max==x?i+1:0);
    return score.filter((x)=>x?1:0);
}