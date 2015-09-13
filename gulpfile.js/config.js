var args = require('yargs').argv;
var dest = './dist';
var src = './src';
var port = 3000;

var shouldWatch = args.watch;

module.exports = {
  watch: shouldWatch,
  src: src,
  dest: dest,
  webpack: {
    entry: {
      bundle: src + '/bundles/main.js'
    },
    output: {
      filename: '[name].js',
      path: dest + '/bundles'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loaders: [
          'babel-loader'
        ]
      }]
    }
  },
  browserSync: {
    server: {
      baseDir: dest,
      port: port
    }
  },
  sass: {
    settings: {
      sourceComments: 'map',
      imagePath: '/img' // Used by the image-url helper
    }
  },
  appx: {
    src: src + '/AppxManifest.xml'
  },
  ngrok: {
    port: port
  },
  production: {
    cssSrc: dest + '/**/*.css',
    jsSrc: dest + '/**/*.js',
    dest: dest
  },
  clean: {
    src: dest
  },
  deploy: {
    src: dest + '/**/*'
  }
};
