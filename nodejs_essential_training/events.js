/*A powerful tool that ships with Node.js is the Event Emitter. The Event Emitter is Node.js' implementation of the Pub-Sub
design pattern, and it gives us a mechanism for emitting custom events, and wiring up listeners and handlers for those
events.*/
const events = require('events');

/*So the Events module comes with an Event Emitter constructor that will construct a new instance of the Event Emitter
that we can use to raise custom events.*/

// Create an instance of the event emitter
const emitter = new events.EventEmitter();

// when a custom event occurs handle it with this callback function
emitter.on('customEvent', (message, user) => {
	console.log(`${user}: ${message}`);
})

// // Make the computer say hello world via a custom event
// emitter.emit('customEvent','hello world', 'Computer');
// //             |-- eventName     |-- message              |-- user
// emitter.emit('customEvent','That is really cool huh?', 'Frankie');

/*the Event Emitter gives us a way to raise and handle custom events. One other important feature of the Event Emitter
is that it's asynchronous. These events are raised when they happen.*/

process.stdin.on('data', data => {
	const input = data.toString().trim(); // takes what the user types as the input data
	if (input === 'exit') {
		emitter.emit('customEvent', 'Goodbye!', 'process');
		process.exit();
	}

	emitter.emit("customEvent", input, 'terminal')
})