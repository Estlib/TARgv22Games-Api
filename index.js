const app = require('express')();
const port = 8080
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

app.get('/games', (req, res) =>{
    res.send(["Team Fortress 2", "Cyberpunk 2077", "Paladins: Champions of the Realm", "Super Mario Bros. Wonder"])
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`API up at: http://localhost:${port}`)})