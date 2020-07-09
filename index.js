(function main() {
  const ls = require('./algos/linearSearch')
  const {
    linearSearch
  } = ls
  const re = linearSearch([2, 3, 4, 5, 6, 7], 90)

  console.log(re)
}())
