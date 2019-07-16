const minimist = require('minimist')
const error = require('./utils/error')


module.exports = async () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'

    if (args.version || args.v) {
        cmd = 'version'
    }

    if (args.help || args.h) {
        cmd = 'help'
    }

    switch (cmd) {
        case 'alarme':
            require('./cmds/alarme')(args)
            break
        case 'bolo':
            await require('./cmds/bolo')(args)
            break
        case 'cronometro':
            require('./cmds/cronometro')(args)
            break

        case 'version':
            require('./cmds/version.js')(args)
            break

        case 'help':
            require('./cmds/help')(args)
            break

        default:
            error(`"${cmd}" is not a valid command!`, true)
            break
    }
}
