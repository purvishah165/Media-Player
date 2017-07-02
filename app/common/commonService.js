/**
 * Created by Purvi Shah on 28-06-2017.
 * Service created for checking device type
 */

angular.module('musicPlayerApp').service("commonService", function ($window) {

  this.detectMob = function () {
    return ($window.innerWidth <= 425 && $window.innerHeight <= 768);
  };

});
