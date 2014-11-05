var auth = require("../common/auth");

app.get('/', auth.loggedOnly, function(req, res) {
    res.render('index', {
        title: req.session.user.email
    });
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {
    auth.checkUser(req.body, function(user) {
        if (user) {
            req.session.user = user;
			GLOBAL.logged = true;
            res.redirect('/');
            return;
        }
        res.redirect('/login');
    });
});

app.get('/join', function(req, res) {
    res.render('join');
});

app.post('/join', function(req, res) {
    if (req.body.password != req.body.confirm) {
        res.redirect('/join');
        return;
    }
    auth.addUser(_.omit(req.body, 'confirm'), function(user) {
        res.redirect('/login');
    });
});

app.get('/logout', function(req, res) {
    req.session.user = null;
    GLOBAL.logged = false;

    res.redirect('/login');
});

app.get('/test', function(req, res) {
	var post = Post.forge({id: 1});

	post.fetch({
		withRelated: ['user', 'comments.user', 'likeUser']
	}).then(function() {
		res.json({
			a:'a',
			post: post
		})
	});
});