CREATE DATABASE IF NOT EXISTS noteDB;

USE noteDB;

CREATE TABLE IF NOT EXISTS users (
  user_id INT(10) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password CHAR(32) NOT NULL,
  image VARCHAR(200) NULL
);

CREATE TABLE IF NOT EXISTS notes (
  note_id INT(10) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(150) NULL,
  content TEXT NULL,
  create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT(10) NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);
