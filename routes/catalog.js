const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('catalog', {
            title: 'Каталог товаров',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vozdukhovody-i-fasonnye-chasti', (req, res) => {
    try {
        res.render('vozdukhovody-i-fasonnye-chasti', {
            title: 'Воздуховоды и фасонные части',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/komplektuyushchie', (req, res) => {
    try {
        res.render('komplektuyushchie', {
            title: 'Комплектующие',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vozdukhovody', (req, res) => {
    try {
        res.render('vozdukhovody', {
            title: 'Воздуховоды',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/fasonnye-chasti', (req, res) => {
    try {
        res.render('fasonnye-chasti', {
            title: 'Фасонные части',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/diffuzory', (req, res) => {
    try {
        res.render('diffuzory', {
            title: 'Диффузоры',
            isCatalog: true
        });
    } catch (e) {
        console.log(e);
    }
});

// router.get('/ventilyacionnye-ustanovki', (req, res) => {
//     try {
//         res.render('ventilyacionnye-ustanovki', {
//             title: 'Вентиляционные установки',
//             isCatalog: true
//         });
//     } catch (e) {
//         console.log(e);
//     }
// });

// router.get('/teplovye-zavesy', (req, res) => {
//     try {
//         res.render('teplovye-zavesy', {
//             title: 'Тепловые завесы',
//             isCatalog: true
//         });
//     } catch (e) {
//         console.log(e);
//     }
// });

// router.get('/vodyanye-teplovye-zavesy', (req, res) => {
//     try {
//         res.render('vodyanye-teplovye-zavesy', {
//             title: 'Водяные тепловые завесы',
//             isCatalog: true
//         });
//     } catch (e) {
//         console.log(e);
//     }
// });

module.exports = router;