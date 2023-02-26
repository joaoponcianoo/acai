function toggleImage() {
    const imageElement = document.getElementById("acai-img");
    const images = ["imgs/acai_01.png", "imgs/acai_02.png", "imgs/acai_03.png", "imgs/acai_05.png", "imgs/acai_06.png", "imgs/acai_07.png", "imgs/acai_08.png", "imgs/acai_09.png"];
    let currentIndex = 0;

    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 3000);
}

window.onload = toggleImage;


