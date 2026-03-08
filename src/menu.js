import "./menu.css";
import latteImage from "./images/menu-images/matcha-latte.jpg";
import { renderFooter } from "./index.js";


const content = document.getElementById('content');

const menuMainContent = document.createElement('div');
menuMainContent.id = 'menu-main-content';

const homeMainContent = document.getElementById('home-main-content');

content.removeChild(homeMainContent);
content.appendChild(menuMainContent);


export function renderMenuPage() {
  renderPageHeading();
  renderMenuSection();
  renderMenuSection();
  renderFooter();
}



function renderPageHeading() {
  const menuHeading = document.createElement('h1');
  menuHeading.id = 'menu-page-heading';
  menuHeading.textContent = 'Menu';
  menuMainContent.appendChild(menuHeading);
}



function renderMenuSection() {
  // Create elements
  const sectionContainer = document.createElement('div');
  const sectionHeading = document.createElement('p');
  const sectionCardsContainer = document.createElement('div');


  // Add IDs
  sectionContainer.classList.add('section-container');
  sectionHeading.classList.add('section-heading');
  sectionCardsContainer.classList.add('section-cards-container');

  // Add content
  sectionHeading.textContent = '☕ Matcha & Tea ☕';

  // Append elements
  menuMainContent.appendChild(sectionContainer);
  sectionContainer.appendChild(sectionHeading);
  sectionContainer.appendChild(sectionCardsContainer);

  renderSectionCards(sectionCardsContainer);
}



function renderSectionCards(cardsContainer) {
  for (let i = 0; i < 4; i++) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('section-card');
    cardsContainer.appendChild(cardContainer);

    const cardImageEl = document.createElement('img');
    cardImageEl.src = latteImage;
    cardContainer.appendChild(cardImageEl);

    const cardTitle = document.createElement('p');
    cardTitle.textContent = 'Matcha Latte';
    cardContainer.appendChild(cardTitle);
  }
}
