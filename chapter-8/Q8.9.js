// My solution
function parens(num){
    if(num === 1) return new Set(["()"]);

    const oldSet = Array.from(parens(num - 1));

    const newSet = new Set();

    oldSet.forEach(item => {
        newSet.add(`(${item})`);
        newSet.add(`()${item}`);
        newSet.add(`${item}()`);
    });

    return newSet;
}

// FROM Book
var parens2 = function(n) {
    var answers = [];
     var recurse = function(currParens, remainingPairs) {
       if (remainingPairs === 0) {
         answers.push(currParens);
       } else {
         var used = {};
         if (!used[`(${currParens})`]) {
           used[`(${currParens})`] = true;
           recurse(`(${currParens})`, remainingPairs - 1);
         }
         if (!used[`()${currParens}`]) {
           used[`()${currParens}`] = true;
           recurse(`()${currParens}`, remainingPairs - 1); 
         }
         if (!used[`${currParens}()`]) {
           used[`${currParens}()`] = true;
           recurse(`${currParens}()`, remainingPairs - 1);      
         }
       }
     };
     recurse('', n);
     return answers;
   };

console.time("parens");
parens(10);
console.timeEnd("parens");


console.time("parens2");
parens2(10);
console.timeEnd("parens2");
