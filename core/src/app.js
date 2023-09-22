window.$ = window.jQuery = require( 'jquery' ); // <-- Make jquery global
require( "jquery.typewatch" );

import DataTable from 'datatables.net'; // <-- Import datatables.net
window.DataTable = DataTable; // <-- Make datatables.net global

// init the search field with typewatch
const searchField = $( '#search' ).typeWatch( {
    callback: function( value ) {
        console.log( 'you typed ' + value );
    },
    wait: 0,
    highlight: true,
    captureLength: 2
} );