/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento 
que repetirá, enquanto que o segundo será o número de vezes que haverá repetição.
Um array será retornado.
*/

function Repetir (paramentro1, paramentro2){
    elementos = []
    for(let i = 1; i <= paramentro2; i++){
        elementos.push(paramentro1)
    }
    console.log(elementos)
}
Repetir("X",7)