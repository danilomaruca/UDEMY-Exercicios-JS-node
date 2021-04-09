console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {         // forma errada de criar um novo objeto
    nome: 'Teste'      
}

console.log(module.exports)

module.exports = { publico: true }      // forma correta de criar novo objeto