/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100  Cachorro Quente    R$ 3,00
200  Hambúrguer Simples R$ 4,00
300  Cheeseburguer      R$ 5,50
400  Bauru              R$ 7,50
500  Refrigerante       R$ 3,50
600  Suco               R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/
function preço(cod = 100, quant = 1){
    switch(cod){
        case 100:
            valor = 3.00
            break
        case 200:
            valor = 4.00
            break
        case 300:
            valor = 5.50
            break
        case 400:
            valor = 7.50
            break
        case 500:
            valor = 3.50
            break
        case 600:
            valor = 2.80
            break
        default:
            console.log("Produto não existe")
        }

    console.log(`Total: R$${(valor*quant).toFixed([2]).replace(".",",")}`)
}
preço(100,2)