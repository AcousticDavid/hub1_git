var auth = require("../common/auth");

/* POST LIST */
api.get('/posts', function(req, res) {
    var posts = Posts.forge();

    posts.query(function(qb) {
        qb.orderBy('created_at', 'DESC');
    }).fetch({
        withRelated: 'user'
    }).then(function() {
        res.json({
            posts: posts.toJSON()
        });
    });
});


api.get('/lives', auth.loggedOnly, function(req, res) {
	var posts = Posts.forge();

	posts.query(function(qb) {
		qb.orderBy('created_at', 'DESC');
	}).fetch({
		withRelated: 'user'
	}).then(function() {
		res.json(posts);
	});
});


api.get('/lives/:id', auth.loggedOnly, function(req, res) {
    var post = Post.forge({
        id: this.params.id
    });

    post
        .fetch({
            withRelated: 'user'
        }).then(function() {
            res.json(post);
        });
});