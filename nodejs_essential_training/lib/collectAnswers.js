const readline = require('readline');
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

	const questionAnswered = answer => {
		answers.push(answer);
		if (answers.length < questions.length) { // check if the question was answered and ask next question
			rl.question(questions[answers.length], questionAnswered);
		} else {
			done(answers);
		}
	}

	rl.question(firstQuestion, questionAnswered);
}
