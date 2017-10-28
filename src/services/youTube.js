angular.module('video-player')
//Dependencies: $http
.service('youTube', function($http) {
  // TODO
  
  this.search = function(query, callback) {
    $http({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        "part": "snippet",
        "maxResults": 5,
        "key": window.YOUTUBE_API_KEY,
        "type": "video",
        "videoEmbeddable": "true",
        "q": query
      },
    
    
    }).then(function successCallback(response) {
      console.log("SUCCESS", response.data.items);
      callback(response.data.items);
      
    }), function errorCallback(response) {
      console.log("FAIL", response);
    };
  };
  
  
});
