export function initTypeWriter() {
  const titulo = document.querySelector('[data-type="writer"]');

  function typeWriter(element) {
    const tituloArray = element.innerHTML.split("");
    element.innerHTML = "";
    tituloArray.forEach((item, index) => {
      setTimeout(function () {
        element.innerHTML += item;
      }, 75 *index);
    });
  }
  typeWriter(titulo);
}
