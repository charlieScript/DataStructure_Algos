// it sorts numbers by moving smaller values at the start
// it compares numbers that follow each other and swap it

// swap function
const swapSelect = (arr: number[], i: number, j: number) => {
  // [1,2] = [2, 1]
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = i // the index of smaller number
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIndex]) {
        swapIndex = j
      }      
    }  
    swapSelect(arr, i, swapIndex)
  }
  return arr
}

console.log(selectionSort([2,4,9,5]));

