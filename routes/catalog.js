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
        res.render('catalog/vozdukhovody-i-fasonnye-chasti', {
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
        res.render('catalog/diffuzory-i-reshetki', {
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
        res.render('catalog/vozdukhovody', {
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
        res.render('catalog/fasonnye-chasti', {
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
        res.render('catalog/raskhodnye-materialy', {
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
        res.render('catalog/metalloprokat', {
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
        res.render('catalog/kondicionery', {
            title: 'Кондиционеры в Казани купить по выгодной цене от производителя',
            pageHeader: 'Кондиционеры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/truby-i-fitingi', (req, res) => {
    try {
        res.render('catalog/truby-i-fitingi', {
            title: 'Трубы и фитинги в Казани купить по выгодной цене от производителя',
            pageHeader: 'Трубы и фитинги',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/ognezashchita-i-teploizolyaciya', (req, res) => {
    try {
        res.render('catalog/ognezashchita-i-teploizolyaciya', {
            title: 'Огнезащита и теплоизоляция в Казани купить по выгодной цене от производителя',
            pageHeader: 'Огнезащита и теплоизоляция',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;