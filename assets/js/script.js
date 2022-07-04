
// Change le display de la navbar (none/flex) quand on clique sur le menu burger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const body = document.querySelector('body');
  const container = document.querySelector('.scroll-container')

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
    body.classList.toggle('no-scroll');
  });
}

const colorPortfolio = () => {

  const project = document.querySelectorAll('.portfolio-project');
  const picture = document.querySelectorAll('.portfolio-picture');

  // On hover change project color from grey to color
  project[0].addEventListener('mouseenter', () => {
    picture[0].classList.toggle('grey');
  });
  project[1].addEventListener('mouseenter', () => {
    picture[1].classList.toggle('grey');
  });
  project[2].addEventListener('mouseenter', () => {
    picture[2].classList.toggle('grey');
  });
  project[3].addEventListener('mouseenter', () => {
    picture[3].classList.toggle('grey');
  });

  // When the mouse leave the project div, the picture goes back to grey
  project[0].addEventListener('mouseleave', () => {
    picture[0].classList.toggle('grey');
  });
  project[1].addEventListener('mouseleave', () => {
    picture[1].classList.toggle('grey');
  });
  project[2].addEventListener('mouseleave', () => {
    picture[2].classList.toggle('grey');
  });
  project[3].addEventListener('mouseleave', () => {
    picture[3].classList.toggle('grey');
  });

};

const cardPortfolio = () => {

  const cardBig = document.querySelectorAll('.above-card')
  const cardSmall = document.querySelectorAll('.card')
  const circle = document.querySelectorAll('.circle')
  const square = document.querySelectorAll('.square')
  const text = document.querySelectorAll('.card-text')
  const picture = document.querySelectorAll('.card-picture')

  cardBig[0].addEventListener('mouseenter', () => {
    cardSmall[0].classList.toggle('square');
    cardSmall[0].classList.toggle('circle');
    text[0].classList.toggle('hide');
    picture[0].classList.toggle('grey');
  });

  cardBig[0].addEventListener('mouseleave', () => {
    cardSmall[0].classList.toggle('square');
    cardSmall[0].classList.toggle('circle');
    text[0].classList.toggle('hide');
    picture[0].classList.toggle('grey');
  })


  cardBig[1].addEventListener('mouseenter', () => {
    cardSmall[1].classList.toggle('square');
    cardSmall[1].classList.toggle('circle');
    text[1].classList.toggle('hide');
    picture[1].classList.toggle('grey');
  });

  cardBig[1].addEventListener('mouseleave', () => {
    cardSmall[1].classList.toggle('square');
    cardSmall[1].classList.toggle('circle');
    text[1].classList.toggle('hide');
    picture[1].classList.toggle('grey');
  })


  cardBig[2].addEventListener('mouseenter', () => {
    cardSmall[2].classList.toggle('square');
    cardSmall[2].classList.toggle('circle');
    text[2].classList.toggle('hide');
    picture[2].classList.toggle('grey');
  });

  cardBig[2].addEventListener('mouseleave', () => {
    cardSmall[2].classList.toggle('square');
    cardSmall[2].classList.toggle('circle');
    text[2].classList.toggle('hide');
    picture[2].classList.toggle('grey');
  })

  cardBig[3].addEventListener('mouseenter', () => {
    cardSmall[3].classList.toggle('square');
    cardSmall[3].classList.toggle('circle');
    text[3].classList.toggle('hide');
    picture[3].classList.toggle('grey');
  });

  cardBig[3].addEventListener('mouseleave', () => {
    cardSmall[3].classList.toggle('square');
    cardSmall[3].classList.toggle('circle');
    text[3].classList.toggle('hide');
    picture[3].classList.toggle('grey');
  })
};


navSlide();
colorPortfolio();
cardPortfolio();
