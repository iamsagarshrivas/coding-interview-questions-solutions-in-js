// Recursive multiply

function multiply(a,b)
{
    if(b === 0 || a === 0) return 0;

    return a + multiply(a, b-1);

}

function russianPeasantMultiply(a,b){
    let res = 0;
    while(b > 0){
        if(b & 1){
            res += a;
        }
        a = a << 1;
        b = b >> 1;

    }

    return res;
}

const mul = (a,b) =>  a*b

console.time("recursive");
multiply(2467, 263)
console.timeEnd("recursive");
console.time("russianPeasantMultiply")
russianPeasantMultiply(2467, 263);
console.timeEnd("russianPeasantMultiply")
console.time("normal");
mul(2467, 263)
console.timeEnd("normal");