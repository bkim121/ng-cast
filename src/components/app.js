angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    console.log(this.currentVideo);
    
    this.selectVideo = function() {
      console.log(this);
    };                                           
  },

  templateUrl: 'src/templates/app.html'
}
);


    // angular.forEach(this.videos, function(entry) {
    //   console.log(entry);
    // });
    // console.log(this.data);