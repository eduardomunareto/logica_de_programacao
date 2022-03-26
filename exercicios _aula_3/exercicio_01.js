const prompt = require('prompt-sync')();

console.log();
const valorQuilo = Number(prompt('Valor do kg........: '));
const pesoServido = Number(prompt('Cliente serviu (gr): '));

const valorPagar = padraoMoeda(valorQuilo * (pesoServido / 1000));

console.log(`Valor a pagar......: ${valorPagar}`);


function padraoMoeda(m) {
  return m.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}
