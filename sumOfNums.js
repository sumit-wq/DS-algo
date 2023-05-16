function sumOfTwo(arr, sum) {
    let output = [];
    const sortedArr = arr.sort((a,b) => a-b);
    let start = 0;
    let end = sortedArr.length - 1;
    while(start < end) {
        let tempSum = sortedArr[start]+sortedArr[end]
        if(tempSum === sum) {
            output.push([sortedArr[start], sortedArr[end]]);
            start++;
            end--;
            while(sortedArr[start] === sortedArr[start -1]) { 
                start++;
            }
            while(sortedArr[end] === sortedArr[end +1]) { 
                end--;
            }
        }
        if(tempSum < sum) {
            start++;
         }
         if(tempSum > sum) {
            end--;
         }
    }
    console.log(output, arr, sum);
    return output;
}


function sumOfThreeNums(arr, sum) {
    let output = [];
    const sortedArr = arr.sort((a,b)=>a-b);
    for(let i = 0; i<sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i-1]) {
            continue;
        }

        let start = i+1;
        let end = sortedArr.length-1;
        while(start < end) {
            let tempSum = sortedArr[i]+sortedArr[start]+sortedArr[end];
            if(tempSum === sum) {
                output.push([sortedArr[i], sortedArr[start], sortedArr[end]]);
                start++;
                end--;
                while(sortedArr[start] === sortedArr[start -1]) { 
                    start++;
                }
                while(sortedArr[end] === sortedArr[end +1]) { 
                    end--;
                }
            }
            if(tempSum < sum) {
                start++;
            }
            if(tempSum > sum) {
                end--;
            }
         }
    }
    return output;
}

console.log(sumOfThreeNums([1,1,4,5,6,-1,2,3,-2,7], 5));


 function sumOfFourNums(arr, sum) {
    let output = [];
    const sortedArr = arr.sort((a,b)=>a-b);
    for(let i = 0; i<sortedArr.length; i++) {
        if(sortedArr[i] === sortedArr[i-1]) {
            continue;
        }
        for(let j=sortedArr.length-1; j>i; j--) {
        if(sortedArr[j] === sortedArr[j+1]) { 
            continue;
        }
        
        let start = i+1;
        let end = j-1;
        while(start < end) {
            let tempSum = sortedArr[i]+sortedArr[start]+sortedArr[end]+sortedArr[j];
            if(tempSum === sum) {
                output.push([sortedArr[i], sortedArr[start], sortedArr[end], sortedArr[j]]);
                start++;
                end--;
                while(sortedArr[start] === sortedArr[start -1]) { 
                    start++;
                }
                while(sortedArr[end] === sortedArr[end +1]) { 
                    end--;
                }
            }
            if(tempSum < sum) {
                start++;
            }
            if(tempSum > sum) {
                end--;
            }
         }
        }
    }
    return output;
 }

 console.log(sumOfFourNums([1,0,-1,0,-2,2], 0));

function sumOfClosestTwoNums(nums, target) {
    const sortedArr = nums.sort((a,b) => a-b);
    let start = 0;
    let end = sortedArr.length - 1;
    let sum = nums[start]+nums[end];
    while(start < end) {
        let tempSum = sortedArr[start]+sortedArr[end]
        if(tempSum === target) {
            sum = target;
            return sum;
        }
        if(Math.abs(tempSum-target) < Math.abs(sum-target)) {
            sum = tempSum;
        }
        if(tempSum < target) {
            start++;
         }
         else if(tempSum > target) {
            end--;
         }
    }
    return sum;
}

console.log(sumOfClosestTwoNums([3,0,2], 1))

function sumOfThreeNums(nums, target) {
    let output = [];
    const sortedArr = nums.sort((a,b) => a-b);
    let sum = sortedArr[0]+sortedArr[1]+sortedArr[2];
    for(let i = 0; i < sortedArr.length; i++) {
        
    let start = i+1;
    let end = sortedArr.length - 1;
    while(start < end) {
        let tempSum = sortedArr[start]+sortedArr[end]+sortedArr[i];
        if(tempSum === target) {
            output=[sortedArr[i], sortedArr[start], sortedArr[end]]
            sum = target;
            console.log(output)
            return sum;
        }
        if(Math.abs(tempSum-target) < Math.abs(sum-target)) {
            output=[sortedArr[i], sortedArr[start], sortedArr[end]]
            sum = tempSum;
        }
        if(tempSum < target) {
            start++;
         }
         else if(tempSum > target) {
            end--;
         }
    }
}

console.log(output)
    return sum;

}

console.log(sumOfThreeNums([-1,2,1,-4, 4], 1))