const testArr = [-43, 543,2,541,23,4,2,67,8,5,2,7,9,2,5,-1234, 9];

function quickSort(arr, start = 0, end = arr.length - 1) {
  if(!arr) return;
  if (start >= end) return;
  let idx = partition(arr, start, end)
  
  quickSort(arr, start, idx - 1);
  quickSort(arr, idx + 1, end);
  
  return arr
}

function partition(arr, start, end) {
  let pivetIdx = start;
  let pivetVal = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivetVal) {
      swap(arr, pivetIdx, i);
      pivetIdx++
    }
  }
  swap(arr, pivetIdx, end)
  return pivetIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSort(testArr);
'-----------------------------------------------------------------'
function mergeSort(arr) {
  if(!arr) return;
  if(arr.length < 2) return arr;
  const idx = Math.floor(arr.length / 2);
  const left = arr.slice(0, idx);
  const right = arr.slice(idx);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const result = [];
  while(leftArr.length && rightArr.length) {
    if(leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  
  return result.concat(leftArr, rightArr);
}

mergeSort(testArr)


