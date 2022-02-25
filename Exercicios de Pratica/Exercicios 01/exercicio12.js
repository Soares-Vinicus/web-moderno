/*
 Faça um algoritmo que calcule o fatorial de um número.
*/
function fatorial(num1){
    for(let n1 = num1 - 1; n1 != 1; n1 = n1 - 1){
        n1*num1
        num1 = n1*num1
    }
    console.log(num1)
}
fatorial(4)