// Array operation
// Declare an integer array of 6 element
const intArray: number[] = new Array(6);
let size = 0;

// Add 3 elements to the Array
for (let i = 0; i < 3; i++) {
    intArray[size] = i;
    size++;
}
intArray[size] = 3;
size++;
// intArray[size] = 3;
// size++;
// Inserting at the Start of an Array
for (let i = size - 1; i >= 0; i--) {
  intArray[i + 1] = intArray[i];
}
intArray[0] = 45
// Inserting Anywhere in the Array
for (let i = 4; i >= 2; i--)
{ 
    // console.log(i);
    // Shift each element one position to the right.
    intArray[i + 1] = intArray[i];
}

console.log(intArray);

