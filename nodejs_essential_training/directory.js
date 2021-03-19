// Directory creation ch_5.4

/*We can also create directories with the fs module.*/
const fs = require('fs');

/* I can make a directory by calling fs.mkdir. The first argument would be the name of the directory that I would like to
create. We'll call it storage-files. And then because we're using the asynchronous version of the make directory function,
our callback handler will only accept an error if it has occurred. So if there is an error, I'm going to go ahead and throw
the error. Otherwise I will console.log directory created.*/

// the file system also has a function that we can use to check to see if our directory exists first.
if (fs.existsSync('storage-files')) {
	console.log('A directory with that name already exists.');
} else {
	// asynchronous directory creation
	fs.mkdir('storage-files', (err) => {
		if (err) throw err
		console.log('A New directory was created')
	})
}