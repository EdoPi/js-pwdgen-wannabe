Array.prototype.contains = function(obj) {
    return this.indexOf(obj) > -1;
};

var outputContainer= document.getElementById('foglio');
console.log('il foglio è stato preso');



var bianco = prompt ('INDOVINELLO: Hai una buona memoria \(rispondi:Si o No\)?');
console.log('l\' utente ha risposto alla domanda sulla memoria di :' + bianco);

if (['si', 'Si', 'SI'].contains(bianco)) {
  var positiva = prompt ('Ok ecco la domanda:\ndi che colore è il cavallo bianco di napoleone?')
} else {
  var negativa = prompt ('Peggio per te io l\'indovinello te lo faccio uguale: \ndi che colore è il cavallo bianco di napoleone?')
}
console.log('sta funzionando');

if (positiva === 'bianco') {
  outputContainer.innerHTML = 'Sei un grande!'

} else {
  outputContainer.innerHTML = 'Sei una pippa!!!';
  outputContainer.style.color='red';
}
