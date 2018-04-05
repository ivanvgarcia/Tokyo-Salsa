
var map = new GMaps({
    div: '.map--studio-pepe-2',
    lat: 35.6627941,
    lng: 139.7294739,
    zoom: 19
});

map.addMarker({
    lat: 35.6627941,
    lng: 139.7294739,
    title: 'Studio Pepe 2',
    infoWindow: {
        content: '<p>Studio Pepe 3</p>'
    }
});