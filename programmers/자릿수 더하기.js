function solution(n)
{
    return [...(n+'')].reduce((acc,value) => acc+ +value,0);
}