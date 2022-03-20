var express = require('express')
var app = express()

let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();

app.get('/', function (req, res) {
    console.log(h+":"+m+":"+s,"[server activity] : Web server started")
    res.send('Hello world')
    console.log(h+":"+m+":"+s, "[server activity] : Page has been requested")
})

app.listen(3000)