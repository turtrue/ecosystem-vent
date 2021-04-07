const { Router } = require('express');
const Product = require('../models/Product');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const productsToSearch = await Product
            .find({ isSubcategory: false }, 'name translit');

        res.render('vacancies', {
            title: 'Работа в компании',
            isVacancies: true,
            data: JSON.stringify(productsToSearch)
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;