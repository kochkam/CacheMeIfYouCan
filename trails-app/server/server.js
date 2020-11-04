var path = require("path");
var express = require('express');
const app = express();

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

app.get('*', function (req,res) {
    res.sendFile(path.join(publicPath, index.html));
});


const port = process.env.Port || 3001;

app.listen(port,() => {
    console.log('Server Up!');
});