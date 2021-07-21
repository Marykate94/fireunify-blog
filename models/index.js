const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create association
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsToMany(Post, {
    through: Vote, 
    as: 'voted_posts', 
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote, 
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.

module.exports = { User, Post };