const express = require('express');
const chirpStore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }

    res.send(chirpStore.GetChirps());
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.redirect('/');
});

router.put('/:id', (req, res) => {
    let id = req.params.id
    chirpsStore.UpdateChirp(id, req.body);
    res.redirect('/');
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;
