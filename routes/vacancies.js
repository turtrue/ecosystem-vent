const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('vacancies', {
            title: 'Работа в компании',
            isVacancies: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;