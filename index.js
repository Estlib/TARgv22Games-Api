const app = require('express')();
const port = 8080
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
//const swaggerDocument = require('./docs/swagger.json');
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

const games = [
    {id: 1, name: "Team Fortress 2", price: "free", rating: 5},
    {id: 2, name: "Cyberpunk 2077", price: 69.99, rating: 3},
    {id: 3, name: "Paladins: Champions of the Realm", price: "free", rating: 4},
    {id: 4, name: "Super Mario Bros. Wonder", price: 69.99, rating: 5},
    {id: 5, name: "Sonic the Hedgehog", price: 1.99, rating: 4},
    {id: 6, name: "God of War 3", price: 29.99, rating: 4},
    {id: 7, name: "Half:Life", price: "free", rating: 5},
    {id: 8, name: "Portal", price: 2.99, rating: 5},
    {id: 9, name: "Goat Simulator", price: 12.99, rating: 3}    
]

app.get('/games', (req, res) =>{
    res.send(games)
})

app.get('/games/:id', (req, res) =>{
    if(typeof games[req.params.id - 1] === 'undefined')
    {
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id - 1])
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`API up at: http://localhost:${port}`)})