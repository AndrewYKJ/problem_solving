/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0) return [-1,-1];
    
    let len = nums.length - 1
    let start = 0;
    let first = 0;
    let last = 0;
    for(let x = 0; x <= len; x++){
        if(nums[x]===target){
        first = x
        break;
        }
        first = -1;
    }
    for(let y = len; y >= 0; y--){
        if(nums[y]===target){
        last = y
        break;
        }
        last = -1;
    }
    
    return [first,last]
};
