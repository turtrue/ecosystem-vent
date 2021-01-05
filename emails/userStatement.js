const keys = require('../keys');

module.exports = function (name, email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Заявка',
        html: `
            <h1>Добрый день ${name}</h1>
            <p>Благодарим за доверие. Ваша заявка обрабатывается, в ближайшее время наш менеджер с вами свяжеться.</p>
            <p>Наш телефон: ${keys.PHONE_OFFICE}</p>
            <p>Наш адрес: ${keys.ADDRESS_OFFICE}</p>
            <hr/>
            <a href='${keys.BASE_URL}'>Нажмите чтобы вернуться на сайт Ecosystem</a>
        `
    }
}