CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	burger VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE    
);

USE burger_db;
SELECT * FROM burgers;
    