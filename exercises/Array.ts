// Arrays Insertion
const arry: number[] = new Array(5);
let arrLength = 0;

for (let i = 0; i < 3; i++) {
  // insert 3 elements
  arry[i] = i;
  arrLength++; // increment the length value to keep track of number of elements
}
// Inserting at the End of an Array
arry[arrLength] = 20; // end of the array
arrLength++; // increment the size // 4



// // Inserting at the start of an Array
// for (let i = arrLength - 1; i >= 0; i--) {
//   // First, we will have to create space for a new element.
//   // We do that by shifting each element one index to the right.
//   // This will firstly move the element at index 3, then 2, then 1, then finally 0.
//   // We need to go backwards to avoid overwriting any elements.
//   arry[i + 1] = arry[i];// arry[4] = arry[0] // moves all elememt to the right

// }
// // insert a beginnig
// arry[0] = 90;


///Inserting Anywhere in the Array
for (let i = arrLength - 1; i >= 1; i--) {

  // 4,3,2,1
  arry[i + 1] = arry[i];// arry[4] = arry[0] // moves all elememt to the 

}
arry[1] = 99;



// DELETION
const testArr: number[] = new Array(10);
let l = 0;

for (let i = 0; i < 6; i++) {
  // insert 3 elements
  testArr[i] = i;
  l++; // increment the length value to keep track of number of elements
}

// just reduce the size of the lenght as it keeps track of length of the array
l--;

// Deleting From the Start of an Array
// Starting at index 1, we shift each element one position
// to the left.
for (let i = 1; i < l; i++) {
  // Shift each element one position to the left
  testArr[i - 1] = testArr[i];
}
l--;
function printArray(arr: number[], length: number) {
  for (let i = 0; i < length; i++) {
    console.log(arr[i]);

  }
}

// Deleting From Anywhere in the Array
// Say we want to delete the element at index 1
for (let i = 0; i < l; i++) {
  // Shift each element one position to the left [1,2,3,4]
  testArr[i - 1] = testArr[i]; // 
  // testArr[1] = testArr[2]
}

// Again, the length needs to be consistent with the current
// state of the array.
l--;

// printArray(testArr, l);

// Remove Element
const nums = [0, 1, 12];
const val = 3;
let le = 2;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 0) {
    nums[le] = nums[i];
    nums[i] = 1;
    le--;
    console.log(nums);

  }
  // if (nums[i] === 0) {
  //   // // nums[le] = nums[i];
  //   // // nums[0] = nums[le];
  //   // [nums[i], nums[le]] = [nums[le], nums[i]];
  //   // // [nums[i], nums[le]] = [nums[le], nums[i]];
  //   // le--;
  // }
}

console.log(nums, le);
