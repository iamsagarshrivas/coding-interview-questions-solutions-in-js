class SortHelper{
    /**
     * 
     * @param {Array} arr 
     * @param {number} i source index
     * @param {number} j destination index
     */
    swap(arr, i, j) {
        if(i!==j) {
            // console.log("Swapped", i, j);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    /**
     * 
     * @param {number} size 
     * @returns {Number[]}
     */
    randomArray(size) {
        return Array(size).fill(0).map(item => {
            const random = parseInt(Math.random() * size * 10);
        
            return random;
        })
    }

    /**
     * 
     * @param {number[]} arr 
     */
    bubbleSort(arr)
    {
        for(let i = 0; i < arr.length - 1; i++) {

            for(let j = i+1; j < arr.length; j++) {

                if(arr[j] < arr[i])
                {
                    this.swap(arr, i, j);
                }

            }

        }
    }

    /**
     * 
     * @param {number[]} arr 
     */
    selectionSort(arr){

        for(let i = 0; i < arr.length - 1; i++) {

            let smallest = i;

            for(let j = i+1; j < arr.length; j++) {

                if(arr[j] < arr[smallest])
                {
                    smallest = j;
                }

            }

            this.swap(arr, i, smallest);

        }
    }

    /**
     * 
     * @param {number[]} arr 
     */
    mergeSort(arr){
        /**
         * 
         * @param {number[]} arr 
         * @param {Array} helper 
         * @param {number} low 
         * @param {number} mid 
         * @param {number} high 
         */

        function merge(arr, helper, low, mid, high){
            // copy both half into helper array
            for (let index = low; index <=high; index++) {
                helper[index] = arr[index];
                
            }

            let left = low, right = mid + 1, current = low;

            while(left <= mid && right <= high) {

                if(helper[left] <= helper[right])
                {
                    arr[current] = helper[left];
                    left++;
                }
                else
                {
                    arr[current] = helper[right];
                    right++;
                }

                current++;
            }

            let remaining = mid - left;

            for(let i = 0; i < remaining; i++)
            {
                arr[current] = helper[left + i];

            }

        }


        /**
         * 
         * @param {number[]} arr 
         * @param {Array} helper 
         * @param {number} low 
         * @param {number} high 
         */
        function recurse(arr, helper, low, high){
            if(low < high)
            {
                const mid = Math.floor((low + high) /2);
                recurse(arr, helper, low, mid);
                recurse(arr, helper, mid + 1, high);
                merge(arr, helper, low, mid, high);
            }
        }


        
        const helper = Array(arr.length);
        recurse(arr, helper, 0, arr.length - 1);


    }

}

module.exports = SortHelper;