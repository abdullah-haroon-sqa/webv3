const correctAnswers=['A','B','D','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');

// Window is the global object of the JS
// Therfore we donthave to explecitily write the window. in every statement
//  window.console.log()
//  console.log() 
//  are the same


form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=25;
        }
    });
    window.scrollTo(0,0);
    result.classList.remove('d-none');
    
    let output=0;
    const timer = window.setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
        if(output===score){
            clearInterval(timer);
        }
        else{
        output++;
        }
    },15)

});

// window.setTimeout(()=>{
//     alert('ok');
// }
// ,3000);