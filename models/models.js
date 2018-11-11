const db = require('../db/config');
const Model = {};

//explorer page
Model.findAll = () => {
  return db.query(`
    SELECT pictures.id, pictures.user_id, pictures.img_url, pictures.caption, users.username, users.profpic_url
    FROM pictures
    JOIN users
    ON pictures.user_id = users.id
    ORDER BY pictures.id DESC;
  `)
}

//newsfeed after login
Model.findUser = (username) => {
  return db.query(`
    SELECT *
    FROM users
    WHERE username = $1
  `, username)
}

// returns data for profile page
Model.findByUsername = id => {
  return db.query(
    `
    SELECT pictures.id AS pic_id, pictures.img_url, pictures.caption, users.id AS user_id, users.username, users.profpic_url, users.full_name, users.bio
    FROM pictures
    JOIN users
    ON pictures.user_id = users.id
    WHERE users.username = $1;
  `,
    [id]
  );
};

// for creating a new account
Model.create = users => {
  return db.one(
    `
    INSERT INTO users
    (username, password, full_name, phone, bio, profpic_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `,
    [users.username, users.password, users.full_name, users.phone, users.bio, users.profpic_url]
  );
};

// Model.create = pictures => {
//   return db.one(
//     `
//     INSERT INTO pictures
//     (user_id, img_url)
//     VALUES ($1, $2)
//     RETURNING *
//   `,
//     [pictures.user_id, pictures.img_url]
//   );
// };

//get data for edit profile page
Model.findByUsernameForEdit = id => {
return db.oneOrNone(
    `
    SELECT id, username, password, full_name, phone, bio, profpic_url
    FROM users
    WHERE username = $1
  `,
    [id]
  );
};

// edit profile page
Model.update = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      username = $1,
      password = $2,
      full_name = $3,
      phone = $4,
      bio = $5,
      profpic_url = $6
    WHERE username = $1
    RETURNING *
  `,
    [users.username, users.password, users.full_name, users.phone, users.bio, users.profpic_url]
  );
};

//get comments for a photo
Model.findComments = (picture_id) => {
  return db.query(
    `
    SELECT comments.id, comments.picture_id, comments.comment, comments.user_id, users.username, users.profpic_url
    FROM comments
    JOIN users
    ON comments.user_id = users.id
    WHERE picture_id = $1 `
  , [picture_id]
  )
}

//post a new comment for a photo
Model.postComment = comments => {
  return db.one(
    `
    INSERT INTO comments
    (picture_id, user_id, comment)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [comments.picture_id, comments.user_id, comments.comment]
  );
};

//posting a new picture
Model.postPic = pictures => {
  return db.one(
    `
    INSERT INTO pictures
    (user_id, img_url, img_file)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [pictures.user_id, pictures.img_url, pictures.img_file]
  );
};

//liking a photo
Model.like = like => {
  return db.one(
    `
    INSERT INTO likes
    (picture_id, user_id)
    VALUES ($1, $2)
    RETURNING *
  `,
    [like.picture_id, like.user_id]
  );
};

// showing number of likes
Model.numberLikes = (picture_id) => {
  return db.query(
    `
    SELECT likes.id, likes.picture_id, likes.user_id, users.username, users.full_name
    FROM likes
    JOIN users
    ON likes.user_id = users.id
    WHERE picture_id = $1 `
  , [picture_id]
  )
}

Model.destroy = id => {
  return db.none(
    `
    DELETE FROM pictures
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Model
