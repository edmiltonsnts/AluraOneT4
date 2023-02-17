function pulaLinha() {

    document.write("<br>");	
    document.write("<tr>");	
}

function mostra(frase) {

    document.write(frase);
    pulaLinha()
   
}
function quebraLinha() {
    document.write("<hr>");

}

var multiplicador = 1;

while(multiplicador <= 10) {
    mostra(7 * multiplicador);
    multiplicador++;
}
quebraLinha()

 
for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {
    mostra(7 * multiplicador);

}

mostra("FIM");