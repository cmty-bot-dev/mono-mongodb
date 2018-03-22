const { join } = require('path')

module.exports = {
	mono: {
		modules: [
			join(__dirname, '../../../../')
		],
		mongodb: {
			dbName: 'my-db'
		}
	}
}
