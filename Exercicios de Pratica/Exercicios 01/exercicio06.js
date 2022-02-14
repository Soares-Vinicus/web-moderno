/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de 
aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de 
juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/
function SimplesComposto (capitalInicial, Juros, Tempo){
    console.log(`Juros simples é de ${((Juros*Tempo/100) * capitalInicial + capitalInicial) }`)
    // a taxa tem q ta de acordo com  o tempo. se a taxa estiver em meses o tempo tem q ta convertido p meses, se tiver em anos, o tempo tambem deve estar 
    let montante = capitalInicial*((1+(Juros/100))**Tempo)
    console.log(`Juros composto é de ${montante.toFixed([0])}`)
}
SimplesComposto(100000,10,1)