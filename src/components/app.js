angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
  
    
    this.selectVideo = (url) => { 
      for (var i = 0; i < this.videos.length; i++) {
        if (url === this.videos[i].id.videoId) {
          this.currentVideo = exampleVideoData[i];
        }
      }
    };
    
    this.updateVideos = (videos) => {
      this.videos = videos;
      this.selectedVideo = this.videos[0];
    };
    
    this.updateVideos(exampleVideoData);
    
    this.searchResults = (response) => {
      this.videos = response;
      this.currentVideo = this.videos[0];  
    };

    youTube.search('damn it', this.searchResults);   
  },

  templateUrl: 'src/templates/app.html'
}
);


    // angular.forEach(this.videos, function(entry) {
    //   console.log(entry);
    // });
    // console.log(this.data);