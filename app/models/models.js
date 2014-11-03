require('../db/connect');

GLOBAL.User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: ['created_at', 'updated_at']
});

GLOBAL.Post = bookshelf.Model.extend({
	tableName: 'posts',
	hasTimestamps: ['created_at', 'updated_at'],
	user: function() {
		return this.belongsTo(User, "userId");
	},
	category: function() {
		return this.belongsTo(Category, "categories");
	},
	comments: function() {
		return this.hasMany(Comment, "postId");
	}
});
GLOBAL.Posts = bookshelf.Collection.extend({
	model: Post
});

GLOBAL.Comment = bookshelf.Model.extend({
	tableName: 'comments',
	hasTimestamps: ['created_at', 'updated_at'],
	user: function() {
		return this.belongsTo(User, "userId");
	}
});
GLOBAL.Comments = bookshelf.Collection.extend({
	model: Comment
});

GLOBAL.Category = bookshelf.Model.extend({
	tableName: 'categories',
	hasTimestamps: ['created_at', 'updated_at']
});
GLOBAL.Categories = bookshelf.Collection.extend({
	model: Category
});