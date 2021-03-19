// Rename ch_5.6

/*You may need to move, rename or remove a file. The file system module has methods for that as well.*/
const fs = require("fs");

// Synchronous method
// fs.renameSync('./colors.json', './colors.json')

// asynchronous method
fs.rename('./colors.json', 'colors.json', err => {
	if (err) throw err;
	console.log('File renamed successfully.')
})

// I can also move a file with the rename method
fs.rename('./assets/notes.md', './storage-files/notes.md', err => {
	if (err) throw err;
	console.log('File was successfully moved to storage-files');
})

/*. I'm also going to add a setTimeout in the first argument. setTimeout is the function that I want to invoke after four
seconds. So the second argument is four thousand milliseconds (4000ms), which is four seconds(4s). So what I want to
do is wait four seconds and then after four seconds I'm going to remove a file by calling "fs.unlink." Unlink has a
synchronous version and an asynchronous version, we'll go ahead and use the synchronous version. And all we need to do
is send the file that we would like to remove. So the file that I'm going to go ahead and remove is going to be
"./remove.js."*/
setTimeout(() => {
	// synchronous version
	// fs.unlinkSync("./remove.js")

	// asynchronous version
	fs.unlink('./remove.js', (err) => {
		if (err) throw err;
		console.log('file removed successfully.')
	})
}, 4000)