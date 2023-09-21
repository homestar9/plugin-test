require( "jquery.typewatch" );

// init the search field with typewatch
const searchField = $( '#search' ).typeWatch( {
    callback: function( value ) {
        console.log( 'you typed ' + value );
    },
    wait: 0,
    highlight: true,
    captureLength: 2
} );