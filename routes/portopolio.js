var express = require('express');
var router = express.Router();

const controllers = require('../app/controller');
const portopolio = controllers.portopolio

const axios = require('axios').default;

const address = "https://latihan-backend-express.herokuapp.com"  

const multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

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
router.post('/api/portopolio',upload.single('uploaded_file'), portopolio.create)
router.put('/api/portopolio/:id',upload.single('uploaded_file'), portopolio.update)
router.delete('/api/portopolio/:id', portopolio.delete)


module.exports = router;
