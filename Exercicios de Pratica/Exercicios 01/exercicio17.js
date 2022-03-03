/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano  Aumento
  A      10%
  B      15%
  C      20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/
function aumento(atual,plano){
    switch(plano){
        case "a":
            console.log(`Seu novo salario é de ${Math.ceil(atual * 1.10)}`)
            break
        case "b":
            console.log(`Seu novo salario é de ${Math.ceil(atual * 1.15)}`)
            break
        case "c":
            console.log(`Seu novo salario é de ${Math.ceil(atual * 1.20)}`)
            break
        default:
            console.log("Plano invalido!")
    }
}
aumento(100,"c")