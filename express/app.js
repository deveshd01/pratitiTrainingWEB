// static files are those files that are directly accessible to user over internet
// these files are stored on server & can be downloaded without visiting/login the site.

const express = require("express");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static')) 
// '/static' => URL for browser   'static'=>Folder name in VScode

// Set the template engine as pug
app.set('view engine', 'pug')

const path = require("path");       // importing "path" module
// Set the views directory
app.set('views', path.join(__dirname, 'views'))
// 'views' => folder where all views/templates files are stores

// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    // sending variable 'title & message' to demo.pug file
    res.status(200).render('demo.pug', { title: 'myTitle', message: 'Message sent by APP.JS file2' })
});

app.get("/demo2", (req, res)=>{ 
    
    // sending variable 'title & message' to demo.pug file
    res.status(200).render('demo.pug', { title: 'myTitle', message: 'Message sent by APP.JS file' })
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});





