/* Timers are another way to do asynchronous operations -
* via the setTimeout, clearTimeout, setInterval, clearInterval
* they work they same way they do in the browser and are available
* to us globally*/

const waitTime = 5000;
// incorporating setInterval
const waitInterval = 500;
let currentTime = 0;

// increment time function
const incTime = () => {
	currentTime += waitInterval;
	// calculate a percentage
	// const percentage = Math.floor((currentTime / waitTime) * 100);
	const percentage = (currentTime / waitTime) * 100 | 0; // floor the percentage
	// console.log(percentage);
	// console.log(`Waiting ${currentTime / 1000} seconds`);
	process.stdout.clearLine(); // clears the last line written to the terminal
	process.stdout.cursorTo(0); // move cursor to the beginning of the line
	process.stdout.write(`Waiting...${percentage}%`);
}

// log wait time
console.log(`setting a ${waitTime / 1000} second delay`);

// function to let us now the timer is finished
const timerFinished = () => {
	clearInterval(interval);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	console.log(`Timer is finished!`);
};

/* setInterval - the first arg it takes is a function, the second arg
* is the duration of the interval*/

// create a variable for the interval
const interval = setInterval(incTime, waitInterval);
/* The setInterval function returns the interval to allow us to be able
* to clear the interval later on*/

/* when using the setTimeout function the first arg is the function
* that should run when the timer is done, the second arg is the time
* that we should wait*/
setTimeout(timerFinished, waitTime);
