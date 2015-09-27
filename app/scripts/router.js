var Router = Backbone.Router.extend({
  routes: {
    ':iasudgh/comments': 'showComments',
    '': "showPage"
  },

  showComments: function () {

  },

  showPage: function () {
    this.navigate('', {
      trigger: true
    });

    //call render() of the individual views within this block

  },

  initialize: function () {
    this.articleCollection = new ArticleCollection({
      model: Article()
      //model: Article,  ...not sure

      //this.article = new Article({});  ???
    });

    this.lineView = new LineView({model: this.article});  // ???
    this.pageView = new PageView({model: this.articleCollection});
    //this.reposView = new ReposView({repos: []}); // do we also need an array?
    Backbone.history.start();
  }

});
