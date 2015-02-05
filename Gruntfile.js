/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.

    dirs: {
      srcJs: 'js/foundation',
      srcCss: 'css',
      dest: 'dist',
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: ['<%= dirs.srcJs %>/*.js'],
        dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
      },
      css: {
        src: ['<%= dirs.srcCss %>/normalize.css','<%= dirs.srcCss %>/foundation.css'],
        dest: '<%= dirs.dest %>/<%= pkg.name %>.css'
      }
    },
    uglify: {
      js: {
        files: {
          '<%= dirs.dest %>/<%= pkg.name %>.min.js': ['<%= dirs.dest %>/<%= pkg.name %>.js']
        }
      }
    },
    cssmin: {
      add_banner: {
        keepSpecialComments: 0,
        files: {
          '<%= dirs.dest %>/<%= pkg.name %>.min.css': ['<%= dirs.dest %>/<%= pkg.name %>.css']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['concat','uglify','cssmin']);

};
