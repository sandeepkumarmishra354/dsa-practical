/*
* Q-8 Write  a program  to Reverse  a string  using  stack.
* Sandeep mishra
* MCA 1st year (sem-1)
* Roll No. 2012093
*/

const STACK = []; // empty stack
let TOP = -1; // holds current position (index) of newly added element.

function push(element) {
  // increment top counter
  TOP += 1;
  STACK[TOP] = element;
}
function pop() {
  const topElement = STACK[TOP];
  // decrement top counter
  TOP -= 1;
  return topElement;
}

// this function will reverse the stack created by given string, and return the result as string.
function reverseString(dataStr) {
  // push all character to the stack
  for (let i = 0; i < dataStr.length; i++) {
    push(dataStr[i]);
  }
  // create new array of same length. This will hold the stack elements in reversed order.
  const reversed = new Array(STACK.length);
  const tmpLength = TOP;
  for (let i = 0; i <= tmpLength; i++) {
    reversed[i] = pop();
  }
  return reversed.join("");
}
/////////////////////////////////////////////////////////
const strData = "sandeep mishra";

console.log(`before reverse: ${strData}`);

const revStr = reverseString(strData);

console.log(`after reverse: ${revStr}`);
