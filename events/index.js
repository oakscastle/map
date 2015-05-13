$( function() {
    var $areas = $('<ul/>')
    $('#menu').append( $areas )
    var map = document.getElementById('map')
    map.addEventListener( 'load', function() {
	$('[class="area"]', map.contentDocument).each( function() {
	    $areas.append( $('<li/>').text( $(this).attr( 'id' ) ) )
	} )
    }, false )

    var slideout = new Slideout( {
	panel: document.getElementById( 'panel' ),
	menu: document.getElementById( 'menu' ),
	padding: 256,
	tolerance: 70
    } )
    $('.toggle-button').click( function() {
	slideout.toggle()
    } )
} )
