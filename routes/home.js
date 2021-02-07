const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('home', {
            title: 'ECOSYSTEM - вентиляционное оборудование и системы вентиляции в Казани',
            isHome: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;