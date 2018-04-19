const path = require('path');
const express = require('express');
const app = express();
var open = require("open");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'historyRouter.html'));
// });

app.get('/hashRouter', (req, res) => {
    res.sendFile(path.join(__dirname, 'hashRouter.html'));
});
app.get('/historyRouter', (req, res) => {
    res.sendFile(path.join(__dirname, 'historyRouter.html'));
});

/**
 * 如果匹配不到任何界面，则返回index.html
 */
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, () => {
    console.log('http://localhost:4000/');
});
