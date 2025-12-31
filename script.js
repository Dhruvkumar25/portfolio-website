document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, article");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
  });
});
