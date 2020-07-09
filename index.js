(function main() {
  const ls = require('./algos/linearSearch')
  const {
    linearSearch, sentinelLS
  } = ls
  const lsr = linearSearch([2, 3, 4, 5, 6, 7], 3)
  const slsr = sentinelLS([2, 3, 4, 5, 6, 7, 8], 7)

  console.log(`linear search: ${lsr}`)
  console.log(`sentinel linear search: ${slsr}`)
}())
