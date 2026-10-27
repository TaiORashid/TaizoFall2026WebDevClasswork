const express = require('express');
const mysql = require('mysql2');
const app = express();

// Connect to the webdev_class database from the Oct 20 assignment
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.ROOTPASS,
    database: 'webdev_class'
});

// Read form data and serve register.html / login.html from this folder
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.post('/register', (req, res) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    conn.query(sql, [req.body.username, req.body.email, req.body.password], (err) => {
        if (err) return res.send(err.message);
        res.send('You have successfully registered. <a href="login.html">Go to login</a>');
    });
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    conn.query(sql, [req.body.username, req.body.password], (err, rows) => {
        if (err) return res.send(err.message);
        if (rows.length > 0) {
            res.send('You have logged in successfully');
        } else {
            res.send('The login credentials were incorrect. <a href="login.html">Back to login</a>');
        }
    });
});

app.listen(3000, () => console.log('Running at http://localhost:3000/register.html'));
