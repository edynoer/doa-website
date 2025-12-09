// Smooth scroll tambahan
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href.length > 1) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Placeholder untuk future features (API call, form, dsb)
console.log("DOA Corporate Website Ready");
