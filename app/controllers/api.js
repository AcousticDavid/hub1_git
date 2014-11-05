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
