var cordinet= [
	{
		"la":4.9086345,
		"lo":114.9217906,
		"id":"map1"
	},
	{
		"la":4.9335954,
		"lo":114.9502524,
		"id":"map2"
	},
	{
		"la":4.8881819,
		"lo":114.8892421,
		"id":"map3"
	},
]

function showPosition() {
	// var latitude = 4.8759145;
	// var longitude = 114.8720366;
	// document.getElementById("coordinates").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
	for (const [cordi] of Object.entries(cordinet)){
		// console.log(cordinet[cordi])
		var la = cordinet[cordi]["la"]
		var lo = cordinet[cordi]["lo"]
		var id = cordinet[cordi]["id"]
		var map = L.map(id).setView([la, lo], 15);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 30
		}).addTo(map);

		var marker1 = L.marker([la, lo]).addTo(map);
		// var marker2 = L.marker([4.910321, 114.871165]).addTo(map); //4.910321, 114.871165
		// var marker3 = L.marker([4.765309, 114.672298]).addTo(map); //4.765309, 114.672298
		// var line = L.polyline([marker1.getLatLng(), marker2.getLatLng(), marker3.getLatLng()], {color: 'red'}).addTo(map);
	}
}

showPosition();

// if (navigator.geolocation) {
// 	console.log("1")
// 	navigator.geolocation.getCurrentPosition(showPosition);
// } else {
// 	// document.getElementById("coordinates").innerHTML = "Geolocation is not supported by this browser.";
// }
