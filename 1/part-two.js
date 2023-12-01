const fs = require('fs').promises;

const numsDic = {
  'eightwo': '82',
  'twone': '21',
  'oneight': '18',
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9'
};

(async function() {
  const input = await fs.readFile('./1/input.txt', 'utf8');

  const lines = input.split('\n');

  const nums = lines.map((line) => {
    Object.keys(numsDic).forEach((key) => {
      line = line.replaceAll(key, numsDic[key]);
    });

    const digits = line.replace(/\D/g, '').split('');
    if (digits.length === 0) {
      return 0;
    }
    return parseInt(digits[0] + digits.at(-1), 10);
  });

  const sum = nums.reduce((acc, num) => acc + num, 0);

  console.log(sum);
})();
