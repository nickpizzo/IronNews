_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var API_ROOT = 'https://iron-news.herokuapp.com/articles';


var Article = Backbone.Model.extend({

  fetchArticleList: function() {
     $.get(API_ROOT, function(data) {
        console.log(data); // for motivational purposes
        return data; //i.e. return "articleList"
      });
  },

  createCompleteArticles: function() {
    $.each(this.fetchArticleList(), function(i, list) {
      $.post(API_ROOT, [list.title, list.url, list.submitter], function(data) {
        console.log(data);
      });
    });
  },

  fetchCompleteArticles: function() {
    $.each(this.fetchArticleList(), function(i, list) {
      $.get(API_ROOT + '/' + list.id, function() {

      })
    })
  },

  postComment: function() {

  },

  upvote: function() {

  }
});


//our "initializer"
var yourface = new Article().fetchArticleList();








// var ArticleCollection = Backbone.Collection.extend({
//   // model: article;
//   // url:
//
// });
//
//
//
var LineView = Backbone.View.extend({
  template: _.template($('#lineTemplate').text()),

  render: function() {
  }
});

var PageView = Backbone.View.extend({
  template: _.template($('#pageTemplate').text()),

  render: function() {
  }
});
