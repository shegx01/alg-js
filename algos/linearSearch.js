function linearSearch(itemsArray, searchItem) {
  let result = "NOT_FOUND"
  for (item of itemsArray) {
    if (item === searchItem) {
      result = item
      return result
    }
  }
  return result

}

function sentinelLS(arr, item) {
  // //   grab  the last value of the array
  //   const last = arr[arr.length-1]

  // //   reassign the last value to the item to be searched
  // arr[arr.length-1] = item
  // // check if last is the item we are looking for
  // if(last === item) return last

  // //   lets look through the array
  //   let idx = 0
  //   while(arr[idx] !== item) {
  //     idx+=1
  //   }
  // //   ok, the idx now is available to us if its less than
  // // the length-1 of the array
  //   if(idx < arr.length-1){
  //     return arr[idx]
  //   }
  //   return "NOT_FOUND"

 const lastArrayItem = arr[arr.length - 1]
 if (lastArrayItem === item) {
   arr[arr.length - 1] = lastArrayItem
   return lastArrayItem
 }
 arr[arr.length - 1] = item
 let idx = 0
 while (arr[idx] !== item) idx += 1
 if (idx < arr.length - 1) {
   arr[arr.length - 1] = lastArrayItem
   return arr[idx]
 }
  return "NOT_FOUND"
}


module.exports = {
  linearSearch: linearSearch,
  sentinelLS: sentinelLS
}

