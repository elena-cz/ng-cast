angular.module('video-player')
.service('youTube', function() {
  // TODO
  
  this.search = function() {
    $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      data: {
        part: "snippet",
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: "video",
        videoEmbeddable: "true",
        q: 'fish'
      },
    
    
    }).then(function successCallback(response) {
      console.log("SUCCESS", response);
      
    }), function errorCallback(response) {
      console.log("FAIL", response);
    };
  };
  
  
});
