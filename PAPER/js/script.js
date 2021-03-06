/*$(function() {
    $('.breeds .col-xs-3:nth-of-type(3)  i').css("display","inline-block");
    $('.breeds .col-xs-3:nth-of-type(4)  i').css("display","inline-block");





    $('.fancybox').fancybox();

    $('#carousel-dog').carousel({
        interval: 5000, //changes the speed
        pause: "hover",
        wrap: true
    });

    if($(".footer .container .row p").css("display")=="none"){

        $(".footer .row").append("<h2 class='copyrighting'>Copyright 2014 your site</h2>");



    };
});*/


/* FUNCTIONS */
/* Height to talles column*/
function setEqualWidth(columns){
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentWidth = $(this).width();
            if(currentWidth > tallestcolumn)
            {
                tallestcolumn = currentWidth;
            }
        }
    );
    columns.width(tallestcolumn);
}

function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}

function setAutoHeight(columns){
    columns.css("height", "auto");
}

/* bootstrap slider thumbnails */
// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

    var conf = {
        center: true,
        backgroundControl: false
    };

    var cache = {
        $carouselContainer: $('.thumbnails-carousel').parent(),
        $thumbnailsLi: $('.thumbnails-carousel li'),
        $controls: $('.thumbnails-carousel').parent().find('.carousel-control')
    };

    function init() {
        cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
        cache.$thumbnailsLi.first().addClass('active-thumbnail');

        if(!conf.backgroundControl) {
            cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
        }
        else {
            cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
        }

        if(conf.center) {
        }
    }

    function refreshOpacities(domEl) {
        cache.$thumbnailsLi.removeClass('active-thumbnail');
        cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
    }

    function bindUiActions() {
        cache.$carouselContainer.on('slide.bs.carousel', function(e) {
            refreshOpacities(e.relatedTarget);
        });

        cache.$thumbnailsLi.click(function(){
            cache.$carouselContainer.carousel($(this).index());
        });
    }

    $.fn.thumbnailsCarousel = function(options) {
        conf = $.extend(conf, options);

        init();
        bindUiActions();

        return this;
    }

})(window, jQuery);
$('.thumbnails-carousel').thumbnailsCarousel();
$(function() {
    /* ---------------------- Var ------------------------ */

    var $bodyheight = $("body").height();
    var $bodywidth = $("body").width();
    /* ---------------------- setEqualHeight ------------------------ */
    if($bodywidth > 992){
            setEqualHeight($(".home-main-content > .row > div"));
    }

    /* ---------------------- ISOTOPE ------------------------ */
    // external js: isotope.pkgd.js

    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $container.isotope({ filter: filterValue });
    });

    // bind sort button click
    $('#sorts').on( 'click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $container.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });




    /* ----------------------carousels------------------------
    $('#carousel-velo').carousel({
        interval: 55000, //changes the speed
        pause: "hover",
        wrap: true
    });
    $('#carousel-logo').carousel({
        interval: 155000, //changes the speed
        pause: "hover",
        wrap: true
    });
    $('#top-sale-slider').carousel({
        ipause: true,
        interval: false
    });

    */
    /* ---------------------- flexslider 1  ------------------------
    var fs_maxitems = 4;
    if($bodywidth < 769){
        fs_maxitems = 2;
    }
    if($bodywidth < 480){
        fs_maxitems = 1;
    }

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        reverse: false,
        animationLoop: true,
        controlNav:	false,
        itemWidth: 10,
        itemMargin: 0,
        minItems: 1,
        maxItems: fs_maxitems,
        move: 1
    });

    var $sb_button1 = $('.sidebar-button');
    var $sb_block = $('.xs-sidebar');


    if($bodywidth < 769){
        $(window).scroll(function(){
            var $scrollwidth = $("body").scrollTop();
            if ( $scrollwidth > ($bodyheight * 0.1) && $scrollwidth < ($bodyheight * 0.8)){
                $sb_button1.css("display","block");
                $sb_block.css("display","block");
            } else{
                $sb_button1.css("display","none");
                $sb_block.css("display","none");

            }
        });//scroll


    }
    */
});

jQuery(document).ready(function($){
    //set your google maps parameters
    var latitude = 51.507362,
        longitude = -0.127667,
        map_zoom = 14;
    var marker1Cords = [51.516552, -0.095353];
    var marker2Cords = [51.502315, -0.107032];
    var marker3Cords = [51.511618, -0.137140];
    var marker4Cords = [51.502442, -0.150851];

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = ( is_internetExplorer11 ) ? 'images/map/map-marker.png' : 'images/map/map-marker2.gif';

    //define the basic color of your map, plus a value for saturation and brightness
    var	main_color = '#2d313f',
        saturation_value= -20,
        brightness_value= 5;

    //we define here the style of the map
    var style= [
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 51
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 30
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType" : 'water',
            "elementType" : 'geometry.fill',
            "stylers" : [
                { color: '#cfcfcf' }
            ]
        }
    ];

    //set google map options
    var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        styles: style,
    }


    //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(marker1Cords[0], marker1Cords[1]),
        map: map,
        visible: true,
        icon: marker_url,
    });
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(marker2Cords[0], marker2Cords[1]),
        map: map,
        visible: true,
        icon: marker_url,
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(marker3Cords[0], marker3Cords[1]),
        map: map,
        visible: true,
        icon: marker_url,
    });
    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(marker4Cords[0], marker4Cords[1]),
        map: map,
        visible: true,
        icon: marker_url,
    });






    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map
        var controlUIzoomIn= document.getElementById('cd-zoom-in'),
            controlUIzoomOut= document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom()+1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom()-1)
        });
    }

    /*
    $('#google-container').hover(function(){
        $("#cd-zoom-in").css("display", "block");
        $("#cd-zoom-out").css("display", "block");
    },function(){
        $("#cd-zoom-in").css("display", "none");
        $("#cd-zoom-out").css("display", "none");
    });
    */

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});










