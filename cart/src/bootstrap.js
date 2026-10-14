import faker from 'faker';

const mount = (el) => {
    const randomNumber = faker.random.number();
    const msg = `You have ${randomNumber} item(s) in your cart`;
    el.innerHTML = `<div>${msg}</div>`;
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };