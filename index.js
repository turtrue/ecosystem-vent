const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
const compileSass = require('express-compile-sass');
const homeRoutes = require('./routes/home');
const catalogRoutes = require('./routes/catalog');
const productsRoutes = require('./routes/products');
const servicesRoutes = require('./routes/services');
// const keys = require('./keys');

const app = express();

// Sass
app.use(compileSass({
    root: path.join(__dirname, 'public'),
    sourceMap: true,
    sourceComments: true,
    watchFiles: true,
    logToConsole: false
}));

// Pug
app.set('view engine', 'pug');

// Express
app.use(express.static(path.join(__dirname, 'public')));

// Регистрация роутов
app.use('/', homeRoutes);
app.use('/catalog', catalogRoutes);
app.use('/products', productsRoutes);
app.use('/services', servicesRoutes);

const PORT = process.env.PORT || 3000;

function start() {
    try {
        // await mongoose.connect(keys.MONGODB_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false
        // });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();