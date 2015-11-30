(function () {
    'use strict';

    var app = angular.module('photogallery');

    app.factory('GalleryService', function ($http) {
        var getPhotos = function(){
            ///resh/controller
            var url = "/resh/controller";
            return $http.get(url)
                .then(function (data) {
                    //test.slice(test.indexOf('{'), test.length-1)
                    return data.data.slice(data.data.indexOf('{'), data.data.length-1); // the response is not a json
                }, function (error) {
                    return error;
                });
        };
        return {
            getPhotos: getPhotos
        }

    });



})();
