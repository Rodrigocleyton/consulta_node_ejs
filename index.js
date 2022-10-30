const express = require("express")
const app = express()
const port = 8080


app.set('view engine', 'ejs')
app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const connection = require('./database/database')
connection.authenticate().then(()=>{
    console.log("conectado ao mysql")
}).catch((err)=>{
    console.log("não conectou", err)
})



app.get('/', (req, res) =>{
    res.render("consulta")
})

app.get('/produto', (req, res) =>{
    res.render("produto")
})


app.listen(port, ()=>{
    console.log("servidor no ar na porta ", port)
})