const path = require('path');
const fs = require('fs');
const util = require('util');
const { Router } = require('express');
const nodemailer = require('nodemailer');
const userStatementEmail = require('../emails/userStatement');
const officeStatementEmail = require('../emails/officeStatement');
const router = Router();

async function mailTo(message, path) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ecosystem.kazan@gmail.com',
            pass: 'ecosystem123456789'
        }
    });

    await transporter.sendMail(message, err => {
        if (err) console.log(err);
        if (path) fs.unlink(path, () => console.log('File was deleted'));
    });
}

router.post('/statement', async (req, res) => {
    try {
        if (!req.body.isFormStatement) {
            console.log('Не обнаружен isFormStatement');
            res.status(200).send();
            return;
        }

        const { name, phone, email } = req.body;
        const file = req.files ? req.files.file : false;

        if (file) {
            const fileName = file.name;
            const extension = path.extname(fileName);
            const md5 = file.md5;
            const filePath = '/uploads/' + md5 + extension;
            const filePathAbsolute = path.dirname(__dirname) + '/public' + filePath;

            await util.promisify(file.mv)('./public' + filePath);

            const msgOffice = officeStatementEmail(name, phone, email, fileName, filePathAbsolute);
            const msgUser = userStatementEmail(name, email);
            mailTo(msgOffice, filePathAbsolute);
            mailTo(msgUser);

            res.status(200).send();
            return;
        }

        const msgOffice = officeStatementEmail(name, phone, email);
        const msgUser = userStatementEmail(name, email);
        mailTo(msgOffice);
        mailTo(msgUser);

        res.status(200).send();
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;