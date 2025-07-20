document.addEventListener("click", function() {
    const audio = document.getElementById("birthdayMusic");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}, { once: true });

function acceptBirthday() {
    alert("Yeeyeee! ❤️ See you on 15th February!");
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function moveButton() {
    const button = document.querySelector(".no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

let currentPhoto = 0;
const photos = document.querySelectorAll(".gallery-item");

function showPhoto(index) {
    photos.forEach((photo, i) => {
        photo.style.transform = `translateX(${-100 * index}%)`; 
    });
}

function nextPhoto() {
    currentPhoto = (currentPhoto + 1) % photos.length;
    showPhoto(currentPhoto);
}

function prevPhoto() {
    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
    showPhoto(currentPhoto);
}

showPhoto(currentPhoto);
