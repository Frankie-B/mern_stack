// stdin and stdout allow us to communicate with the global process while
// it is running.

/* process.stdin and process.stdout*/

/* process.stdout is a writeable stream that implements a .write() method
*  which can be used to write a string to the console.*/

process.stdout.write('Hello ');
process.stdout.write('world \n\n\n');