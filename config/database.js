module.exports = {

	url : 'mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PASSWORD + '@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + OPENSHIFT_MONGODB_DB_PORT + '/' + process.env.MONGODB_DATABASE
}
