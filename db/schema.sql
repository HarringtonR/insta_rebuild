\c finstadb;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  full_name TEXT,
  phone VARCHAR(50),
  bio VARCHAR(255),
  profpic_url VARCHAR(255)
);

DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  img_url VARCHAR(255),
  caption VARCHAR(255),
  img_file BYTEA
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL,
  comment VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS likes;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  picture_id INT NOT NULL,
  user_id INT NOT NULL
);

INSERT INTO users VALUES (DEFAULT, 'rossi', 'password', 'Valentino Rossi', null, 'I love coding!', 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541704107/rossface.jpg');
INSERT INTO users VALUES (DEFAULT, 'lilC', 'password', 'Cynthia ', null, null, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541704141/0.jpg');
INSERT INTO users VALUES (DEFAULT, 'uhmandur', 'password', 'Amanda', null, null, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541696663/fullsizeoutput_2537.jpg');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198809/samples/ecommerce/accessories-bag.jpg', 'love everything I got in my box!!!!');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449327/Screenshot_20181105-152129_Instagram.jpg', 'SOS.... I got u babe');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449314/Screenshot_20181105-152100_Instagram.jpg', 'I ❤️ Japan');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537200689/crispy-chocolate-chip-cookies.jpg', '🍪');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449549/Screenshot_20181105-152500_Instagram.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449794/Screenshot_20181105-152932_Instagram.jpg', 'gotta get to GA!');
INSERT INTO pictures VALUES (DEFAULT, 2, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198809/samples/ecommerce/accessories-bag.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1537198810/samples/food/spices.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/dvjtpejbw/image/upload/v1541449233/Screenshot_20181105-151934_Instagram.jpg', 'caption here');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://imgur.com/s8TVefK.jpg', 'The Happiest Place on Earth!');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541646730/Screen_Shot_2018-11-07_at_10.10.35_PM.png', 'Gorfine gals ❤️ ');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541646719/Screen_Shot_2018-11-07_at_10.09.40_PM.png', 'Cinderella Castle ready for the Holidays!!!');
INSERT INTO comments VALUES (DEFAULT, 1, 1, 'SICKKKKK');
INSERT INTO comments VALUES (DEFAULT, 9, 2, 'youre the cutest');
INSERT INTO likes VALUES (DEFAULT, 1, 1);
INSERT INTO likes VALUES (DEFAULT, 1, 2);
INSERT INTO likes VALUES (DEFAULT, 1, 3);