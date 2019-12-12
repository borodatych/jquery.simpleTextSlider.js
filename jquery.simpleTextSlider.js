/**
 * jquery.simpleTextSlider.js
 *
 * Copyright (c) 2019 Net Perspective (http://tezarius.ru/)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * @author R.A. Troshkov <borodatych@demka.org>
 *
 * @projectDescription	jQuery plugin for text slider.
 *
 * @version 0.2.1
 *
 * @requires jquery.js
 *
 *
 * @param speed		    int - Duration of animation (in milliseconds)
 *                    default: 700
 *
 * @param delay 	    int - Duration between animations (in milliseconds)
 *                    default: 2800
 *
 * @param animate	    string - Animation view, so far only fade is supported
 * 						        default: 'fade'
 *
 * @param place 	    string - ID of the containing div
 * 						        default: 'body'
 *
 * @param quotes      array - Array of quotes
 * 						        default: []
 */

(function($){
    $.fn.simpleTextSlider = function ( options ){
        options = options || {};
        options.place = options.place || ( this||'body' );
        options.quotes = options.quotes || [];
        options.delay = options.delay || 2800;
        options.animate = options.animate || 'fade'; /// Not Used
        options.speed = options.speed || 700;

        function nextQuote(i){
            if( options.quotes.length === i ) i = 0;
            $(options.place)
                .html(options.quotes[i])
                .fadeIn(options.time)
                .delay(options.delay)
                .fadeOut(options.time, function() {
                    nextQuote(i + 1);
                });
        }
        nextQuote(0);

        return this;
    };
})(jQuery);
