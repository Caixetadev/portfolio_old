const btnMobile = document.getElementById('btn-mobile');
const closeMenu = document.getElementById('close');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');

// Ativar e desativar menuHambúrguer
function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault()
  const navMenu = document.getElementById('nav');
  navMenu.classList.toggle('active');
}

function closeAbout() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('active')
}

function close02() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('active')
}

function close03() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('active')
}

function close04() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('active')
}

function close05() {
  const navMenu = document.getElementById('nav')
  navMenu.classList.remove('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
closeMenu.addEventListener('click', closeAbout);
close2.addEventListener('click', close02)
close3.addEventListener('click', close03)
close4.addEventListener('click', close04)
close5.addEventListener('click', close05)
