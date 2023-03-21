const fs = require('fs');
const archivo = './db/data.json';

const guardarDb = (tarea) => {

    fs.writeFileSync(archivo, JSON.stringify(tarea));

}

const leerDb = ()=>{

    if( !fs.existsSync ){
        return null;
    }else{
        const infoTarea = JSON.parse(fs.readFileSync(archivo, {encoding: 'utf-8'}));
        console.log(infoTarea);
        return null;
    };

}

module.exports = {
    guardarDb,
    leerDb
};