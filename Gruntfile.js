'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      app: ['sampleSite'],
      assets: ['./assets'],
      css: ['./sass/app.scss'],
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false,
          noCache: true
        },
        files: {
          '<%= project.assets %>/css/app.css':'<%= project.css %>'
        }
      }
    },
    watch: {
      sass: {
        files: './sass/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'watch'
  ]);

};