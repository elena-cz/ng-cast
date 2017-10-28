angular.module('video-player')

.component('app', {


  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.query = '';
    
    this.nextPageToken = undefined;
    this.prevPageToken = undefined;

    
    // Update videos for new search
    this.searchResults = (query) => {
      this.query = query;
      youTube.search(query, this.updateVideos);
    };
    
    this.debounceSearch = _.debounce(this.searchResults, 100, {'leading': true});
    
    this.onKeypress = ($event, query) => {
      this.debounceSearch(query);

    };
    
    this.updateVideos = (data) => {
      this.videos = data.items;
      this.currentVideo = this.videos[0];
      this.nextPageToken = data.nextPageToken;
      this.prevPageToken = data.prevPageToken;
    };


    // Get new videos on "Load More" click
    this.getMoreVideos = (data) => {
      this.videos = this.videos.concat(data.items);
      this.nextPageToken = data.nextPageToken;
      this.prevPageToken = data.prevPageToken;
    };
    
    this.searchNextPage = () => {
      console.log('load more clicked');
      youTube.search(this.query, this.getMoreVideos, this.nextPageToken); 
    };
    
     
     
    // Change current video when user clicks video entry
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    
    

    //Initialize with default search results
    this.init = function() {
      this.searchResults('light painting');
    };
    this.init();
  },

  templateUrl: 'src/templates/app.html'


});
