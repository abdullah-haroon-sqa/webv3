const correctAnswers = ['A', 'B', 'D', 'B'];
const form = document.querySelector('.quiz-form');
const answerDiscription = document.querySelectorAll('.ask');
const result = document.querySelector('.result');
const popup = document.querySelector('.pop-up');
const error = document.querySelector('.error');
const articleQuiz = document.querySelector('article');


// Window is the global object of the JS
// Therfore we donthave to explecitily write the window. in every statement
//  window.console.log()
//  console.log() 
//  are the same

var array = Array.from(form.children);

form.addEventListener('submit', e => {
    let counter = 0;
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer === 'A' || answer === 'B' || answer === 'C' || answer === 'D') {
            if (answer === correctAnswers[index]) {
                score += 25;
            }
        } else {
            counter++;
        }
    });


    if (counter > 0) {
        articleQuiz.style.display = 'none';
        popup.classList.remove('d-none');
        error.addEventListener('click', e => {
            articleQuiz.style.display = 'block';
            popup.classList.add('d-none');
        });
        popup.addEventListener('click', e => {
            articleQuiz.style.display = 'block';
            popup.classList.add('d-none');
        })
    } else {

        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {

            } else {
                array[index].innerHTML += `<p  style="color:black;">You answer was incorrect.<br>The correct answer is option ${correctAnswers[index]}</p>`
            }
        });
        window.scrollTo(0, 0);
        result.classList.remove('d-none');

        // to animate the score 
        let output = 0;
        const timer = window.setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if (output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 15)
    }
    form.addEventListener('submit', e => {
        e.preventDefault();
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {

            } else {
                answerDiscription[index].lastChild.remove();
            }
        });
    });
});



// window.setTimeout(()=>{
//     alert('ok');
// }
// ,3000);