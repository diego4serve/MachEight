const { twoSum } = require('./twoSum')

describe('twoSum', () => {
  it('Should find pairs', () => {
    const array1 = [1, 2, 3, 4, 5, 6]
    const number1 = 7
    const result1 = twoSum(array1, number1)
    expect(result1).toEqual([[3, 4], [2, 5], [1, 6]])

    const array2 = [3, 1, 4, 2, 5]
    const number2 = 6
    const result2 = twoSum(array2, number2)
    expect(result2).toEqual([[4, 2], [1, 5]])
  })

  it('Should return empty array', () => {
    const array = [1, 2, 3, 4, 5]
    const number = 20
    const result = twoSum(array, number)
    expect(result).toEqual([])
  })
})

