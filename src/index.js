const mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = "pk.eyJ1IjoiYmRlcmllbCIsImEiOiJjajhicXN3MWIwMHF5MnFvazV0eW96OGM0In0.W3YmbjV_q0ZX-woP1ZvG1Q";
const buildMarker = require('./marker.js');
const marker = buildMarker.marker([-74.009, 40.705])


const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});
marker.addTo(map);