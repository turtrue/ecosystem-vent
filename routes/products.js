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

router.get('/kruglye-zonty', (req, res) => {
    try {
        res.render('products/kruglye-zonty', {
            title: 'Круглые зонты',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-vrezki', (req, res) => {
    try {
        res.render('products/kruglye-vrezki', {
            title: 'Круглые врезки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamye-vrezki', (req, res) => {
    try {
        res.render('products/pryamye-vrezki', {
            title: 'Прямые врезки',
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

router.get('/perekhody-s-pryamougolnykh-na-kruglye-secheniya', (req, res) => {
    try {
        res.render('products/perekhody-s-pryamougolnykh-na-kruglye-secheniya', {
            title: 'Переходы с прямоугольных на круглые сечения',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-zonty', (req, res) => {
    try {
        res.render('products/pryamougolnye-zonty', {
            title: 'Прямоугольные зонты',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-utki', (req, res) => {
    try {
        res.render('products/pryamougolnye-utki', {
            title: 'Прямоугольные утки',
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

router.get('/drossel-klapana', (req, res) => {
    try {
        res.render('products/drossel-klapana', {
            title: 'Дроссель клапана',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/lsp', (req, res) => {
    try {
        res.render('products/lsp', {
            title: 'ЛСП',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/bystrosemnye-khomuty-mx', (req, res) => {
    try {
        res.render('products/bystrosemnye-khomuty-mx', {
            title: 'Быстросъемные хомуты MX',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/ventilyacionnye-khomuty', (req, res) => {
    try {
        res.render('products/ventilyacionnye-khomuty', {
            title: 'Вентиляционные хомуты',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/gibkie-vstavki', (req, res) => {
    try {
        res.render('products/gibkie-vstavki', {
            title: 'Гибкие вставки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/skoby-m8-zn', (req, res) => {
    try {
        res.render('products/skoby-m8-zn', {
            title: 'Скобы M8 ZN',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/uplotnitelnye-lenty', (req, res) => {
    try {
        res.render('products/uplotnitelnye-lenty', {
            title: 'Уплотнительные ленты',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vibroopory', (req, res) => {
    try {
        res.render('products/vibroopory', {
            title: 'Виброопоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/strubciny', (req, res) => {
    try {
        res.render('products/strubciny', {
            title: 'Струбцины',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/shpilki', (req, res) => {
    try {
        res.render('products/shpilki', {
            title: 'Шпильки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/dvs-diffuzory', (req, res) => {
    try {
        res.render('products/dvs-diffuzory', {
            title: 'DVS диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/dvs-p-diffuzory', (req, res) => {
    try {
        res.render('products/dvs-p-diffuzory', {
            title: 'DVS-P диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pav-b-diffuzory', (req, res) => {
    try {
        res.render('products/pav-b-diffuzory', {
            title: 'PAV-B диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/rad-diffuzory', (req, res) => {
    try {
        res.render('products/rad-diffuzory', {
            title: 'RAD диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/sad-diffuzory', (req, res) => {
    try {
        res.render('products/sad-diffuzory', {
            title: 'SAD диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;