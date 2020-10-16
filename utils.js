const USER = 'USER';



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

export function getUser(USER) {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}