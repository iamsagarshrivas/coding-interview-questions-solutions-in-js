// Magic index

function search(arr)
{
    let i = 0, res = -1;
    while(arr[i] <= i )
    {
        if(arr[i] === i)
        {
            res = i;
            break;
        }
        i++;
    }
    return res;
}

function binarySearch(arr)
{
    let low = 0, high = arr.length - 1;
    
    let mid, res = -1;

    while ( low <= high )
    {

        mid = parseInt((high + low) / 2);

        if( arr[mid] === mid) {
            res = mid;
            break;
        };

        if( arr[mid] > mid) {
            high = mid -1;
        }
        else{
            low = mid + 1;
        }

    }
    return res;
}

const arr = [];

console.time("Linear");
search(arr);
console.timeEnd("Linear");

console.time("Binary");
binarySearch(arr);
console.timeEnd("Binary");

console.time("Find");
arr.findIndex((item,index) => item === index);
console.timeEnd("Find");

