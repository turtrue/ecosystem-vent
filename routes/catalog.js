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

router.get('/kondicionery', (req, res) => {
    try {
        res.render('kondicionery', {
            title: 'Кондиционеры в Казани купить по выгодной цене от производителя',
            pageHeader: 'Кондиционеры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;