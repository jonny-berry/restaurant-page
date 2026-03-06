import capyImage from "./images/capybara-under-water-spout.png";



const mainWrapper = document.createElement('div');
mainWrapper.id = 'main-content';

const contentDiv = document.getElementById('content');
contentDiv.appendChild(mainWrapper);



export function renderHomePage() {
  renderHeroSection();
  renderAboutSection();
  renderMenuSection();
  renderFooter();
}



function renderHeroSection() {
  // Create elements
  const container = document.createElement('div');
  const content = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('p');
  const button = document.createElement('button');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');

  // Add IDs
  container.id = 'hero-section';
  content.id = 'hero-content'
  heading.id = 'hero-heading';
  subheading.id = 'hero-subheading';
  button.id = 'hero-button';
  imageContainer.id = 'hero-image-container';
  image.id = 'hero-image';

  // Add content
  heading.innerText = 'The Happy Capy Café';
  subheading.innerText = 'Peace, Paws, and Pour Overs';
  button.innerText = 'View Our Menu';

  // Add attributes
  image.src = capyImage;
  image.alt = 'A Capybara resting under a water spout with water splashing over its head';

  // Append elements
  mainWrapper.appendChild(container);
  container.appendChild(content);
  content.appendChild(heading);
  content.appendChild(subheading);
  content.appendChild(button);
  container.appendChild(imageContainer);
  imageContainer.appendChild(image);
}



function renderAboutSection() {
  // Create elements
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('p');
  
  // Add IDs
  container.id = 'about-section';
  heading.id = 'about-heading';
  subheading.id = 'about-subheading';
  
  // Add content
  heading.textContent = '🐾 Come Hang With the Herd';
  subheading.textContent = 'At Capybara Café, we invite you to gather, graze, and unwind. Whether you\'re catching up with friends, diving into a book, or just enjoying a quiet moment, our cozy corners and plant-filled nooks are designed for lounging without a care.';

  // Append elements
  mainWrapper.appendChild(container);
  container.appendChild(heading);
  container.appendChild(subheading);
}



function renderMenuSection() {
  // Create elements
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const subheading = document.createElement('p');
  const ul = document.createElement('ul');
  const drinksLi = document.createElement('li');
  const snacksLi = document.createElement('li');
  const juicesLi = document.createElement('li');

  // Add IDs
  container.id = 'menu-section';
  heading.id = 'menu-heading';
  subheading.id = 'menu-subheading';
  ul.id = 'menu-list';
  
  // Add content
  heading.textContent = '🌱 Grazing Grounds';
  subheading.textContent = 'Nourish yourself, capybara style:';
  drinksLi.textContent = 'Fresh matcha lattes and herbal teas ☕🍵🥤';
  snacksLi.textContent = 'House-made pastries and snacks 🥐🍪🥯';
  juicesLi.textContent = 'Juices, smoothies, and wholesome bites 🥤🍹🍊';

  // Append elements
  mainWrapper.appendChild(container);
  container.appendChild(heading);
  container.appendChild(subheading);
  container.appendChild(ul);
  ul.appendChild(drinksLi);
  ul.appendChild(snacksLi);
  ul.appendChild(juicesLi);
}



function renderFooter() {
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
  contentDiv.appendChild(container);
  container.appendChild(devAnchor);
  devAnchor.appendChild(devTag);
  container.appendChild(attributionAnchor);
  attributionAnchor.appendChild(attributionTag);
}