$( function() {
    console.log( $($('#map').get( 0 ).contentDocument).find( '#lower-patio' ) )

    var slideout = new Slideout( {
	panel: document.getElementById( 'panel' ),
	menu: document.getElementById( 'menu' ),
	padding: 256,
	tolerance: 70
    } )
} )
