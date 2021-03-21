const path = require('path');
const util = require('util');
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

const mailHandler = async (name, phone, email, fileName, filePathAbsolute) => {
    await transporter.sendMail(userStatementEmail(name, email));
    await transporter.sendMail(officeStatementEmail(name, phone, email, fileName, filePathAbsolute));
}

router.post('/statement', async (req, res) => {
    if (!req.body.isFormStatement) res.status(404).send();

    const { name, phone, email } = req.body;
    const file = req.files ? req.files.file : false;

    try {
        if (file) {
            const fileName = file.name;
            const extension = path.extname(fileName);

            // const allowedExtensions = /zip|rar|txt|pdf|jpeg|jpg|png/;
            // if (!allowedExtensions.test(extension)) throw 'Недопустимое расширение файла';
            // const size = file.data.length;
            // if (size > 5000000) throw 'Файл больше 5MB';

            const md5 = file.md5;
            const filePath = '/uploads/' + md5 + extension;
            await util.promisify(file.mv)('./public' + filePath);

            const filePathAbsolute = path.dirname(__dirname) + '/public' + filePath;
            await mailHandler(name, phone, email, fileName, filePathAbsolute);
            res.status(200).send();
            return true;
        }

        await mailHandler(name, phone, email);
        res.status(200).send();
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;