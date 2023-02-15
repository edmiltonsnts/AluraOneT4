	function pulaLinha() {

		document.write("<br>");	
		document.write("<br>");	
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	function calculaImc(altura, peso) {

		return peso / (altura * altura);
	}

	var nome = prompt("Informe o seu nome");
    var alturaInformada = prompt("informe sua altura.");
    var pesoInformado = prompt("nome gora informe seu peso.");

    var imc = calculaImc(alturaInformada, pesoInformado);

    mostra(nome + ", o seu IMC é " + Math.round(imc));

    if(imc < 18.5) {

        mostra("Você está abaixo do recomendado");
    
    }
    
    if(imc > 35) {
    
        mostra("Você está acima do recomendado");
    }
    
    if(imc >= 18.5) {
    
        if(imc <= 35) {
    
            mostra("Seu IMC está excelente!");
    
        }
    
    }


