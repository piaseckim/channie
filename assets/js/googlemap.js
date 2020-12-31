// Create the script tag, set the appropriate attributes
//DOCS: https://developers.google.com/maps/documentation/javascript/examples/map-coordinates
//https://developers.google.com/maps/documentation/javascript/maptypes#ImageMapTypes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCbUvHh83fdrPQTJGwlgjwcUt7cnr8aoWE&callback=initMap';
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    // JS API is loaded and available
    const myPosition = new google.maps.LatLng(52.236647, 21.010236);

    const map = new google.maps.Map(document.getElementById("map"), {
        center: myPosition,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    });

    var marker = new google.maps.Marker({
        position: myPosition,
        animation: google.maps.Animation.DROP,
        title: "Kancelaria Adwokacka Adwokat Anna Chrońska"
    });

    marker.setMap(map);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);