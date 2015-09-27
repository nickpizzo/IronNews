_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

const API_ROOT = 'https://iron-news.herokuapp.com/articles';

var Article = Backbone.Model.extend({
  fetchArticleList: function() {
     $.get(API_ROOT, function(data) {
        return data; //i.e. returns array of 25 objects
      });
  },

  createCompleteArticles: function() {
    var arr = this.fetchArticleList();
    for(i=0; i<arr.length; i++) {
      $.post(API_ROOT, [arr[i].title, arr[i].url, arr[i].submitter], function() {
        return data;  // doesn't work
      });
    };
  },

  fetchCompleteArticles: function() {
    $.each(this.fetchArticleList(), function(i, list) {
      $.get(API_ROOT + '/' + list.id, function() {

      })
    })
  },

  postComment: function() {
    //$.post(API_ROOT + article.id + '/comments',[article_id, name, email, message], function() {})
  },

  upvote: function() {
    //$.post(API_ROOT/vote... makes no sense, can't specify article being upvoted)
  }
});


//our test "initializer"

var yourface = new Article().createCompleteArticles();



var ArticleCollection = Backbone.Collection.extend({
  model: Article(),

});


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
