const collectAnswers = require('./lib/collectAnswers');

const questions = [
	'what is your name?',
	'what would you rather be doing?',
	'what are you going to do with nodejs?',
];

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", (answer) => {
	console.log(`question answered: ${answer}`);
})

answerEvents.on("complete", answers => {
	console.log('Thank you for your answers.');
	console.log(answers);
})

answerEvents.on("complete", () => process.exit());