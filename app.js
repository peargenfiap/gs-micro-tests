//app.js
const index = require('./index');
const express = require('express');
const app = express();
const port = 3000;
 
app.use(express.json());
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
 
if (require.main === module) {
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}
 
module.exports = app