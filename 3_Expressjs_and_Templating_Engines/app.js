const express = require('express')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'ejs')
app.use('/assets',express.static('assets'))

app.listen(3000,()=>{
    console.log('app is listening on port 3000')
})

app.get('/',(req,res)=>{
    res.render('index', {list:['Bright','Daniel','Beneth','Jonathan']})
})

