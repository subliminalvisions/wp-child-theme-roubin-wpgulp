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

		function osBrowserCheck() {
			let ua = navigator.userAgent;
			let osName = "unknown-os";
				if (ua.indexOf("Win") != -1) osName = "windows";
				if (ua.indexOf("Mac") != -1) osName = "osx mac-is-not-crazy";
				if (ua.indexOf("Linux") != -1) osName = "linux";
				if (ua.indexOf("X11") != -1) osName = "UNIX";
				if (ua.indexOf("Android") != -1) osName = "android";
				if (ua.indexOf("like Mac") != -1) osName = "ios";
			// let browserName = (function (agent) {
			// 	switch (true) {
			// 		case agent.indexOf("edge") > -1: return "edge";
			// 		case agent.indexOf("edg/") > -1: return "edge chromium-edge"; // Match also / to avoid matching for the older Edge
			// 		case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
			// 		case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
			// 		case agent.indexOf("trident") > -1: return "ie";
			// 		case agent.indexOf("firefox") > -1: return "firefox";
			// 		case agent.indexOf("safari") > -1: return "safari";
			// 		default: return "unknown-browser";
			// 	}
			// })(window.navigator.userAgent.toLowerCase());
			// document.body.className += ' '+osName+' '+browserName;
			document.body.className += ' '+osName;
			console.log(osName)
		}	
		osBrowserCheck();
	});
}( jQuery ) );
