module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          options: {
            // port: 4000,
            base: '.',
            keepalive: false,
            hostname: '*',
            livereload: true
          }
        },
      },
      less: {
        development: {
            files: {
                "css/style.css": "less/style.less"
            }
        }
      },
      watch: {
        styles: {
            files: ['less/*.less'], // which files to watch
            tasks: ['less'],
            options: {
                livereload: true,
                nospawn: true
          }
        },
        js: {
          files: ['js/*.js'],
          options: { livereload: true }
        },
        src: {
            files: ['*.html', 'css/*.css'],
            options: { livereload: true }
        }
      }
  });

//define npm tasks for grunt
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less')


//register tasks for grunt
grunt.registerTask('default', ['connect', 'watch', 'less']);

};