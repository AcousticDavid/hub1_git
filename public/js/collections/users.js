var app = app || {};

app.Users = Backbone.Collection.extend({
	model: app.User,
	url: '/api/users'
});

app.InvitedUsers = Backbone.Collection.extend({
	model: app.InvitedUser,
	url: '/api/invited_users'
});