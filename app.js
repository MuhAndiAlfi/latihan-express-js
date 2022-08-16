const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const bodyParse = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes');
const aboutusRouter = require('./routes/aboutus')
const blogRouter = require('./routes/blog')
const portopolioRouter = require('./routes/portopolio')

const app = express();
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts)
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/aboutus', aboutusRouter);
app.use('/blog', blogRouter);
app.use('/portopolio', portopolioRouter);
app.use('/', indexRouter);



// catch 404 and forward to error handler
const PORT = process.env.PORT || '3000';


/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


module.exports = app;
