const mysql = require('mysql2');

const dbConnection = mysql.createPool({
	host: 'localhost',
	user: 'admin',
	password: 'newpass',
	database: 'lrmysql',
});

module.exports = dbConnection.promise();
