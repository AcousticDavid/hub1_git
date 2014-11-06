var auth = require("../common/auth");

/* POST LIST */
api.get('/posts', auth.loggedOnly, function(req, res) {
    var posts = Posts.forge();

    posts.query(function(qb) {
        qb.orderBy('created_at', 'DESC');
    }).fetch({
        withRelated: 'user'
    }).then(function() {
//        res.json({
//            posts: posts.toJSON(),
//            sessionId: req.session.user.id
//        });
        res.json(posts.toJSON());
    });
});

/* WRITE POST */
api.post('/posts', auth.loggedOnly, function(req, res) {
    req.body.user = req.session.user.id;
    var post = Post.forge(req.body);
    post.save().then(function() {
        post.fetch({
            withRelated: 'user'
        }).then(function() {
            res.json({
                status: 'ok',
                data: post.toJSON()
            });
        })
    });
});

/* DELETE POST */
api.delete('/posts/:id', auth.loggedOnly, function(req, res) {
    var loginUserId = req.session.user.id
    ,   postId = req.params.id
    ,   post = Post.forge({
        id: postId
    });

    post.fetch().then(function() {
        if (parseInt(post.get('user'), 10) !== parseInt(loginUserId, 10)) return;
        post.destroy();
    })
});

<<<<<<< HEAD

api.get('/users', function(req, res) {
	var users = Users.forge();

	users.query(function(qb) {
		qb.orderBy('created_at', 'DESC');
	}).fetch().then(function() {
		res.json(users);
	});
});

=======
/* MODIFY POST */
api.put('/posts/:id', auth.loggedOnly, function(req, res) {
    var loginUserId = req.session.user.id
    ,   postId = req.params.id
    ,   post = Post.forge({
        id: postId
    });

    post.fetch().then(function() {
        if (parseInt(post.get('user'), 10) !== parseInt(loginUserId, 10)) return;
        req.body.user = req.body.user.id;
        post.set(req.body).save().then(function() {
            res.json({
                body: req.body.body
            });
        });
    });


});
>>>>>>> remotes/origin/jungmin
