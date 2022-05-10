/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while(start <= end){
       if(nums[start]===target){
           return start
       }else if(nums[start] > target){
           return start
       }
        else{
           start +=1;
       }
    }
    return nums.length;
};
