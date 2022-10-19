
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



const portfolioGreyToColor = () => {

  const card = document.querySelectorAll('.above-card');
  const picture = document.querySelectorAll('.card-picture');

  // On hover change project color from grey to color
  card.forEach(function(element, index) {
    element.addEventListener('mouseenter', () => {
      var item = picture[index];
      item.classList.toggle('grey');
    });
  });

  // When hover stop, picture goes back to grey
  card.forEach(function (element, index) {
    element.addEventListener('mouseleave', () => {
      var item = picture[index];
      item.classList.toggle('grey');
    });
  });
};


// Slide JS sur la home
const slideInJsHome = () => {

  // Services section slideIn
  const services1Target = 720;
  const services2Target = 780;
  const services3Target = 840;

  const services1 = document.querySelector('.visibility');
  const services2 = document.querySelector('.credibility');
  const services3 = document.querySelector('.efficacity');

  if (window.location.pathname == '/') {
    window.addEventListener("scroll", function () {
      const scrollUser = this.scrollY || window.pageYOffset;

      if (scrollUser > services1Target) {
        services1.classList.remove('slide-up-js');
      };
      if (scrollUser > services2Target) {
        services2.classList.remove('slide-up-js');
      };
      if (scrollUser > services3Target) {
        services3.classList.remove('slide-up-js');
      };
    });
  };

  // Portfolio section slideIn
  const portfolioRow1Target = 2150
  const portfolioRow2Target = 2200

  const portfolioCard1 = document.querySelector('.portfolio-card-1');
  const portfolioCard2 = document.querySelector('.portfolio-card-2');
  const portfolioCard3 = document.querySelector('.portfolio-card-3');
  const portfolioCard4 = document.querySelector('.portfolio-card-4');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > portfolioRow1Target) {
      portfolioCard1.classList.remove('slide-right-js');
      portfolioCard2.classList.remove('slide-right-js');
    };

    if (scrollUser > portfolioRow2Target) {
      portfolioCard3.classList.remove('slide-left-js');
      portfolioCard4.classList.remove('slide-left-js');
    };
  });
};

const slideInJsAbout = () => {

  const skill1Target = 520;
  const skill2Target = 600;
  const skill3Target = 680;

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
portfolioGreyToColor();
slideInJsHome();
slideInJsAbout();
