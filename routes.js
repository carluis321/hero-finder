const express = require('express');
const router = express.Router();
const heroes = require('./modules/heroes');

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.post('/find-heroes', (req, res) => {
    const foundHeroes = heroes.getHeroByName(req.body.name);

    foundHeroes.then(heroes => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(heroes));
    });
});

module.exports = router;