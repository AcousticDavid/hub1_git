var app = app || {};

app.PostsView = Backbone.View.extend({
    el: '#posts',
    initialize: function(initPosts) {
        this.collection = new app.Posts(initPosts);
        this.render();
    },
    render: function() {
        this.collection.each(function(item) {
            this.renderPost(item);
        }, this);
    },
    renderPost: function(item) {
        var postView = new app.PostView({
            model: item
        });
        this.$el.append(postView.render().el);
    }
})