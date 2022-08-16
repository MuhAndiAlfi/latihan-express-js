var express = require('express');
var router = express.Router();

const controllers = require('../app/controller');
const blog = controllers.blog

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


module.exports = router;
