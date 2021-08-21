const btnMobile = document.getElementById('btn-mobile');

// Ativar e desativar menuHambúrguer
function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const navMenu = document.getElementById('nav');
  navMenu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);