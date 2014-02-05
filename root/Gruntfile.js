module.exports = function(grunt) {
'use strict';

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */\n'
    // Task configuration.
    clean: {
      build: ["<%= pkg.htdocs %>/**/*.{css|js|png|jpg|gif}"],
      tmp: ["<%= pkg.htdocs %>/css/pre/*.css", "<%= concat.dist.dest %>"]
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/js/*.js'],
        dest: '<%= pkg.htdocs %>/js/divided/<%= pkg.name %>.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= pkg.htdocs %>/js/script.min.js'
      },
    },
    copy: {
      files: [
        {expand: true, cwd: 'lib/', src: ['*.js'], dest: '<%= pkg.htdocs %>/js'},
        {expand: true, cwd: 'lib/', src: ['*.css'], dest: '<%= pkg.htdocs %>/css'}
      ]
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      files: {
        expand: true,
        flatten: true,
        src: 'src/*.css',
        dest: '<%= pkg.htdocs %>/css/pre/'
      }
    },
    cssmin: {
      compress: {
        files: {
          '<%= pkg.htdocs %>/css/style.min.css': ['<%= autoprefixer.files.dest %>*.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.{jpg,gif}',
          dest: '<%= pkg.htdocs %>'
        }]
      }
    },
    pngmin: {
      compile: {
        options: {
          ext: '.png'
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.{jpg,gif}',
          dest: '<%= pkg.htdocs %>'
        }]
      }
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
      js:{
        files: ['src/**/*.js'],
        tasks: ['concat', 'ugrify']
      },
      css:{
        files: ['src/**/*.css'],
        tasks: ['autoprefixer', 'cssmin']
      },
      img:{
        files: ['src/**/*.{png,jpg,gif}'],
        tasks: ['imagemin', 'pngmin']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-pngmin');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'clean:build', 'autoprefixer', 'cssmin', 'clean:tmp', 'imagemin', 'pngmin', 'concat', 'uglify']);

};
