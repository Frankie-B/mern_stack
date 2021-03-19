// Append files ch_5.5

/*You can also use the FS module to append files*/
const fs = require('fs');

const colorData = require("./colors.json");
colorData.colorList.forEach(color  => {
	fs.appendFile('./storage-files/color.md', `${color.color}: ${color.hex} \n`,(err) => {
		if (err) throw err;
		console.log('File was successfully appended');
	})
});