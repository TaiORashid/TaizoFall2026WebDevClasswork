CREATE DATABASE IF NOT EXISTS webdev_class;
USE webdev_class;

-- User table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

-- Dummy data
INSERT INTO users (name, email) VALUES
    ('Taizo Rashid', 'taizo@example.com'),
    ('Jordan Lee', 'jordan@example.com'),
    ('Maria Gonzalez', 'maria@example.com');

SELECT * FROM users;
