// Array of images and names
let catsArray = [
    { "name": "Kisu1", "src": "pictures/kisu1.jpg" },
    { "name": "Kisu2", "src": "pictures/kisu2.jpg" },
    { "name": "Kisu3", "src": "pictures/kisu3.jpg" },
    { "name": "Kisu4", "src": "pictures/kisu4.jpg" },
    { "name": "Kisu5", "src": "pictures/kisu5.jpg" },
    { "name": "Unto ja Late <3", "src": "pictures/untojalate.jpg" }
];

let currentIndex = 0; // Default index if none is saved
let intervalId = null; // Store interval ID

// Function to initialize the carousel
function init() {
    // Check if an index exists in localStorage
    if (localStorage.getItem("carouselIndex")) {
        currentIndex = parseInt(localStorage.getItem("carouselIndex"), 10); // Use saved index
    }

    // Display the current image and text
    updateImageAndText();
}

// Function to go to the next image
function nextFunction() {
    currentIndex = (currentIndex + 1) % catsArray.length; // Loop forward
    updateImageAndText();
    localStorage.setItem("carouselIndex", currentIndex); // Save current index
}

// Function to go to the previous image
function backFunction() {
    currentIndex = (currentIndex - 1 + catsArray.length) % catsArray.length; // Loop backward
    updateImageAndText();
    localStorage.setItem("carouselIndex", currentIndex); // Save current index
}

// Function to update the image and text dynamically
function updateImageAndText() {
    document.getElementById("karusellikuva").src = catsArray[currentIndex].src;
    document.querySelector(".card-text").textContent = catsArray[currentIndex].name;
}

// Function for play/pause functionality
function playFunction() {
    const playButton = document.getElementById("playButton");
    const icon = playButton.querySelector("i");

    if (intervalId === null) {
        intervalId = window.setInterval(nextFunction, 3000); // Call nextFunction every 3 seconds
        alert("Kuvakaruselli käynnistetty!");
        icon.className = "bi bi-pause"; // Change icon to 'pause'
    } else {
        window.clearInterval(intervalId);
        intervalId = null;
        alert("Kuvakaruselli pysäytetty!");
        icon.className = "bi bi-play"; // Change icon back to 'play'
    }
}

// Initialize the carousel on page load
init();