
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

// A travailler
const colorPortfolio = () => {
  const project = document.querySelector('.portfolio-project');
  const picture = document.querySelector('.portfolio-picture');

  project.addEventListener('mouseover', () => {
    picture.classList.toggle('grey');
  })
}


navSlide();
