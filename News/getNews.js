const NewsAPI = require('newsapi');
const utf8 = require('utf8')
const newsapi = new NewsAPI('b48c3ce0529446039250abdbde15fe18')

module.exports = {
  getNews : function() {
    newsapi.v2.everything({
      q: 'basket',
      sources: 'lequipe, google-news, le-monde, le-parisien',
      language: 'fr',
      page: 2
    }).then(response => {
      console.log(response);
  });
  }
}