var app = app || {};

app.Model = Backbone.Model.extend({
});
app.Collection = Backbone.Collection.extend({
});


Live = Backbone.Model.extend({
	urlRoot: '/api/lives'
});
Lives = Backbone.Collection.extend({
	model: Live,
	url: '/api/lives'
});