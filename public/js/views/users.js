var app = app || {};

app.UserView = Backbone.View.extend({
	className: 'user',

	template: Handlebars.compile('\
            <p>{{name}}</p>\
        '),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

app.UsersView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);

		this.collection.fetch();
	},

	render: function() {
		this.collection.each(function(model) {
			new app.UserView({
				model: model
			}).render().$el.appendTo(this.$el);
		}, this);
	}
});

app.UserInviteView = Backbone.View.extend({
	tagName: 'form',

	className: 'col-md-4 col-md-offset-4 text-left',

	template: Handlebars.compile('\
		<div class="form-group">\
			<label for="iu_name">성함</label>\
			<input type="email" class="form-control" id="iu_name" placeholder="초대받으시는 분의 성함을 입력해주세요">\
		</div>\
		<div class="form-group">\
			<label for="iu_email">Email address</label>\
			<input type="email" class="form-control" id="iu_email" placeholder="초대받으시는 분의 이메일 주소를 입력해주세요">\
		</div>\
		<div class="form-group">\
			<label for="iu_phone">Password</label>\
			<input type="password" class="form-control" id="iu_phone" placeholder="초대받으시는 분의 핸드폰번호를 입력해주세요">\
		</div>\
		<button type="button" class="btn btn-default" btn-cancel>Cancel</button>\
		<button type="button" class="btn btn-primary" btn-submit>Submit</button>\
	'),

	events: {
		'click [btn-submit]': 'submit',
		'click [btn-cancel]': 'cancel'
	},

	submit: function(e) {
		var invitedUser = this.model;

		invitedUser.set({
			name: this.$el.find('#iu_name').val(),
			email: this.$el.find('#iu_email').val(),
			phone: this.$el.find('#iu_phone').val()
		}).save().then(_.bind(function() {
			this.cancel();
		}, this));
	},

	cancel: function(e) {
		$('#layer').fadeOut(300, _.bind(function() {
			this.$el.remove();
		}, this));
	},

	render: function() {
		this.$el.html(this.template);
		return this;
	}
});