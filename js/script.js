// esercizio Merge Sorted Array
// Input: nums1 = [1,2,3,0,0]
//        nums2 = [2,5,6]
// Output: [1,2,2,3,5,6] .
// Explanation: The arrays we are merging are [1,2,3] and  [2,5,6].      
//              The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1



const nums1 = [1,2,3,0,0];
const nums2 = [2,5,6];

const result = [];

for(let i = 0 ; i < nums1.length; i++) {
    if(nums1[i] != 0) {
        result.push(nums1[i]);
    }
}

for(let i = 0; i < nums2.length; i++) {
    if(nums2[i] != 0) {
        result.push(nums2[i]);
    }
}


result.sort((a, b) => a - b);
console.log(result);