const button = document.querySelector('button');
const ul = document.querySelector('ul');
const items = document.querySelectorAll('li');
const error = document.querySelector('.error');

button.addEventListener('click', e => {
    if (ul.childElementCount == 0) {
        error.style.display = 'none';
    }
    let msg = window.prompt('What do you want to add in the List?');
    const li = document.createElement('li');
    li.classList.add('todo_list--item');
    li.innerText = msg;
    ul.append(li);
});

ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
    if (ul.childElementCount == 0) {
        error.style.display = 'block';
    }
});