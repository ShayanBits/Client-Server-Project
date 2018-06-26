const express = require('express');
var fs = require('fs-extra');
const app = express();

app.get('/', (req, res) => res.send('hello world!'));
app.use(express.static('gallery'));
app.use(express.static('img'));
app.use(express.static('blog'));
app.get('/api/blog', (req, res) => res.send('Get response'));
app.get('/api/gallery', (req, res) => res.send('Get response'));
// app.Post('/api/newsletter', (req, res) => res.send('Get response'));




app.listen(3000, ()=> console.log('Example app listening on port 3000!'));



//notes

app.use(express.static('public'));



var file = '/tmp/this/path/does/not/exist/file.txt'

fs.outputFile(file, 'hello!', function(err) {
    console.log(err); //null

    fs.readFile(file, 'utf8', function(err, data) {
        console.log(data); //hello!
    })
})