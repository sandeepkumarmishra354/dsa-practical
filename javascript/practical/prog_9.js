/*
 * Q-9 Write  a program  to check  for  balanced  parentheses  of an  expression  by  using stacks.
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

const parantheses = ["(", ")", "{", "}", "[", "]"];
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

//TODO: STILL PENDING
function checkBalance(dataStr) {
  const strLength = dataStr.length;
  // create stack of parantheses
  for (let i = 0; i < strLength; i++) {
    if (parantheses.includes(dataStr[i])) {
      push(dataStr[i]);
    }
  }
  // check if length is "EVEN" then there is possibility of balanced parantheses, otherwise not.
  if (strLength % 2 === 0) {
    // create stack
    for (let i = 0; i < strLength; i++) {
      push(dataStr[i]);
    }
  }
  // this means length is odd and parantheses is not balanced.
  return "parentheses are **NOT** balanced.";
}

////////////////////////////////////////////////////////
const result = checkBalance("(((())))");
console.log(result);
