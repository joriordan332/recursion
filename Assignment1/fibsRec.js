function fibsRec(n) {
  if (n === 1 || n === 2) {
    return [0, 1];
  }
  return [...fibsRec(n - 1),
    fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3]];
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

fibsRec(8);
