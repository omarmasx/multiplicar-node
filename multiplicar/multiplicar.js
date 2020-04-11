const fs = require ('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`=============`.green);
    console.log(`= Tabla de ${base}=`.blue);
    console.log(`=============`.green); //MUESTRA EN COLORES ESTAS LINEAS   primera forma de agregar color a las palabras de terminal       
    
    for (let i=1; i<= limite; i++){
        console.log(`${ base } * ${ i } = ${ base*i }`);
    }
}

let crearArchivo = (base, limite = 10 ) => {
    
    return new Promise( (resolve, reject) =>{
        
        if ( !Number(base) ){
            reject(`El valor introducido ${ base } no es un numero`);
            return//lleva return por que una vez qeu envia el reject se sigue ejecutando el codigo 
        }

        let data ='';
        for (let i = 1 ; i <= limite; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if(err)
               reject(err); 
            else
                resolve(`tabla-${base}-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo, listarTabla
}