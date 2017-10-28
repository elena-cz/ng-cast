angular.module('video-player')

.component('videoPlayer', {
  
  bindings: {
    video: '<'
  },
  
  controller: function() {
    
    //console.log(this.video);  THIS IS UNDEFINED
    
  
    // Controller did not recognize this.video unless it was inside a function invoked from the HTML
    // Option 1: Passed video as parameter from HTML
    // this.buildURL = function(video) {
    //   return 'https://www.youtube.com/embed/' + video.id.videoId;
    // };
    //Option 2: Invoke function from within HTML without a parameter
    this.buildURL = function() {
      return 'https://www.youtube.com/embed/' + this.video.id.videoId;
    };
    

  },
  
  templateUrl: 'src/templates/videoPlayer.html'
  
});
