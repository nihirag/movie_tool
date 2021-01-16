const express = require('express')
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path')

dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"))

app.set("view engine","ejs")


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/',require('./server/routes/router'))


app.listen(PORT,()=> {
    console.log("Server listening on port 3000")
})