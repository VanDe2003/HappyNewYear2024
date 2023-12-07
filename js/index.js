var audio = new Audio("./mp3/home.mp3");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

document.getElementById("playButton").addEventListener("click", function () {
    playAudio();
});

document.addEventListener("DOMContentLoaded", function () {
    var myModal = new bootstrap.Modal(document.querySelector(".modal"));
    myModal.show();
});

const button = document.getElementById("myButton");
let clickCount = 0;

button.addEventListener("click", () => {
    clickCount++;

    // Tạo ngẫu nhiên vị trí mới cho button
    const randomX = Math.random() * (window.innerWidth - button.clientWidth);
    const randomY = Math.random() * (window.innerHeight - button.clientHeight);

    // Thiết lập vị trí mới cho button
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Hiển thị thông báo sau khi click 10 lần
    if (clickCount === 10) {
        alert("Chúc mừng! May mắn luôn đến với bạn!");
    }
});
