
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.initConfig({
    bower: {
      install: {
      },
      // .bowerrc would NOT work.
      options: {
        targetDir: 'lib'
      }
    },
    jshint: {
      all: ['Gruntfile.js', '**/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'bower']);
  grunt.registerTask('default', ['bower']);
}
