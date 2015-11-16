// Generated on 2015-11-16 using
// generator-webapp 1.1.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Make sure code styles are up to par and there are no obvious mistakes
    eslint: {
      target: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js',
        '!<%= config.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      app: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: 'images'
        }]
      }
    }

  });

  grunt.registerTask('images', [
    'imagemin:app'
  ]);

  grunt.registerTask('default', [
    'imagemin:app'
  ]);

};
