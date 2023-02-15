function pulaLinha() {

    document.write("<br>");	
    document.write("<br>");	
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

 var numeroPensado = Math.random() * 10;

 var chute = parseInt(prompt("Digite seu chute!!!"));
 
 if(chute == numeroPensado) {
    mostra("Você acertou!!!")
 } else {
    mostra("Você errou!!!")
 }