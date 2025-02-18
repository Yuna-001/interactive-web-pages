export default function statOpacityEffect() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.8,
    }
  );

  const statList = document.querySelectorAll(".stat");

  statList.forEach((stat) => {
    io.observe(stat);
  });
}
