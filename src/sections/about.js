const main = document.querySelector('main');

const about = () => {
  const aboutTitle = document.createElement('h1');
  const aboutCont = document.createElement('p');
  const subHeader = document.createElement('h2');
  const subCont = document.createElement('span');
  aboutTitle.innerHTML = 'ABOUT US';
  aboutTitle.className = 'about';
  aboutCont.className = 'about-us';
  aboutCont.innerHTML = 'I\'m baby kogi franzen gentrify fingerstache asymmetrical tilde you probably haven\'t heard of them cornhole pug intelligentsia copper mug fashion axe williamsburg cronut. Blue bottle skateboard succulents synth ramps. Tofu kitsch scenester franzen tousled next level bitters. Cred lomo scenester copper mug, offal direct trade jianbing irony art party sustainable shabby chic.';
  subCont.innerHTML = '• BAR • RESTAURANT •';

  main.appendChild(aboutTitle);
  main.appendChild(aboutCont);
  main.appendChild(aboutCont);
  main.appendChild(subHeader);
  subHeader.appendChild(subCont);
};

export default about;