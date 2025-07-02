// Плавная прокрутка якорей
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Подсветка активного пункта меню
const navLinks = document.querySelectorAll("nav a[href^='#']");
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute("href")));

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 100;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop <= scrollPos && (i === sections.length - 1 || sections[i + 1].offsetTop > scrollPos)) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[i].classList.add("active");
    }
  }
});

const toTop = document.createElement("a");
toTop.href = "#";
toTop.id = "toTop";
toTop.textContent = "↑";
toTop.style.cssText = "position:fixed;bottom:20px;right:20px;display:none;background:#000;color:#fff;padding:10px;border-radius:5px;z-index:999;text-decoration:none;";
document.body.appendChild(toTop);

window.addEventListener("scroll", function () {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});
