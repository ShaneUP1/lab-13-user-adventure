import houses from '../data.js';
import { findById } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);
const section = document.querySelector('section');

const id = searchParams.get('id');

const house = findById(houses, id);

const img = document.createElement('img');
img.src = house.image;

const h1 = document.createElement('h1');
h1.textContent = house.title;

const div = document.createElement('div');
div.textContent = house.description;

const form = document.createElement('form');
section.append(img, h1, div, form);

console.log(house.choices);

house.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    span.textContent = choice.description;


    label.append(radio, span);
    form.appendChild(label);

});

const button = document.createElement('button');

button.textContent = 'Do it!';
section.appendChild(button);