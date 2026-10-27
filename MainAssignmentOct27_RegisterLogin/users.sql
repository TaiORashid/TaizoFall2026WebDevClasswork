USE webdev_class;

-- Add login columns to the users table from the Oct 20 assignment
ALTER TABLE users ADD username VARCHAR(50), ADD password VARCHAR(100);
