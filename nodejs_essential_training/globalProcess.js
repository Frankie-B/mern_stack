console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

// Since process.argv returns an array you can treat it like a list
const [, , firstName, lastName] = process.argv; // array destructuring

console.log(` Your name is ${firstName} ${lastName}`);

/*using flags to check variables that are being used via the global process
node globalProcess --user Frankie --greeting 'Hello'*/

const grab = flag => {
	let indexAfterFlag = process.argv.indexOf(flag) + 1;
	return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}!`);

