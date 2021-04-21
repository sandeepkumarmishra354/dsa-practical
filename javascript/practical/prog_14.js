/*
 * Q-14 Write  a program  to implement binarysearch(Divide  and Conquer).
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

let myArray = [87, 3, 66, 23, 12, 7, 43, 11, 77, 32];

function sortArr() {
  const len = myArray.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const prevVal = myArray[i];
      const nxtVal = myArray[j];
      // sort in ascending order
      if (prevVal > nxtVal) {
        myArray[i] = nxtVal;
        myArray[j] = prevVal;
      }
    }
  }
}

// this method will perform binary search algorithm
function searchValue(value) {
  let index = -1;
  let min = 0;
  let max = myArray.length - 1;
  while (max >= min) {
    const mid = parseInt(min + (max - min) / 2);
    const midValue = myArray[mid];
    // check if element is at middle
    if (midValue === value) {
      index = mid;
      break;
    }
    // check if value is smaller than mid-value, then it can only be on left side.
    if (value < midValue) max = mid - 1;
    else min = mid + 1;
  }
  return index;
}
///////////////////////////////////////////
// before searching make sure to sort the array.
sortArr();
console.log(myArray.join(","));

const index = searchValue(23);
const status = index !== -1 ? "value found in array." : "value not in array.";

console.log(`${status} : index: ${index}`);
