const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('products', {
            title: 'Продукция',
            isProducts: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-vozdukhovody', (req, res) => {
    try {
        res.render('products/kruglye-vozdukhovody', {
            title: 'Круглые воздуховоды',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-vozdukhovody', (req, res) => {
    try {
        res.render('products/pryamougolnye-vozdukhovody', {
            title: 'Прямоугольные воздуховоды',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-otvody', (req, res) => {
    try {
        res.render('products/kruglye-otvody', {
            title: 'Круглые отводы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-otvody', (req, res) => {
    try {
        res.render('products/pryamougolnye-otvody', {
            title: 'Прямоугольные отводы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-perekhody', (req, res) => {
    try {
        res.render('products/kruglye-perekhody', {
            title: 'Круглые переходы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-trojniki', (req, res) => {
    try {
        res.render('products/kruglye-trojniki', {
            title: 'Круглые тройники',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-pryamye-vrezki', (req, res) => {
    try {
        res.render('products/kruglye-pryamye-vrezki', {
            title: 'Круглые, прямые врезки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-zaglushki', (req, res) => {
    try {
        res.render('products/kruglye-zaglushki', {
            title: 'Круглые заглушки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-trojniki', (req, res) => {
    try {
        res.render('products/pryamougolnye-trojniki', {
            title: 'Прямоугольные тройники',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-perekhody', (req, res) => {
    try {
        res.render('products/pryamougolnye-perekhody', {
            title: 'Прямоугольные переходы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/nippeli', (req, res) => {
    try {
        res.render('products/nippeli', {
            title: 'Ниппели',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;