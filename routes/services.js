const { Router } = require('express');
const Product = require('../models/Product');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const productsToSearch = await Product
            .find({ isSubcategory: false }, 'name translit');

        res.render('services', {
            title: 'Услуги по проектированию, пуско-наладке, паспортизации и монтажу систем вентиляции, по устройству и оборудованию тепловых сетей, по установке бытовых и промышленных кондиционеров любых марок в Казани',
            isService: true,
            data: JSON.stringify(productsToSearch)
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;