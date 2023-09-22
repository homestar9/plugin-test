let mix = require( 'laravel-mix' );
require('laravel-mix-bundle-analyzer');

mix.setPublicPath( 'dist' );

// global dependencies should be marked as external
// this prevents them from being bundled with the plugin
mix.webpackConfig({
    externals: {
        "jquery": "jQuery"
    }
});

// vendor extraction
mix.extract( [] );

mix.js( 'src/index.js', 'dist' ); // specific entrypoint js file

mix.bundleAnalyzer();