/* Core modules - the 'require function'*/

const path = require('path');

/* The below piece of code would allow us to find the full path to the uploads
 file inside the files director inside the www directory which would be at the
  project root */

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

// console.log(dirUploads);

// const util = require('util');
const {log} = require('util'); // destructure log out of the utils module

log(path.basename(__filename));
log('^ The name of the current file.')

/* ^ The utilities module logs to the terminal the same way a console.log
 would the difference being that we also get the date and time stamped
  to the logged output*/

// const v8 = require('v8');
/* getHeapStatistics is a function available to us from the v8 module*/

const {getHeapStatistics} = require('v8');


log(getHeapStatistics());


