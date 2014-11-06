var auth = require("../../common/auth");

/* WRITE COMMENTS */
api.post('/comments', auth.loggedOnly, function(req, res) {
    req.body.user = req.session.user.id;

    var comment = Comment.forge(req.body);
    comment.save().then(function() {
       console.log(9, comment)
    });

//    var comment = Comment.forge(req.body);
//    comment.save().then(function() {
//        post.fetch({
//            withRelated: 'user'
//        }).then(function() {
//            res.json({
//                status: 'ok',
//                data: post.toJSON()
//            });
//        })
//    });
});

