document.addEventListener("DOMContentLoaded", function () {
    gsap.from("body", {
        filter: "blur(10px)",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });

    let links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.href.includes(window.location.origin)) {
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
