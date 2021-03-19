// Writable file streams ch_6.2

const fs = require('fs');

/* The process.stdout object is a writeable stream.*/
process.stdout.write('Hello');
process.stdout.write(' World\n')

/*I can create writeable file streams using the fs.create writeStream method. And, the first argument here is where we're
going to write the file. So, I'll do this in the assets folder /myFile.txt and again the second argument we're going to
create a text writeable stream, so we'll say UTF-8 for the encoding.*/
const writeStream = fs.createWriteStream('./storage/assets/myFile.txt', 'UTF-8');
const readStream = fs.createReadStream('./storage/assets/lorum-ipsum.md', 'UTF-8');
// writeStream.write('Hello');
// writeStream.write(' World\n')

// reading and writing streams

// process.stdout.on('data', data => {
// 	writeStream.write(data);
// });
//
// readStream.on('data', data => {
// 	writeStream.write(data);
// });
/* So, because readable streams are made to work with writeable streams, they even have a lot of methods that help you
compose them. */


// compose read write stream using the pip method
process.stdin.pipe(writeStream);

// using the readStream variable and piping it to the writeStream
readStream.pipe(writeStream);

/* The writeable stream is the counterpart to the readable stream. And, just like readable streams, writeable streams are
everywhere in node js.*/