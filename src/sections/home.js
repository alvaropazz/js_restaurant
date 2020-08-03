const main = document.querySelector('main');
import bosque from '../assets/bosques.png';

const home = () => {
  const homeTitle = document.createElement('h1');
  const homeLogo = document.createElement('img');
  const subHeader = document.createElement('h2');
  const subCont = document.createElement('span');
  homeTitle.innerHTML = 'EL BOSQUE';
  homeLogo.src = bosque;
  homeLogo.alt = 'flowers';
  homeLogo.className = 'image-container';
  subCont.innerHTML = '• BAR • RESTAURANT •';

  main.appendChild(homeTitle);
  main.appendChild(homeLogo);
  main.appendChild(subHeader);
  subHeader.appendChild(subCont);
};

export default home;
