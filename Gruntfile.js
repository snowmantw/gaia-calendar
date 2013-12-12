
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
      vanilla: {
        options: {
          depends: ['gaia-calendar'],
          essentialPath: '/tmp/calendar-build',
          profilePath: '/tmp/calendar-build-profile'
        }
      },
      full: {
        options: {
          depends: ['gaia-calendar', 'gaia-homescreen'],
          essentialPath: '/tmp/calendar-build-full',
          profilePath: '/tmp/calendar-build-full-profile'
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'bower']);
  grunt.registerTask('build-vanilla', ['bower', 'gaiabuilder:vanilla']);
  grunt.registerTask('build-full', ['bower', 'gaiabuilder:full']);
  grunt.registerTask('merge', ['bower']);
  grunt.registerTask('default', ['bower']);
};
