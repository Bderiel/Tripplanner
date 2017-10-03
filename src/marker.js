module.exports = {marker}
const mapboxgl = require('mapbox-gl');

function marker(coordinates, typeOfLink){
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = pickLink(typeOfLink);
    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

function pickLink(typeOfLink){
    if (typeOfLink === 'hotel') return 'url(http://i.imgur.com/D9574Cu.png)';
    if (typeOfLink === 'restaurant') return 'url(http://i.imgur.com/cqR6pUI.png)';
    if (typeOfLink === 'activity') return 'url(http://i.imgur.com/WbMOfMl.png)';
    return 'url(http://i.imgur.com/WbMOfMl.png)';
}