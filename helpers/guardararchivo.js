const fs = require('fs');
const archivo = './db/data,json';

const guardarDb = (tarea) => {

    fs.writeFileSync(archivo, JSON.stringify(tarea));

}

const leerDb = ()=>{

}

module.exports = {
    guardarDb,
    leerDb
};