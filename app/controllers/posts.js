var auth = require("../common/auth");
//var bc = require('./base_controller');
var Promise = require('bluebird');

/* POST LIST */
app.get('/lives', auth.loggedOnly, function(req, res) {
	res.render('lives/list');

//	var posts = Posts.forge();
//
//	posts.query(function(qb) {
//		qb.orderBy('created_at', 'DESC');
//	}).fetch({
//		withRelated: 'user'
//	}).then(function() {
//		res.render('posts/list', {
//			title: 'Post',
//			hasPost: posts.length ? true : false,
//			posts: posts.toJSON()
//		});
//	});
});
app.get('/posts', auth.loggedOnly, function(req, res) {
    res.render('posts/list');

//	var posts = Posts.forge();
//
//	posts.query(function(qb) {
//		qb.orderBy('created_at', 'DESC');
//	}).fetch({
//		withRelated: 'user'
//	}).then(function() {
//		res.render('posts/list', {
//			title: 'Post',
//			hasPost: posts.length ? true : false,
//			posts: posts.toJSON()
//		});
//	});
});


/* POST CREATE */
app.get('/posts/create', auth.loggedOnly, function(req, res) {
	res.render('posts/create', {
		title: 'New Post',
		editMode: false
	})
});
app.post('/posts', auth.loggedOnly, function(req, res) {
	req.body.user = req.session.user.id;
	var post = Post.forge(req.body);
	post.save().then(function() {
		res.redirect('/posts');
	});
});


/* POST READ */
app.get('/posts/:id', auth.loggedOnly, function(req, res) {
	var post = Post.forge({id: req.params.id});

	post.fetch({
		withRelated: ['user', 'comments.user']
	}).then(function() {
		res.render('posts/read', {
			post: post.toJSON()
		});
	});
});


/* POST UPDATE */
app.get('/posts/:id/modify', auth.loggedOnly, function(req, res) {
	var post = Post.forge({id: req.params.id});

	post.fetch().then(function(post) {
		if (auth.isMine(post.get("userId"))) {
			res.render('posts/create', {
				title: 'Edit Post',
				post: post.toJSON(),
				editMode: true
			});
		}
	});
});
app.put('/posts/:id', auth.loggedOnly, function(req, res) {
	var postId = req.params.id;
	var post = Post.forge({id: postId});

	post.fetch().then(function(post) {
		if (!post) {
			res.redirect('/');
			return;
		}
		post.set(req.body).save().then(function() {
			res.redirect('/posts');
		})
	})
});


/* POST DELETE */
app.delete('/posts/:id', auth.loggedOnly, function(req, res) {
	var postId = req.params.id;
	var post = Post.forge({id: postId});

/*	bc.deleteModel(post, postId, function(err) {
		if (err) {
			// todo :: 에러처리
			console.log('에러났음');
			return;
		}
		res.redirect('/posts');
	});*/
});




/* COMMENT POST */
app.post('/posts/:id/comment', auth.loggedOnly, function(req, res) {
	req.body.user = req.session.user.id;
	req.body.post = req.params.id;

	var comment = Comment.forge(req.body);

	comment.save().then(function() {
		res.redirect('/posts/' + req.params.id);
	});
});

/* COMMENT DELETE */
app.delete('/posts/:postId/comments/:commentId', auth.loggedOnly, function(req, res) {
	var commentId = req.params.commentId;
	var comment = Comment.forge({id: commentId});

//	bc.deleteModel(comment, commentId, function(err) {
//		if (err) {
//			// todo :: 에러처리
//			return;
//		}
//		res.redirect('/posts/' + req.params.postId);
//	});
});