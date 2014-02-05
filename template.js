/*
 * grunt-init-localsite
 * Copyright (c) 2014, Wicker Wings
 * http://www.wi-wi.jp/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * http://gruntjs.com/
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a local web project, including Nodeunit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  
  var exchanges = ['homepage'];

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository_name', 'nas'),
    init.prompt('repository'),
    init.prompt('repository_branch', 'master'),
    init.prompt('homepage', 'http://{%= name %}.com'),
    init.prompt('htdocs', './htdocs'),
    init.prompt('bugs'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version'),
    init.prompt('main'),
    init.prompt('npm_test', 'grunt nodeunit')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      'grunt-contrib-concat': '~0.3.0',
      'grunt-contrib-uglify': '~0.2.0',
      'grunt-contrib-jshint': '~0.6.0',
      'grunt-contrib-nodeunit': '~0.2.0',
      'grunt-contrib-watch': '~0.4.0',
      "grunt-contrib-clean": "~0.5.0",
      "grunt-pngmin": "~0.6.1",
      "grunt-autoprefixer": "~0.6.4",
      "grunt-contrib-imagemin": "~0.5.0",
      "grunt-contrib-cssmin": "~0.7.0"
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Custom props exchange.
    for( var i in props ){
      if( exchanges.indexOf(i) !== -1 ){
        var val = props[i];
        props[i] = val.replace(/{%= (.+?) %}/g, function(a, b){return props[b]||'';} );
      }
    }

    var writePackageJSONcallback = function(pkg, props){

      pkg.public_html = props.public_html;

      return pkg;
    };

    // Generate package.json file.
    init.writePackageJSON('package.json', props, writePackageJSONcallback);

    var async = require('./lib/async.js');
    async.series([
      function(callback){
        if( !props.repository_name ){
          callback(null, '');
          return;
        }
        var exec = require('child_process').exec;

        var command = 'git init';
        exec(command, function(error, result, stderr){
          callback(null, !error);
        });
      },
      function(callback){
        if( !props.repository_name ){
          callback(null, '');
          return;
        }
        var exec = require('child_process').exec;

        var command = 'git add .';
        exec(command, function(error, result, stderr){
          callback(null, !error);
        });
      },
      function(callback){
        if( !props.repository_name ){
          callback(null, '');
          return;
        }
        var exec = require('child_process').exec;

        var command = 'git remote add '+props.repository_name +' '+props.repository;
        exec(command, function(error, result, stderr){
          callback(null, !error);
        });

      }
    ],function(err, result){
      done(!err);
    });

  });

};
