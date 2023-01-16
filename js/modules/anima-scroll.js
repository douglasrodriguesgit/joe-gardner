export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anima="scroll"]');
  if (sections.length) {
    const metadeWindow = innerHeight * 0.6;
    function scrollAnimado() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const sectionInvisible = sectionTop - metadeWindow < 0;
        if (sectionInvisible) item.classList.add("ativo");
        else item.classList.remove("ativo");
      });
    }
    scrollAnimado();
    window.addEventListener("scroll", scrollAnimado);
  }
}
