"use strict";
function count(num) {
    console.log(num);
    // base case 
    if (num === 0) {
        return;
    }
    else {
        count(num - 1);
    }
}
function factorial(num) {
    // console.log('value of x at', num); // 3 // 2
    if (num === 1) {
        // console.log('done');
        return 1;
    }
    else {
        return num * factorial(num - 1); // 3 * 2 
    }
}
// console.log(factorial(3));
// sum an array using recursion
function arrSum(arr, N) {
    // let total: number = 0;
    // base case
    if (N === 0) {
        return arr[N];
    }
    else {
        return arr[N] + arrSum(arr, N - 1);
    }
}
function test(arr) {
    if (arr.length === 0) {
        return arr[0];
    }
    else {
        arr.shift();
        return arr[0] + test(arr);
    }
}
let arr = [2, 4, 6];
console.log(arrSum(arr, arr.length - 1));
