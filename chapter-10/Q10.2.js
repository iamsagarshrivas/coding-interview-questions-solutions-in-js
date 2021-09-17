// group Anagrams


const getAnagram = (str) => str.split('').sort().join("");

/**
 * 
 * @param {string[]} arr 
 */
function groupAnagrams(arr){

    const map = {};

    arr.forEach(str => {
        const anagKey = getAnagram(str);

        if([anagKey] in map) map[anagKey].push(str);
        else map[anagKey] = [str]

    })

    return Object.values(map);

    // const res = arr.reduce((map, str) =>{

    //         const anagKey = getAnagram(str);
    
    //         if([anagKey] in map) map[anagKey].push(str);
    //         else map[anagKey] = [str]

    //         return map;

    // }, {});

    // return Object.values(res);

}

const strs = ["eat","tea","tan","ate","nat","bat"];

console.time("groupAnagrams");
groupAnagrams(strs);
console.timeEnd("groupAnagrams");
