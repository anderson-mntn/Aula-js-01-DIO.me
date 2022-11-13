//function p/ calcular juros
function incrementarJuros (valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(`valor com juros: `, incrementarJuros(100, 10)); // valor de produto, valor do juros;

//Calcular Gasto em reais de gasolina com base em seu preço, distancia em km, e km por litro de cada carro
class Carro{
    marca;
    cor;
    litroCombustivelPorKm;
    constructor(marca, cor, litroCombustivelPorKm){ //Passar os valores declarados;
        this.marca = marca ;
        this.cor = cor ;
        this.litroCombustivelPorKm = litroCombustivelPorKm;
    }
    gastoEmReais(km, precoCombustivel){  //Não passar chaves já declaradas
       return km * precoCombustivel * this.litroCombustivelPorKm
         
        
    }
}
const astra = new Carro ('Chevrolet', 'Branco', 1/10);
const mustang = new Carro('Ford', 'Preto', 5/10)

console.log(astra.gastoEmReais(100, 5.70));
console.log(mustang.gastoEmReais(100, 5.79));

class Pessoa {

    nome;

    idade;



    constructor(nome, idade) {

        this.nome = nome;

        this.idade = idade;

    }



    descrever() {

        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);

    }

}



new Pessoa('Renan', 30).descrever();









