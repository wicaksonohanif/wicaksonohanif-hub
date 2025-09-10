// Gallery loader
document.addEventListener("DOMContentLoaded", function() {
fetch("gallery.json")
    .then(response => response.json())
    .then(data => {
    const carouselInner = document.getElementById("carouselImages");
    data.images.forEach((img, index) => {
        const div = document.createElement("div");
        div.className = `carousel-item ${index === 0 ? "active" : ""}`;
        div.innerHTML = `
        <img src="assets/gallery/${img}" class="d-block w-100 gallery-img" alt="Gallery ${index + 1}">
        `;
        carouselInner.appendChild(div);
    });
    })
    .catch(err => console.error("Error loading gallery:", err));
});

// Project loader
fetch("project.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("project-container");

        data.projects.forEach(proj => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-12";

        col.innerHTML = `
            <div class="card project-card h-100">
            <img src="${proj.image}" class="card-img-top" alt="${proj.title}">
            <div class="card-body text-center">
                <h5 class="card-title mb-3">${proj.title}</h5>
                <button class="btn github-btn" onclick="window.open('${proj.url}', '_blank')">
                <img src="assets/icons/github.svg" class="github-icon me-2"> View on GitHub
                </button>
            </div>
            </div>
        `;
        container.appendChild(col);
        });
    })
    .catch(err => console.error("Error loading project.json:", err));