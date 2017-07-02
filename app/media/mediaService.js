/**
 * Created by Purvi Shah on 28-06-2017.
 * Service created for calling JSONP call to iTunes API
 * Search and lookup query can be performed
 */

angular.module('musicPlayerApp').service("mediaService", function ($http) {

  var serviceUrl = "http://itunes.apple.com/";

  this.searchMedia = function (searchTerm) {
    return $http.jsonp(serviceUrl + "search", {
      params: {
        "jsonpCallbackParam": "callback",
        "term": searchTerm
      }
    });
  };

  this.lookupMedia = function (albumId) {
    return $http.jsonp(serviceUrl + "lookup", {
      params: {
        "jsonpCallbackParam": "callback",
        "id": albumId,
        "entity" :"song"
      }
    });
  };

});
