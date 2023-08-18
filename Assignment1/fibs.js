function fibs(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    const c = a + b;
    array.push(a);

    a = b;
    b = c;
  }
}

let array = [];
console.log(array); // [0, 1, 1, 2, 3, 5, 8, 13]
fibs(8);
