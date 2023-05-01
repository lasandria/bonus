var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);


new JustValidate('.form', {
    colorWrong: '#FF5C00',
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                
                return Number(phone) && phone.length === 10
            }                
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        mail: {
            required: 'Вы не ввели email'
        },
        tel: {
            required: 'Вы не ввели телефон',
            function: 'Введите полностью номер телефона'
        },
        name: {
            required: 'Вы не ввели имя'
        }
    }

});