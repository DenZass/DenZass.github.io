

const reg = /([А-ЯЁ][а-яё]+|[А-ЯЁ][а-яё]+-[А-ЯЁ][а-яё]+)/g;
const regMaie = /(\w+|\-\w+)@[a-z]{1,}\.[a-z]{1,}/g; // /\w+\.@[a-z]{1,}\.[a-z]{1,5}/g
// const regphone = /(\+\d\s?|\d\s?)\(?\-?\s?\d{3}\)?\s?\-?\s?\d{3}(\s?\-?\s?\d{2}\s?){2}/g; в js работает,в html нет
  //                       +7/8 ||             |                |   
const regphone = /\+?\s?\d\s?\D?\(?\s?\d{3}\s?\)?\s?\D?\s?\d{3}\s?\D?\s?\d\d\s?\D?\s?\d\d/g; //  
const regUrl = /http[s]?(:)\/\/\S{1,}/g; //(www.)?

const button = document.querySelector('.form__button');
const form = document.forms.register;
const nameFormInput = form.elements.name1;
const emailFormInput = form.elements.name2;
const phoneFormInput = form.elements.name3;
const urlFormInput = form.elements.name4;

button.addEventListener('click', ()=>{
    console.log(urlFormInput.value);
    if (urlFormInput.value.match(regUrl)){
        // console.log('hhuh');
        // console.log(nameFormInput.value.match(regMaie));
        console.log(urlFormInput.value.match(regUrl));
    } else {
        console.log('неа')
    }
    // console.log(nameFormInput.value);
});