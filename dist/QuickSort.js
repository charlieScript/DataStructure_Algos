"use strict";
const quickSort = (arr) => {
    let pivot;
    let less = [];
    let greater = [];
    let res = [];
    // base case if array contains 1 or zero elements
    if (arr.length < 2) {
        return arr;
    }
    else {
        pivot = arr[0]; // pivot element
        arr.forEach(i => {
            // lesser than pivot
            if (i < pivot) {
                less.push(i);
            }
            // greater than pivot
            if (i > pivot) {
                greater.push(i);
            }
        });
        // the returned value i
        res.push(...quickSort(less));
        res.push(pivot);
        res.push(...quickSort(greater));
        return res;
    }
};
console.log(quickSort([33, 10, 15, 7]));
