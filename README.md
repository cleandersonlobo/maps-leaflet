# cleandersonlobo-maps-leaflet

<h6>Meteor 1.4.+</h6>
Leaflet an open-source JavaScript library
for mobile-friendly interactive maps (http://leafletjs.com/).

## Installation

```bash
meteor add cleandersonlobo:maps-leaflet
```

## Usage


Then, use the syntax below in your HTML files:
```js
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
```

## Learn More

Learn more with the quick start guide, check out other tutorials, or head straight to the API documentation. If you have any questions, take a look at the FAQ first.

API documentation (http://leafletjs.com/reference.html).

Quick Start Guide (http://leafletjs.com/examples/quick-start.html).

### 1.0.0

- Initial release
