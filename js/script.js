var anno = new Date().getFullYear();
console.log('siamo nell\'anno ' + anno);

var nome = prompt('Ciao! Qual\'è il tuo nome?');
console.log('il ragazzo si chiama ' + nome);

var cognome = prompt ('grazie ' + nome + ' ora mi diresti anche il tuo cognome?');
console.log(nome + ' di cognome fa ' + cognome );

var colore = prompt ( nome + ' ' + cognome + ' Vorrei anche sapere qual\'è il tuo colore preferito');
console.log('il colore preferito di ' + nome + ' ' + cognome + ' è il ' + colore);

var outputContainer = document.getElementById('foglio');

outputContainer.innerText = 'Caro ' + nome + ' la tua nuova fortissima Password è:' ;
outputContainer.append('\n' + nome + cognome + colore + anno);
outputContainer.append('\nMi raccomando torna presto a trovarci');
