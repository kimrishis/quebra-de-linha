// Link do dojo
// https://dojopuzzles.com/problems/quebra-de-linha/
// 
let frase="";
let resultado="";
let colunas="";
let saida="";
let texto = "";
let textosaida = "" 

function QuebraLinha(){
    colunas = document.getElementById("colunas").value
    frase = document.getElementById("frase").value
    frase += ' '
    let resultado = frase.split(" ");    
    resultado.map(function(valor) {
        saida += valor + ' ';
        if ( saida.length >= colunas ){
          textosaida +=  saida + '\n' 
          saida = "";
        }
    })
    textosaida += saida + '\n' 
    document.getElementById("textosaida").textContent = textosaida;
}