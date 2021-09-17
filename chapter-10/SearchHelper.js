class SearchHelper{

    /**
     * 
     * @param {Array} arr 
     * @param {any} key 
     * @returns 
     */
    linearSearch(arr, key) {

        let i;
        for(i = 0; i < arr.length; i++)
        {
            if(arr[i] === key)
                break;
        }

        if(i === arr.length) return -1;
        return i;

    }

    binarySearch(arr, key) {

        let low = 0, high = arr.length -1, index = -1;


        while(low < high)
        {
            let mid = Math.floor((low + high) / 2);

            if(arr[mid] === key){
                index = mid;
                break;
            }
            else if(arr[mid] < key){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }

        }

        return index;
    }

}