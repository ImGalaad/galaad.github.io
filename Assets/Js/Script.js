/* Utils */

const closestPowerOf2 = (n) => Math.pow(2, Math.ceil(Math.log2(n)));

/* Background */

const frame = document.getElementById("frame");
let width = frame.offsetWidth;
let height = frame.offsetHeight;

const bg = document.getElementById("bg");
const ctx = bg.getContext("2d");
ctx.canvas.width = width;
ctx.canvas.height = height;

let imgData = ctx.createImageData(width, height);

const value = 2;
let time = 0;
let index = closestPowerOf2(width * 0.1);

const draw = (imageData, time) => {
  for (let i = 0; i < imageData.data.length; i += index) {
    const pixelIndex = i >> 2;
    let x = ((pixelIndex % width) / width) * value;
    let y = (Math.floor(pixelIndex / width) / height) * value;
    let v = noise.simplex3(x, y, time) * 255;
    imageData.data[i] = v;
    imageData.data[i + 1] = v;
    imageData.data[i + 2] = v;
    imageData.data[i + 3] = 124;
  }
};

function loop() {
  draw(imgData, time);
  ctx.putImageData(imgData, 0, 0);
  requestAnimationFrame(loop);
  time += 0.004;
}

requestAnimationFrame(loop);

/* Pages */

const pages = {
  home: `Born in 2000's, in France.
    
    I've been crafting code since 2021 in a wide range of fields: software design, web development, video game creation, image processing, database management...
    
    I love coding because it gives me the opportunity to create a world with my own hands.`,
  projects: `I love continuing and creating projects because I'm determined and creative. Here's a small list of projects I've done or am working on at the moment:
    
    • Spicy Journey
    A exploration game that will help you unwind and relax as you explore a procedurally generated world filled with lush forests.
    
    • Yet Another Asymmetric Lib
    Python library for asymmetric encryption that's really easy to use and understand.
    
    • Mango Maker
    Mario Maker-like game based on python
    
    • MellowFarm
    A farming game based on the sprite stacking to create an impression of 3D
    
    • Blind
    Blind labyrinth game based on sounds
    
    • IsoFrame
    Game Framework for isometric perspective (written in C++)
    
    • Spirits
    A secret game~`,
  interests: `I listen to music every day, to relax or to boost my energy. I don't have a favorite type of music, but I like pop, rock, classic, and phonk.
  My favorite artists are girl in red, Claire Cottrill, Lana Del Rey, Potsu and Taylor Swift.
  
  I was born into a very scientific family and I'm very interested in science. I find it rewarding to acquire scientific knowledge, as it helps me to understand the world around me.
  My favorite science areas are math, physic, biology, astronomy, geology and computing.
  
  When I want to relax, I like to rely on art, because it helps me make a moment enjoyable!
  My favorites art areas are photography, drawing, literature, painting, film, sculpture and jewelry making

  I also love animals, my favorites are cats, otters, red pandas, foxes and bears.
  `,
};
const pagesHandler = document.getElementById("pagesHandler");
const pageDisplay = document.getElementById("pageDisplay");

Object.entries(pages).forEach(function ([page, value]) {
  const child = document.createElement("span");
  child.textContent = child.id = page;
  child.addEventListener("click", () => switchPage(page));
  pagesHandler.append(document.createElement("br"), child);

  const content = document.createElement("div");
  content.id = page;
  content.innerText = value;
  content.style.opacity = `var(--${page})`;
  pageDisplay.appendChild(content);
});

function switchPage(page) {
  pageDisplay.className = page;
  Object.entries(pages).forEach(function ([page, _]) {
    document.documentElement.style.setProperty(
      `--${page}`,
      pageDisplay.classList.contains(page) ? "1" : "0"
    );
  });
}

switchPage(Object.entries(pages)[0][0]);

/* Themes */

const themes = ["olive", "persian", "fairy", "raisin"];
const themesHandler = document.getElementById("themesHandler");
if (localStorage.getItem("theme") === null) {let themeIndex = 0}
else {let themeIndex = 0 || themes.indexOf(localStorage.getItem("theme")) - 1;}

themes.forEach((thm) => {
  const child = document.createElement("div");
  child.textContent = child.id = thm;
  themesHandler.appendChild(child);
});

const themesTexts = themesHandler.querySelectorAll("div");

function switchTheme() {
  themeIndex++;
  themeIndex %= themes.length;

  let theme = themes[themeIndex];

  localStorage.setItem("theme", theme);
  document.documentElement.className = theme;

  themesTexts.forEach((child, index) => {
    if (index === themeIndex)
      child.style.setProperty("--before-content", '"■"');
    else child.style.setProperty("--before-content", '"□"');
  });
}

switchTheme();

/* Specials events */

addEventListener("resize", (event) => {
  width = frame.offsetWidth;
  height = frame.offsetHeight;

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  index = closestPowerOf2(width * 0.1);

  imgData = ctx.createImageData(width, height);
});
