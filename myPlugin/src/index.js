
( function() {
    
    // init the search field with typewatch
    const searchField = $( '#pluginSearch' ).typeWatch( {
        callback: function( value ) {
            console.log( 'you typed ' + value + ' in the plugin search field' );
        },
        wait: 0,
        highlight: true,
        captureLength: 2
    } );

    // init the datatable
    new DataTable( '#pluginExample' );

} )();
