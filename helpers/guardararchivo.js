const fs = require('fs');
const archivo = './db/data.json';

const guardarDb = (tarea) => {

    fs.writeFileSync(archivo, JSON.stringify(tarea));

}

const leerDb = ()=>{

    if( !fs.existsSync(archivo) ){
        return null;
    }else{
        const infoTarea = JSON.parse(fs.readFileSync(archivo, {encoding: 'utf-8'}));
        return infoTarea;
    };

}

module.exports = {
    guardarDb,
    leerDb
};