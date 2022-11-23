export default function initMenuMobile() {
  const botaoMenu = document.querySelector('[data-menu="mobile"]');
  const listaMenu = document.querySelector('[data-menu="lista"]');

  function openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    botaoMenu.classList.toggle("ativo");
    listaMenu.classList.toggle("ativo");
  }

  botaoMenu.addEventListener("click", openMenu);
  botaoMenu.addEventListener("touchstart", openMenu);
}
