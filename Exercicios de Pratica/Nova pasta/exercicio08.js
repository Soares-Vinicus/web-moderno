/*
Desenvolva uma função que recebe dois números inteiros não negativos 
(maiores ou iguais a zero) e realize a multiplicação deles. Porém,
não utilize o operador de mutiplicação.
*/

function Multiplicacao (num_1, num_2){
    cont = 0
    res = 0
    while (cont != num_2){
        res = res + num_1
        cont = cont + 1
    }
    console.log(res)
}
Multiplicacao(5,6)

