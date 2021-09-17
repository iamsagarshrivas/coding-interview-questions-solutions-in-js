// Sorted Merge 

const SortHelper = require("./SortHelper");

function sortedMerge(A, B) {

    let l = 0, r = 0;

    while (l < A.length && r < B.length) {

        if(A[l] > B[r])
        {

            let k = A.length - 2;

            while (k >= l)
            {
                A[k+1] = A[k];
                k--;
            }

            A[l] = B[r];
            r++;
        }
        l++;
    }

    let k = B.length - 1;
    l = A.length - 1;

    while (k >= r)
    {
        A[l] = B[k];
        k--;
        l--;
    }

}

const { randomArray } = new SortHelper();

let B = randomArray(Math.floor(Math.random() * 20)).sort((a, b) => a - b);

let A = randomArray(Math.floor(Math.random() * 20)).sort((a, b) => a - b)//.concat(Array(B.length));

console.time("sortedMerge");

sortedMerge(A, B);

console.timeEnd("sortedMerge");
