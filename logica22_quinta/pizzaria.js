const prompt = require('prompt-sync')();
const valorConta = Number(prompt('Qual é o valor da conta? '));
const quantidadeClientes = Number(prompt('Quantos clientes? '));

console.log(`Valor total: ${padraoMoeda(valorConta)}`);
console.log(`Clientes: ${quantidadeClientes}`);
console.log(`Valor para cada cliente: ${padraoMoeda(valorConta / quantidadeClientes)}`);


function padraoMoeda(m) {
  return m.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

const a = 'teste'