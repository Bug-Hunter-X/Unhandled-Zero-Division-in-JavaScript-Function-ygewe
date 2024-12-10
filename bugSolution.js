function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero values explicitly
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a / b; 
}