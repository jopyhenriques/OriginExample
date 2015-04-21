module.exports = {

	// the database url to connect
	url : 'mongodb://\'+process.env.MONGO_PORT_27017_TCP_ADDR+\':\'+process.env.MONGO_PORT_27017_TCP_PORT+\'/blog'
}
