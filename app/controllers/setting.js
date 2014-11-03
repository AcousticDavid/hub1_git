var auth = require("../common/auth");
//var bc = require('./base_controller');


/* SETTING  LIST */
app.get('/setting', auth.loggedOnly, function(req, res) {
	res.render('setting/main', {

	})
});


/* SETTING  CREATE */
app.get('/posts/create', auth.loggedOnly, function(req, res) {

});
app.post('/posts', auth.loggedOnly, function(req, res) {

});


/* SETTING  READ */
app.get('/posts/:id', auth.loggedOnly, function(req, res) {

});


/* SETTING  UPDATE */
app.get('/posts/:id/modify', auth.loggedOnly, function(req, res) {

});
app.put('/posts/:id', auth.loggedOnly, function(req, res) {

});


/* SETTING  DELETE */
app.delete('/posts/:id', auth.loggedOnly, function(req, res) {

});