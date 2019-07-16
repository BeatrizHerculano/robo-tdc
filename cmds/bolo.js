const ora = require('ora')
const cliProgress = require('cli-progress');
module.exports = async (args) => {
    console.log("Estou preparando a massa")
    const spinner = ora().start()
    await new Promise(resolve => setTimeout(resolve, 3000))
    spinner.stop();
    console.log('O bolo está indo para o forno');
    const bar = new cliProgress.Bar({
        format: 'assando [{bar}] {percentage}%'
    });

    bar.start(100, 0);
    await new Promise(resolve => setTimeout(resolve, 3000))
    bar.update(20);
    await new Promise(resolve => setTimeout(resolve, 3000))
    bar.update(40);
    await new Promise(resolve => setTimeout(resolve, 1000))
    bar.update(50);
    await new Promise(resolve => setTimeout(resolve, 3000))
    bar.update(70);
    await new Promise(resolve => setTimeout(resolve, 3000))
    bar.update(100);
    await new Promise(resolve => setTimeout(resolve, 1000))
    bar.stop();

    console.log('Seu bolo está pronto');
    console.log('\n');
    await new Promise(resolve => setTimeout(resolve, 1000))

    let bolo = `       iiiiiiiiii
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=events/birthday
`
    console.log(bolo);
}