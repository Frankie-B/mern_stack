// Create child process with spawn ch_6.4

/*In the last lesson, we used the execute function to execute external system commands. In this lesson, we're going to
take a look at the spawn function. Now execute is designed to handle synchronous processes. These are processes that run
and close and maybe spit back some data as a one time event. However execute is not meant to handle a synchronous processes.
This could mean long, running processes or processes that are waiting for input or anything that remains open.*/
const cp = require('child_process');

/* create a question app variable and we're going to run this question app from this process. So we'll use C-P-spawn.*/

/* Now spawn wants to know the command that we're going to spawn so that's the first thing that we would type. And then
all of the additional arguments have to come in as an array. So the next thing that we would type is questions-dot-J-S.
So now we'll go ahead and run our questions module with Node.js in a separate process. So we can now communicate with
this process through standard input and standard output. */
const questionApp = cp.spawn('node', ['questions.js']);

// answering all three questions
questionApp.stdin.write('Frankie\n');
questionApp.stdin.write('Learning essential nodejs\n');
questionApp.stdin.write('Change the world\n');


questionApp.stdout.on('data', data => {
	console.log(`From the questionApp: ${data}`)
})

questionApp.on("close", () => {
	console.log(`question app process closed.`)
})