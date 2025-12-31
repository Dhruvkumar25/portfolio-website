// Simple fade-in on scroll (clean & lightweight)

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, article");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  sections.forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
  });
});
