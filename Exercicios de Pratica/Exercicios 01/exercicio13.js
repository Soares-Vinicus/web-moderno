/*
 Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado
o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7.
Utilize a estrutura Switch.
*/
function util(dia){
    switch(dia){
        case 1:
            console.log("Dia invalido")
            break
        case 2:
            console.log("Dia útil")
            break
        case 3:
            console.log("Dia útil")
            break
        case 4:
            console.log("Dia útil")
            break
        case 5:
            console.log("Dia útil")
            break
        case 6:
            console.log("Dia útil")
            break
        case 7:
            console.log("Dia Invalido")
            break
    }
}
util(7)