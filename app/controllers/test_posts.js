var auth = require("../common/auth");
//var bc = require('./base_controller');
var Promise = require('bluebird');


/* API POST LIST */
//app.get('/api/posts', auth.loggedOnly, function(req, res) {
//    var posts = Posts.forge();
//    posts.query(function(qb) {
//        qb.orderBy('created_at', 'DESC');
//    }).fetch({
//        withRelated: 'user'
//    }).then(function() {
//        res.json({
//            title: 'Post',
//            hasPost: posts.length ? true : false,
//            posts: posts.toJSON()
//        });
//    });
//});


/* POST TEST */
app.get('/test_posts', auth.loggedOnly, function(req, res) {
    res.render('test_posts');
});


