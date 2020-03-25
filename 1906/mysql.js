
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'shop'
});
 
connection.connect();
 
connection.query('select * from p_users', function (error, results, fields) {
  if (error) throw error;
  
    console.log(results);

});
 
connection.end();