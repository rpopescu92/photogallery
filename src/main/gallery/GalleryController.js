(function () {
    'use strict';

    var app = angular.module('photogallery');

    var GalleryController = function($scope, GalleryService){
        $scope.photos = [];
        $scope.photos = GalleryService.getPhotos()
            .then(function (data) {
                $scope.photos=data;
            });

    };

    app.controller('GalleryController', ['$scope', 'GalleryService', GalleryController]);

})();