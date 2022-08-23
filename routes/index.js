const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const address = process.env.NODE_ENV || "http://localhost:5000"

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

const controllers = require('../app/controller');
const portopolio = controllers.portopolio
const blog = controllers.blog
const home = controllers.home
const aboutus = controllers.aboutus

router.get('/', function (req, res, next) {

    axios
        .get(address + '/api/home')
        .then(function (response) {
            // console.log(response.data);
            res.render('home/index', {title: 'Home', data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

})

router.get('/api/home', home.show)
router.get('/api/home/:id', home.getById)
router.post('/api/home',upload.single('uploaded_file'), home.create)
router.put('/api/home/:id',upload.single('uploaded_file'), home.update)
router.delete('/api/home/:id', home.delete)

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

router.get('/blog', function (req, res, next) {

    axios
        .get(address + '/api/blog')
        .then(function (response) {
            console.log(response.data);
            res.render('blog/index', {title: 'Blog', data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

})


router.get('/api/blog', blog.show)
router.get('/api/blog/:id', blog.getById)
router.post('/api/blog', upload.single('uploaded_file'), blog.create)
router.put('/api/blog/:id', upload.single('uploaded_file'), blog.update)
router.delete('/api/blog/:id', blog.delete)

router.get('/aboutus', function (req, res, next) {

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
