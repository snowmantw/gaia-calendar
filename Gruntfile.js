
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-gaia-builder');
  grunt.initConfig({
    bower: {
      install: {
      },
      // .bowerrc would NOT work.
      options: {
        cleanBowerDir: true,
        targetDir: 'libs'
      }
    },
    jshint: {
      all: ['Gruntfile.js', '**/*.js']
    },
    gaiabuilder: {
      options: {
        depends: ['gaia-calendar'],
        targetDir: '/tmp/calendar-build'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'bower']);
  grunt.registerTask('build', ['bower', 'gaiabuilder']);
  grunt.registerTask('merge', ['bower']);
  grunt.registerTask('default', ['bower']);
}
