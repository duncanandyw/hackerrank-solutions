'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function

    // sort in descending order
    nums.sort((x,y) => x < y);
    // so our largest is in first position
    let largest = nums[0];
    // initialize our secondLargest to something to help us debug if needed
    let secondLargest = -999;
    // iterate over each element of nums
    for (let element of nums)
        // eliminate duplicate values of our largest value by ignoring them
        // when they are equal
        if (largest != nums[element])
            // when we find something different than our largest value, we have
            // our second largest value
            secondLargest = nums[element];
    
    return secondLargest;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}