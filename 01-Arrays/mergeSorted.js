function _mergeSortedArrays(arr1, arr2) {
  // [0] check type of arr1 and arr2
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }
  // [1] use concat/spread op + sort()
  const result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

function mergeSortedArrays(arr1, arr2) {
  // [0] check type of arr1 and arr2
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return null;
  }

  const result = [];
  const totalLength = arr1.length + arr2.length;

  let p = 0;
  let q = 0;
  console.log({ totalLength });
  while (result.length < totalLength) {
    console.log("arr1[p]: ", arr1[p]);
    console.log("arr2[q]: ", arr2[q]);
    if (arr1[p] <= arr2[q]) {
      console.log("true");
      result.push(arr1[p]);
      console.log({ result });
      p++;
    } else if (arr2[q] < arr1[p]) {
      console.log("false");
      result.push(arr2[q]);
      console.log({ result });
      q++;
    } else {
      if (arr1[p]) {
        result.push(arr1[p]);
        p++;
      } else {
        result.push(arr2[q]);
        q++;
      }
    }
    console.log("-".repeat(20));
  }

  return result;
}

const sorted = mergeSortedArrays([0, 6, 30], [0, 3, 4]);
console.log(sorted);
