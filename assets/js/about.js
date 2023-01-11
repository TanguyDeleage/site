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

  const skill1Target = 330;
  const skill2Target = 430;
  const skill3Target = 530;

  const skill1 = document.querySelector('.consultant');
  const skill2 = document.querySelector('.designer');
  const skill3 = document.querySelector('.dev');

  if (window.location.pathname == '/about.html') {
    window.addEventListener("scroll", function () {
      const scrollUser = this.scrollY || window.pageYOffset;

      if (scrollUser > skill1Target) {
        skill1.classList.remove('slide-up-js');
      };
      if (scrollUser > skill2Target) {
        skill2.classList.remove('slide-up-js');
      };
      if (scrollUser > skill3Target) {
        skill3.classList.remove('slide-up-js');
      };
    });
  };
};


navSlide();
slideInJsAbout();
