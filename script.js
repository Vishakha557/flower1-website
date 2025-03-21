document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for contacting us!");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your purchase!");
        });
    });
});
// Function to get URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get("title"),
        desc: params.get("desc"),
        image: params.get("image"),
    };
}

// Display product details on see_more.html
if (window.location.pathname.includes("see_more.html")) {
    const product = getQueryParams();
    document.getElementById("detail-title").textContent = product.title;
    document.getElementById("detail-desc").textContent = product.desc;
    document.getElementById("detail-img").src = product.image;
}
function searchProducts() {
    const query = document.getElementById('searchInput').value;
    alert("Searching for: " + query);
}