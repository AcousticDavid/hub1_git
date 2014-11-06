module.exports = {
    loggedOnly: function(req, res, next) {
		req.session.user = {
			id: 1,
			name: '김병진',
			test: 'test',
			email: 'darkkbj@gmail.com'
		};
		GLOBAL.logged = true;
        if (!req.session.user) {
            res.redirect("/login");
            return;
        }
        next();
    },
    addUser: function(userInfo, next) {
        var user = User.forge(userInfo);
        user.save().then(function() {
            next(user);
        });
    },
    checkUser: function(userInfo, next) {
        User.forge(userInfo).fetch().then(function(user) {
            next(user);
        });
    },
	isMine: function(targetId) {
		return (targetId == req.session.user.id);
	}
};