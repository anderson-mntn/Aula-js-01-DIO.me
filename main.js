const funcoes =  require('./funcoes.js')

//console.log(funcoes.multiply(6, 6));
console.log(funcoes.sum(22, 88));



//cmder, calculando inserindo valores no terminal;
let args = process.argv.slice(2)
let c = Number(args[1])
let d = Number(args[2])
//console.log(c + d);

let chr = args[0]

//Escolhendo Operação via cmder/terminal
function chooseOp(x, y){
    if (chr == "sum"){
        return funcoes.sum(x, y)
    }
    else if(chr == "mult"){
        return funcoes.multiply(x, y)
    }
    else if(chr == "sub"){
        return funcoes.subtraction(x, y)
    }
    else if(chr == "divi"){
        return funcoes.division(x, y)
    }
}
console.log(chooseOp(c, d));

