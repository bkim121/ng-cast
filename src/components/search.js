angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    searchResult: '<',
    videos: '<'
  },

  controller: function(youTube) {
    this.query = '';
    this.result = () => {
      this.params = {
        params: {
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          q: this.query,
          type: 'video',
          part: 'snippet',
          videoEmbeddable: true
        }
      };
      youTube.search(this.query, this.searchResult); 
    };
  },
  

  templateUrl: 'src/templates/search.html'
});
