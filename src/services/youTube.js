angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  
  this.search = function(params, callback) {
  
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: 'AIzaSyCE9VGr5keNEGZe7D7GAO7TKRseQicA7hc', 
        maxResults: 5,
        q: params,
        type: 'video',
        part: 'snippet',
        videoEmbeddable: true
      }
    }).then((response) => {
      callback(response.data.items);
    }, function(response) {
      console.log(response);
    });
  };
  

});
