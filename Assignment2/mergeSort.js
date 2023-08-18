function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const mergeResult = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      mergeResult.push(leftArray.shift());
    } else {
      mergeResult.push(rightArray.shift());
    }
  }
  return [...mergeResult, ...leftArray, ...rightArray];
}

const arr = ([11, 5, 8, 2, 19, 21, 6, 1]);
console.log(mergeSort(arr)); // [1, 2, 5, 6, 8, 11, 19, 21]
