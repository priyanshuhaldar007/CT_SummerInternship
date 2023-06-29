const prompt = require("prompt-sync")();

while (true) {
    const name = await prompt("What is your name?\n");
    console.log(`Hey there ${name}`);
}
