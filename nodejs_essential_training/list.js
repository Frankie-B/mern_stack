// File system basics Ch 5.1

/*Node.js also ships with a module that allows us to interact with the file system. The fs module can be used to list
files in directories, create new files in directories, stream files, watch files, modify file permissions, just about
anything you would need to work with files and directories.*/

const fs = require('fs'); // file system

console.log('Starting to read files...')

//const files = fs.readdirSync('./');

/* the function that we used to read the files, 'readdirSync', this function is executing synchronously. That means that
line three is blocking which means that JavaScript is going to stop everything it's doing until the files within that
directory are read before processing any more lines of code.*/


/* So there's another way that we can read files and that is to make line for non-blocking by using an asynchronous function,
readdir. So readdir will read the files within the directory but it doesn't set a variable. Once the files within the
directory are read they will be passed to a callback function that we supply as the second argument. The first variable
of this callback function is any errors that have been thrown. And then the second variable of this callback function are
the files themselves*/
fs.readdir('./', (err, files) => {
	// check for any errors
	if (err) throw err;
	// on completion of the read task these console logs will be out put to the user.
	console.log('Finished reading files...')
	console.log(files);
});

