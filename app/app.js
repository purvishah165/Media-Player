'use strict';

/**
 * @ngdoc overview
 * @name musicPlayerApp
 * @description
 * # musicPlayerApp
 *
 * Main module of the application.
 */
angular
  .module('musicPlayerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'media/mediaController.html',
        controller: 'mediaController',
        controllerAs: 'mediaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain. **.
      'http://itunes.apple.com/**'
    ])});
