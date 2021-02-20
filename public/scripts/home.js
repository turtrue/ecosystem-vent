// Form
const form = document.querySelector('#form');
const formMessage = document.querySelector('#form-message');
const formLoader = document.querySelector('#form-loader');
const formBtn = document.querySelector('#form-btn');

// Form submission notification message
function notificationMessage(node, message, cls) {
    if (!node.classList.contains(cls)) {
        node.className = `message ${cls}`;
        node.textContent = message;

        setTimeout(() => {
            node.classList.remove(cls);
        }, 3000);
    }
}

// Form submit
form.addEventListener('submit', event => {
    event.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const email = form.querySelector('#email').value.trim();
    // const file = form.querySelector('#file');
    const isFormStatement = form.querySelector('#isFormStatement').value;

    if (name && phone && email) {
        formLoader.classList.add('active');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        // formData.append('file', file.files[0]);
        formData.append('isFormStatement', isFormStatement);
        form.reset();

        fetch('/emails/statement', {
            method: 'POST',
            body: formData
        }).then(data => {
            if (data.status === 200) {
                formLoader.classList.remove('active');
                const message = 'Заявка успешно отправлена';
                notificationMessage(formMessage, message, 'success');
            } else {
                formLoader.classList.remove('active');
            }
        }).catch((e) => {
            console.error(e);
            formLoader.classList.remove('active');
            const message = 'Что-то пошло не так';
            notificationMessage(formMessage, message, 'error');
        });
    } else {
        const message = 'Необходимо заполнить все поля'
        notificationMessage(formMessage, message, 'error');
    }
});

// https://michalsnik.github.io/aos/
AOS.init({
    disable: function () {
        var maxWidth = 910;
        return window.innerWidth < maxWidth;
    }
});