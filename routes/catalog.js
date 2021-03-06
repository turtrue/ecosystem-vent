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

router.get('/diffuzory-i-reshetki', (req, res) => {
    try {
        res.render('diffuzory-i-reshetki', {
            title: 'Диффузоры и решетки в Казани купить по выгодной цене от производителя',
            pageHeader: 'Диффузоры и решетки',
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

router.get('/metalloprokat', (req, res) => {
    try {
        res.render('metalloprokat', {
            title: 'Металлопрокат в Казани купить по выгодной цене от производителя',
            pageHeader: 'Металлопрокат',
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

router.get('/polipropilenovye-truby-i-fitingi', (req, res) => {
    try {
        res.render('polipropilenovye-truby-i-fitingi', {
            title: 'Полипропиленовые трубы и фитинги в Казани купить по выгодной цене от производителя',
            pageHeader: 'Полипропиленовые трубы и фитинги',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;