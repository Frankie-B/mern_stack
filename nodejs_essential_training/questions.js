const readline = require('readline');
// create readline interface for question to be asked in the terminal
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


const questions = [
	'what is your name?',
	'what would you rather be doing?',
	'what are you going to do with nodejs?',
];
		// Takes questions
const collectAnswers = (questions, done) => {
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

collectAnswers(questions, answers => {
	console.log('Thank you for your answers.');
	console.log(answers);

	process.exit();
})
