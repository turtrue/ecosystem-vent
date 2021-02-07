const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('service', {
            title: 'Услуги',
            isService: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;