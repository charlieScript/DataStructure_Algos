// it sorts numbers by moving larger values at the end
// it compares numbers that follow each other and swap it

// swap function
const swap = (arr: number[], i: number, j: number) => {
  // [1,2] = [2, 1]
  [arr[i], arr[j]] = [arr[j], arr[i]];
};




const BubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }


  return arr;
};

console.log(BubbleSort([2, 9, 4, 3]));
