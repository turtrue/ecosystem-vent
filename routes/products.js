const { Router } = require('express');
const router = Router();

const info = {
    supText: 'Свяжитесь с нами и мы подберем для вас необходимый продукт подходящий под ваши требования.',
    phones: ['+78435052775', '+79395052775'],
    time: 'с 8:00 до 20:00',
    subText: 'В нашем каталоге присутствуют товарные позиции разных форм и размеров. Детальные характеристики которых представлены в нижеприведенной таблице.',
    service: {
        title: 'Поставка данных изделий',
        text: ['Для каких бы целей вам ни требовались данные изделия, сделать заказ вы можете в Ecosystem.', 'Продукт соответствует международным стандартам.']
    }
}

router.get('/', (req, res) => {
    try {
        res.render('products', {
            title: 'Продукция',
            isProducts: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Воздуховоды
router.get('/kruglye-vozdukhovody', (req, res) => {
    try {
        res.render('products/kruglye-vozdukhovody', {
            title: 'Круглые воздуховоды купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-vozdukhovody', (req, res) => {
    try {
        res.render('products/pryamougolnye-vozdukhovody', {
            title: 'Прямоугольные воздуховоды купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Фасонные части
router.get('/kruglye-otvody', (req, res) => {
    try {
        res.render('products/kruglye-otvody', {
            title: 'Круглые отводы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-otvody', (req, res) => {
    try {
        res.render('products/pryamougolnye-otvody', {
            title: 'Прямоугольные отводы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-perekhody', (req, res) => {
    try {
        res.render('products/kruglye-perekhody', {
            title: 'Круглые переходы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-trojniki', (req, res) => {
    try {
        res.render('products/kruglye-trojniki', {
            title: 'Круглые тройники купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-zaglushki', (req, res) => {
    try {
        res.render('products/kruglye-zaglushki', {
            title: 'Круглые заглушки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-zonty', (req, res) => {
    try {
        res.render('products/kruglye-zonty', {
            title: 'Круглые зонты купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kruglye-vrezki', (req, res) => {
    try {
        res.render('products/kruglye-vrezki', {
            title: 'Круглые врезки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamye-vrezki', (req, res) => {
    try {
        res.render('products/pryamye-vrezki', {
            title: 'Прямые врезки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-trojniki', (req, res) => {
    try {
        res.render('products/pryamougolnye-trojniki', {
            title: 'Прямоугольные тройники купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-perekhody', (req, res) => {
    try {
        res.render('products/pryamougolnye-perekhody', {
            title: 'Прямоугольные переходы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/perekhody-s-pryamougolnykh-na-kruglye-secheniya', (req, res) => {
    try {
        res.render('products/perekhody-s-pryamougolnykh-na-kruglye-secheniya', {
            title: 'Переходы с прямоугольных на круглые сечения купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-zonty', (req, res) => {
    try {
        res.render('products/pryamougolnye-zonty', {
            title: 'Прямоугольные зонты купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-utki', (req, res) => {
    try {
        res.render('products/pryamougolnye-utki', {
            title: 'Прямоугольные утки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/nippeli', (req, res) => {
    try {
        res.render('products/nippeli', {
            title: 'Ниппели купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/drossel-klapana', (req, res) => {
    try {
        res.render('products/drossel-klapana', {
            title: 'Дроссель клапана купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Комплектующие
router.get('/lsp', (req, res) => {
    try {
        res.render('products/lsp', {
            title: 'ЛСП купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/ventilyacionnye-khomuty', (req, res) => {
    try {
        res.render('products/ventilyacionnye-khomuty', {
            title: 'Вентиляционные хомуты купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/gibkie-vstavki', (req, res) => {
    try {
        res.render('products/gibkie-vstavki', {
            title: 'Гибкие вставки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/skoby', (req, res) => {
    try {
        res.render('products/skoby', {
            title: 'Скобы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/uplotnitelnye-lenty', (req, res) => {
    try {
        res.render('products/uplotnitelnye-lenty', {
            title: 'Уплотнительные ленты купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/vibroopory', (req, res) => {
    try {
        res.render('products/vibroopory', {
            title: 'Виброопоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/strubciny', (req, res) => {
    try {
        res.render('products/strubciny', {
            title: 'Струбцины купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/shpilki', (req, res) => {
    try {
        res.render('products/shpilki', {
            title: 'Шпильки купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Диффузоры
router.get('/dvs-diffuzory', (req, res) => {
    try {
        res.render('products/dvs-diffuzory', {
            title: 'DVS диффузоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/dvs-p-diffuzory', (req, res) => {
    try {
        res.render('products/dvs-p-diffuzory', {
            title: 'DVS-P диффузоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pav-b-diffuzory', (req, res) => {
    try {
        res.render('products/pav-b-diffuzory', {
            title: 'PAV-B диффузоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/rad-diffuzory', (req, res) => {
    try {
        res.render('products/rad-diffuzory', {
            title: 'RAD диффузоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/sad-diffuzory', (req, res) => {
    try {
        res.render('products/sad-diffuzory', {
            title: 'SAD диффузоры купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/alyuminievyj-skotch', (req, res) => {
    try {
        res.render('products/alyuminievyj-skotch', {
            title: 'Алюминиевый скотч купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/flancevaya-shina', (req, res) => {
    try {
        res.render('products/flancevaya-shina', {
            title: 'Фланцевая шина купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/anker-zabivnoj', (req, res) => {
    try {
        res.render('products/anker-zabivnoj', {
            title: 'Анкер забивной купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Гофровые трубы
router.get('/plastikovaya-gofrotruba', (req, res) => {
    try {
        res.render('products/plastikovaya-gofrotruba', {
            title: 'Пластиковая гофротруба купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/gofrotruba-iz-alyuminievoj-folgi', (req, res) => {
    try {
        res.render('products/gofrotruba-iz-alyuminievoj-folgi', {
            title: 'Гофротруба из алюминиевой фольги купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/uteplennaya-gofrotruba', (req, res) => {
    try {
        res.render('products/uteplennaya-gofrotruba', {
            title: 'Утепленная гофротруба купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Хомуты
router.get('/bystrosemnye-khomuty-mx', (req, res) => {
    try {
        res.render('products/bystrosemnye-khomuty-mx', {
            title: 'Быстросъемные хомуты MX купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/nejlonovyj-khomut', (req, res) => {
    try {
        res.render('products/nejlonovyj-khomut', {
            title: 'Нейлоновый хомут купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/chervyachnyj-khomut', (req, res) => {
    try {
        res.render('products/chervyachnyj-khomut', {
            title: 'Червячный хомут купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pruzhinnyj-khomut', (req, res) => {
    try {
        res.render('products/pruzhinnyj-khomut', {
            title: 'Пружинный хомут купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/trubnyj-khomut', (req, res) => {
    try {
        res.render('products/trubnyj-khomut', {
            title: 'Трубный хомут купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Трубы
router.get('/mednye-truby', (req, res) => {
    try {
        res.render('products/mednye-truby', {
            title: 'Медные трубы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/stalnye-truby', (req, res) => {
    try {
        res.render('products/stalnye-truby', {
            title: 'Стальные трубы купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Тепловые завесы
router.get('/teplovye-zavesy', (req, res) => {
    try {
        res.render('products/teplovye-zavesy', {
            title: 'Тепловые завесы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Вентиляционные установки
router.get('/ventilyacionnye-ustanovki', (req, res) => {
    try {
        res.render('products/ventilyacionnye-ustanovki', {
            title: 'Вентиляционные установки в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Диффузоры
router.get('/diffuzory', (req, res) => {
    try {
        res.render('products/diffuzory', {
            title: 'Диффузоры в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;