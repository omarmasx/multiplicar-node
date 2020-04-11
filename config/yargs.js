const opts = {
    base:{
        demand: true, //campo obligatorio
        alias:'b'
    },
    limite : {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicador', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}