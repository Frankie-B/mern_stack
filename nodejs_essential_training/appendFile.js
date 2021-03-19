// Append files ch_5.5

/*You can also use the FS module to append files*/
const fs = require('fs');

const colorData = require("./colorsData.json");
colorData.colorList.forEach(color  => {
	fs.appendFile('./storage/color.md', `${color.color}: ${color.hex} \n`,(err) => {
		if (err) throw err;
		console.log('File was successfully appended');
	})
});