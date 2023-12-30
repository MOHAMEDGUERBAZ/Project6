document.addEventListener("DOMContentLoaded", function () {
    // Function to create stars and make them move
    function createStar() {
        var right = Math.random() * 500;
        var top = Math.random() * screen.height;
        var star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);

        // Function to make stars move
        function runStar() {
            if (right >= screen.width) {
                star.remove();
            }
            right += 3;
            star.style.right = right + "px";
        }

        setInterval(runStar, 10);
    }

    // Create stars at regular intervals
    setInterval(createStar, 100);
});
