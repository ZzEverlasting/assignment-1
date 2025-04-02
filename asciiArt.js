const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number for conversion: ', (input) => {
    for (let char of input) {
        if (char >= '0' && char <= '9') {
            console.log(`ASCII value of ${char} is ${char.charCodeAt(0)}`);
        } else {
            console.log(`${char} is not a number`);
        }
    }
    rl.close();
}
);