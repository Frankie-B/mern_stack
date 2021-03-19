// Renaming and removing directories ch_5.7

/* In the last lesson (reference rename.js), we used the fs modules rename method to rename and move files. You can use
that same method to rename and move directories, too.*/
const fs = require('fs');

// Synchronous method
// fs.renameSync('./storage-files', './storage');

//asynchronous method
fs.rename('./storage-files', './storage', err => {
	if (err) throw err;
	console.log('Directory renamed successfully.');
})

// moving a directory
fs.rename('./assets', './storage/assets', err => {
	if (err) throw err;
	console.log('Directory moved successfully.');
})

/*before we remove the directory, we need to delete all, of the files within that directory. Fs.readdirSync is going
to be the synchronous version of the function that will read a directory. So the readdirSync function is going to give
us an array of every filename within the directory. I can simply chain a forEach to loop through each item of that array,
and each item of that array is going to be a string filename so we can go ahead and throw in a little call back function
to handle each filename. Now using fs.unlinkSync, I can go ahead and unlink our ./storage/$(filename), and this will
synchronously unlink or remove every file from the storage directory before we hit line seven where we make the call to
remove the directory.*/

// synchronous method - remove each file before we can delete the directory
fs.readdirSync('./toBeRemoved').forEach( fileName => {
	fs.unlinkSync(`./toBeRemoved/${fileName}`);
})

// asynchronous method to remove directory
fs.rmdir('./toBeRemoved', err => {
	if (err) throw err;
	console.log('Directory successfully removed.');
})

