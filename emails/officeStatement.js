const keys = require('../keys');

module.exports = function (name, phone, email, fileName, path) {
    if (fileName && path) {
        return {
            to: keys.EMAIL_OFFICE,
            from: keys.EMAIL_FROM,
            subject: 'Заявка',
            html: `
                <h1>Заявка от ${name}</h1>
                <p>Телефон: ${phone}</p>
                <p>Email: ${email}</p>
                <hr/>
                <a href='${keys.BASE_URL}'>Вернуться на сайт Ecosystem</a>
            `,
            attachments: [
                { fileName, path }
            ]
        }
    } else {
        return {
            to: keys.EMAIL_OFFICE,
            from: keys.EMAIL_FROM,
            subject: 'Заявка',
            html: `
                <h1>Заявка от ${name}</h1>
                <p>Телефон: ${phone}</p>
                <p>Email: ${email}</p>
                <hr/>
                <a href='${keys.BASE_URL}'>Вернуться на сайт Ecosystem</a>
            `
        }
    }
}