export default function initPiano() {
  const keys = document.querySelectorAll(".key");

  keys.forEach((item) => {
    item.addEventListener("click", () => tocarNota(item));
  });

  function tocarNota(elemment) {
    const notaAudio = document.getElementById(elemment.dataset.note);
    notaAudio.currentTime = 0;
    notaAudio.play();
    elemment.classList.add("tecla-ativa");
    notaAudio.addEventListener("ended", () => {
      elemment.classList.remove("tecla-ativa");
    });
  }
}
