/*
Desenvolva uma Função que recebe dois parametros, um é a quantidade de horas
trabalhadas por um funcionario num mês, e o quanto ele recebe por hora.
O retorno deve ser a string "Salario igual a R$ X", em que X é o quanto
o funcionario recebe por mês.
*/

function salario(horas, valor){
    const salarioBruto = horas * valor
    console.log(`Salário igual a R$ ${salarioBruto}`)
}
salario(150, 40.50)