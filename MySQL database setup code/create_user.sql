CREATE USER 'lms'@'localhost' IDENTIFIED BY 'lms';

GRANT ALL PRIVILEGES ON * . * TO 'lms'@'localhost';

ALTER USER 'lms'@'localhost' IDENTIFIED WITH mysql_native_password BY 'lms';