/*
Crie uma função que recebe um número (1 a 12) e
retorne o mes correspondente como a uma string.
*/

function mes (mes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    console.log(meses[mes-1])
}
mes(7)