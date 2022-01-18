let input = process.argv.slice(2);

for (let i = 0; i < input.length; i++) {
  if (input[i] < 0 || isNaN(input[i] || input[i] === "")) {
    continue;
  } else {
    setTimeout (() => {
      process.stdout.write('\x07');
    }, input[i] * 1000) 
  }
};