/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    for(var i = 3; i < x.length; i++){
          //i. [2, 1, 1, 2]
        if(x[i - 3] && x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) 
            return true;
         //ii. [1, 1, 2, 1, 1]
        if(x[i - 4] && x[i - 3] === x[i - 1] && x[i - 4] + x[i] >= x[i - 2]) 
             return true;
         //iii. [1, 1, 2, 2, 1, 1]
        if(x[i - 5] && x[i - 4] <= x[i -2] && x[i] + x[i - 4] >= x[i -2] 
             && x[i - 3] >= x[i - 1] && x[i - 5] + x[i - 1] >= x[ i - 3]) 
             return true;
     }
     return false;
};
