//create a function that will validate a input number is a DNI

const hamburguerButton = document.getElementById('span-hamburguer');
const hamburguerMenu = document.getElementById('menu-hamburguer');
const overlay = document.getElementById('overlay');

hamburguerButton.addEventListener('click', () =>  {

    hamburguerButton.classList.toggle('--active');
    hamburguerMenu.classList.toggle('--active');
    overlay.classList.toggle('--active');
});


window.addEventListener("scroll", () => {

    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
  
    document.getElementById("progress-bar").style.width = scrolled + "%";
});