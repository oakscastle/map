$( function() {
    var $areas = $('<ul/>')
    $('#menu').append( $areas )
    var $map = $('#map')
    $map.on( 'load', function() {
	$('[class="area"]', $map[0].contentDocument).each( function() {
	    function Area( elem ) {
		this.$elem = $(elem)
		this.name = this.$elem
		    .attr( 'id' )
		    .replace( /-/g, ' ' )
		    .replace( /(?:^|\s)\S/g, function( a ) {
			return a.toUpperCase()
		    } )
	    }
	    
	    var area = new Area( this )

	    var $item = $('<li/>').text( area.name )

	    $areas.append( $item )
	    
	    $item.hover(
		function() {
		    area.$elem.attr( 'active', 'true' )
		},
		function() {
		    area.$elem.removeAttr( 'active' )
		}
	    )

	    area.$elem.hover(
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
	padding: 160,
	tolerance: 70
    } )

    slideout.open()

    $('.toggle-button').click( function() {
	slideout.toggle()
    } )
} )
