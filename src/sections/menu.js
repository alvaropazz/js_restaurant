import special from '../assets/menu-special.png';
import dinner from '../assets/menu-dinner.png';
import bar from '../assets/menu-bar.png';
import wine from '../assets/menu-wine.png';

const main = document.querySelector('main');

const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu-container';
  main.appendChild(menuContainer);
  // 1
  const descriptionSp = document.createElement('div');
  const imgSp = document.createElement('img');
  const specialCont = document.createElement('ul');
  const specialTitle = document.createElement('li');
  descriptionSp.className = 'menu-description';
  imgSp.src = special;
  imgSp.alt = 'Special';
  imgSp.className = 'menu-img';
  specialCont.className = 'menu-items';
  specialTitle.innerHTML = 'Entrées';

  menuContainer.appendChild(descriptionSp);
  descriptionSp.appendChild(imgSp);
  descriptionSp.appendChild(specialCont);
  specialCont.appendChild(specialTitle);
  // 2
  const descriptionMain = document.createElement('div');
  const imgMain = document.createElement('img');
  const mainCont = document.createElement('ul');
  const mainTitle = document.createElement('li');
  descriptionMain.className = 'menu-description';
  imgMain.src = dinner;
  imgMain.alt = 'Main';
  imgMain.className = 'menu-img';
  mainCont.className = 'menu-items';
  mainTitle.innerHTML = 'Mains';

  menuContainer.appendChild(descriptionMain);
  descriptionMain.appendChild(imgMain);
  descriptionMain.appendChild(mainCont);
  mainCont.appendChild(mainTitle);
  // 3
  const descriptionBar = document.createElement('div');
  const imgBar = document.createElement('img');
  const barCont = document.createElement('ul');
  const barTitle = document.createElement('li');
  descriptionBar.className = 'menu-description';
  imgBar.src = bar;
  imgBar.alt = 'Bar';
  imgBar.className = 'menu-img';
  barCont.className = 'menu-items';
  barTitle.innerHTML = 'Bar';

  menuContainer.appendChild(descriptionBar);
  descriptionBar.appendChild(imgBar);
  descriptionBar.appendChild(barCont);
  barCont.appendChild(barTitle);
  // 4
  const descriptionWine = document.createElement('div');
  const imgWine = document.createElement('img');
  const wineCont = document.createElement('ul');
  const wineTitle = document.createElement('li');
  descriptionWine.className = 'menu-description';
  imgWine.src = wine;
  imgWine.alt = 'Wine';
  imgWine.className = 'menu-img';
  wineCont.className = 'menu-items';
  wineTitle.innerHTML = 'Wines and Beers';

  menuContainer.appendChild(descriptionWine);
  descriptionWine.appendChild(imgWine);
  descriptionWine.appendChild(wineCont);
  wineCont.appendChild(wineTitle);
  // footer
  const subHeader = document.createElement('h2');
  const subCont = document.createElement('span');
  subCont.innerHTML = '• BAR • RESTAURANT •';
  main.appendChild(subHeader);
  subHeader.appendChild(subCont);
};

export default menu;