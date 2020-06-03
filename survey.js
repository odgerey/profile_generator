const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`You have a beautiful name, ${answer}`);

  rl.close();
});

rl.question("What's an activity you like doing?", (answer) => {
  console.log(`Great to know you love ${answer}`);

  rl.close();
});

rl.question("What do you listen to while doing that?", (answer) => {
  console.log(`I love ${answer} to!`);

  rl.close();
});

rl.question("What do you listen to while doing that?", (answer) => {
  console.log(`I love ${answer} too!`);

  rl.close();
});

rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
  console.log(`${answer} is a good answer.`);

  rl.close();
});

rl.question("What is your favorite thing to eat?", (answer) => {
  console.log(`${answer} is a good answer.`);

  rl.close();
});

rl.question("What is your favorite sport?", (answer) => {
  console.log(`${answer} is a good answer.`);

  rl.close();
});

rl.question("What is your superpower?", (answer) => {
  console.log(`${answer} is a good answer.`);

  rl.close();
});