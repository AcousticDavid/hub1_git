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


api.get('/users', function(req, res) {
	var users = Users.forge();

	users.query(function(qb) {
		qb.orderBy('created_at', 'DESC');
	}).fetch().then(function() {
		res.json(users);
	});
});

