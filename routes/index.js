const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const address = "http://localhost:5000"

const controllers = require('../app/controller')
const portopolio = controllers.portopolio

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/portopolio', function (req, res, next) {

    axios
        .get(address + '/api/portopolio')
        .then(function (response) {
            // console.log(response.data);
            res.render('portopolio/index', {title: 'Portopolio', data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

})

router.get('/api/portopolio', portopolio.show)
router.get('/api/portopolio/:id', portopolio.getById)
router.post('/api/portopolio', portopolio.create)
router.put('/api/portopolio/:id', portopolio.update)
router.delete('/api/portopolio/:id', portopolio.delete)

module.exports = router;
