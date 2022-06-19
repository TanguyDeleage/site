
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
const colorPortfolioMatematch = () => {

  const matematchProject = document.getElementById('matematch-portfolio-project');
  const matematchPicture = document.getElementById('matematch-portfolio-picture');

   // On hover change project color from grey to color
  matematchProject.addEventListener('mouseenter', () => {
    matematchPicture.classList.toggle('grey');
  });

   // When the mouse leave the project div, the picture goes back to grey
  matematchProject.addEventListener('mouseleave', () => {
    matematchPicture.classList.toggle('grey');
  });

};


// Daily UI Portfolio - A optimiser avec un for each
const colorPortfolioDailyUi = () => {

  const dailyUiProject = document.getElementById('daily-ui-portfolio-project');
  const dailyUiPicture = document.getElementById('daily-ui-portfolio-picture');

  // On hover change project color from grey to color
  dailyUiProject.addEventListener('mouseenter', () => {
    dailyUiPicture.classList.toggle('grey');
  });
  // When the mouse leave the project div, the picture goes back to grey
  dailyUiProject.addEventListener('mouseleave', () => {
    dailyUiPicture.classList.toggle('grey');
  });

};


// Rallye Portfolio - A optimiser avec un for each
const colorPortfolioRallye = () => {

  const rallyeProject = document.getElementById('rallye-portfolio-project');
  const rallyePicture = document.getElementById('rallye-portfolio-picture');

  // On hover change project color from grey to color
  rallyeProject.addEventListener('mouseenter', () => {
    rallyePicture.classList.toggle('grey');
  });

   // When the mouse leave the project div, the picture goes back to grey
  rallyeProject.addEventListener('mouseleave', () => {
    rallyePicture.classList.toggle('grey');
  });

};


// Coop Portfolio - A optimiser avec un for each
const colorPortfolioCoop = () => {

  const coopProject = document.getElementById('coop-portfolio-project');
  const coopPicture = document.getElementById('coop-portfolio-picture');

  // On hover change project color from grey to color
  coopProject.addEventListener('mouseenter', () => {
    coopPicture.classList.toggle('grey');
  });

   // When the mouse leave the project div, the picture goes back to grey
  coopProject.addEventListener('mouseleave', () => {
    coopPicture.classList.toggle('grey');
  });

};


navSlide();
colorPortfolioMatematch();
colorPortfolioDailyUi();
colorPortfolioRallye();
colorPortfolioCoop();
