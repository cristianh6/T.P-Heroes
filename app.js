
// CONST //

const express = require('express');

const path = require('path');

const app = express();

const port = 3030;

// PATH //

app.use(express.static(path.join(__dirname, 'public')))

// GETS HEROES // 

app.get('/Babbage', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'Babbage.html'));  
});
app.get('/berners', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'berners.html'));  
});
app.get('/clarke', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'clarke.html'));  
});
app.get('/hamilton', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'hamilton.html'));  
});
app.get('/hopper', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'hopper.html'));  
});
app.get('/lovelace', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'lovelace.html'));  
});
app.get('/turing', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'turing.html'));  
});

// GETS STANDARD // 

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'));  
});
app.get('/contacto', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', "contacto.html"));
});
app.get('/nosotros', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'nosotros.html'));  
});
app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'notfound.html'));  
});



// SAY //

app.listen(port, () => console.log(`Servidor corriendo en el puerto http://localhost:${port}` ))