const { Router } = require('express');
const router = Router();

const info = {
    supText: 'Свяжитесь с нами и мы подберем для вас необходимый продукт подходящий под ваши требования.',
    phones: ['+78435052775', '+79395052775'],
    time: 'с 8:00 до 20:00',
    subText: 'В нашем каталоге присутствуют товарные позиции разных форм и размеров. Детальные характеристики которых представлены в нижеприведенной таблице.',
    service: {
        title: 'Поставка данных изделий',
        text: ['Для каких бы целей вам ни требовались данные изделия, сделать заказ вы можете в Ecosystem.', 'Напишите нам на почту, прикрепите файл проекта или спецификацию и мы предложим вам оптимальную цену на материалы, которые будут соотвествовать вашим требованиям.', 'Продукт соответствует международным стандартам.']
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

router.get('/pryamougolnye-zaglushki', (req, res) => {
    try {
        res.render('products/pryamougolnye-zaglushki', {
            title: 'Прямоугольные заглушки купить в Казани, цены от производителя',
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

router.get('/pryamougolnye-vrezki', (req, res) => {
    try {
        res.render('products/pryamougolnye-vrezki', {
            title: 'Прямоугольные врезки купить в Казани, цены от производителя',
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

router.get('/kruglye-drossel-klapany', (req, res) => {
    try {
        res.render('products/kruglye-drossel-klapany', {
            title: 'Круглые дроссель-клапаны купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/pryamougolnye-drossel-klapany', (req, res) => {
    try {
        res.render('products/pryamougolnye-drossel-klapany', {
            title: 'Прямоугольные дроссель-клапаны купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Диффузоры и решетки
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

// Расходные материалы
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

router.get('/khomuty', (req, res) => {
    try {
        res.render('products/khomuty', {
            title: 'Хомуты купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/metizy', (req, res) => {
    try {
        res.render('products/metizy', {
            title: 'Метизы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kronshtejny-dlya-kondicionerov', (req, res) => {
    try {
        res.render('products/kronshtejny-dlya-kondicionerov', {
            title: 'Кронштейны для кондиционеров в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/protivopozharnye-klapany', (req, res) => {
    try {
        res.render('products/protivopozharnye-klapany', {
            title: 'Противопожарные клапаны в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Металлопрокат
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

// Полипропиленовые трубы и фитинги
router.get('/polipropilenovye-truby', (req, res) => {
    try {
        res.render('products/polipropilenovye-truby', {
            title: 'Полипропиленовые трубы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/gofrirovannye-truby', (req, res) => {
    try {
        res.render('products/gofrirovannye-truby', {
            title: 'Гофрированные трубы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kanalizacionnye-truby', (req, res) => {
    try {
        res.render('products/kanalizacionnye-truby', {
            title: 'Канализационные трубы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/fitingi', (req, res) => {
    try {
        res.render('products/fitingi', {
            title: 'Фитинги купить в Казани, цены от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

// Кондиционеры
router.get('/bytovye-kondicionery', (req, res) => {
    try {
        res.render('products/bytovye-kondicionery', {
            title: 'Бытовые кондиционеры в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/kommercheskie-kondicionery', (req, res) => {
    try {
        res.render('products/kommercheskie-kondicionery', {
            title: 'Коммерческие кондиционеры в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

router.get('/promyshlennye-kondicionery', (req, res) => {
    try {
        res.render('products/promyshlennye-kondicionery', {
            title: 'Промышленные кондиционеры в Казани купить по выгодной цене от производителя',
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

// Вентиляторы
router.get('/ventilyatory', (req, res) => {
    try {
        res.render('products/ventilyatory', {
            title: 'Вентиляторы в Казани купить по выгодной цене от производителя',
            isCatalog: true,
            info
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;