Handlebars.registerHelper('entered', function(options) {
	return new Handlebars.SafeString(options.fn(this).replace(/\r\n/g, '<br>'));
});

var LiveView = Backbone.View.extend({
	tagName: 'div',
	className: 'live_view',

	template: '\
		<div class="post">\
			<div class="thumbnail">\
				<div class="caption">\
					<h3>{{title}}</h3>\
					<p>작성자 : {{user.name}}</p>\
					<p class="body">{{#entered}}{{body}}{{/entered}}</p>\
					<p><a href="/posts/{{id}}" class="btn btn-primary" role="button">read</a></p>\
				</div>\
			</div>\
		</div>\
	',

	render: function() {
		var _template = Handlebars.compile(this.template);
		this.$el.html(_template(this.model.attributes));
		return this;
	}
});

var ListView = Backbone.View.extend({
	container : null,

	initListView: function() {
		this.$el.addClass('list_view_live_scroll');
		console.log();
		$(window).scroll(_.bind(function(e) {

			console.log('height', $('body').prop('scrollHeight'));
			console.log('scroll --------', $(e.currentTarget));
		}, this));
	},

	append: function($el) {
		this.$el.append($el);
	}
});

var LivesView = Backbone.View.extend({
	tagName: 'div',
	className: 'lives_view',

	initialize: function() {
		this.listenTo(this.collection, 'add', this.draw);
		this.listenTo(this.collection, 'sync', this.draw);

		if (!this.collection.length) return;

		this.draw();
	},

	draw: function() {
		// TODO 있던 애는 다시 그리지 않도록 처리해야 할 듯
		this.$el.html('');
		this.collection.forEach(_.bind(function(model) {
			var liveView = new LiveView({
				model: model
			});
			liveView.render().$el;
		}, this));
	}
});




