// Create child process with exec ch_6.3

/*NodeJS comes with a child process module, which allows you to execute external processes in your environment. In
other words, you, node JS app can run and communicate with other applications within the environment that is hosted. */
const childProcess = require('child_process');
/* So all of the previous commands that I have written are synchronous. They run once, spit out some
 data, and then the process ends.  So the execute function is for synchronous commands. I can do childProcess dot E X E
  C and then, using the execute function, I can open or run any of these commands. */

// opens Google
childProcess.exec('open https://google.com');

// open another instance of the terminal
childProcess.exec('open -a Terminal .');

// run an ls command and grab the data
childProcess.exec('ls', (err, data, stderr) => {
	if (err) throw err;
	console.log(data, stderr);
})

