const x = document.getElementById("demo");
const distance = document.getElementById('distance')
const machado = { lat: 23.19849171656261, long: -106.42314472423162 };
let currentLocation = {};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;

  currentLocation = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };

  distance.innerHTML = getDistance(Math.pow(currentLocation.lat - machado.lat, 2), Math.pow(currentLocation.long - machado.long, 2))
}

function getDistance(latDifference, longDifference) {
  return (((Math.sqrt(latDifference + longDifference)) * 111.32) * 1000).toFixed(2)
}

getLocation()