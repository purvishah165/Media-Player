'use strict';

/***
 * Main controller for music player application
 */
angular.module('musicPlayerApp')
  .controller('mediaController', function ($scope, mediaService, commonService, $sce) {
    var vm = this;
    vm.searchTerm = '';
    vm.searching = false;
    vm.mediaResults = [];
    vm.searching = false;
    vm.showAlbumDetails = false;
    vm.previewUrl = '';
    vm.mobile = commonService.detectMob();

    vm.searchMedia = function () {
      vm.searching = true;
      var mediaResponse = mediaService.searchMedia(vm.searchTerm);
      mediaResponse.then(function (data) {
        if (angular.isDefined(data.data)) {
          vm.mediaResults = data.data.results;
          vm.searching = false;
        }
      }, function (data) {
        //Error handling
      });
    };


    vm.playMedia = function (item) {
      deselectAll();
      item.isSelected = true;
      vm.title = item.trackName || item.collectionName;
      vm.artist = item.artistName;
      vm.previewUrl = $sce.trustAsResourceUrl(item.previewUrl);
      if (vm.mobile) {
        vm.showMedia = true;
      }
      else {
        vm.showMedia = false;
        var albumResponse = mediaService.lookupMedia(item.collectionId);
        albumResponse.then(function (data) {
          if (angular.isDefined(data.data)) {
            vm.albumResults = data.data.results;
            vm.searching = false;
            vm.showAlbumDetails = true;
            if (data.data.results[0]) {
              vm.albumDetails = data.data.results[0];
              vm.albumName = data.data.results[0].collectionName;
            }
          }
        }, function (data) {
          //Error handling
        });
      }
    };

    function deselectAll() {
      vm.mediaResults.forEach(function(media) {
        media.isSelected = false;
      })
    }

    vm.closeMedia = function () {
      vm.previewUrl = '';
      vm.showMedia = false;
    };

  });
