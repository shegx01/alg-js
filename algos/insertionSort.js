function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let key = arr[i],
      pivot = i - 1
    while (pivot >= 0 && arr[pivot] > key) {
      //       swap the arr[pivot] and key
      let temp = arr[pivot + 1]
      arr[pivot + 1] = arr[pivot]
      arr[pivot] = temp
      //       pivot is needed to repositioned in order to set new key
      pivot = pivot - 1
    }
    key = arr[pivot + 1]
  }
  return arr
}

module.exports = {
  insertionSort
}
