const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
  scroll();
};

//funcao para ir ao topo
function backToTop() {
  document.documentElement.scrollTop = 0;
}

// Exibe o botao quando usar o scroll
function scroll() {
  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

btnTop.addEventListener("click", backToTop);
