// Ch_5.2 Read files

/*We can also use the FS Module to read the contents of a file.*/

const fs = require("fs");

/* 'fs.readFileSync', first we are going to do this synchronously which means that this is going to be blocking. We're
going to wait until we've read the contents of the entire file before executing any more code so we'll read it in
./lib/collectAnswers.js. The second argument that I want to supply is the encoding of a file, since this is a text
 file, we're going to read this as UTF-8.*/

// const text = fs.readFileSync('./lib/collectAnswers.js', 'utf8');


/* We can also use the readFile function which is the asynchronous way of reading files. That means that once the contents
of the file have been read, we can pass those contents to a callback function, so again the first variable of the callback
function is err, that will be null if there aren't any errors. And then the second argument is the text that we're actually
reading since we're reading this file as UTF-8.*/

fs.readFile('./lib/collectAnswers.js', 'utf8', (err, text) => {
	// check for erros
	if (err) throw err;
	console.log('file contents read')
	console.log(text)
})

// console.log(text) // synchronous console log

/* We can also read binary files. So instead of reading the collectAnswers.js file using this function, I'm going to go
into './Ex_Files_NodeJS_EssT/Exercise Files/ch05/05_02/start/assets/alex.jpg' I'm going to read the Alex.jpg.
Alex.jpg is an image, this file isn't encoded as text, so I'm going to get rid of the UTF-8 and instead of calling
this text here, I'm going to call it the actual image because we're going to be reading the binary file. The biggest
difference in reading binary files is we do not supply the encoding argument, so I got rid of UTF-8.*/
 fs.readFile('Ex_Files_NodeJS_EssT/Exercise Files/ch05/05_02/start/assets/alex.jpg', (err, img) => {
 	// Error handling
 	if (err) {
	  throw err;
	  console.log(`An error has an occured: ${err.message}`);
	  process.exit();
  };

 	console.log('file contents read');
 	console.log(img);
 })