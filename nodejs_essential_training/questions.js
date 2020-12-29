// stdin and stdout allow us to communicate with the global process while
// it is running.

/* process.stdin and process.stdout*/

/* process.stdout is a writeable stream that implements a .write() method
*  which can be used to write a string to the console.*/

process.stdout.write('Hello ');
process.stdout.write('world \n\n\n');

const questions = [
	'what is your name?',
	'what would you rather be doing?',
	'what is your favourite programming language?',
];

const ask = (i = 0) => {
	process.stdout.write(`\n\n\n ${questions[i]}`);
	process.stdout.write(` > `); // prompt user for a response
}

ask();

/* process.stdin*/


const answers = [];
// add process event listener for input data event
process.stdin.on('data', data => {
	answers.push(data.toString().trim())
	// check if how many questions have been asked
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit(); // invoke exit
	}
});

// listening event for the process exit event
process.on('exit', () => {
	// set local variable by array-destructuring
	const [name, activity, lang] = answers;
	console.log(`
	
	Thank you for your answers!
	Go ${activity} ${name} you can write ${lang} code later!!
	
	`)
})