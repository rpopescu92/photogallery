(function () {
    'use strict';

    var app = angular.module('photogallery');

    var GalleryController = function($scope, GalleryService){
        $scope.photos = [];
        $scope.photos = GalleryService.getPhotos()
            .then(function (data) {
                data = data.replace(/\t/g, ' ');        //replace all tabs with space
                data = data.replace(/'/g, '"');           //replace all '' with ""
                var parsedData = JSON.parse(data);
                $scope.photos = parsedData.items;
            });

    };

    app.controller('GalleryController', ['$scope', 'GalleryService', GalleryController]);

})();