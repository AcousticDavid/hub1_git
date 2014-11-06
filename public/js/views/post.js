var app = app || {};

app.PostView = Backbone.View.extend({
    className: 'post',
    template: '\
    <div class="post">\
        <div class="thumbnail">\
            <div class="caption">\
                <input type="hidden" name="post" value="{{id}}" />\
                <input type="hidden" name="user_id" value="{{user.id}}" />\
                <p>id: {{id}}</p>\
                <p>name: {{user.name}}</p>\
                <div class="post-body">\
                <p>body: {{body}}</p>\
                <button class="setModify">수정</button>\
            </div>\
            <div class="post-edit-body" style="display: none;">\
                <textarea>{{body}}</textarea>\
                    <button class="modifyPost">수정완료</button>\
                </div>\
                <div class="btn">\
                    <button class="delPost">삭제</button>\
                </div>\
            </div>\
            <div class="commentsWrap">\
                <div class="commentWrite">\
                    <label style="display: block;color: #000;">코멘트!</label>\
                    <textarea class="commentBody" rows="3" cols="100" style="color: #000;"></textarea>\
                    <button class="writeComment" style="display: inline-block;color: #000;border: 1px solid blue;">게시</button>\
                </div>\
            </div>\
        </div>\
    </div>\
    ',
    events: {
        'click .delPost': 'deletePost',
        'click .setModify': 'setModify',
        'click .modifyPost': 'modifyPost',
        'click .writeComment': 'writeComment'
    },
    deletePost: function() {
        this.model.destroy();
        this.remove();
    },
    setModify: function() {
        this.setMode('EDIT');
    },
    modifyPost: function() {
        this.model
            .save({
                body: this.$el.find('.post-edit-body textarea').val()
            }).then(_.bind(function(results) {
                if (!results) return;
                this.model.set(results)
                this.setMode('READ');
                this.render();
            }, this));
    },
    setMode: function(mode) {
        if (mode === 'EDIT') {
            this.$el.find('.post-body').hide();
            this.$el.find('.post-edit-body').show();
            return;
        }
        this.$el.find('.post-body').show();
        this.$el.find('.post-edit-body').hide();
    },
    render: function() {
        var source   = this.template;
        var template = Handlebars.compile(source);
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
})