import { saveUser } from './utils.js';


const form = document.querySelector('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const user = {
        name: data.get('name'),
        costume: data.get('costume'),
        chp: 30,
        candy: 0,
        completed: {}
    };
    saveUser(user);
});