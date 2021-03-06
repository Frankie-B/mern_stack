/* readline - is an interface between readable and writeable streams amd
 allows for the easy writing of code that would prompt the user*/

const readline = require("readline");
// stdin and stdout allow us to communicate with the global process while
// it is running.

/* process.stdin and process.stdout*/

/* process.stdout is a writeable stream that implements a .write() method
*  which can be used to write a string to the console.*/

// process.stdout.write('Hello ');
// process.stdout.write('world \n\n\n');


// we create an interface and define out input and outputs.
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

/* The question function is available to us by our interface.
* the first argument is the question that is asked to the user,  and the second
*  argument is a callback function for once that question has been answered. */
rl.question('How are you liking Node?', answer => {
	console.log(`Your answer is: ${answer}`);
});