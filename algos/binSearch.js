function binSearch(arr, item) {
  let first = 0,
    last = arr.length - 1
  while (first <= last) {
    let mid = Math.floor((first + last) / 2)
    if (arr[mid] === item) return mid
    else if (arr[mid] > item) {
      last = mid - 1
    } else {
      first = mid + 1
    }
  }
  return "NOT_FOUND"
}


function binSearchRecur(arr, item) {
  let first = 0, last = arr.length - 1
  return doRecur(arr, item, first, last)
   function doRecur(arr, item, first, last) {
     if (first > last) return "NOT_FOUND"
  else {
       mid = Math.floor((first + last) / 2)
       if(arr[mid] === item) return mid
    if (arr[mid] > item) {
      return doRecur(arr, item, first, mid-1)
    }
       else return doRecur(arr, item, mid+1, last)
  }
  }
}

module.exports = {
  binSearch,
  binSearchRecur
}
