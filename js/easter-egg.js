document.addEventListener("DOMContentLoaded", function () {
    // Select all hidden links
    const hiddenLinks = document.querySelectorAll(".hidden-link");

    hiddenLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Create the popup container
            const popup = document.createElement("div");
            popup.className = "easter-egg-popup";

            popup.innerHTML = `
                <div class="popup-content">
                    <img src="your-image.png" alt="Easter Egg" style="max-width: 400px;">
                    <p>🎉 You found the easter egg! 🎉</p>
                    <button class="close-btn">Close</button>
                </div>
            `;

            document.body.appendChild(popup);

            // Close button event
            popup.querySelector(".close-btn").addEventListener("click", function () {
                popup.remove();
            });
        });
    });
});
