// randomness

const images = [
    '/images/background_1.jpg',
    '/images/background_2.jpg',
    '/images/background_3.jpg',
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
// document.body.style.backgroundImage = `url(${chosenImage})`

const bgImage = document.createElement('img');
bgImage.src = chosenImage;

document.body.appendChild(bgImage);
