// Change le display de la navbar (none/flex) quand on clique sur le menu burger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const body = document.querySelector('body');
  const container = document.querySelector('.scroll-container');

  // Ouvre le dropdown menu et le ferme en cliquant sur l'icône
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    // Empêche de scroller sur le reste de la page quand la navbar est ouverte
    body.classList.toggle('no-scroll');
  });

  // Ferme le dropdown menu quand je clique sur un lien
  nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    body.classList.remove('no-scroll');
  });
}


const slideInJsAbout = () => {
  const benefitsTarget = 500;
  const benefits = document.querySelectorAll('.benefits-box');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > benefitsTarget) {
      benefits.forEach((benefit, index) => {
        setTimeout(function () {
          benefit.classList.remove('slide-up-js');
        }, index * 200);
      });
    };
  });
};


navSlide();
slideInJsAbout();
