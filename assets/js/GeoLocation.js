// -----------------------------------------------------------
//                          READ ME
// -----------------------------------------------------------

// import this on head
// <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.js" ></script>
// <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css">


// create this in body or anywhere you want to add map
// <div id="mapcontainer"></div>

// -----------------------------------------------------------


var height_size = 400;
var enable_info = true;

// change this data
var mapData= [
	{
		"la":4.9086345,
		"lo":114.9217906,
		"info":"Lot 12283, Simpang 27, Jalan Gadong, Kg Menglait - First Branch",
		"id":"map1"
	},
	{
		"la":4.9335954,
		"lo":114.9502524,
		"info":"No-18, Simpang 452 Jalan Kebangsaan, Kampong Sungai Akar - Second Branch",
		"id":"map2"
	},
	{
		"la":4.8881819,
		"lo":114.8892421,
		"info":"The Walk, Unit B3, Ground Floor, Simpang 471, Kg Beribi, - Third Branch",
		"id":"map3"
	},
]

function create_div(){
	$('#mapcontainer').empty();
	for (const [cordi] of Object.entries(mapData)){
		$("#mapcontainer").append("<div class=\"container\" style=\"margin-top: 20px; margin-bottom: 20px;\">");
		var id = mapData[cordi]["id"]
		var template = "<div id=\""+id+"\" style=\"width: 100%; height: "+height_size+"px;\" > </div>";
		$("#mapcontainer").append(template);
		$("#mapcontainer").append("</div>");
	}
}

function showPosition() {
	for (const [cordi] of Object.entries(mapData)){
		var la = mapData[cordi]["la"]
		var lo = mapData[cordi]["lo"]
		var id = mapData[cordi]["id"]
		var info = mapData[cordi]["info"]
		var map = L.map(id).setView([la, lo], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 30
		}).addTo(map);

		var marker1 = L.marker([la, lo]).addTo(map);
		if(enable_info){
			marker1.bindPopup(info).openPopup();
		}
	}
}

// uncomment the line below to automatically
// create div based on the mapData into #mapcontainer (div)

// create_div();
showPosition();
