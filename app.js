window.onload = function() {
    L.map('map', {
	zoomControl: false,
	attributionControl: false,
	layers: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
	    subdomains: 'abcd',
	    maxZoom: 16,
	    noWrap: true,
	})
    })
	.fitWorld()
	.setZoom(4)
	.eachLayer(l => l.addTo(this));
};
