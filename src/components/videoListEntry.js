angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    click: '<'
  },

  controller: function() {  
    console.log(this);
    // this.onClick = function() {
    //   console.log('hello');
    // };
  },
  
  templateUrl: 'src/templates/videoListEntry.html'

});
