(function () {
    'use strict';

    var app = angular.module('photogallery');

    app.factory('GalleryService', function ($http) {
        var getPhotos = function(word){
            var request = {
                method: 'GET',
                url: '/resh/controller',
                headers: {
                    'hostname':'api.flickr.com',
                    'port':'null',
                    'path':'/services/feeds/photos_public.gne?tags='+word+'&tagmode=all&format=json'
                }
            };
            return $http(request)
                .then(function (data) {
                    if(data.status == 500) {
                        return {};
                    }
                    //test.slice(test.indexOf('{'), test.length-1)
                    return data.data.slice(data.data.indexOf('{'), data.data.length-1); // the response is not a json
                });
        };
        return {
            getPhotos: getPhotos
        }

    });

})();
