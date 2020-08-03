const main = document.querySelector('main');

const navigation = () => {
  const nav = document.createElement('nav');
  const home = document.createElement('p');
  const menu = document.createElement('p');
  const about = document.createElement('p');
  home.className = 'home-link';
  menu.className = 'menu-link';
  about.className = 'about-link';
  home.innerHTML = 'HOME';
  menu.innerHTML = 'MENU';
  about.innerHTML = 'ABOUT US';

  main.appendChild(nav);
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);
};

export default navigation;
