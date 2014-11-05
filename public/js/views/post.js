var app = app || {};

app.PostView = Backbone.View.extend({
    className: 'post',
//    template: Handlebars.compile($("#post").html()),
//    template: _.template($('#post').html()),
    render: function() {
//        console.log(8, Handlebars.compile($("#post").html()))
        var source = $('#post').html();
        var template = Handlebars.compile(source);
        var data = this.model.toJSON();
        var html = template(data);
        console.log(13, data);
        console.log(14, html);
        this.$el.html(html);
        return this;
    }
})