const { twoSum } = require('./twoSum')

if (process.argv.length !== 4) {
  console.error('Usage: node twoSum.js "1,9,5,0,20,-4,12,16,7" 12');
  process.exit(1);
}

const arrayArgument = process.argv[2];
const numberArgument = process.argv[3];

const array = arrayArgument.split(',').map(Number);
const number = Number(numberArgument);

console.log(twoSum(array, number))
