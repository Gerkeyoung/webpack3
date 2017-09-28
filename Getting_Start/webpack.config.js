const path = require('path')
const config = {
	entry:{
		main:"./src/index.js"
	},
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,"dist")
	}
    
}
module.exports = config;