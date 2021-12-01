export function hamburguer(){
    const hamburguerButton = document.getElementById('span-hamburguer');
    const hamburguerMenu = document.getElementById('menu-hamburguer');
    const overlay = document.getElementById('overlay');
    
    hamburguerButton.addEventListener('click', () =>  {
    
        hamburguerButton.classList.toggle('--active');
        hamburguerMenu.classList.toggle('--active');
        overlay.classList.toggle('--active');
    });    
}

