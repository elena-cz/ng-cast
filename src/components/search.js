angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    result: '<',
    onKeypress: '<'
  },
  
  controller: function() {
    this.query = ''; 
    
  },
  
  templateUrl: 'src/templates/search.html' 
});
