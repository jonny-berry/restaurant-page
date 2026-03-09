import "./menu.css";
import latteImage from "./images/menu-images/matcha-latte.jpg";
import { renderFooter } from "./index.js";



export function renderMenuPage() {
  const content = document.getElementById('content');
  const menuMainContent = document.createElement('div');

  menuMainContent.id = 'menu-main-content';
  content.appendChild(menuMainContent);

  if (document.getElementById('home-main-content')) {
    content.removeChild(document.getElementById('home-main-content'));
  }

  if (document.querySelector('footer')) {
    content.removeChild(document.querySelector('footer'));
  }

  renderPageHeading(menuMainContent);
  renderMenuSection(menuMainContent);
  renderMenuSection(menuMainContent);
  renderFooter();
}



function renderPageHeading(menuMainContent) {
  const menuHeading = document.createElement('h1');
  menuHeading.id = 'menu-page-heading';
  menuHeading.textContent = 'Menu';
  menuMainContent.appendChild(menuHeading);
}



function renderMenuSection(menuMainContent) {
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
