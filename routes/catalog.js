const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('catalog', {
            title: 'Каталог вентиляционного оборудования в Казани',
            pageHeader: 'Каталог',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vozdukhovody-i-fasonnye-chasti', (req, res) => {
    try {
        res.render('vozdukhovody-i-fasonnye-chasti', {
            title: 'Воздуховоды и фасонные части в Казани купить по выгодной цене от производителя',
            pageHeader: 'Воздуховоды и фасонные части',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/komplektuyushchie', (req, res) => {
    try {
        res.render('komplektuyushchie', {
            title: 'Комплектующие в Казани купить по выгодной цене от производителя',
            pageHeader: 'Комплектующие',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vozdukhovody', (req, res) => {
    try {
        res.render('vozdukhovody', {
            title: 'Воздуховоды в Казани купить по выгодной цене от производителя',
            pageHeader: 'Воздуховоды',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/fasonnye-chasti', (req, res) => {
    try {
        res.render('fasonnye-chasti', {
            title: 'Фасонные части в Казани купить по выгодной цене от производителя',
            pageHeader: 'Фасонные части',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/diffuzory', (req, res) => {
    try {
        res.render('diffuzory', {
            title: 'Диффузоры в Казани купить по выгодной цене от производителя',
            pageHeader: 'Диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/ventilyacionnye-ustanovki', (req, res) => {
    try {
        res.render('ventilyacionnye-ustanovki', {
            title: 'Вентиляционные установки в Казани купить по выгодной цене от производителя',
            pageHeader: 'Вентиляционные установки',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy', (req, res) => {
    try {
        res.render('teplovye-zavesy', {
            title: 'Тепловые завесы в Казани купить по выгодной цене от производителя',
            pageHeader: 'Тепловые завесы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vodyanye-teplovye-zavesy', (req, res) => {
    try {
        res.render('vodyanye-teplovye-zavesy', {
            title: 'Водяные тепловые завесы в Казани купить по выгодной цене от производителя',
            pageHeader: 'Водяные тепловые завесы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/raskhodnye-materialy', (req, res) => {
    try {
        res.render('raskhodnye-materialy', {
            title: 'Расходные материалы в Казани купить по выгодной цене от производителя',
            pageHeader: 'Расходные материалы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/gofrirovannye-truby', (req, res) => {
    try {
        res.render('gofrirovannye-truby', {
            title: 'Гофрированные трубы в Казани купить по выгодной цене от производителя',
            pageHeader: 'Гофрированные трубы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/khomuty', (req, res) => {
    try {
        res.render('khomuty', {
            title: 'Хомуты в Казани купить по выгодной цене от производителя',
            pageHeader: 'Хомуты',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/truby', (req, res) => {
    try {
        res.render('truby', {
            title: 'Трубы в Казани купить по выгодной цене от производителя',
            pageHeader: 'Трубы',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;