function pulaLinha() {

    document.write("<br>");	
    document.write("<br>");	
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var limite = parseInt(prompt("Entre com o ano limite!"));
var anoCopa = 1930;

while(anoCopa <= 2023) {
    alert("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}
 
alert("FIM!!!")