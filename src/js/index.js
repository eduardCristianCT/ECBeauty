const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector('.mob-wrapper').classList;

open.addEventListener("click", () => {
    wrapper.toggle("opened");
    wrapper.toggle("close");
});

close.addEventListener("click", () => {
    wrapper.toggle("opened");
    wrapper.toggle("close");
})

var myMap = L.map('map');
myMap.setView([37.974, 23.72], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{ attribution:
'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);

var myMap = L.map('map', {
    center: [37.974, 23.72],
    zoom: 13,
    attributionControl: false,
                zoomControl: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    dragging: false,
    minZoom: 10,
    maxZoom: 17
});

myMap.locate({ setView: true, maxZoom: 16 });

var marker = L.marker([37.974, 23.72]).addTo(myMap);


var myIcon = L.icon({
    iconUrl: 'img/marker.png'
});
 
 
var marker = L.marker([37.974, 23.72], {
    icon: myIcon
}).addTo(myMap);
