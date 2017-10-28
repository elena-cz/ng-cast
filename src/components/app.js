angular.module('video-player')

.component('app', {


  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.searchResults = (query = 'fishing') => {
      youTube.search(query, this.updateVideos);
    };
    
    this.debounceSearch = _.debounce(this.searchResults, 100, {'leading': true});
    
    this.onKeypress = ($event, query) => {
      this.debounceSearch(query);

    };
    
    
    this.updateVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };
     

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    
    this.init = function() {
      this.searchResults('fishing');
    };
    this.init();
  },

  templateUrl: 'src/templates/app.html'


});
