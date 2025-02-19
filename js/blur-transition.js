document.addEventListener("DOMContentLoaded", function () {
    // Initial page load animation
    gsap.from("body", {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });

    // Select only the navigation links from the left sidebar
    // Assuming your nav links are within a specific container or have a specific class
    let navLinks = document.querySelectorAll(".md-nav--primary a");  // Adjust selector based on your MkDocs theme

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Check if this is an external link or same-page anchor
            if (this.href.includes(window.location.origin) && 
                !this.href.includes('#')) {  // Exclude anchor links
                event.preventDefault();
                gsap.to("body", {
                    filter: "blur(10px)",
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => (window.location.href = this.href),
                });
            }
        });
    });
});