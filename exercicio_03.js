const prompt = require('prompt-sync')();

console.log();
const cidade = prompt('Cidade..: ');
const nDias = Number(prompt('Nº Dias.: '));
const nHoras = Number(prompt('Nº Horas: '));

const totalHoras = nHoras + (nDias * 24);

console.log(`\nTotal da viagem para ${cidade}: ${totalHoras} horas\n`)

