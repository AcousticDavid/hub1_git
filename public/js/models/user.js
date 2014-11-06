var app = app || {};

app.User = Backbone.Model.extend({
	url: '/api/users'
});

app.InvitedUser = Backbone.Model.extend({
	url: '/api/invited_users'
});