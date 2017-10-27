angular.module('video-player')

.component('app', {

  bindings: {

  },

  
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
  },

  templateUrl: 'src/templates/app.html'


});
