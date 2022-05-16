import quickSort from "../javascript/QuickSort";
// Max Consecutive Ones
function findMaxOnes(arr: number[]) {
  let maxOnesCount: number = 0;
  let onecount = 0;
  for (let i = 0; i < arr.length; i++) { // i = 0
    if (arr[i] == 0) {
      onecount = 0;
    } else {
      onecount++; // 1,0,1,2,0
      if (onecount > maxOnesCount) {
        maxOnesCount = onecount; // 1,2
      }
    }
  }
  return maxOnesCount;
}

// Find Numbers with Even Number of Digits
function evenNumberOfDigits(arr: number[]) {
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.floor(Math.log10(arr[i]) + 1) % 2 === 0) {
      even++;
    }
  }
  return even;
}

//  Squares of a Sorted Array

const swapArr = (arr: number[], i: number, j: number) => {
  // [1,2] = [2, 1]
  [arr[i], arr[j]] = [arr[j], arr[i]];
};


function squareOfSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  // for (let j = 0; j < arr.length - j; j++) { //[ 16, 1, 0, 9, 100 ]
  //   if (arr[j] > arr[j + 1]) {
  //     console.log('1');

  //     swapArr(arr, j, j + 1);
  //   }
  // }
  const t = quickSort(arr);
  return t;
}








//Duplicate Zeros input - [1,0,2,3,0,4,5,0] ouput - [1,0,0,2,3,0,0,4]
function duplicateZeros(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(arr[i]);
      arr[i + 1] = arr[i];
    }
  }
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// Remove Element
const nums = [3, 2, 2, 3]
for (let i = 0; i < l; i++) {
  // Shift each element one position to the left [1,2,3,4]
  testArr[i - 1] = testArr[i]; // 
  // testArr[1] = testArr[2]
}
