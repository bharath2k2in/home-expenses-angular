module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        'http-server': {
            'dev': {
                port: 8080,
                host: "127.0.0.1"
                //root: '/'
            }
        }
    })
    ;

    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('serve', ['http-server:dev']);

};