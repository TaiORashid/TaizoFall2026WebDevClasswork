const mysql = require('mysql2');

// Connection info for the local MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01292449',
    database: 'webdev_class'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');

    // Show the user table to prove the connection works
    connection.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        console.table(rows);
        connection.end();
    });
});
