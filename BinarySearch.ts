
const binarySearch = (arr: number[], target: number) => {
  let low: number = 0;
  let high: number = arr.length - 1;
  let mid: number;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    }
    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 'not found';
};


console.log(binarySearch([1, 2, 3, 4, 5], 2));


