const argv  = require('./config/yargs').argv; //extrae solo argv del archivo        require('./config/yargs').argv 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

// console.log(process.argv);

let comando = argv._[0];
switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo=> console.log('  '.inverse,`Archivo creado:`.rainbow.underline,  colors.bgBlue(archivo) ) )    //Las 2 FORMA DE AGREGAR COLOR Y SUBRAYADO, etc   A LAS PALABRAS DE LA TERMINA
        .catch( e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido');

}
