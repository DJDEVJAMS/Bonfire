// import all models here
const User = require("./User");
const Hobby = require("./Hobby");
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
const Events = require("./Event");
// const ExampleData = require("./ExampleData");

// Reminder- create any additional associations here
User.hasMany(Post, {
  foreignKey: "post_id"}
);
User.hasMany(Comment, {
  foreignKey: "comment_id"}
);
User.hasMany(Events, {
  foreignKey: "events_id",
onDelete: "CASCADE" }
);
User.belongsToMany(Hobby, {
  foreignKey: "user_id",
  onDelete: 'CASCADE'
}
);
//hobby

Hobby.hasMany(User, {
  foreignKey: "user_id",
}
);

// event

Event.belongsTo(User, {
  foreignKey: "event_id", 
}
);

// user



// Post
Post.belongsTo(User,{
  foreignKey: "post_id",
}
);

Post.hasMany(Comment, {
  foreignKey: "post_id",
}
);

// User.hasMany(Hobby, 
//   { foreignKey: "post_id' });
// Hobby.belongsTo(User, { foreignKey: "post_id' });

// User.hasMany(Post, { foreignKey: "post_id' });
// Post.belongsTo(User, { foreignKey: "post_id' });

// User.hasMany(Event, { foreignKey: "post_id' });
// Event.belongsTo(User, { foreignKey: "post_id' });


// export all models here
module.exports = { User, Hobby, Post, Event};
