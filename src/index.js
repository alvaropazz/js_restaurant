const main = document.querySelector('main');

const navigation = () => {
  const nav = document.createElement('nav')
  const home = document.createElement('p')
  const menu = document.createElement('p')
  const about = document.createElement('p')
  home.innerHTML = 'HOME'
  menu.innerHTML = 'MENU'
  about.innerHTML = 'ABOUT US'
  
  main.appendChild(nav)
  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(about)
}

navigation();

// const home = () => {
//   const homeTitle = document.createElement('h1')
//   const homeLogo = document.createElement('img')
//   const subHeader = document.createElement('h2')
//   const subCont = document.createElement('span') 
//   homeTitle.innerHTML = 'EL BOSQUE'
//   homeLogo.src = '/src/assets/bosques.png'
//   homeLogo.alt = 'flowers'
//   homeLogo.className = 'image-container'
//   subCont.innerHTML = '• BAR • RESTAURANT •'

//   main.appendChild(homeTitle)
//   main.appendChild(homeLogo)
//   main.appendChild(subHeader)
//   subHeader.appendChild(subCont)
// }

// home();

// const menu = () => {
//   const menuContainer = document.createElement('div')
//   menuContainer.className = 'menu-container'
//   main.appendChild(menuContainer)
//   //1
//   const descriptionSp = document.createElement('div')
//   const imgSp = document.createElement('img')
//   const specialCont = document.createElement('ul')
//   const specialTitle = document.createElement('li')
//   descriptionSp.className = 'menu-description'
//   imgSp.src = '/src/assets/menu-special.png'
//   imgSp.alt = 'Special'
//   imgSp.className = 'menu-img'
//   specialCont.className = 'menu-items'
//   specialTitle.innerHTML = 'Entrées'

//   menuContainer.appendChild(descriptionSp)
//   descriptionSp.appendChild(imgSp)
//   descriptionSp.appendChild(specialCont)
//   specialCont.appendChild(specialTitle)
//   //2
//   const descriptionMain = document.createElement('div')
//   const imgMain = document.createElement('img')
//   const mainCont = document.createElement('ul')
//   const mainTitle = document.createElement('li')
//   descriptionMain.className = 'menu-description'
//   imgMain.src = '/src/assets/menu-dinner.png'
//   imgMain.alt = 'Main'
//   imgMain.className = 'menu-img'
//   mainCont.className = 'menu-items'
//   mainTitle.innerHTML = 'Mains'

//   menuContainer.appendChild(descriptionMain)
//   descriptionMain.appendChild(imgMain)
//   descriptionMain.appendChild(mainCont)
//   mainCont.appendChild(mainTitle)
//   //3
//   const descriptionBar = document.createElement('div')
//   const imgBar = document.createElement('img')
//   const barCont = document.createElement('ul')
//   const barTitle = document.createElement('li')
//   descriptionBar.className = 'menu-description'
//   imgBar.src = '/src/assets/menu-bar.png'
//   imgBar.alt = 'Bar'
//   imgBar.className = 'menu-img'
//   barCont.className = 'menu-items'
//   barTitle.innerHTML = 'Bar'

//   menuContainer.appendChild(descriptionBar)
//   descriptionBar.appendChild(imgBar)
//   descriptionBar.appendChild(barCont)
//   barCont.appendChild(barTitle)
//   //4
//   const descriptionWine = document.createElement('div')
//   const imgWine = document.createElement('img')
//   const wineCont = document.createElement('ul')
//   const wineTitle = document.createElement('li')
//   descriptionWine.className = 'menu-description'
//   imgWine.src = '/src/assets/menu-wine.png'
//   imgWine.alt = 'Wine'
//   imgWine.className = 'menu-img'
//   wineCont.className = 'menu-items'
//   wineTitle.innerHTML = 'Wines and Beers'

//   menuContainer.appendChild(descriptionWine)
//   descriptionWine.appendChild(imgWine)
//   descriptionWine.appendChild(wineCont)
//   wineCont.appendChild(wineTitle)
//   //footer
//   const subHeader = document.createElement('h2')
//   const subCont = document.createElement('span') 
//   subCont.innerHTML = '• BAR • RESTAURANT •'
//   main.appendChild(subHeader)
//   subHeader.appendChild(subCont)
// }

// menu();

// const about = () => {
//   const aboutTitle = document.createElement('h1')
//   const aboutCont =  document.createElement('p')
//   const subHeader = document.createElement('h2')
//   const subCont = document.createElement('span') 
//   aboutTitle.innerHTML = 'ABOUT US'
//   aboutTitle.className = 'about'
//   aboutCont.className = 'about-us'
//   aboutCont.innerHTML = 'I\'m baby kogi franzen gentrify fingerstache asymmetrical tilde you probably haven\'t heard of them cornhole pug intelligentsia copper mug fashion axe williamsburg cronut. Blue bottle skateboard succulents synth ramps. Tofu kitsch scenester franzen tousled next level bitters. Cred lomo scenester copper mug, offal direct trade jianbing irony art party sustainable shabby chic.'
//   subCont.innerHTML = '• BAR • RESTAURANT •'

//   main.appendChild(aboutTitle)
//   main.appendChild(aboutCont)
//   main.appendChild(aboutCont)
//   main.appendChild(subHeader)
//   subHeader.appendChild(subCont)
// }

// about();