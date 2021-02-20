const mapOptions = {
    zoomControl: false,
    attributionControl: false,
};

const map = L.map('map', mapOptions);

const tileOptions = {
    subdomains: 'abcd',
    maxZoom: 16,
    noWrap: true
};

const baseTileDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', tileOptions);
const baseTileLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', tileOptions);

const baseTiles = {
    "Dark": baseTileDark,
    "Light": baseTileLight
};

const baseTileControls = L.control.layers(baseTiles);

function init() {
    map.fitWorld();
    map.setZoom(4);
    baseTileDark.addTo(map);
    baseTileControls.addTo(map);
    routingControls.addTo(map);
}

