const USER = 'USER';




export function playerInfo() {
    const name = document.querySelector('#name');
    const costume = document.querySelector('#costume');
    const chp = document.querySelector('#chp');
    const candy = document.querySelector('#candy');

    const user = getUser();

    name.textContent = user.name;
    costume.src = '../assets/' + user.costume + '.png';
    chp.textContent = user.chp;
    candy.textContent = user.candy;
}


export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}