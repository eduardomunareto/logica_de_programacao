const prompt = require("prompt-sync")();

const modelo = prompt("Modelo do Veículo: ");
const preco = Number(prompt("Preço do Veículo: "));

const entrada = preco * 0.50;
const parcela = entrada / 12;


console.log("Entrada R$: " + padraoMoeda(entrada));
console.log("Saldo em 12x de: " + padraoMoeda(parcela));


function padraoMoeda(m) {
  return m.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}