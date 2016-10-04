const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Mac, Linux, or Windows? ', (answer) => {

  if (answer.toLowerCase() === 'linux') {
    console.log("Fuck yeah, you rock!");
  } else if (answer.toLowerCase() === "mac") {
    console.log("Not bad");
  } else {
    console.log("Okay, whatever you're into...")
  }

  // console.log('Thank you for your valuable feedback:', answer);

  rl.close();
});
