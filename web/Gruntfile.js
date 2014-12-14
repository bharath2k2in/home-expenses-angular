module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        'http-server': {
            'dev': {
                port: 8080,
                host: "127.0.0.1"
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'js/**/*.js',
                '!js/vendor/**/*.js',
            ]
        }
    })
    ;

    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('serve', ['http-server:dev']);

};