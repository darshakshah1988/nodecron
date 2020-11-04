const http = require("http");
const mysql = require("mysql");
const hostname = '127.0.0.1';
const port = 3500;


// var connection = mysql.createConnection({
//   host     : '54.87.245.96:3306',
//   user     : 'check',
//   password : 'wKfRytD67v',
//   database : 'db_scripts'
// });

var pool = mysql.createPool({
        connectionLimit : 100,
        host     : '54.87.245.96',
        port     :  3306,
        user     : 'check',
        password : 'wKfRytD67v',
        database : 'db_scripts',
        connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
    	multipleStatements : true
    });
exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};




const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');
	res.end("Server is started. now run the script");
});

server.listen(port,hostname, () => {
	console.log("server started on port"+port);
	console.log("Run the file with nodemon app.js");
	pool.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }
	 
	  console.log('connected as id ' + pool.threadId);
	});
		
  
})


 
