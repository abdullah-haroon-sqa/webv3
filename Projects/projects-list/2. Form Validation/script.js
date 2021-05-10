const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
//const username = document.querySelector('#username');
const uPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); // By default the browser reloads when the submit button is clicked. therefore it is prevented by the preventDefault() method;
    //  console.log(username.value);
    //  There is one other method to achieve the above task.
    //  We will directly use the form itself to access its child. It comes with the Submit EventListner.

    const uName = form.username.value;
    form.username.setAttribute('placeholder', `last time you used '${name.toUpperCase()}' here`);


    if (uPattern.test(uName)) {
        feedback.textContent = 'That username is valid :)';
    } else {
        feedback.textContent = 'Username must contain upercase and lowercase letters between 6 to 12.'
    }

});

form.username.addEventListener('keyup', e => {
    if (uPattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});