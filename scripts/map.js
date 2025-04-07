window.onload = function () {


}


function showMap() {
    let address = document.getElementById('addressid').value;
    let city = document.getElementById('cityid').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}
