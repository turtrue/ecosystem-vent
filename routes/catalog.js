const { Router } = require('express');
const Category = require('../models/Category');
const Product = require('../models/Product');
const router = Router();

function catalogRoute(category, translit) {
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

        console.log(`Отработал роут /${translit}`);
    });
}

async function catalogRoutes() {
    try {
        const categories = await Product.find({ isSubcategory: true }, 'name translit');

        categories.push({ name: 'Каталог', translit: '' });

        categories.forEach(category => {
            catalogRoute(category.name, category.translit);
        });
    } catch (e) {
        console.log(e);
    }

    console.log('Роуты каталога перестроены');
}
catalogRoutes();

module.exports = router;