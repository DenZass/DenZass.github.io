

const reg = /([А-ЯЁ][а-яё]+|[А-ЯЁ][а-яё]+-[А-ЯЁ][а-яё]+)/g;
const regMaie = /(\w+|\-\w+)@[a-z]{1,}\.[a-z]{1,}/g;
const regphone = /\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*\d\D*/g;  
const regUrl = /http[s]?(:)\/\/\S{1,}/g;

const button = document.querySelector('.form__button');
const form = document.forms.register;
const nameFormInput = form.elements.name1;
const emailFormInput = form.elements.name2;
const phoneFormInput = form.elements.name3;
const urlFormInput = form.elements.name4;
let num = null;
let resul = null;
let regg = /\d/g;

function arrMap(item) {
    item.map((item) => {
        //    console.log(item.match(regg));
        resul = item.match(regg);
    });
}

button.addEventListener('click', () => {
    if (phoneFormInput.value.match(regphone)) {
        // console.log(phoneFormInput.value);
        console.log(phoneFormInput.value.match(regphone));
        num = phoneFormInput.value.match(regphone);
        arrMap(num);
        console.log(resul);
    } else {
        console.log('неа')
    }
});

