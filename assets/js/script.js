
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

// const scrollerServices = () => {

//   const scrollTargetServices = 780;
//   const services = document.querySelector('.services-grid');

//   window.addEventListener("scroll", function () {
//     const scrollUser = this.scrollY || window.pageYOffset;

//     if (scrollUser > scrollTargetServices) {
//       services.classList.remove('services-js-animation');
//     };
//   });
// };

const slideUP = () => {

  const services1Target = 720;
  const services2Target = 780;
  const services3Target = 840;

  const services1 = document.querySelector('.visibility');
  const services2 = document.querySelector('.credibility');
  const services3 = document.querySelector('.efficacity');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > services1Target) {
      services1.classList.remove('services-js-animation');
    };
    if (scrollUser > services2Target) {
      services2.classList.remove('services-js-animation');
    };
    if (scrollUser > services3Target) {
      services3.classList.remove('services-js-animation');
    };
  });
};


navSlide();
portfolioGreyToColor();
// scrollerServices();
slideUP();
