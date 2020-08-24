/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     var L=0;
    var R=nums.length-1;
    
    while(L<R){
            var mid=parseInt((L+R)/2);
            if(nums[mid] > nums[R]){
                    L=mid+1;
            }
            else{
                    R=mid;
            }
    }
    return nums[L];
    
};
