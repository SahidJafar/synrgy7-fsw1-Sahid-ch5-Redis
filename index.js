const express = require('express')
const app = express()
const {PORT = 8000} = process.env

const Router = require('./routes/index')


app.get('/', (req,res) => {
    res.json({message: 'Hello World'})
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(Router)

app.listen(PORT, ()=>{
    console.log(`Express nyala di http://localhost:${PORT}`);
})


