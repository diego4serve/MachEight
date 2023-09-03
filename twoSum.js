/**
 * @param {Array<number>} array
 * @param {number} number
 * @returns {Array<Array<number>>}
 */
function twoSum(array, number) {
  const result = []
  const map = new Map()

  for (const item of array) {
    const complement = number - item
    if (map.has(item)) {
      result.push([map.get(item), item])
      continue
    }
    map.set(complement, item)
  }

  return result
}

module.exports = {
  twoSum
}

