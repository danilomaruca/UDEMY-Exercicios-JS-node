const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'        // => retornar
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {     // func = acumulador, funcAtual = elemento atual
    return func.salario < funcAtual.salario ? func : funcAtual      // ? = então, : = caso contrário
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //mulher chinesa com menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})
