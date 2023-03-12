const fs = require('fs');

const guardarDb = (tarea) => {

    const archivo = './db/data,json';
    fs.writeFileSync(archivo, JSON.stringify(tarea));

}

module.exports = {
    guardarDb
};