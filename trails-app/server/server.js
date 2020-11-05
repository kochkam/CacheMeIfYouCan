var path = require("path");
var express = require('express');
var cors = require('cors');
const app = express();


app.use(cors());
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath))

app.get('/*', function (req,res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});


const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('Server Up!');
});

