//Aula 1: Variáveis e Operadores
//Exercicio: calcular valor gasto de combustível em uma viagem.
const precoCombustivel = 5.79
const kmPorLitro = 10
const distanciaEmKm = 400
let precoTotalDaViagem = distanciaEmKm / kmPorLitro * precoCombustivel
// console.log(parseInt(precoTotalDaViagem));
//.toFixed(2) : converte para texto

//Aula 2 : Estruturas Condicionais

const precoEtanol = 4;
const precoGasolina = 5.79
const distanciaKmDaViagem = 200
const tipoDeCombustivel = 'Etanol' //user input.value ou dado
let litrosConsumidos = distanciaKmDaViagem / kmPorLitro

if (tipoDeCombustivel == 'Etanol'){
    const valorTotal = precoEtanol * litrosConsumidos
    console.log(valorTotal); //escopo local
} else {
    const valorTotal = precoGasolina * litrosConsumidos
    console.log(valorTotal);
}

//Aula 3: Praticando Vars, operadores, est. condicionais

//Formular calculo do IMC (Índice de Massa Corporal), e indicar grupo pertencente

const peso = 100;
const altura = 2.00;
const massaCorporal = peso / Math.pow(altura, 2)
console.log('Seu IMC é: ' + massaCorporal);
if(massaCorporal <= 18){
    console.log('Abaixo do peso');
} else if (massaCorporal >= 18 && massaCorporal <= 25){
    console.log('Peso normal');
} else if (massaCorporal >= 26 && massaCorporal <= 30){
    console.log('Acima do Peso');
} else if ( massaCorporal >= 31 && massaCorporal <= 40){
    console.log('Obesidade');
} else {
    console.log('Obesidade Grave');
}

// Calcular preço de um produto, alterando conforme sua forma de pagamento
/* 
1 - A vista no Débito : 10% de desconto
2 - A vista com Dinheiro ou PIX: 15% de desconto
3 - Parcelado em 2 vezes: preço normal sem juros
4 - Parcelado acima de 2 vezes: preço normal + juros de 10%
*/
const preçoDoProduto = 100;
const formaDePagamento = 2;

if(formaDePagamento === 1){
    console.log(`O preço da camisa ficou: `, preçoDoProduto - (preçoDoProduto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(`O preço da camisa ficou: `, preçoDoProduto - (preçoDoProduto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(`O preço da camisa ficou: `, preçoDoProduto);
} else {
    console.log(`O preço da camisa ficou: `, preçoDoProduto + (preçoDoProduto * 0.1));
}






