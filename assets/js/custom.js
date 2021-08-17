'use strict';

( function( $ ) {
	$( document ).ready( function() {

		// Show Transcript
		var transcript = $( '.transcript-cnt' );

		if ( 0 < transcript.length ) {
			$( '.show-transcript' ).on( 'click', function() {
				transcript.slideToggle( 'slow' );
				return false;
			});
		}
	});
}( jQuery ) );
