class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans =[];
        const length = nums.length;
        for (let i=0; i<length*2; i++){
            if(i >= length){
                ans[i] = nums[i-length]
            }
            else {
                ans[i] = nums[i]
            }
        }
        return ans;
    }
}
