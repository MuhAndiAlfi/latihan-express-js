const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const address = "http://localhost:5000"

const controllers = require('../app/controller')
const blog = controllers.blogs

/* GET home page. */


router.get('/blog', function (req, res, next) {

    axios
        .get(address + '/api/blog')
        .then(function (response) {
            // console.log(response.data);
            res.render('blog/index', {title: 'blog', data: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

})

router.get('/api/blog', blog.show)
router.get('/api/blog/:id', blog.getById)
router.post('/api/blog', blog.create)
router.put('/api/blog/:id', blog.update)
router.delete('/api/blog/:id', blog.delete)

module.exports = router;
