(function main() {
  const ls = require('./algos/linearSearch')
  const bs = require('./algos/binSearch')
  const {
    linearSearch, sentinelLS
  } = ls
  const lsr = linearSearch([2, 3, 4, 5, 6, 7], 3)
  const slsr = sentinelLS([2, 3, 4, 5, 6, 7, 8], 6)
  const bsIter = bs.binSearch([4, 6, 8, 22, 24, 32, 34, 66, 68, 72, 88], 68)
  const bsRecur = bs.binSearchRecur([4, 6, 8, 22, 24, 32, 34, 66, 68, 72, 88], 32)

  console.log(`linear search: ${lsr}`)
  console.log(`sentinel linear search: ${slsr}`)
  console.log(`binary search: ${bsIter}`)
  console.log(`binary search recur: ${bsRecur}`)
}())
