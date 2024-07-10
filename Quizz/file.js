let elementoSelect1 = document.getElementById('Perguntas1')
let elementoSelect2 = document.getElementById('Perguntas2')
let elementoSelect3 = document.getElementById('Perguntas3')
let somaPontuaçao 
let elementoInputResultado = document.getElementById('Pontuação')


function FinalizarQuiz(){
    somaPontuaçao = Number(elementoSelect1.value) + Number (elementoSelect2.value) + Number (elementoSelect3.value)
 elementoInputResultado.value = somaPontuaçao
 
if(elementoSelect1.value == '3' || elementoSelect2.value == '3' || elementoSelect3 == '3' ){
    alert('Elemento não selecionado!')
}
}
