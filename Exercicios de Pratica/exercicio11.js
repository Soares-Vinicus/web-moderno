/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento 
desse array como um novo array:
*/
let vetor = [4,5,"olá",true,8,19, true, 3.14]
function PrimeeUltimo(vetor){
    console.log(vetor[0], vetor[vetor.length -1])
}
PrimeeUltimo(vetor)