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

module.exports = {
  linearSearch: linearSearch
}

