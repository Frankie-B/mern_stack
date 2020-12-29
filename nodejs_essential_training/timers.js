/* Timers are another way to do asynchronous operations -
* via the setTimeout, clearTimeout, setInterval, clearInterval
* they work they same way they do in the browser and are available
* to us globally*/

const waitTime = 3000;
// incorporating setInterval
const waitInterval = 500;
let currentTime = 0;

// increment time function
const incTime = () => {
	currentTime += waitInterval;
	console.log(`Waiting ${currentTime / 1000} seconds`);
}

// log wait time
console.log(`setting a ${waitTime/1000} second delay`);

// function to let us now the timer is finished
const timerFinished = () => {
	console.log(`timer finished!`);
};

/* setInterval - the first arg it takes is a function, the second arg
* is the duration of the interval*/

// create a variable for the interval
const interval = setInterval(incTime,waitInterval);
/* The setInterval function returns the interval to allow us to be able
* to clear the interval later on*/



/* when using the setTimeout function the first arg is the function
* that should run when the timer is done, the second arg is the time
* that we should wait*/
setTimeout(timerFinished, waitTime);

/**/