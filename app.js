const http = require("http");
const mysql = require("mysql");
const hostname = '127.0.0.1';
const port = process.env.PORT || 3500;

var connection = mysql.createConnection({
  host     : '54.87.245.96',
  user     : 'check',
  password : 'wKfRytD67v',
  database : 'db_scripts'
});

// connection.connect();

// connection.query('SELECT * FROM sms', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0]);
// });

// connection.end();



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


 
