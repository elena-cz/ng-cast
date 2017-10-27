angular.module('video-player')
.component('videoListEntry', {
  
  bindings: {
    video: '<',
    onClick: '<',
    index: '<'
  },

  controller: function() {
    
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
