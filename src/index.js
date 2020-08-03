import navigation from './sections/navigation';
import menu from './sections/menu';
import about from './sections/about';
import home from './sections/home';
import './styles.css';
import './assets/Cyrene+Regular.otf';

const main = document.querySelector('main');

navigation();

const reset = () => {
  main.innerHTML = '';
};

main.addEventListener('load', home());

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'menu-link') {
    reset();
    navigation();
    menu();
  }
});

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'about-link') {
    reset();
    navigation();
    about();
  }
});

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'home-link') {
    reset();
    navigation();
    home();
  }
});