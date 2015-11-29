module.exports = function (grunt) {

    var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

    grunt.initConfig({

        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            options: {
                port: 8080,
                livereload: 35729,
                hostname: "localhost",
                base: "."
            },
            proxies: {
                context: "/services",  // When the url contains this...
                host: "api.flickr.com", // Proxy to this host
                changeOrigin: true
            },
                options:{
                    port: 9000,
                    hostname: "0.0.0.0",
                    // Prevents Grunt to close just after the task (starting the server) completes
                    // This will be removed later as `watch` will take care of that
                    keepalive: true
                }
        }
    });


    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Creates the `server` task
    grunt.registerTask('server',[
        'connect'
    ]);
};