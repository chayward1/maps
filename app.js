window.onload = function() {
    // Initialize the map.
    const map =  L.map('map', {
	zoomControl: false,
	attributionControl: false,
    });

    // Initialize the layers.
    const layers = {
	"Dark": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	    subdomains: 'abcd',
	    maxZoom: 16,
	    noWrap: true,
	}),
	"Light": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
	    subdomains: 'abcd',
	    maxZoom: 16,
	    noWrap: true,
	}),
    };

    // Compose the map.
    map
	.fitWorld()
	.setZoom(4)
	.addLayer(layers["Dark"])
	.addControl(L.control.layers(layers));
};
