module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.initConfig({
        serve: {
            options: {
                port: 9000,
                'client.js': {
                    tasks: ['html2js', 'concat'],
                    output: 'index.html'
                }
            }
        }
    });

    grunt.registerTask('default', ['serve', 'concat', 'html2js']);

};