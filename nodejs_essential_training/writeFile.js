// Write and append files Ch_5.3

/*So the file system module can also be used to create new files and write data to files. In this lesson, we're going to
look at the write file method that's provided with the file system module.*/
const fs = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile
`
// asynchronously writing to the notes.md files, you can use the 'writeFileSync' to do this synchronously
fs.writeFile('./assets/notes.md', md.trim(), (err) => {
	if (err) throw err; // check for errors
	console.log("File was successfully written");
});

