const path = require('path')
module.exports = {
	entry:{
		entry:'./src/entery.js',
		entry2:'./src/entery2.js'
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:['style-loader','css-loader'],
			// include/exclude
			// query
		}]
	},
	plugins:[],
	// 服务器
	devServer:{
		contentBase: path.resolve(__dirname,'dist'),
		host: '192.168.199.132',
		compress: true,
		port: 8080
	}
}