const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('services', {
            title: 'Услуги',
            isServices: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;