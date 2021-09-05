// power set 

// My implementation
function powerSet(arr){
    const set = [[]];

    arr.forEach((element) => {
        
        const concat = set.map(item => ([...item, element]));

        set.push(...concat);

    })

    return set
}


// Solution from Book
function returnSubsets(set) {
    const subsets = [];
    function recurse(currSet, remainingSet) {
      subsets.push(currSet);
      for (let i = 0; i < remainingSet.length; i++) {
        recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
      }
    };
    recurse([], set);
    return subsets;
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13];

console.time('powerSet');
powerSet(arr);
console.timeEnd('powerSet');

console.time('subset');

returnSubsets(arr);
console.timeEnd('subset');
