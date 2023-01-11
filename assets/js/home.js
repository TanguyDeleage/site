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
  card.forEach(function (element, index) {
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


const slideInJsHome = () => {

  // Benefits section slideIn
  const benefitsTarget = 650;
  const benefits = document.querySelectorAll('.benefits-box');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > benefitsTarget) {
      benefits.forEach((benefit, index) => {
        setTimeout(function () {
          benefit.classList.remove('slide-up-js');
        }, index * 100);
      });
    };
  });


  // Offers section slideIn
  const offersTarget = 1000;
  const offer1 = document.querySelector('.self');
  const offer2 = document.querySelector('.agency');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > offersTarget) {
      offer1.classList.remove('slide-left-js');
    };
    if (scrollUser > offersTarget) {
      offer2.classList.remove('slide-right-js');
    };
  });


  // Services section slideIn
  const servicesTarget = 2100;
  const services = document.querySelectorAll('.services-box');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > servicesTarget) {
      services.forEach((service, index) => {
        setTimeout(function () {
          service.classList.remove('slide-up-js');
        }, index*200);
      });
    };
  });

    // Portfolio section slideIn
    // const portfolioRow1Target = 2600;
    // const portfolioRow2Target = 2650;

    // const portfolioCard1 = document.querySelector('.portfolio-card-1');
    // const portfolioCard2 = document.querySelector('.portfolio-card-2');
    // const portfolioCard3 = document.querySelector('.portfolio-card-3');
    // const portfolioCard4 = document.querySelector('.portfolio-card-4');

    // window.addEventListener("scroll", function () {
    //   const scrollUser = this.scrollY || window.pageYOffset;

    //   if (scrollUser > portfolioRow1Target) {
    //     portfolioCard1.classList.remove('slide-right-js');
    //     portfolioCard2.classList.remove('slide-right-js');
    //   };

    //   if (scrollUser > portfolioRow2Target) {
    //     portfolioCard3.classList.remove('slide-left-js');
    //     portfolioCard4.classList.remove('slide-left-js');
    //   };
    // });


  // Methodology section slideIn
  const methodoTarget = 3600;
  const methodologySteps = document.querySelectorAll('.methodology-step');

  window.addEventListener("scroll", function () {
    const scrollUser = this.scrollY || window.pageYOffset;

    if (scrollUser > methodoTarget) {
      methodologySteps.forEach((methodologyStep, index) => {
        setTimeout(function () {
          methodologyStep.classList.remove('opacity-js');
        }, index * 100);
      });
    };
  });
};


navSlide();
portfolioGreyToColor();
slideInJsHome();
