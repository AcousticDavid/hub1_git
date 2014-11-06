var auth = require("../common/auth");

app.get('/users', auth.loggedOnly, function(req, res) {
	res.render('users/list', {
		title: 'User Page'
	});
});