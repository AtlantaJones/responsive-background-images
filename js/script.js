

// on resize, flip between small, medium or large image sizes on
// any items containing the appropriate data attributes
function picSwap() {
    // get all elements with a 'data-lowres' attribute
    var elements = $('*[data-lowres]');

    if(elements.length > 0) {
        $(elements).each(function(idx,el) {

            // get the low and high-res urls, and the current background url
            var currentBG = $(el).css('backgroundImage');
            currentBG = currentBG.replace('url(','').replace(')','');

            // strip off host and domain
            var domain = window.location.protocol + '//' + window.location.host + '/';
            currentBG = currentBG.replace(domain, '');

            var lowRes = $(el).data('lowres');
            var highRes = $(el).data('highres');

            // if we're at 481px or over, load high-res
            if(Modernizr.mq('screen and (min-width:481px)')) {
                if(currentBG !== highRes) { // if it hasnt' changed, do nothing
                    $(el).css('background-image','url(' +  highRes + ')');
                }
            } else {
                if(currentBG !== lowRes) {
                    $(el).css('background-image','url(' +  lowRes + ')');
                }
            }
        });
    }
}



$(document).ready(function() {

    // initialize the background image on first run
    picSwap();


    // Do stuff on window resize
    $(window).resize(function() {
        picSwap();
    });

});