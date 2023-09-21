let mix = require( 'laravel-mix' );

mix.setPublicPath( 'dist' );

// vendor extraction
mix.extract( [] );

mix.js( 'src/index.js', 'dist' ); // specific entrypoint js file
