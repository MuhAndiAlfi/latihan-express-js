var express = require('express');
var router = express.Router();

const controllers = require('../app/controller');
const aboutus = controllers.aboutus

const axios = require('axios').default;

const address = "http://localhost:5000"

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


router.get('/', function (req, res, next) {

    axios
        .get(address + '/api/aboutus')
        .then(function (response) {
            // console.log(response.data);
            res.render('aboutus/index', {title: 'About Us', data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

})

router.get('/api/aboutus', aboutus.show)
router.get('/api/aboutus/:id', aboutus.getById)
router.post('/api/aboutus', upload.single('uploaded_file'), aboutus.create)
router.put('/api/aboutus/:id',upload.single('uploaded_file'), aboutus.update)
router.delete('/api/aboutus/:id', aboutus.delete)

module.exports = router;
