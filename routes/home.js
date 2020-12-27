const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('home', {
            title: 'Главная',
            isHome: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;