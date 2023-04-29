const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('.submit');

const firstErr = document.querySelector('.first');
const firstErr2 = document.querySelector('.first2');
const lastErr = document.querySelector('.last');
const lastErr2 = document.querySelector('.last2');
const emailErr = document.querySelector('.err-mail');
const emailErr2 = document.querySelector('.err-mail2');
const passErr = document.querySelector('.pass-err');
const passErr2 = document.querySelector('.pass-err2');




form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(firstName.value === '' || firstName.value === null){
        firstErr.classList.remove('hidden');
        firstErr2.classList.remove('hidden');
        firstName.style.borderColor = 'var(--Red)';
    } else {
        firstErr.classList.add('hidden');
        firstErr2.classList.add('hidden')
        firstName.style.borderColor = 'rgba(0, 0, 0, 0.265)';
    }  
        if (lastName.value === '' || lastName.value === null){
            lastErr.classList.remove('hidden');
            lastErr2.classList.remove('hidden');
            lastName.style.borderColor = 'var(--Red)';
        } else {
            lastErr.classList.add('hidden');
            lastErr2.classList.add('hidden');
            lastName.style.borderColor = 'rgba(0, 0, 0, 0.265)';
        }

        const regEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
        if(email.value.match(regEx)){
            emailErr.classList.add('hidden');
            emailErr2.classList.add('hidden');
            email.style.borderColor = 'rgba(0, 0, 0, 0.265)';
            email.style.color = 'black';
        } else {
            emailErr.classList.remove('hidden');
            emailErr2.classList.remove('hidden');
            email.style.borderColor = 'var(--Red)';
            email.style.color = 'var(--Red)';
        }
    
        if(password.value === '' || password.value === null){
            passErr.classList.remove('hidden');
            passErr2.classList.remove('hidden');
            password.style.borderColor = 'var(--Red)';
        } else {
            passErr.classList.add('hidden');
            passErr2.classList.add('hidden');
            password.style.borderColor = 'rgba(0, 0, 0, 0.265)';
        }
});



 