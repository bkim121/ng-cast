angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    console.log(this.currentVideo);
    
    this.selectVideo = (url) => {
      console.log(url);
      console.log(this.videos);
      for (var i = 0; i < this.videos.length; i++) {
        if (url === this.videos[i].id.videoId) {
          this.currentVideo = exampleVideoData[i];
        }
      }
    };                                           
  },

  templateUrl: 'src/templates/app.html'
}
);


    // angular.forEach(this.videos, function(entry) {
    //   console.log(entry);
    // });
    // console.log(this.data);