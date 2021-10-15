// Selecting Items
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelector('.links');
console.log(navLinks);

navToggleBtn.addEventListener('click', function(){
    navLinks.classList.toggle('show-links');
});