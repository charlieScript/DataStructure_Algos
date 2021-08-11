"use strict";
const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return arr[mid];
        }
        if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return 'not found';
};
console.log(binarySearch([1, 2, 3, 4, 5], 2));
