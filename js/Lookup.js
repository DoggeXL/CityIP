
function lookup(ele) {
  if(event.keyCode === 13) {
    doo()


  }

}

  var first_click = true;
function empty() {}
function doo(i){

  if (!first_click) {


    first_click = true;
  } else {
    document.getElementById('all').style.visibility = "visible";
    document.getElementById('all').style.visibility = "display";
    var input = document.getElementById('search')
    var lookup = document.createElement('script')
    lookup.src = 'https://geoip.nekudo.com/api/' + input.value + '/?callback=doo'
    document.body.appendChild(lookup);
    document.getElementById('ip').innerHTML = "" + i.ip;
    document.getElementById('Country').innerHTML = "" + i.country.name;
    document.getElementById('City').innerHTML = "" + i.city;
    document.getElementById('timezone').innerHTML = "" + i.location.time_zone;
    document.getElementById('flag').src = "https://storage.googleapis.com/ip-flags/" + i.country.code.toLowerCase() + ".png"
    if ( i.country.name.length < 8 ) {
       document.getElementById('flag').style.marginLeft = '0px'
    } else {
      document.getElementById('flag').style.marginLeft = '42px'
    };
    document.getElementById('isp1').innerHTML = "Not Found"
    var old = document.createElement('script')
    old.src = 'https://ip.nf/' + i.ip + '.json?callback=lee';
    document.body.appendChild(old);
    var ifrm = document.getElementById("map");
          ifrm.setAttribute("src", "https://maps.google.it/maps?q=" + i.location.latitude + "," + i.location.longitude + "&z=10&output=embed");
          document.body.appendChild(ifrm);
    first_click = false;
  }
}

function lee(i) {
 document.getElementById('isp1').innerHTML = "" + i.ip.asn;
 lee = empty;
}
