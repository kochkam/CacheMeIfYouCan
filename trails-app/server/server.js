var path = require("path");
var express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));
app.use(express.static("public"));

app.use((req,res,next) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});


const port = process.env.Port || 3001;

app.listen(port,() => {
    console.log('Server Up!');
});