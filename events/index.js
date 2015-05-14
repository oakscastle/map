$( function() {
    var $areas = $('<ul/>')
    $('#menu').append( $areas )
    var $map = $('#map')
    $map.on( 'load', function() {
	$('[class="area"]', $map[0].contentDocument).each( function() {
	    var $area = $(this)
	    var $item = $('<li/>').text( $area.attr( 'id' ) )
	    $areas.append( $item )
	    $item.hover(
		function() {
		    $area.attr( 'active', 'true' )
		},
		function() {
		    $area.removeAttr( 'active' )
		}
	    )
	    $area.hover(
		function() {
		    $item.attr( 'active', 'true' )
		},
		function() {
		    $item.removeAttr( 'active' )
		}
	    )
	} )
    } )

    var slideout = new Slideout( {
	panel: document.getElementById( 'panel' ),
	menu: document.getElementById( 'menu' ),
	padding: 150,
	tolerance: 70
    } )
    $('.toggle-button').click( function() {
	slideout.toggle()
    } )
} )
