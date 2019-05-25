var L;

window.onload = function() {
  L.mapquest.key = "Your-map-Key";

  // 'map' refers to a <div> element with the ID map
  let map = L.mapquest.map("map", {
    center: [47.380759, 8.442631],
    layers: L.mapquest.tileLayer("hybrid"), // can change with 'map'
    zoom: 10
  });

  map.addControl(L.mapquest.control({ position: "bottomright" }));

  L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
      primaryColor: "#22407F",
      secondaryColor: "#3B5998",
      shadow: true,
      size: "md",
      symbol: "A"
    })
  })
    .bindPopup("This is Manchester!")
    .addTo(map);
};
