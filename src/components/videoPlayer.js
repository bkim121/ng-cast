angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<'  
  },

  controller: function() {
    console.log(this);
  },
  // TODO

  templateUrl: 'src/templates/videoPlayer.html'
});
