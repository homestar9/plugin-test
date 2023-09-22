let mix = require( 'laravel-mix' );
require('laravel-mix-bundle-analyzer');

mix.autoload( {
    jquery: [ '$', 'window.jQuery', 'jQuery' ]
} );

mix.setPublicPath( 'dist' );

// vendor extraction
mix.extract( [ 
    'jquery',
    'jquery.typewatch'
] );

mix
    .js( 'src/app.js', 'dist' ) // universal app file for all entrypoints
    .js( 'src/index.js', 'dist' ) // specific entrypoint js file
;

mix.bundleAnalyzer();