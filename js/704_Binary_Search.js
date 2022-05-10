 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let middle = Math.floor((left + right) /2);
        let potentialMatch = nums[middle];
        if(potentialMatch === target){
            return middle;
        }else if( potentialMatch> target){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    return -1;
};
