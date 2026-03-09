import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import "./styles.css";  // Global styles
import "./home.css";
import "./menu.css";



renderHomePage(); // Render home page on site load



const content = document.getElementById('content');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
  if (!document.getElementById('menu-main-content')) {
    renderMenuPage();
  }
})



const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', () => {
  if (!document.getElementById('home-main-content')) {
    renderHomePage();
    
    const heroButton = document.getElementById('hero-button');

    heroButton.addEventListener('click', () => {
    renderMenuPage();
    })
  }
})


const heroButton = document.getElementById('hero-button');

heroButton.addEventListener('click', () => {
  renderMenuPage();
})



export function renderFooter() {
  const content = document.getElementById('content');

  // Create elements
  const container = document.createElement('footer');
  const devAnchor = document.createElement('a');
  const devTag = document.createElement('p');
  const attributionAnchor = document.createElement('a');
  const attributionTag = document.createElement('p');

  // Add IDs
  devTag.id = 'dev-tag';
  attributionTag.id = 'attribution-tag';

  // Add content
  devTag.textContent = 'Crafted By Jonny Berry';
  attributionTag.textContent = 'Logo Attribution';

  // Add attributes
  devAnchor.href = 'https://github.com/jonny-berry/restaurant-page';
  devAnchor.target = '_blank';
  attributionAnchor.href = 'https://www.flaticon.com/free-icon/capybara_3277713?term=capybara&page=1&position=9&origin=search&related_id=3277713';
  attributionAnchor.target = '_blank';

  // Append elements
  content.appendChild(container);
  container.appendChild(devAnchor);
  devAnchor.appendChild(devTag);
  container.appendChild(attributionAnchor);
  attributionAnchor.appendChild(attributionTag);
}
