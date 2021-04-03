const { Router } = require('express');
const Category = require('../models/Category');
const router = Router();

function catalogRoute(category, translit) {
    if (translit === 'katalog') translit = '';

    router.get(`/${translit}`, async (req, res) => {
        try {
            const productData = await Category
                .find({ 'translit': translit || 'katalog' })
                .populate('product');

            const products = productData.map(obj => obj.product);

            res.render('catalog', {
                title: `${category} в Казани купить по выгодной цене от производителя`,
                pageHeader: category,
                isCatalog: true,
                products
            });
        } catch (e) {
            console.log(e);
        }

        console.log(`Отработал роут /${translit || 'catalog'}`);
    });
}

async function catalogRoutes() {
    try {
        const categoryData = await Category.find({});
        const setCategories = new Set();
        const setTranslits = new Set();

        categoryData.forEach(obj => {
            setCategories.add(obj.category);
            setTranslits.add(obj.translit);
        });

        const arrCategories = Array.from(setCategories);
        const arrTranslits = Array.from(setTranslits);

        arrTranslits.forEach((translit, i) => {
            catalogRoute(arrCategories[i], translit);
        });
    } catch (e) {
        console.log(e);
    }

    console.log('Роуты каталога перестроены');
}
catalogRoutes();

module.exports = router;