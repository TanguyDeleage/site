
// Change le display de la navbar (none/flex) quand on clique sur le menu burger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  // Ouvre le dropdown menu et le ferme en cliquant sur l'icône
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
  });

  // Ferme le dropdown menu quand je clique sur un lien
  nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}


// Matematch Portfolio - A optimiser avec un for each
// const colorPortfolioMatematch = () => {

//   const matematchProject = document.getElementById('matematch-portfolio-project');
//   const matematchPicture = document.getElementById('matematch-portfolio-picture');

//    // On hover change project color from grey to color
//   matematchProject.addEventListener('mouseenter', () => {
//     matematchPicture.classList.toggle('grey');
//   });

//    // When the mouse leave the project div, the picture goes back to grey
//   matematchProject.addEventListener('mouseleave', () => {
//     matematchPicture.classList.toggle('grey');
//   });

// };

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


navSlide();
// colorPortfolioMatematch();
// colorPortfolioDailyUi();
// colorPortfolioRallye();
// colorPortfolioCoop();
colorPortfolio();
