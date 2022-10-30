const express = require("express")
const app = express()
const port = 8080


app.set('view engine', 'ejs')
app.use(express.static('public'))






app.get('/', (req, res) =>{
    res.render("consulta")
})

app.get('/produto', (req, res) =>{
    res.render("produto")
})


app.listen(port, ()=>{
    console.log("servidor no ar na porta ", port)
})