const prompt = require('prompt-sync')();

console.log();
const produto = prompt('Produto..: ');
const preco = Number(prompt('Preço..R$: '))
const precoComDesconto = (preco * 2.5);


console.log(`\nPromoção -> ${produto}`);
console.log(`- - - - - - - - - - - - - -`);
console.log(`Leve 3 por apenas ${padraoMoeda(precoComDesconto)}`);
console.log(`O 3º custa só.....${padraoMoeda(preco * 0.5)}\n`);


function padraoMoeda(m) {
  return m.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}