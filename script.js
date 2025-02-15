function openMenu() {
    document.getElementById("mobileMenu").style.display = "block";
}

function closeMenu() {
    document.getElementById("mobileMenu").style.display = "none";
}
// This script is optional; it dynamically appends the footer
document.addEventListener("DOMContentLoaded", function () {
    let footer = document.createElement("footer");
    footer.className = "footer-banner";
    footer.innerHTML = `
        <p>Experience the Best Slot Games at <strong>Stars777</strong>! 
        <a href="https://stars777.org" target="_blank" class="cta-button">Play Now</a></p>
    `;
    document.body.appendChild(footer);
});
