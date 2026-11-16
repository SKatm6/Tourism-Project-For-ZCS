const images=[
    "images/zcs_082.jpg",
    "images/zcs_134.jpg",
    "images/zcs_128-2.jpg",
];
images. forEach(img=>{
    const preload = new Image();
    preload.src=img;
});

let currentImage =0;
const projectSection = document.querySelector(".project");

function changeBackground() {
    projectSection.style.backgroundImage = `url('${images[currentImage]}')`;
    currentImage = (currentImage + 1) % images.length;
}

changeBackground();

setInterval(changeBackground,5000);
    