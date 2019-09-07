

const reg = /([А-ЯЁ][а-яё]+|[А-ЯЁ][а-яё]+-[А-ЯЁ][а-яё]+)/g;
const regMaie = /(\w+|\-\w+)@[a-z]{1,}\.[a-z]{1,}/g; 
const regphone = /\+?\s?\d\s?\D?\(?\s?\d{3}\s?\)?\s?\D?\s?\d{3}\s?\D?\s?\d\d\s?\D?\s?\d\d/g;   
const regUrl = /http[s]?(:)\/\/\S{1,}/g; 

const button = document.querySelector('.form__button');
const form = document.forms.register;
const nameFormInput = form.elements.name1;
const emailFormInput = form.elements.name2;
const phoneFormInput = form.elements.name3;
const urlFormInput = form.elements.name4;

button.addEventListener('click', ()=>{
    if (urlFormInput.value.match(regUrl)){
        console.log(urlFormInput.value.match(regUrl));
    } else {
        console.log('неа')
    }
});