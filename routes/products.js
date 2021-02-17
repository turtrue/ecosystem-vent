const { Router } = require('express');
const router = Router();

const info = {
    supText: 'Свяжитесь с нами и мы подберем для вас необходимый продукт подходящий под ваши требования.',
    phones: ['+78435052775', '+79395052775'],
    time: 'с 8:00 до 20:00',
    subText: 'В нашем каталоге присутствуют товарные позиции разных форм и размеров. Детальные характеристики которых представлены в нижеприведенной таблице.'
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

// Вентиляционные установки
router.get('/pritochno-vytyazhnye-ventilyacionnye-ustanovki-svan', (req, res) => {
    try {
        res.render('products/pritochno-vytyazhnye-ventilyacionnye-ustanovki-svan', {
            title: 'Приточно-вытяжные вентиляционные установки СВАН купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/sostavnye-pritochnye-ventilyacionnye-ustanovki-avs', (req, res) => {
    try {
        res.render('products/sostavnye-pritochnye-ventilyacionnye-ustanovki-avs', {
            title: 'Составные приточные вентиляционные установки АВС купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Водяные тепловые завесы
router.get('/teplovye-zavesy-28p3137w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-28p3137w', {
            title: 'Тепловые завесы КЭВ 28P3137W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-20p2111w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-20p2111w', {
            title: 'Тепловые завесы КЭВ 20P2111W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-20p2171w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-20p2171w', {
            title: 'Тепловые завесы КЭВ 20P2171W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-28p3131w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-28p3131w', {
            title: 'Тепловые завесы КЭВ 28P3131W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-28p3171w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-28p3171w', {
            title: 'Тепловые завесы КЭВ 28P3171W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-29p2121w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-29p2121w', {
            title: 'Тепловые завесы КЭВ 29P2121W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-42p3111w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-42p3111w', {
            title: 'Тепловые завесы КЭВ 42P3111W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-42p3116w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-42p3116w', {
            title: 'Тепловые завесы КЭВ 42P3116W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-42p3117w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-42p3117w', {
            title: 'Тепловые завесы КЭВ 42P3117W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-42p3181w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-42p3181w', {
            title: 'Тепловые завесы КЭВ 42P3181W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-44p4131w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-44p4131w', {
            title: 'Тепловые завесы КЭВ 44P4131W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-60p3141w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-60p3141w', {
            title: 'Тепловые завесы КЭВ 60P3141W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-60p3146w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-60p3146w', {
            title: 'Тепловые завесы КЭВ 60P3146W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-60p3147w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-60p3147w', {
            title: 'Тепловые завесы КЭВ 60P3147W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-60p3191w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-60p3191w', {
            title: 'Тепловые завесы КЭВ 60P3191W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-70p4141w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-70p4141w', {
            title: 'Тепловые завесы КЭВ 70P4141W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-75p4050w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-75p4050w', {
            title: 'Тепловые завесы КЭВ 75P4050W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-98p4121w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-98p4121w', {
            title: 'Тепловые завесы КЭВ 98P4121W купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/teplovye-zavesy-kehv-100p4060w', (req, res) => {
    try {
        res.render('products/teplovye-zavesy-kehv-100p4060w', {
            title: 'Тепловые завесы КЭВ 100P4060W купить в Казани, цены от производителя',
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
router.get('/mednaya-otozhzhennaya-truba', (req, res) => {
    try {
        res.render('products/mednaya-otozhzhennaya-truba', {
            title: 'Медная отожженная труба купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;