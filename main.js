
window.onload = function () {
    L.mapquest.key = process.env.MAPKEY;

    // 'map' refers to a <div> element with the ID map
    let map = L.mapquest.map('map', {
        center: [37.7749, -122.4194],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });

    map.addControl(L.mapquest.control());
}