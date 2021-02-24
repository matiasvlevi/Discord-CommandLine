module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                //Add your files in the `src` array (order matters):
                src: [
                    'src/imports.js',
                    'src/defaultCommands.js',
                    'user/commands.js',
                    'src/bot.js'
                ],
                dest: 'build/index.js'
            },
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');

}
