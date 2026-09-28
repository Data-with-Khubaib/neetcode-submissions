class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const length = nums.length;
        let found = false;
        let i =0;
        while(i < length){
            let current = nums[i];
            for (let j=i+1; j< length; j++){
                if (nums[j] == current){
                    found = true;
                    return found;
                }
            }
            i++;
        }
        return found;
    }
}
