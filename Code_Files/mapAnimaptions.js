function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var waves1X = getRandomInt(200, 260);
var waves1Y = 2*waves1X/3;


var waves2X = getRandomInt(200, 260);
var waves2Y = 2*waves2X/3;

var sharkX = getRandomInt(100, 160);
var sharkY = 2*sharkX/3;

var waves1 = L.icon({
    iconUrl: 'images/wave1.gif',
    iconSize: [waves1X, waves1Y], // Size of the icon
    iconAnchor: [waves1X/2, waves1Y/2], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var waves2 = L.icon({
    iconUrl: 'images/wave_2.gif',
    iconSize: [waves2X, waves2Y], // Size of the icon
    iconAnchor: [waves2X/2, waves2Y/2], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var shark = L.icon({
    iconUrl: 'images/tubarao.gif',
    iconSize: [sharkX, sharkY], // Size of the icon
    iconAnchor: [sharkX/2, sharkY/2], // Anchor point of the icon, used to position it
    popupAnchor: [0, -50] // Popup anchor relative to the icon
});

var mapOrnamentsArray = [ //waves
    {name: 'wave_1_0',id:'mapOrnaments0', coordX: centerX-1000, coordY: centerY-1400, icon: shark, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_1',id:'mapOrnaments1', coordX: centerX+800, coordY: centerY-2800, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_2',id:'mapOrnaments2', coordX: centerX+3000, coordY: centerY-400, icon: waves2, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_3',id:'mapOrnaments3', coordX: centerX-3500, coordY: centerY+1230, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_4',id:'mapOrnaments4', coordX: centerX-500, coordY: centerY+2230, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_5',id:'mapOrnaments5', coordX: centerX-4800, coordY: centerY-5400, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_6',id:'mapOrnaments6', coordX: centerX-4600, coordY: centerY-3000, icon: waves2, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_7',id:'mapOrnaments7', coordX: centerX-6400, coordY: centerY-3600, icon: waves2, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_8',id:'mapOrnaments8', coordX: centerX-950, coordY: centerY-6000, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_9',id:'mapOrnaments9', coordX: centerX+950, coordY: centerY-5000, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_10',id:'mapOrnaments10', coordX: centerX-1450, coordY: centerY-4100, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_11',id:'mapOrnaments11', coordX: centerX+1700, coordY: centerY-7100, icon: waves2, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_12',id:'mapOrnaments12', coordX: centerX-8300, coordY: centerY+550, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_13',id:'mapOrnaments13', coordX: centerX-9500, coordY: centerY-2550, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_14',id:'mapOrnaments14', coordX: centerX-8750, coordY: centerY-5000, icon: shark, body:'<div id="mapOrnaments1"></div>'},
    {name: 'wave_1_15',id:'mapOrnaments15', coordX: centerX-7900, coordY: centerY-7500, icon: waves1, body:'<div id="mapOrnaments1"></div>'},
];


for (var i = 0; i < mapOrnamentsArray.length; i++) {
    var mapOrnaments = mapOrnamentsArray[i];
    var mapOrnamentsMarker = L.marker([mapOrnaments.coordY, mapOrnaments.coordX], {icon:mapOrnaments.icon})
        .addTo(map)
        mapOrnamentsMarker._icon.id = mapOrnaments.id;
 }
