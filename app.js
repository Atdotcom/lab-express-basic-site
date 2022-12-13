const express = require('express');
const app = express();
const port = 3008;

//app use
app.use(express.static('public'));

//Home Route
app.get('/index', (req, res) => {
   res.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/work', (req, res) => {
      res.sendFile(`${__dirname}/views/work.html`)
})
      
app.get('/gallery', (req, res) => {
        res.sendFile(`${__dirname}/views/gallery.html`)
})

app.listen(port, () => {console.log(`${port}`)
})