var app = app || {};

app.CommentView = Backbone.View.extend({
    className: 'comment',
    template: '\
    <div class="comment">\
        <p>body: {{body}}</p>\
    </div>\
    ',
    render: function() {
        var source   = this.template;
        var template = Handlebars.compile(source);
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
})