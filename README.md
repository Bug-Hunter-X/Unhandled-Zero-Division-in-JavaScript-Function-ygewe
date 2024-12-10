# Unhandled Zero Division in JavaScript Function

This repository demonstrates a common error in JavaScript: unhandled zero division. The `foo` function in `bug.js` attempts to divide two numbers but fails to handle cases where either of the inputs is 0. This can lead to unexpected results or runtime errors.

The `bugSolution.js` file provides a corrected version of the function, addressing the potential for zero division errors and adding robust input validation.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the flawed function definition.
3. Execute the function with various inputs, including 0 as either `a` or `b` to observe the unexpected behavior. 
4. Open `bugSolution.js` to see the improved function with the zero division problem resolved.

## Bug Fix

The original code uses loose comparison, which can lead to unexpected results. The solution uses strict comparison to correctly handle zero values and provides a more robust solution.