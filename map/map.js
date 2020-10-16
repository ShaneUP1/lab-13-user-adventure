import houses from '../data.js';

const ul = document.querySelector('ul');

houses.forEach(house => {
    const link = document.createElement('a');

    link.textContent = house.title;
    link.href = `../houses/?id=${house.id}`;

    ul.append(link);

});