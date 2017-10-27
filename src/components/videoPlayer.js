angular.module('video-player')

.component('videoPlayer', {
  
  bindings: {
    video: '<'
  },
  
  controller: function() {
    console.log(this.video);
    
    // this.buildURL = function(video) {
    //   return 'https://www.youtube.com/embed/' + video.id.videoId;
    // };
    
    this.buildURL = function() {
      return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    };
    
    
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
  
});
