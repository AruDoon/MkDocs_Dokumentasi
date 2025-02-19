document.addEventListener("DOMContentLoaded", function () {
    // Check if the user has already seen the intro
    if (!sessionStorage.getItem("introSeen")) {
        showIntro();
    }
});

function showIntro() {
    // Create the intro overlay
    let introOverlay = document.createElement("div");
    introOverlay.className = "intro-overlay";
    introOverlay.innerHTML = `
        <div class="intro-content">
            <img src="assets/icons/barelangf1white.png" alt="Logo" style="width: 850px; height: auto;">
            <h1 style="font-size: 2rem; margin-top: 20px;">Documentation Website</h1>
        </div>
    `;

    document.body.appendChild(introOverlay);

    // Hide intro after 6 seconds or on click
    setTimeout(() => closeIntro(introOverlay), 6000);
    introOverlay.addEventListener("click", () => closeIntro(introOverlay));

    // Mark intro as seen
    sessionStorage.setItem("introSeen", "true");
}

function closeIntro(element) {
    element.classList.add("hidden");
    setTimeout(() => element.remove(), 1000);
}
