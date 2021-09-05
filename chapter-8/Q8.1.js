

function tripleSteps(num, memo = {})
{
    if(num < 0) return 0;
    if(num === 0) return 1;

    if(num in memo) return memo[num];

    memo[num] = tripleSteps(num - 3, memo) + tripleSteps(num - 2, memo) + tripleSteps(num - 1, memo);

    return memo[num]

}

for(var i = 0; i < 100; i++) {

    console.log(i,":",tripleSteps(i));
}