/*
 * Q-9 Write  a program  to check  for  balanced  parentheses  of an  expression  by  using stacks.
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
// TODO: implement the rest of the logics....