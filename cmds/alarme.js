const chalk = require('chalk');
module.exports = (args) => {
    let hora = args.hora
    if (hora) {
        console.log(`Alarme criado para ${chalk.green(hora)}`)
    } else {
        console.log(`Alarme criado para esse mesmo horário para amanhã`);
    }
}