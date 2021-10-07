function recommencer() {
    location.reload();
}

function corriger() {
    document.getElementById("q0-br").innerHTML = '<p class="bonnereponse">faux</p>';
    document.getElementById("q0-ex").innerHTML = '<p class="explication">L’eau entre par les ostioles et ressort par les oscules</p>';
    document.getElementById("q1-br").innerHTML = '<p class="bonnereponse">Cnidaires</p>';
    document.getElementById("q1-ex").innerHTML = '<p class="explication">Cnidaires = animaux qui piquent.</p>';
    document.getElementById("q2-br").innerHTML = '<p class="bonnereponse">vrai</p>';
    document.getElementById("q2-ex").innerHTML = '<p class="explication">Les Cténaires sont des animaux marins vivant dans les eaux du large et pouvant se rapprocher des côtes avec les courants.</p>';
    document.getElementById("q3-br").innerHTML = '<p class="bonnereponse">Vrai</p>';
    document.getElementById("q3-ex").innerHTML = '<p class="explication">Echinodermes en grec ancien veut dire « peau épineuse » (en grec “Echinos” = épine et “Dermos” = peau).</p>';
    document.getElementById("q4-br").innerHTML = '<p class="bonnereponse">4000 mètres</p>';
    document.getElementById("q4-ex").innerHTML = '<p class="explication">On les trouve dans tous les océans du globe jusqu’à 4.000 mètres de profondeur et ils fréquentent aussi bien les eaux océaniques que les eaux saumâtres des estuaires.</p>';
}

function rq0() {
    document.getElementById("q0-br").innerHTML = '<p class="bonnereponse">faux</p>';
}

function rq1() {
    document.getElementById("q1-br").innerHTML = '<p class="bonnereponse">Cnidaires</p>';
}

function rq2() {
    document.getElementById("q2-br").innerHTML = '<p class="bonnereponse">vrai</p>';
}

function rq3() {
    document.getElementById("q3-br").innerHTML = '<p class="bonnereponse">Vrai</p>';
}

function rq4() {
    document.getElementById("q4-br").innerHTML = '<p class="bonnereponse">4000 mètres</p>';
}