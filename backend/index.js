var express = require('express')
var app = express()

const data = require('./assets/ResourcesData.json')

app.get('/', function(req, res){
    res.header("Content-Type", 'application/json')
    res.header("Access-Control-Allow-Origin", "*")
    res.send(JSON.stringify(data))
})

var server = app.listen(5000, function(err){
    if(err){
        console.log(err)
    }
    else console.log('Node Server is running ...')
})