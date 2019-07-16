const menus = {
    main: `
      robo-tdc [command] <options>
  
      alarme .............. cria um alarme para amanhã no mesmo horario
      cronometro .......... inicia um cronometro
      version ............. mostra a versão do pacote
      help ................ mostra o menu de ajuda para um comando
      bolo ................ prepara um bolo bem bonito`,


    alarme: `
    robo-tdc alarme <options>

    --hora ..... a hora para criar o alarme`,

    cronometro: `
    robo-tdc cronometro <options>

    --tempo ..... o tempo para o cronometro em segundos
        Se nenhum tempo foi passado é usado o tempo de 10 segundos`,
    bolo: `
    robo-tdc bolo

    faz a massa e assa um bolo bem bonito`
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}