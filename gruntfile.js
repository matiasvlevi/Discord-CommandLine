module.exports = function(grunt) {
    const config = {
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
    }

    grunt.initConfig(config);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadTasks('tasks');
    grunt.registerTask('build',[
        'concat'
    ]);
    grunt.registerTask('setup', [
        'write'
    ]);
}
