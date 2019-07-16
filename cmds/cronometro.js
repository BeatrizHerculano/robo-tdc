const chalk = require('chalk');
const error = require('../utils/error')
module.exports = async (args) => {
    let tempo = args.tempo || args.t
    if (tempo) {
        if (+tempo) {
            tempo = +tempo
        } else {
            error("Tempo informado invalido, informe a quantidade de segundos para o cronômetro", true);
        }
    } else {
        console.log(`Tempo não informado, utilizando 10 segundos por padrão`);
        tempo = 10;
    }

    for (i = 1; i <= tempo; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(chalk.green(i));
    }
}