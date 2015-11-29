(function () {

    'use strict';

    angular.module('photogallery')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/gallery');
            $stateProvider
                .state('gallery', {
                    url: '/gallery',
                    views: {
                        'content@': {
                            templateUrl: '../gallery/gallery.html',
                            controller: 'GalleryController'

                        }
                    }
                });
        });


})();