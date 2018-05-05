var simple = document.createElement('script')
simple.src = 'https://geoip.nekudo.com/api?callback=simpleip';
document.body.appendChild(simple);

var deep = document.createElement('script')
deep.src = 'https://geoip.nekudo.com/api?callback=doo';
document.body.appendChild(deep);





function doo(i){
  document.getElementById('ip').innerHTML = "IP: " + i.ip;
  document.getElementById('Country').innerHTML = " " + i.country.name;
  document.getElementById('City').innerHTML = "City: " + i.city;
  document.getElementById('timezone').innerHTML = "Timezone: " + i.location.time_zone;
  document.getElementById('flag').src = "https://storage.googleapis.com/ip-flags/" + i.country.code.toLowerCase() + ".png"

  var old = document.createElement('script')
  old.src = 'https://ip.nf/' + i.ip + '.json?callback=lee';
  document.body.appendChild(old);


}
function simpleip(data) {
  document.getElementById('YourIP').innerHTML = "Your IP Address is: " + data.ip;
  document.getElementById('Address').innerHTML = "Your IP Address is: " + data.ip;
  document.getElementById('City').innerHTML = "City: " + data.city;
  document.getElementById('timezone').innerHTML = "Timezone: " + data.location.time_zone;
}

function lee(i) {
 document.getElementById('isp1').innerHTML = "ISP: " + i.ip.asn;
}

doo()
simpleip()
lee()
