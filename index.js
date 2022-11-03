const express = require("express")
const app = express()
const port = 8080

const Produto = require ('./database/Produto')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




const connection = require('./database/database')
connection.authenticate().then(()=>{
    console.log("conectado ao mysql")
}).catch((err)=>{
    console.log("não conectou", err)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) =>{
    Produto.findAll({raw:true}).then(produto =>{
        res.render("consulta", {
            produtos:produto
        })
    })
    
})

app.post('/produto', (req, res) =>{
    var produto = req.body.produto
    res.send(produto)
    console.log(produto)
    //fazer o código sequelizer para buscar o produto
})

app.get('/cadastrar', (req, res)=>{
    res.render('cadastrar')
})

app.post('/salvarproduto', (req,res)=>{
     var nomeProduto = req.body.nomeProd
     var preco = req.body.preco
    /*
     console.log(nomeProduto + " " + preco)
     res.redirect('/cadastrar')
     */
    Produto.create({
        nome:nomeProduto,
        preco:preco
    }).then(()=>{
        res.redirect("/cadastrar")
    })
})


app.listen(port, ()=>{
    console.log("servidor no ar na porta ", port)
})