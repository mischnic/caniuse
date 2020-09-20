const fs = require("fs");

const x = JSON.parse(fs.readFileSync("features-json/aac.json"));

console.log(x);

fs.writeFileSync(
	"features-json/aac.json",
	JSON.stringify(x, null, 2)
		.replace(/": "/g, '":"')
		.replace(/": \[/g, '":[')
		.replace(/": {/g, '":{')
);
