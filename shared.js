var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var productNav = document.querySelector('.pro');

//Thi function is for the Choose Plan button.

function planButtons() {
    //old Approach
    /*modal.style.display='block';
    backdrop.style.display='block';*/
    modal.classList.add('open');
    backdrop.classList.add('open');

}

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', planButtons);
}

//This function is for the NO button in the plan section.

function closeModal() {
    /* backdrop.style.display='none';
     modal.style.display='none';*/
    if (modal) {
        modal.classList.remove('open');
    }

    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', function() {
    //  mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

// This fumction is to display the Mobile Nav.

toggleButton.addEventListener('click', function() {
    /*mobileNav.style.display='block';
    backdrop.style.display='block';*/
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

// This is for the glitch that the products in the mobile nav was not disappering when clicked on.

productNav.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});


/*
  Function to hide the header when scroll up or down!

var header = document.querySelector(".main-header");
// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function() {
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        header.style.display = "flex";
    } else
        header.style.display = "none";
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
});
*/