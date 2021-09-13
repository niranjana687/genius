console.log('client side js!');

const searchForm = document.querySelector('form');
const query = document.querySelector('input');
const result = document.querySelector('#result');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = query.value;
})
