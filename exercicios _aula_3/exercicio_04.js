const prompt = require('prompt-sync')();
console.log();

const veiculo = prompt('Veículo: ');
const avaliacao = Number(prompt('Avaliação R$: '))
const anoFabricacao = Number(prompt('Ano de Fabricação: '))
const anoAtual = () => {
  const data = new Date();
  return data.getFullYear();
}

const valorSeguro = avaliacao * 0.04;
const desconto = 50 * (anoAtual() - anoFabricacao);
const valorPagar = valorSeguro - desconto;

console.log(`\nProposta de Seguro - ${veiculo}`);
console.log('- - - - - - - - - - - - - - - - - -');
console.log(`Valor do Seguro: ${padraoMoeda(valorSeguro)}`)
console.log(`Desconto ${padraoMoeda(desconto)}`);
console.log(`Valor a Pagar: ${padraoMoeda(valorPagar)}\n`);

function padraoMoeda(m) {
  return m.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}