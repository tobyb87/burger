// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_"mysql://l3s1as7wnvdxx9ny:wbulxijpkjwoweyr@o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/iarh0u6f3nu4gufv"); {
  connection = mysql.createConnection(process.env.JAWSDB_"mysql://l3s1as7wnvdxx9ny:wbulxijpkjwoweyr@o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/iarh0u6f3nu4gufv");
} else{

 connection= mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers"
});
// Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export to ORM 
module.exports = connection;