module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    autoprefixer: {
        dist: {
            options: {
              browsers: ['last 2 version', 'ie 8', 'ie 9', 'Firefox > 20'],
              flatten: true
            },
            files: {
                'css/styles.css': 'css/styles.css'
            }
        }
    },
   
    /*concat: {
      basic: {
        src: ['js/html5shiv.js', 'js/respond.js'],
        dest: 'js/build/shiv-respond.js',
      },
      extras: {
        src: ['js/jquery-1.11.1.min.js', 'js/bootstrap-custom.min.js'],
        dest: 'js/build/jquery-bootstrap.js',
      },
    },*/
    
    copy: {
      main: {
        files: [
          // Foundation
          {
            src: 'bower_components/foundation/js/foundation.min.js',
            dest: 'js/build/foundation.min.js',
          },
          // jQuery
          {
            src: 'bower_components/jquery-legacy/dist/jquery.min.js',
            dest: 'js/build/jquery.min.js',
          },
          // HTML5Shiv
          {
            src: 'bower_components/html5shiv/html5shiv.min.js',
            dest: 'js/build/html5shiv.min.js'
          },
          // Respond JS
          {
            src: 'bower_components/respond/dest/respond.min.js',
            dest: 'js/build/respond.js'
          },
          // Modernizr
          {
            src: 'bower_components/modernizr/modernizr.js',
            // Initially the custom modernizr will be ALL of modernizr.
            dest: 'js/build/modernizr-custom.js'
          }
        ]
      },
    },

    // BECAUSE autoprefixer uncompresses files we need to recompress!
    csso: {             
          compress: {
              options: {
                  report: 'min'
              },
              files: {
                  'css/styles.min.css': 'css/styles.css'
              }
          }
      },

    // COMPRESS THOSE IMAGES!
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
      }
    },
    
    modernizr: {

      dist: {
          // [REQUIRED] Path to the build you're using for development.
          "devFile" : "bower_components/modernizr/modernizr.js",

          // Path to save out the built file.
          "outputFile" : "js/build/modernizr-custom.js",

          // Based on default settings on http://modernizr.com/download/
          "extra" : {
              "shiv" : true,
              "printshiv" : false,
              "load" : true,
              "mq" : false,
              "cssclasses" : true
          },

          // Based on default settings on http://modernizr.com/download/
          "extensibility" : {
              "addtest" : false,
              "prefixed" : false,
              "teststyles" : false,
              "testprops" : false,
              "testallprops" : false,
              "hasevents" : false,
              "prefixes" : false,
              "domprefixes" : false,
              "cssclassprefix": ""
          },

          // By default, source is uglified before saving
          "uglify" : true,

          // Define any tests you want to implicitly include.
          //"tests" : [],

          // By default, this task will crawl your project for references to Modernizr tests.
          // Set to false to disable.
          "parseFiles" : true,
      }

    },
    
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/styles.css': 'css/scss/styles.scss'
        }        
      }
    },
    
    // Project configuration.
    uglify: {
      my_target: {
        files: {
          /*'js/build/shiv-respond.min.js': ['js/build/shiv-respond.js'],*/
        }
      }
    },

    watch: {
      options: {
                livereload: true
      },
      grunt: { files: ['Gruntfile.js'] },

      css: {
        files: ['*.scss', 'css/scss/*.scss'],
        tasks: ['sass', 'autoprefixer', 'csso'],
        options: {
          spawn: false
        }
      },

    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks("grunt-modernizr");

  // REGISTER TASKS
  grunt.registerTask('concatJS', ['concat', 'uglify']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('build-modernizr', ['modernizr:dist']);
  grunt.registerTask('init', ['copy', 'sass', 'autoprefixer', 'csso']);
}