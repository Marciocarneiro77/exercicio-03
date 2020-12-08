function Exemplo(){

    //document.write("Escrevendo na tela");
    //document.getElementById("mensagem").innerText = "Escrevendo na tela"
    
     document.getElementById("mensagem").innerHTML = "<br>Escrevendo na tela<br>";
    
     document.getElementById("numero").value = "teste";
    
     console.log(document.getElementById("mensagem").innerHTML);
    
     let numero = document.getElementById("mensagem").value;
    
     console.log(numero);
    }
    
    function Trocar(){
        let numero = document.getElementById("numero").value;
    
        if(numero<100){ //teste
            //resposta verdadeira
            document.getElementById("mensagem").innerText = "Menor que 100"; 
    
        }
            else if(numero == 100)
        {
            document.getElementById("mensagem").innerText = "Igual a 100";
        }
        else
        {
    //resposta falsa
    document.getElementById("mensagem").innerText = "Maior que 100";
        }
    }