import houses from '../data.js';

const ul = document.querySelector('ul');

houses.forEach(house => {

    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = house.title;
    link.href = `../houses/?id=${house.id}`;

    ul.append(li);

});