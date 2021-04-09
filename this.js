console.log(this === global)    //falso pq this não aponta para o global e sim para module.exports
console.log(this === module)    //falso pq this é um objeto referencia de module.exports

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)       //dentro da função o this não aponta para exports
    console.log(this === module.exports)   //this é referência de module.exports 
    console.log(this === global)        //this dentro da função aponta para global

    this.perigo = '...'         //atributo colocado dentro do escopo global (CUIDADO)
}

logThis()