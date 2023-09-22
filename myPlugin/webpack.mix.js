let mix = require( 'laravel-mix' );
require('laravel-mix-bundle-analyzer');

mix.setPublicPath( 'dist' );

// vendor extraction
mix.extract( [] );

mix.js( 'src/index.js', 'dist' ); // specific entrypoint js file

mix.bundleAnalyzer();