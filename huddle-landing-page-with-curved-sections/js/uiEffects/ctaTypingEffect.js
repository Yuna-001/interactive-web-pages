export default function ctaTypingEffect() {
  const typingTitle = document.querySelector(".cta h2");
  const ctaBtn = document.querySelector(".cta .cta-btn");

  const text = "Ready To Build Your Community?";
  let i = 0;
  let timer;

  function typing() {
    if (i < text.length) {
      typingTitle.textContent += text[i];
      i++;
    }

    if (timer && i >= text.length) {
      clearInterval(timer);
      ctaBtn.classList.add("visible");
    }
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timer = setInterval(typing, 100);
          io.unobserve(entry.target);
        }
      });
    },
    { root: null, threshold: 1 }
  );

  io.observe(typingTitle);
}
