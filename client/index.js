
const mapboxgl = require("mapbox-gl");
const { Map } = mapboxgl;
const buildMarker = require('./marker.js');
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g';

const map = new Map({
	container: 'map',
	center : [-74.009, 40.705], // FullStack coordinates
	zoom: 12,
	style: "mapbox://styles/mapbox/streets-v10"
})
let testData;
const marker = buildMarker('fs', [-74.009, 40.705])
marker.addTo(map)

window.fetch('/api')
.then(result => {
	return result.json()
})
.then(data => {
	testData = data;
	const selectLoop = Object.keys(data)
	selectLoop.forEach((key) => {
		const select = document.getElementById(`${key}-choices`);
		data[key].forEach((elem) => {
			let option = document.createElement('option');
			option.value = elem.name;
			option.text = elem.name;
			select.appendChild(option);
		})
	})
})


const buttons = document.querySelectorAll('.options-btn');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const easyButton = button.id.slice(0, -4);
		console.log(easyButton)
		const select = document.getElementById(`${easyButton}-choices`);
		const list = document.getElementById(`${easyButton}-list`);
		const listElem = document.createElement('li');
	    if (select.value === 'A Restaurant' || select.value ==='A Hotel' || select.value==='An Activity') return;
		listElem.innerHTML = select.value;
		const listButton = document.createElement('button')
		const toAppend = list.appendChild(listElem);
		toAppend.append(listButton);
		listButton.onclick = function(){
			toAppend.remove();
		}
		//buildMarker(easyButton,)

	})
})
