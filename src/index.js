import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import "./styles.css";  // Global styles
import "./menu.css"


const content = document.getElementById('content');
const homeMainContent = document.getElementById('home-main-content');



// renderHomePage(); // Render home page on site load



const menuButton = document.getElementById('menu-button');



menuButton.addEventListener('click', () => {
  homeMainContent.innerHTML = '';
  content.removeChild(homeMainContent);
  renderMenuPage();
})
