const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    try {
        res.render('services', {
            title: 'Услуги по проектированию, пуско-наладке, паспортизации и монтажу систем вентиляции, по устройству и оборудованию тепловых сетей, по установке бытовых и промышленных кондиционеров любых марок в Казани',
            isService: true
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;