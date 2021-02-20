// Initialize the page.
function init() {
    const map = initMap('map');

    map.fitWorld();
    map.setZoom(4);
    
    const tiles = initTiles();
    const controls = initControls(tiles);

    tiles["Dark"].addTo(map);
    controls.addTo(map);
}

// Initialize the map.
function initMap(id) {
    return L.map(id, {
	zoomControl: false,
	attributionControl: false,
    });
}

// Initialize the map tiles.
function initTiles() {
    const opts = {
	subdomains: 'abcd',
	maxZoom: 16,
	noWrap: true,
    };

    return {
	"Dark": L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', opts),
	"Light": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', opts),
    };
}

// Initialize the map controls.
function initControls(tiles) {
    return L.control.layers(tiles);
}

// Read URL query parameter(s).
function arg(name) {
    if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
	return decodeURIComponent(name[1]);
}
