const months = ['october', 'august', '', 'july'];

let out: any = {};
let num = 0;
for (let i = 0; i < months.length; i++) {
  if (out[months[i]] == undefined) {
    out[months[i]] = 1;
  } else {
    out[months[i]] = out[months[i]] + 1;
  }
}
const nums = [1, 2, 3, 4, 1];
let outp: any = {};
function containsDupllicate(arr: number[]) {
  let outp: any = {};
  let isTrue = false
  arr.forEach((item) => {
    if (outp[item] === undefined) {
      outp[item] = '';
    } else {
      isTrue = true;
    }
  });
  return isTrue;
}

console.log(containsDupllicate(nums));
