const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... (cuidado com arquivos pesados para não travar o eventloop)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')        //metodo mais simples
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {      //ler a pasta
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
