class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sort1 = s.split('').sort().join('');
        const sort2 = t.split('').sort().join('');
        if (sort1 === sort2){
            return true;
        }
        else{
            return false;
        }
    }
}
