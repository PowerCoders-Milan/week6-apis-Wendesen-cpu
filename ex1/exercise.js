var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.0167, lng: 9.6667},
    zoom: 8
  });


  var marker = new google.maps.Marker({
    position: {lat: 45.0167, lng: 9.6667},
    map: map
  });


}


  