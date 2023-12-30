document.addEventListener("DOMContentLoaded", function () {
    function createStar() {
        var right = Math.random() * 500;
        var top = Math.random() * screen.height;
        var star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);

        function runStar() {
            if (right >= screen.width) {
                star.remove();
            }
            right += 3;
            star.style.right = right + "px";
        }

        setInterval(runStar, 10);
    }

    setInterval(createStar, 100);
});
