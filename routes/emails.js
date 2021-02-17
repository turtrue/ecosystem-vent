const { Router } = require('express');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const keys = require('../keys');
const userStatementEmail = require('../emails/userStatement');
const officeStatementEmail = require('../emails/officeStatement');
const router = Router();

// Email
const transporter = nodemailer.createTransport(sendgrid({
    auth: { api_key: keys.SENDGRID_API_KEY }
}));

router.post('/statement', async (req, res) => {
    console.log('req.files', req.files);

    try {
        if (!req.body.isFormStatement) throw new Error('Обращение произошло не из формы');

        const { name, phone, email } = req.body;
        await transporter.sendMail(userStatementEmail(name, email));
        await transporter.sendMail(officeStatementEmail(name, phone, email));
        res.status(200).send();
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;