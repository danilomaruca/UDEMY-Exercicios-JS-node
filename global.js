// console.log(global)
// muito cuidado em alterar o escopo GLOBAL
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal'
})