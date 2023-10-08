document.addEventListener("DOMContentLoaded", function () {
    const textLines = document.querySelectorAll(".text-line");
    let currentIndex = 0;

    function changeText() {
        textLines[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % textLines.length;
        textLines[currentIndex].classList.add("active");
    }

    setInterval(changeText, 2000);
});