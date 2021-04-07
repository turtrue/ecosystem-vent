const { Router } = require('express');
const Product = require('../models/Product');
const router = Router();

const info = {
    supText: 'Свяжитесь с нами и мы подберем для вас необходимый продукт подходящий под ваши требования.',
    phones: ['+78435052775', '+79395052775'],
    time: 'с 8:00 до 20:00',
    subText: 'В нашем каталоге присутствуют товарные позиции разных форм и размеров. Детальные характеристики которых можно уточнить по одному из вышеуказанных телефонов',
    service: {
        title: 'Поставка данных изделий',
        text: ['Для каких бы целей вам ни требовались данные изделия, сделать заказ вы можете в Ecosystem.', 'Напишите нам на почту, прикрепите файл проекта или спецификацию и мы предложим вам оптимальную цену на материалы, которые будут соотвествовать вашим требованиям.', 'Продукт соответствует международным стандартам.']
    }
}

async function productRoutes() {
    try {
        const products = await Product.find({});
        const productsToSearch = products.map(product => {
            if (!product.isSubcategory) {
                return {
                    name: product.name,
                    translit: product.translit
                }
            }
            return {
                name: '',
                translit: ''
            }
        });

        products.forEach(product => {
            router.get(`/${product.translit}`, (req, res) => {
                try {
                    res.render('product', {
                        title: `${product.name} купить в Казани, цены от производителя`,
                        isCatalog: true,
                        product,
                        data: JSON.stringify(productsToSearch),
                        info
                    });
                } catch (e) {
                    console.log(e);
                }
                console.log(`Отработал роут /${product.translit}`);
            });
        });

        console.log('Роуты продукции перестроены');
    } catch (e) {
        console.log(e);
    }
}
productRoutes();

router.get('/routes', (req, res) => {
    if (req.query.reload === 'true') {
        productRoutes();
        res.redirect('/admin/create-product?password=true');
        return;
    }
    res.redirect('/');
});

module.exports = router;