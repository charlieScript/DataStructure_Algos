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

console.log('first case result 2', findMaxOnes([1, 0, 1, 1, 0, 1]));
// console.log('first case result 3', findMaxOnes([1, 1, 0, 1, 1, 1]));
// findMaxOnes([1, 0, 1, 1, 0, 1]);
// findMaxOnes([1, 1, 0, 1, 1, 1]);ss
// [1,0,1,1,0,1] 2
// [1, 1, 0, 1, 1, 1] 3