// JavaScript formatter I use : https://beautifier.io/
// To justify my code explanations : https://texttools.org/justify-text
// To create large texts : https://patorjk.com/software/taag/

/* ___       _      __    ______       _        
  / _ \___ _(_)__  / /_  / __/ /____ _(_)__  ___
 / ___/ _ `/ / _ \/ __/ _\ \/ __/ _ `/ / _ \(_-<
/_/   \_,_/_/_//_/\__/ /___/\__/\_,_/_/_//_/__*/


// get the height and width of the window
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// get the current scroll position
let scrollTop = window.pageYOffset;

// function to update the rotation of all elements with the class 'image'
function updateBackgroundImages() {
    const rotation = scrollTop / 4;
    document.querySelectorAll('.image').forEach((image) => {
        image.style.transform = `rotate(${rotation}deg)`;
    })
}

// add an event listener for the 'scroll' event
window.addEventListener('scroll', function () {
    scrollTop = window.pageYOffset;
    updateBackgroundImages();
});


/* _  __     _           __            __                              __
  / |/ /__  (_)____ __  / /  ___ _____/ /_____ ________  __ _____  ___/ /
 /    / _ \/ (_-< // / / _ \/ _ `/ __/  '_/ _ `/ __/ _ \/ // / _ \/ _  / 
/_/|_/\___/_/___|_, / /_.__/\_,_/\__/_/\_\\_, /_/  \___/\_,_/_//_/\_,_/  
               /___/                     /__*/


// starts only when the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // canvas creation
    const canvas = document.createElement('canvas');
    canvas.id = 'noise';
    canvas.classList.add('noise');
    document.body.appendChild(canvas);

    const context = canvas.getContext('2d');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    // noise data generation
    const noiseData = context.createImageData(windowWidth, windowHeight);
    const arrayBuffer = new Uint32Array(noiseData.data.buffer);
    // randomly set pixels black or transparent 
    for (let index = 0; index < arrayBuffer.length; index++) {
        if (Math.random() < 0.5) {
            arrayBuffer[index] = 0xff000000;
        }
    }

    canvas.width = windowWidth;
    canvas.height = windowHeight;
    context.putImageData(noiseData, 0, 0);

});


/*
 ________                   
/_  __/ /  ___ __ _  ___ ___
 / / / _ \/ -_)  ' \/ -_|_-<
/_/ /_//_/\__/_/_/_/\__/__*/


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') { setTheme('theme-light'); }
    else { setTheme('theme-dark'); }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-light') { setTheme('theme-light'); }
    else { setTheme('theme-dark'); }
})();




/* 
window.addEventListener('scroll', function () {
    const scroll = window.pageYOffset;
    const avatar = document.querySelector('.avatar');

    if (scroll > 200) {
        avatar.style.filter = 'blur(5px)';
    } else {
        avatar.style.filter = '';
    }
});
 */
