const express = require('express');
var fs = require('fs-extra');
const app = express();

const BLOG_JSON_PATH = "/Users/shayansh/Documents/Programming/eclipce_workspace_Org/Client-Server-Project/public/data/blog.json";
const GALLERY_JSON_PATH = "/Users/shayansh/Documents/Programming/eclipce_workspace_Org/Client-Server-Project/public/data/gallery.json";
const NEWSLETTER_JASON_PATH = "/Users/shayansh/Documents/Programming/eclipce_workspace_Org/Client-Server-Project/public/data/newsletter.json"


app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.send('hello world!'));
app.get('/api/blog', (req, res) => {
     res.sendfile(BLOG_JSON_PATH);
});
app.get('/api/gallery', (req, res) => {
    res.sendfile(GALLERY_JSON_PATH);
});
app.get('/api/newsletter', (req, res) => {
    res.sendfile(NEWSLETTER_JASON_PATH);
});


app.listen(3000, ()=> console.log('App is listening on port 3000!'));