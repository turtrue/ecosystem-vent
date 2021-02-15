// Client
// const clientItemLogos = document.querySelectorAll('.client__item-logo');
// const clientItemDescrs = document.querySelectorAll('.client__item-descr');
// const clientBackBtns = document.querySelectorAll('.btn-back__text');

// Show client item description and hide client item logos
// clientItemLogos.forEach(logo => {
//     logo.addEventListener('click', () => {
//         clientItemLogos.forEach(logo => {
//             logo.style.display = 'none';
//         });

//         const descr = logo.parentNode.querySelector('.client__item-descr');
//         descr.style.display = 'block';
//     });
// });

// Hide client item descriptions and show client item logos
// clientBackBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         clientItemLogos.forEach(logo => {
//             logo.style.display = 'block';
//         });

//         clientItemDescrs.forEach(descr => {
//             descr.style.display = 'none';
//         });
//     });
// });



// Form
const form = document.querySelector('#form');
const formMessage = document.querySelector('#form-message');
const formLoader = document.querySelector('#form-loader');
const formBtn = document.querySelector('#form-btn');

// Submit form
async function postData(url = '', data = {}) {
    formLoader.classList.add('active');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

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

formBtn.addEventListener('click', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();
    const isFormStatement = true;

    if (name && phone && email) {
        form.reset();

        postData('/emails/statement', { name, phone, email, isFormStatement })
            .then(data => {
                formLoader.classList.remove('active');
                const message = data;
                notificationMessage(formMessage, message, 'success');
            })
            .catch((e) => {
                console.log(e);
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
AOS.init();