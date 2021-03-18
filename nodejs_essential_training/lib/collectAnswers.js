const readline = require('readline');
const {EventEmitter} = require('events');

// create readline interface for question to be asked in the terminal
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//                             |--- done is a default function (f is an arbitrary value that does not do anything)
module.exports = (questions, done = f => f) => {
	const answers = [];
	// Destructure the questions
	const [firstQuestion] = questions;
	// create a new instance of the event emitter
	const emitter = new EventEmitter();

	const questionAnswered = answer => {
		emitter.emit('answer', answer);
		answers.push(answer);
		if (answers.length < questions.length) { // check if the question was answered and ask next question
			rl.question(questions[answers.length], questionAnswered);
		} else {
			emitter.emit('complete', answers);
			done(answers);
		}
	}

	rl.question(firstQuestion, questionAnswered);


	return emitter;
}
