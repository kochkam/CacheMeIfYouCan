var path = require("path");
var express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.Port || 3001;

app.listen(port,() => {
    console.log('Server Up!');
});