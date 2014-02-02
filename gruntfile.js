module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nodeunit: {
            all: ['test.js']
        },

        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['nodeunit'],
                options: {
                    spawn: true,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
