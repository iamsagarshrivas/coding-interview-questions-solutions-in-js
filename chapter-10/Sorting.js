const SortHelper = require("./SortHelper");

const sortHelper = new SortHelper();

const arr = Array(50000).fill(0).map(item => {
    const random = parseInt(Math.random() * 100000);

    return random;
});


console.time("js sort");
[...arr].sort((a, b) => a-b);
console.timeEnd("js sort");


console.time("merge sort");
sortHelper.mergeSort([...arr]);
console.timeEnd("merge sort");

console.time("selection sort");
sortHelper.selectionSort([...arr]);
console.timeEnd("selection sort");

console.time("bubble sort");
sortHelper.bubbleSort([...arr]);
console.timeEnd("bubble sort");


