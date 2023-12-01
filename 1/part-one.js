const fs = require('fs').promises;

(async function() {
  const input = await fs.readFile('./1/input.txt', 'utf8');

  const lines = input.split('\n');

  const nums = lines.map((line) => {
    const digits = line.replace(/\D/g, '').split('');
    if (digits.length === 0) return 0;
    return parseInt(digits[0] + digits.at(-1), 10);
  });

  const sum = nums.reduce((acc, num) => acc + num, 0);

  console.log(sum);
})();
