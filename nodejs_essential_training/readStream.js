// Read stream ch_6.1

/*The stream interface provides us with the technique to read and write data. We can use it to read and write data to
files, to communicate with the internet, to communicate with other processes. In fact, we've already been using it.
We've been using the stream interface to read and write data to and from the terminal.*/
const fs = require("fs");

/*The first argument that this function wants is the path to the file that should be read. So within our
./storage/assets folder we'll notice that there's a lorum-ipsum.md file, this is a huge text file just filled with
lorum-ipsum text.*/

const readStream = fs.createReadStream('./storage/assets/lorum-ipsum.md', 'UTF-8');
// |---- /*t. So we will add the path to that. We can create binary read streams or text read streams. So if I wanted a
// text read stream I would just pass the encoding UTF-8 as the second argument of the create readStream function. */
let fileText = '';

console.log('Type something ....');
/* Process.standard input is a readable stream. We read the data by listening to data events. The file system also comes
with a way to create readable streams. */

// process.stdin is a readable stream
// process.stdin.on('data', data => {
// 	console.log(`I read ${data.length - 1}  characters of text`);
// })

// using the readStream function
readStream.on('data', data => {
	console.log(`I read ${data.length - 1}  characters of text`);
	fileText += data;
})
/*Reading files with streams causes your nodejs application to use less memory because instead of reading everything all
at once and loading it into a buffer, you're reading files bit by bit and chunk by chunk.*/
readStream.once('data', data => {
	console.log(data);
})
/*streams also raise an end event and we can use the end event to know that the readStream has completed.*/
readStream.once('end', () => {
	console.log('Finished reading files');
	// report on how long the entire file is
	console.log(`In total I read ${fileText.length -1} characters of text`);
})

