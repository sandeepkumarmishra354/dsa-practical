/*
 * Q-9 Write  a program  to check  for  balanced  parentheses  of an  expression  by  using stacks.
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

const openedParantheses = ["(", , "{", , "["];
const closedParantheses = [")", , "}", , "]"];
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
  // extract only parantheses from string, create new string
  let extractedStr = "";
  for (let i = 0; i < dataStr.length; i++) {
    const char = dataStr[i];
    if ([...openedParantheses, ...closedParantheses].includes(char)) {
      extractedStr += char;
    }
  }
  const strLength = extractedStr.length;
  // check if length is "EVEN" then only there is chance of balance, other wise not
  if (strLength % 2 === 0) {
    let isBalanced = true;
    // create stack of parantheses
    for (let i = 0; i < strLength; i++) {
      const char = extractedStr[i];
      if (openedParantheses.includes(char)) {
        push(char);
      } else if (closedParantheses.includes(char)) {
        const lastPar = pop();
        if (
          (char === ")" && lastPar === "(") ||
          (char === "}" && lastPar === "{") ||
          (char === "]" && lastPar === "[")
        ) {
          isBalanced = true;
        } else {
          isBalanced = false;
          break;
        }
      }
    }
    return isBalanced ? "parantheses are balanced" : "parentheses are **NOT** balanced.";
  }
  // this means length is odd and parantheses is not balanced.
  return "parentheses are **NOT** balanced.";
}

////////////////////////////////////////////////////////
const result = checkBalance("([dd+{}])");
console.log(result);
