const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'35.224.253.108',
        user: 'root',
        password:'password',
        database:'myDB'
    });
    return conn;
}
module.exports = newConnection;
