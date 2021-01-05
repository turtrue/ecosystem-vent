const keys = require('../keys');

module.exports = function (name, phone, email) {
    return {
        to: keys.EMAIL_OFFICE,
        from: keys.EMAIL_FROM,
        subject: 'Заявка',
        html: `
            <h1>Заявка от ${name}</h1>
            <p>Телефон: ${phone}</p>
            <p>Email: ${email}</p>
            <hr/>
            <a href='${keys.BASE_URL}'>Ecosystem</a>
        `
    }
}