require('../db/connect');

GLOBAL.User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: ['created_at', 'updated_at'],
	likePost: function() {
		return this.belongsToMany(Post).through(Like);
	}
});

GLOBAL.Like = bookshelf.Model.extend({
	tableName: 'likes',
	user: function() {
		return this.belongsTo(User, 'user');
	},
	posts: function() {
		return this.belongsTo(Post, 'post');
	}
});

GLOBAL.Post = bookshelf.Model.extend({
	tableName: 'posts',
	hasTimestamps: ['created_at', 'updated_at'],
	user: function() {
		return this.belongsTo(User, "user");
	},
	comments: function() {
		return this.hasMany(Comment, "post");
	},
	likeUser: function() {
		return this.belongsToMany(User).through(Like, 'post', 'user');
	}
});
GLOBAL.Posts = bookshelf.Collection.extend({
	model: Post
});

GLOBAL.Comment = bookshelf.Model.extend({
	tableName: 'comments',
	hasTimestamps: ['created_at', 'updated_at'],
	user: function() {
		return this.belongsTo(User, "user");
	}
});
GLOBAL.Comments = bookshelf.Collection.extend({
	model: Comment
});

