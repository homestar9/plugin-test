
( function() {

    $( '#view' ).text( 'You are looking at myplugin!' );
    
    // init the search field with typewatch
    const searchField = $( '#pluginSearch' ).typeWatch( {
        callback: function( value ) {
            console.log( 'you typed ' + value );
        },
        wait: 0,
        highlight: true,
        captureLength: 2
    } );

} )();
