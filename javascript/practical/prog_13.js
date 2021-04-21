/*
 * Q-13 Write  a program  to implement  linear  search  (Brute  Force).
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

let myArray = [87, 3, 66, 23, 12, 7, 43, 11, 77, 32];

// this method will perform linear search algorithm
function searchValue(value) {
  let index = -1;
  for(let i=0; i<myArray.length; i++) {
      if(value === myArray[i]) {
          index = i;
          break;
      }
  }
  return index;
}

///////////////////////////////////////////
console.log(myArray.join(","));

const index = searchValue(43);
const status = index !== -1 ? "value found in array." : "value not in array.";

console.log(`${status} : index: ${index}`);
