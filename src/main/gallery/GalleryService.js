(function () {
    'use strict';

    var app = angular.module('photogallery');

    app.factory('GalleryService', function ($http) {
        var getPhotos = function(){
            var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json";
            return $http.get(url)
                .then(function (data) {
                    return data.data;
                }, function (error) {
                    return error;
                });
        };
        return {
            getPhotos: getPhotos
        }

    });



})();
