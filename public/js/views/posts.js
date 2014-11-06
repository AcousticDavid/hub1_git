var app = app || {};

app.PostsView = Backbone.View.extend({
    el: '#posts',
    initialize: function() {
        this.collection = new app.Posts();
        this.collection.fetch({reset: true});
//        this.render();

        this.listenTo( this.collection, 'add', this.renderPost);
        this.listenTo( this.collection, 'reset', this.render);
    },
    getPostView: function(item) {
        return new app.PostView({
            model: item
        });
    },
    render: function() {
        var self = this;
        this.collection.each(function(item) {
            var postView = self.getPostView(item);
            this.$el.append(postView.render().el);
        }, this);
    },
    renderPost: function(item) {
        var postView = this.getPostView(item);
        this.$el.prepend(postView.render().el);
    }
});