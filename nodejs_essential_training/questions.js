const collectAnswers = require('./lib/collectAnswers');

const questions = [
	'what is your name?',
	'what would you rather be doing?',
	'what are you going to do with nodejs?',
];

collectAnswers(questions, answers => {
	console.log('Thank you for your answers.');
	console.log(answers);

	process.exit();
})