import houses from '../data.js';
import { getUser, playerInfo, completedAllHouses } from '../utils.js';


playerInfo();
const user = getUser();


console.log(houses);
console.log(user);
console.log(completedAllHouses(houses, user));
if (user.chp === 0 || completedAllHouses(houses, user)) {
    window.location = '../results';
}


const ul = document.querySelector('ul');

houses.forEach(house => {

    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = house.title;
    link.href = `../houses/?id=${house.id}`;

    ul.append(li);

});